import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Portfólio Vinny - Marcus Vinicius | Social Media & Performance Digital',
    description: 'Social Media com experiência em criação de estratégias digitais e gestão de campanhas para marcas locais. Transformando presença digital em resultado real.',
    keywords: ['Social Media', 'Marketing Digital', 'Gestor de Tráfego', 'Videomaker', 'Performance Digital', 'Marcus Vinicius'],
    authors: [{ name: 'Marcus Vinicius' }],
    openGraph: {
        title: 'Portfólio Vinny - Marcus Vinicius',
        description: 'Social Media | Estratégia & Performance Digital',
        type: 'website',
        locale: 'pt_BR',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Portfólio Vinny - Marcus Vinicius',
        description: 'Social Media | Estratégia & Performance Digital',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-BR">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            </head>
            <body className={inter.className}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
