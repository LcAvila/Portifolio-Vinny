'use client';

import { Container, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { portfolioData } from '@/utils/constants';

export default function AboutSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const words = portfolioData.about.split(' ');

    return (
        <Box
            id="about"
            component="section"
            ref={ref}
            sx={{
                py: { xs: 8, md: 12, lg: 16 },
                bgcolor: '#000000',
                position: 'relative',
            }}
        >
            <Container maxWidth="md">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <Typography
                        variant="h2"
                        component="h2"
                        align="center"
                        sx={{
                            mb: { xs: 4, md: 6 },
                            fontWeight: 900,
                            textTransform: 'uppercase',
                            letterSpacing: '-0.02em',
                        }}
                    >
                        SOBRE
                        <Box component="span" sx={{ color: 'primary.main', ml: 1 }}>
                            MIM
                        </Box>
                    </Typography>
                </motion.div>

                <Box
                    sx={{
                        textAlign: 'center',
                        maxWidth: 800,
                        mx: 'auto',
                    }}
                >
                    <Typography
                        variant="h5"
                        component="p"
                        sx={{
                            lineHeight: 1.8,
                            fontWeight: 300,
                            fontSize: { xs: '1.125rem', md: '1.5rem' },
                            color: 'text.primary',
                            '& .highlight': {
                                color: 'primary.main',
                                fontWeight: 600,
                            },
                        }}
                    >
                        {words.map((word, index) => {
                            const isHighlight = [
                                'Social',
                                'Media',
                                'estratégias',
                                'digitais',
                                'gestão',
                                'campanhas',
                                'resultado',
                                'real',
                            ].includes(word);

                            return (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: index * 0.02 }}
                                    className={isHighlight ? 'highlight' : ''}
                                    style={{ display: 'inline-block', marginRight: '0.3em' }}
                                >
                                    {word}
                                </motion.span>
                            );
                        })}
                    </Typography>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        <Box
                            sx={{
                                mt: { xs: 4, md: 6 },
                                pt: 3,
                                borderTop: '1px solid',
                                borderColor: 'primary.main',
                                display: 'flex',
                                flexWrap: 'wrap',
                                justifyContent: 'center',
                                gap: { xs: 1.5, md: 3 },
                            }}
                        >
                            {[
                                'ESTRATÉGIAS DIGITAIS',
                                'GESTÃO DE CAMPANHAS',
                                'CRIAÇÃO DE CONTEÚDO',
                                'TRÁFEGO PAGO',
                                'PRODUÇÃO AUDIOVISUAL',
                                'POSICIONAMENTO',
                            ].map((skill, index) => (
                                <Typography
                                    key={index}
                                    variant="body2"
                                    sx={{
                                        color: 'text.secondary',
                                        letterSpacing: '0.1em',
                                        fontSize: { xs: '0.65rem', md: '0.75rem' },
                                        fontWeight: 600,
                                        '&:hover': {
                                            color: 'primary.main',
                                        },
                                        transition: 'color 0.3s ease',
                                    }}
                                >
                                    {skill}
                                </Typography>
                            ))}
                        </Box>
                    </motion.div>
                </Box>
            </Container>
        </Box>
    );
}
