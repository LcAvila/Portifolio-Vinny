'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#DC2626',
            light: '#EF4444',
            dark: '#B91C1C',
        },
        secondary: {
            main: '#FF0000',
            light: '#FF3333',
            dark: '#CC0000',
        },
        background: {
            default: '#000000',
            paper: '#0A0A0A',
        },
        text: {
            primary: '#FFFFFF',
            secondary: '#9CA3AF',
        },
        error: {
            main: '#DC2626',
        },
    },
    typography: {
        fontFamily: '"Inter", "Helvetica Neue", "Arial", sans-serif',
        h1: {
            fontSize: '4rem',
            fontWeight: 900,
            lineHeight: 1,
            letterSpacing: '-0.02em',
            '@media (max-width:900px)': {
                fontSize: '3rem',
            },
            '@media (max-width:600px)': {
                fontSize: '2.5rem',
            },
        },
        h2: {
            fontSize: '2.5rem',
            fontWeight: 800,
            lineHeight: 1.2,
            letterSpacing: '-0.01em',
            '@media (max-width:900px)': {
                fontSize: '2rem',
            },
            '@media (max-width:600px)': {
                fontSize: '1.75rem',
            },
        },
        h3: {
            fontSize: '2rem',
            fontWeight: 700,
            lineHeight: 1.3,
            '@media (max-width:600px)': {
                fontSize: '1.5rem',
            },
        },
        h4: {
            fontSize: '1.5rem',
            fontWeight: 600,
            '@media (max-width:600px)': {
                fontSize: '1.25rem',
            },
        },
        h5: {
            fontSize: '1.25rem',
            fontWeight: 600,
        },
        h6: {
            fontSize: '1rem',
            fontWeight: 600,
        },
        body1: {
            fontSize: '1rem',
            lineHeight: 1.7,
        },
        body2: {
            fontSize: '0.875rem',
            lineHeight: 1.6,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'uppercase',
                    borderRadius: 0,
                    padding: '12px 32px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '@media (max-width:600px)': {
                        padding: '10px 24px',
                        fontSize: '0.7rem',
                    },
                },
                contained: {
                    boxShadow: 'none',
                    '&:hover': {
                        boxShadow: '0 0 30px rgba(220, 38, 38, 0.5)',
                        transform: 'translateY(-2px)',
                    },
                },
                sizeLarge: {
                    padding: '14px 40px',
                    fontSize: '0.8rem',
                    '@media (max-width:600px)': {
                        padding: '12px 28px',
                        fontSize: '0.75rem',
                    },
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 0,
                    backgroundImage: 'none',
                    backgroundColor: '#0A0A0A',
                    border: '1px solid #1A1A1A',
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        borderRadius: 0,
                        '& fieldset': {
                            borderColor: '#1A1A1A',
                        },
                        '&:hover fieldset': {
                            borderColor: '#DC2626',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#DC2626',
                        },
                    },
                },
            },
        },
    },
});

export default theme;
