'use client';

import { Container, Typography, Box, Grid, Stack, IconButton } from '@mui/material';
import { portfolioData } from '@/utils/constants';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import LanguageIcon from '@mui/icons-material/Language';
import { useRouter, usePathname } from 'next/navigation';
import SocialLinks from './SocialLinks';

const quickLinks = [
    { label: 'INÍCIO', href: '#hero' },
    { label: 'SOBRE', href: '#about' },
    { label: 'TRABALHOS', href: '#works' },
    { label: 'CONTATO', href: '#contact' },
];

export default function Footer() {
    const router = useRouter();
    const pathname = usePathname();

    const scrollToTop = () => {
        if (pathname === '/') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            router.push('/');
        }
    };

    const handleNavigation = (e: React.MouseEvent, href: string) => {
        e.preventDefault();
        if (pathname === '/') {
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // If on another page, navigate to home with the hash
            router.push(`/${href}`);
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
                        <SocialLinks />
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
                                    href={link.href}
                                    onClick={(e: React.MouseEvent) => handleNavigation(e, link.href)}
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
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: 2,
                    }}
                >
                    {/* Left: Developer Credit */}
                    <Box
                        sx={{
                            flex: { xs: '1 1 100%', md: 1 },
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: { xs: 'center', md: 'flex-start' },
                            gap: 1,
                            color: 'text.secondary',
                            transition: 'color 0.2s',
                            '&:hover': { color: 'primary.main' }
                        }}
                    >
                        <Typography
                            variant="body2"
                            sx={{
                                fontSize: '0.75rem',
                                letterSpacing: '0.05em',
                                textTransform: 'uppercase',
                            }}
                        >
                            Desenvolvido por Lucas Ávila
                        </Typography>
                        <IconButton
                            href="https://lucavila.com.br"
                            target="_blank"
                            rel="noopener noreferrer"
                            size="small"
                            sx={{
                                color: 'inherit',
                                p: 0.5,
                                border: '1px solid currentColor',
                                borderRadius: '50%'
                            }}
                        >
                            <LanguageIcon sx={{ fontSize: '1rem' }} />
                        </IconButton>
                    </Box>

                    {/* Center: Copyright */}
                    <Box sx={{ flex: { xs: '1 1 100%', md: 1 }, display: 'flex', justifyContent: 'center' }}>
                        <Typography
                            variant="body2"
                            sx={{
                                color: 'text.secondary',
                                fontSize: '0.75rem',
                                letterSpacing: '0.05em',
                                textTransform: 'uppercase',
                                textAlign: 'center',
                            }}
                        >
                            © {new Date().getFullYear()} {portfolioData.personal.name}
                        </Typography>
                    </Box>

                    {/* Right: Scroll Top */}
                    <Box sx={{ flex: { xs: '1 1 100%', md: 1 }, display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' } }}>
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
                </Box>
            </Container>
        </Box>
    );
}
