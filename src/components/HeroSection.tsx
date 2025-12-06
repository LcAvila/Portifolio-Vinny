'use client';

import { Container, Typography, Button, Box, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function HeroSection() {
    const scrollToAbout = () => {
        const element = document.querySelector('#about');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Box
            id="hero"
            component="section"
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden',
                background: '#000000',
            }}
        >
            <Container maxWidth={false} disableGutters sx={{ position: 'relative', width: '100%' }}>
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                        minHeight: '100vh',
                        alignItems: 'center',
                    }}
                >
                    {/* Left side - Text */}
                    <Box
                        sx={{
                            position: 'relative',
                            zIndex: 2,
                            px: { xs: 3, sm: 4, md: 6, lg: 10 },
                            py: { xs: 8, md: 0 },
                            order: { xs: 2, md: 1 },
                        }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <Typography
                                variant="h1"
                                component="h1"
                                sx={{
                                    fontWeight: 900,
                                    mb: 2,
                                    fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem', lg: '4.5rem' },
                                    lineHeight: 0.95,
                                    letterSpacing: '-0.03em',
                                    textTransform: 'uppercase',
                                }}
                            >
                                MARCUS
                                <br />
                                <Box
                                    component="span"
                                    sx={{
                                        color: 'primary.main',
                                        display: 'block',
                                    }}
                                >
                                    VINICIUS
                                </Box>
                            </Typography>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <Box
                                sx={{
                                    borderLeft: '3px solid',
                                    borderColor: 'primary.main',
                                    pl: 2,
                                    my: 3,
                                }}
                            >
                                <Typography
                                    variant="h6"
                                    sx={{
                                        color: 'text.secondary',
                                        fontWeight: 400,
                                        letterSpacing: '0.05em',
                                        textTransform: 'uppercase',
                                        fontSize: { xs: '0.875rem', md: '1rem' },
                                    }}
                                >
                                    Social Media
                                </Typography>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        color: 'text.secondary',
                                        fontWeight: 400,
                                        letterSpacing: '0.05em',
                                        textTransform: 'uppercase',
                                        fontSize: { xs: '0.875rem', md: '1rem' },
                                    }}
                                >
                                    Estratégia & Performance Digital
                                </Typography>
                            </Box>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 4 }}>
                                <Button
                                    variant="contained"
                                    size="large"
                                    onClick={scrollToAbout}
                                    sx={{
                                        bgcolor: 'primary.main',
                                        color: 'white',
                                        '&:hover': {
                                            bgcolor: 'primary.dark',
                                            boxShadow: '0 0 30px rgba(220, 38, 38, 0.5)',
                                        },
                                    }}
                                >
                                    TRABALHE COMIGO
                                </Button>
                                <Button
                                    variant="outlined"
                                    size="large"
                                    onClick={() => {
                                        const element = document.querySelector('#works');
                                        if (element) element.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    sx={{
                                        borderColor: 'primary.main',
                                        color: 'primary.main',
                                        '&:hover': {
                                            borderColor: 'primary.light',
                                            bgcolor: 'rgba(220, 38, 38, 0.1)',
                                        },
                                    }}
                                >
                                    VER TRABALHOS
                                </Button>
                            </Stack>
                        </motion.div>
                    </Box>

                    {/* Right side - Image */}
                    <Box
                        sx={{
                            position: 'relative',
                            height: { xs: '50vh', md: '100vh' },
                            order: { xs: 1, md: 2 },
                        }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2, delay: 0.3 }}
                            style={{ height: '100%' }}
                        >
                            <Box
                                sx={{
                                    position: 'relative',
                                    width: '100%',
                                    height: '100%',
                                    '&::after': {
                                        content: '""',
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        background: {
                                            xs: 'linear-gradient(180deg, transparent 0%, #000000 100%)',
                                            md: 'linear-gradient(90deg, #000000 0%, transparent 20%, transparent 80%, #000000 100%)',
                                        },
                                        zIndex: 1,
                                    },
                                }}
                            >
                                <Image
                                    src="/assets/pdf-images/perfil 0.png"
                                    alt="Marcus Vinicius"
                                    fill
                                    style={{
                                        objectFit: 'cover',
                                        objectPosition: 'center',
                                        filter: 'grayscale(100%) contrast(1.2)',
                                    }}
                                    priority
                                />
                            </Box>
                        </motion.div>
                    </Box>
                </Box>
            </Container>

            {/* Scroll indicator */}
            <Box
                sx={{
                    display: { xs: 'none', md: 'block' },
                    position: 'absolute',
                    bottom: 40,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 10,
                }}
            >
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatType: 'loop',
                        }}
                    >
                        <KeyboardArrowDownIcon
                            sx={{
                                fontSize: '2.5rem',
                                color: 'primary.main',
                                cursor: 'pointer',
                            }}
                            onClick={scrollToAbout}
                        />
                    </motion.div>
                </motion.div>
            </Box>
        </Box>
    );
}
