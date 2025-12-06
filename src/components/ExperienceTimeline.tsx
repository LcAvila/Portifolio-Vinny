'use client';

import { Container, Typography, Box, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { portfolioData } from '@/utils/constants';

export default function ExperienceTimeline() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <Box
            id="experience"
            component="section"
            ref={ref}
            sx={{
                py: { xs: 12, md: 20 },
                bgcolor: '#000000',
                position: 'relative',
                borderTop: '1px solid #1A1A1A',
            }}
        >
            <Container maxWidth="lg">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <Typography
                        variant="h2"
                        component="h2"
                        sx={{
                            mb: { xs: 8, md: 12 },
                            fontWeight: 900,
                            textTransform: 'uppercase',
                            letterSpacing: '-0.02em',
                            textAlign: 'center',
                        }}
                    >
                        EXPERIÊNCIA
                        <Box component="span" sx={{ color: 'primary.main', ml: 2 }}>
                            PROFISSIONAL
                        </Box>
                    </Typography>
                </motion.div>

                <Grid container spacing={8}>
                    {/* Coluna da Imagem (Sticky) */}
                    <Grid item xs={12} md={5} sx={{ position: 'relative' }}>
                        <Box
                            component={motion.div}
                            initial={{ opacity: 0, x: -50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            sx={{
                                position: { md: 'sticky' },
                                top: { md: '120px' },
                                height: 'fit-content',
                            }}
                        >
                            <Box
                                component="img"
                                src="/assets/pdf-images/perfil 2.png"
                                alt="Marcus Vinicius"
                                sx={{
                                    width: '100%',
                                    maxWidth: { xs: '300px', md: '100%' },
                                    height: 'auto',
                                    display: 'block',
                                    mx: 'auto',
                                    borderRadius: '12px',
                                    filter: 'grayscale(100%)',
                                    transition: 'all 0.5s ease',
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                                    '&:hover': {
                                        filter: 'grayscale(0%)',
                                        transform: 'scale(1.02)',
                                    },
                                }}
                            />
                        </Box>
                    </Grid>

                    {/* Coluna da Timeline */}
                    <Grid item xs={12} md={7}>
                        <Box sx={{ pl: { md: 6 }, position: 'relative' }}>
                            {/* Linha Vertical */}
                            <Box
                                sx={{
                                    position: 'absolute',
                                    left: { xs: '20px', md: '48px' }, // Ajuste fino para alinhar com os dots
                                    top: 0,
                                    bottom: 0,
                                    width: '1px',
                                    bgcolor: 'rgba(255,255,255,0.1)',
                                    display: { xs: 'none', md: 'block' },
                                }}
                            />

                            {portfolioData.experience.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                                >
                                    <Box
                                        sx={{
                                            mb: 8,
                                            position: 'relative',
                                            '&:last-child': { mb: 0 },
                                        }}
                                    >
                                        {/* Dot da Timeline */}
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                left: { md: '-29px' }, // Alinhamento com a linha vertical e padding
                                                top: '12px',
                                                width: '12px',
                                                height: '12px',
                                                borderRadius: '50%',
                                                bgcolor: 'primary.main',
                                                border: '2px solid #000',
                                                boxShadow: '0 0 0 2px rgba(255,255,255,0.1)',
                                                display: { xs: 'none', md: 'block' },
                                                zIndex: 1,
                                            }}
                                        />

                                        <Typography
                                            variant="h4"
                                            component="h3"
                                            sx={{
                                                fontWeight: 800,
                                                color: '#fff',
                                                mb: 1,
                                                fontSize: { xs: '1.5rem', md: '1.75rem' },
                                                letterSpacing: '-0.02em',
                                            }}
                                        >
                                            {exp.role}
                                        </Typography>

                                        <Typography
                                            variant="h6"
                                            sx={{
                                                color: 'primary.main',
                                                fontWeight: 600,
                                                mb: 2,
                                                fontSize: '1.1rem',
                                                display: 'flex',
                                                alignItems: 'center',
                                            }}
                                        >
                                            {exp.company}
                                            <Box
                                                component="span"
                                                sx={{
                                                    width: '4px',
                                                    height: '4px',
                                                    borderRadius: '50%',
                                                    bgcolor: 'rgba(255,255,255,0.3)',
                                                    mx: 2,
                                                }}
                                            />
                                            <Typography
                                                component="span"
                                                variant="body2"
                                                sx={{
                                                    color: 'rgba(255,255,255,0.5)',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '0.05em',
                                                    fontSize: '0.8rem',
                                                    fontWeight: 500,
                                                }}
                                            >
                                                {exp.period}
                                            </Typography>
                                        </Typography>

                                        <Typography
                                            variant="body1"
                                            sx={{
                                                color: 'text.secondary',
                                                lineHeight: 1.8,
                                                fontSize: '1.05rem',
                                                maxWidth: '95%',
                                            }}
                                        >
                                            {exp.description}
                                        </Typography>
                                    </Box>
                                </motion.div>
                            ))}
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
