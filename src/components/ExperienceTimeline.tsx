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
                            mb: 12,
                            fontWeight: 900,
                            textTransform: 'uppercase',
                            letterSpacing: '-0.02em',
                        }}
                    >
                        EXPERIÊNCIA
                        <Box component="span" sx={{ color: 'primary.main', ml: 2 }}>
                            PROFISSIONAL
                        </Box>
                    </Typography>
                </motion.div>

                <Grid container spacing={6}>
                    {portfolioData.experience.map((exp, index) => (
                        <Grid item xs={12} md={6} key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <Box
                                    sx={{
                                        p: 4,
                                        border: '1px solid #1A1A1A',
                                        height: '100%',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            borderColor: 'primary.main',
                                            transform: 'translateY(-5px)',
                                            '& .exp-number': {
                                                color: 'primary.main',
                                            },
                                        },
                                    }}
                                >
                                    <Typography
                                        className="exp-number"
                                        sx={{
                                            fontSize: '1rem',
                                            fontWeight: 700,
                                            color: 'text.secondary',
                                            letterSpacing: '0.1em',
                                            mb: 3,
                                            transition: 'color 0.3s ease',
                                        }}
                                    >
                                        {String(index + 1).padStart(2, '0')}
                                    </Typography>

                                    <Typography
                                        variant="h5"
                                        component="h3"
                                        sx={{
                                            fontWeight: 700,
                                            mb: 1,
                                            fontSize: { xs: '1.25rem', md: '1.5rem' },
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
                                            fontSize: '1rem',
                                        }}
                                    >
                                        {exp.company}
                                    </Typography>

                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: 'text.secondary',
                                            mb: 2,
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.05em',
                                            fontSize: '0.75rem',
                                        }}
                                    >
                                        {exp.period}
                                    </Typography>

                                    <Typography
                                        variant="body1"
                                        sx={{
                                            color: 'text.secondary',
                                            lineHeight: 1.6,
                                        }}
                                    >
                                        {exp.description}
                                    </Typography>
                                </Box>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
