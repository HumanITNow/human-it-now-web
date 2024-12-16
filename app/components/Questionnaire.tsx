'use client';
import { Question } from '@/types/Questionnaire';
import { ChatCompletion } from 'openai/src/resources/chat/completions.js';
import React, { useEffect } from 'react';

const MAX_AI_QUESTIONS = process.env.NEXT_PUBLIC_MAX_AI_QUESTIONS || 5;

const initQuestions: Question[] = [
    {
        prefix: 'My clients company has ',
        suffix: ' employees',
        question: `How many employee's are in your company?`,
        options: ['1-10', '11-50', '51-100', '101-500', '500+'],
        answer: '',
        additionalInfo: null,
    },
    {
        prefix: 'They are in the ',
        suffix: ' industry',
        question: `What industry are you in?`,
        options: ['Manufacturing', 'Wholesale', 'Retail', 'Technology', 'Finance', 'Health"care"', 'Gov'],
        answer: '',
        additionalInfo: null,
    },
    {
        prefix: `My client has a "`,
        suffix: `" level of technical expertise`,
        question: `How would you rate you or your teams technical expertise?`,
        options: [
            'I can turn my computer on',
            'I can use excel',
            'I can maintain the software I currently use',
            `I'm a software developer`,
        ],
        answer: '',
        additionalInfo: '',
    },
];

export default function Questionnaire() {
    const [questions, setQuestions] = React.useState(initQuestions);
    const [maxReached, setMaxReached] = React.useState(false);

    useEffect(() => {
        const fetchNext = async () => {
            try {
                // Fetch data from API
                const aiRes = await fetch('/api/openai/test', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ questions }),
                });
                // console.log('FETCHED', aiRes);
                const res = (await aiRes.json()) as {
                    status: number;
                    body: {
                        completion: ChatCompletion;
                        questions: Question[];
                    };
                };

                // console.log(res.body.questions.filter(q => q.answer));
                const nextQFull = res.body.completion.choices?.[0]?.message?.content;
                if (nextQFull) {
                    const nextQSlices = nextQFull.split('?');
                    const nextQ = nextQSlices[0].replace(/"/g, '');

                    // options will be any non-empty strings after the question element and excluding the last element.
                    const options = nextQSlices[1]
                        .split('\n')
                        .map(o => o.split('-')[1])
                        .filter(o => !!o && o != ' ');

                    // console.log('NEXTQ', nextQ, options);
                    setQuestions([
                        ...questions,
                        {
                            prefix: '',
                            suffix: '',
                            question: `${nextQ}?`,
                            options: options,
                            answer: '',
                            additionalInfo: '',
                        },
                    ]);
                }
            } catch (error) {
                console.error(error);
            }
        };

        if (questions.length === Number(MAX_AI_QUESTIONS) + initQuestions.length) {
            setMaxReached(true);
        } else if (questions.length === questions.filter(q => q.answer).length) {
            fetchNext();
        }
    }, [questions]);

    const handleAnswer = (e: React.MouseEvent<HTMLButtonElement>, questionIndex: number, answer: string) => {
        e.preventDefault();

        const newQuestions = [...questions];
        newQuestions[questionIndex].answer = answer;
        setQuestions(newQuestions);
    };

    // console.log(questions);
    return (
        <div id='questionnaire' className='flex flex-col items-center w-full'>
            <h1 className='text-2xl font-bold my-4'>Questionnaire</h1>
            <form className='flex flex-col'>
                {questions.map((question, index) => (
                    <div key={index} className='flex w-full border-b-[1px] border-gray-500'>
                        <label className='w-1/3 text-right p-2 align-middle'>{question.question}</label>
                        <div className='w-2/3 p-2 flex flex-wrap'>
                            {question.options.map((option, optionIndex) => (
                                <button
                                    key={optionIndex}
                                    className={`p-2 w-36 bg-primary-dark text-primary-text border-x border-primary-text border-y-[1px]
                                    ${question.answer === option ? 'bg-red-900' : ''}`}
                                    onClick={e => handleAnswer(e, index, option)}
                                >
                                    {option}
                                </button>
                            ))}
                            {/* Add a multiline text field for additional information */}
                            {question.additionalInfo !== null && (
                                <textarea
                                    className='p-2 w-full bg-primary-dark text-primary-text border-x border-primary-text border-y-[1px]'
                                    placeholder='Additional information (optional)'
                                    onMouseLeave={e => {
                                        const newQuestions = [...questions];
                                        newQuestions[index].additionalInfo = e.currentTarget.value;
                                        setQuestions(newQuestions);
                                    }}
                                />
                            )}
                        </div>
                    </div>
                ))}
                {maxReached && <div>Max questions reached</div>}
            </form>
        </div>
    );
}
