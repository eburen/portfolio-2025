'use client';

import { ReactNode, useEffect, useState } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';

interface I18nProviderProps {
    children: ReactNode;
}

export default function I18nProvider({ children }: I18nProviderProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // During SSR, render the children without the provider to avoid errors
    if (!mounted) {
        return <>{children}</>;
    }

    // On client side, use the I18nextProvider
    return (
        <I18nextProvider i18n={i18n}>
            {children}
        </I18nextProvider>
    );
} 