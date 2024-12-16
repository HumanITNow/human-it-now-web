'use client';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

export default function Scroller() {
    const [pathname] = useState(usePathname());

    React.useEffect(() => {
        console.log(pathname);
        const div = document.getElementById(pathname.replace('/', ''));
        if (div) {
            div.scrollIntoView({ behavior: 'smooth' });
        }
    }, [pathname]);
    return <></>;
}
