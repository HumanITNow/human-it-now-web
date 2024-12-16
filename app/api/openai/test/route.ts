import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { Question } from '@/types/Questionnaire';

export async function POST(req: NextRequest) {
    if (!process.env.OPEN_AI_ORG_ID) {
        throw new Error('OPEN_AI_ORG_ID is not set');
    }
    if (!process.env.OPEN_AI_PROJECT_ID) {
        throw new Error('OPEN_AI_PROJECT_ID is not set');
    }
    if (!process.env.OPEN_AI_API_KEY) {
        throw new Error('OPEN_AI_API_KEY is not set');
    }

    try {
        const body = await req.json();
        const { questions } = body as { questions: Question[] };

        const responses = questions.map(question => `Q: ${question.prefix} ${question.answer} ${question.suffix}`);

        const openai = new OpenAI({
            organization: process.env.OPEN_AI_ORG_ID,
            project: process.env.OPEN_AI_PROJECT_ID,
            apiKey: process.env.OPEN_AI_API_KEY,
        });

        const completion = await openai.chat.completions.create({
            messages: [
                {
                    role: 'system',
                    content: `${responses}. Provide a quality next question given the answers thus far along with an array of suitable choices to choose from? Do not include any metadata. i.e., response.choices?.[0]?.message?.content, if split by "\n" would consist of [0] being the question text, the rest being options. Ask the question to them, not me. Options should be in this format: - {option}. Should not include any closing remarks from open ai.`,
                },
            ],
            model: 'gpt-4o-mini',
        });

        return NextResponse.json({
            status: 200,
            body: {
                completion,
                questions,
            },
        });
    } catch (error) {
        console.error(error);
        return NextResponse.json({
            status: 500,
            body: 'Internal Server Error',
        });
    }
}
