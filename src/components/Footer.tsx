'use client';

import { Container, Typography, Box, Grid, Stack, IconButton } from '@mui/material';
import { portfolioData } from '@/utils/constants';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const quickLinks = [
    { label: 'INÍCIO', href: '#hero' },
    { label: 'SOBRE', href: '#about' },
    { label: 'TRABALHOS', href: '#works' },
    { label: 'CONTATO', href: '#contact' },
];

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Box
            component="footer"
            sx={{
                bgcolor: '#000000',
                py: 8,
                position: 'relative',
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={6}>
                    <Grid item xs={12} md={6}>
                        <Typography
                            variant="h4"
                            sx={{
                                fontWeight: 900,
                                mb: 3,
                                textTransform: 'uppercase',
                                letterSpacing: '-0.01em',
                            }}
                        >
                            MARCUS
                            <Box component="span" sx={{ color: 'primary.main', ml: 1 }}>
                                VINICIUS
                            </Box>
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                color: 'text.secondary',
                                mb: 4,
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em',
                                fontSize: '0.875rem',
                            }}
                        >
                            {portfolioData.personal.title}
                        </Typography>
                        <Stack direction="row" spacing={2}>
                            <IconButton
                                component="a"
                                href={`mailto:${portfolioData.personal.email}`}
                                sx={{
                                    color: 'text.secondary',
                                    border: '1px solid #1A1A1A',
                                    '&:hover': {
                                        color: 'primary.main',
                                        borderColor: 'primary.main',
                                    },
                                }}
                            >
                                <EmailIcon />
                            </IconButton>
                            <IconButton
                                component="a"
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    color: 'text.secondary',
                                    border: '1px solid #1A1A1A',
                                    '&:hover': {
                                        color: 'primary.main',
                                        borderColor: 'primary.main',
                                    },
                                }}
                            >
                                <InstagramIcon />
                            </IconButton>
                        </Stack>
                    </Grid>

                    <Grid item xs={12} md={3}>
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 700,
                                mb: 3,
                                fontSize: '0.875rem',
                                letterSpacing: '0.1em',
                                textTransform: 'uppercase',
                            }}
                        >
                            LINKS
                        </Typography>
                        <Stack spacing={2}>
                            {quickLinks.map((link) => (
                                <Box
                                    key={link.label}
                                    component="a"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection(link.href);
                                    }}
                                    sx={{
                                        color: 'text.secondary',
                                        textDecoration: 'none',
                                        cursor: 'pointer',
                                        fontSize: '0.875rem',
                                        letterSpacing: '0.05em',
                                        transition: 'color 0.2s ease',
                                        '&:hover': {
                                            color: 'primary.main',
                                        },
                                    }}
                                >
                                    {link.label}
                                </Box>
                            ))}
                        </Stack>
                    </Grid>

                    <Grid item xs={12} md={3}>
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 700,
                                mb: 3,
                                fontSize: '0.875rem',
                                letterSpacing: '0.1em',
                                textTransform: 'uppercase',
                            }}
                        >
                            CONTATO
                        </Typography>
                        <Stack spacing={1}>
                            <Typography
                                variant="body2"
                                sx={{
                                    color: 'text.secondary',
                                    fontSize: '0.875rem',
                                }}
                            >
                                {portfolioData.personal.email}
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{
                                    color: 'text.secondary',
                                    fontSize: '0.875rem',
                                }}
                            >
                                {portfolioData.personal.phone}
                            </Typography>
                        </Stack>
                    </Grid>
                </Grid>

                <Box
                    sx={{
                        mt: 8,
                        pt: 4,
                        borderTop: '1px solid #1A1A1A',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: 2,
                    }}
                >
                    <Typography
                        variant="body2"
                        sx={{
                            color: 'text.secondary',
                            fontSize: '0.75rem',
                            letterSpacing: '0.05em',
                            textTransform: 'uppercase',
                        }}
                    >
                        © {new Date().getFullYear()} {portfolioData.personal.name}
                    </Typography>
                    <IconButton
                        onClick={scrollToTop}
                        sx={{
                            border: '1px solid',
                            borderColor: 'primary.main',
                            color: 'primary.main',
                            '&:hover': {
                                bgcolor: 'primary.main',
                                color: 'white',
                            },
                        }}
                    >
                        <ArrowUpwardIcon />
                    </IconButton>
                </Box>
            </Container>
        </Box>
    );
}
