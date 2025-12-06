'use client';

import { Container, Typography, Box, Grid, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { portfolioData } from '@/utils/constants';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Image from 'next/image';
import Link from 'next/link';

export default function WorksSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <Box
            id="works"
            component="section"
            ref={ref}
            sx={{
                py: { xs: 8, md: 12, lg: 16 },
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
                            mb: { xs: 6, md: 10 },
                            fontWeight: 900,
                            textTransform: 'uppercase',
                            letterSpacing: '-0.02em',
                        }}
                    >
                        TRABALHOS
                        <Box component="span" sx={{ color: 'primary.main', ml: 1 }}>
                            RECENTES
                        </Box>
                    </Typography>
                </motion.div>

                <Grid container spacing={3}>
                    {portfolioData.works.map((work, index) => (
                        <Grid item xs={12} sm={6} md={6} key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                            >
                                <Box
                                    component={(work as any).slug ? Link : 'a'}
                                    href={(work as any).slug ? `/works/${(work as any).slug}` : work.reelsUrl}
                                    target={(work as any).slug ? undefined : '_blank'}
                                    rel={(work as any).slug ? undefined : 'noopener noreferrer'}
                                    sx={{
                                        display: 'block',
                                        textDecoration: 'none',
                                        color: 'inherit',
                                        border: '1px solid #1A1A1A',
                                        transition: 'all 0.3s ease',
                                        overflow: 'hidden',
                                        height: '100%',
                                        '&:hover': {
                                            borderColor: 'primary.main',
                                            '& .work-overlay': {
                                                opacity: 1,
                                            },
                                            '& .work-number': {
                                                color: 'primary.main',
                                            },
                                        },
                                    }}
                                >
                                    <Box
                                        sx={{
                                            position: 'relative',
                                            paddingTop: '60%',
                                            bgcolor: '#000000',
                                            overflow: 'hidden',
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                right: 0,
                                                bottom: 0,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontSize: { xs: '4rem', md: '6rem' },
                                                fontWeight: 900,
                                                color: 'transparent',
                                                WebkitTextStroke: '1px #1A1A1A',
                                            }}
                                        >
                                            {(work as any).logo ? (
                                                <Box
                                                    component="img"
                                                    src={(work as any).logo}
                                                    alt={work.title}
                                                    sx={{
                                                        width: '60%',
                                                        height: 'auto',
                                                        objectFit: 'contain',
                                                        objectFit: 'contain',
                                                        // filter: 'grayscale(100%) brightness(200%)', // Removed grayscale as per request
                                                        transition: 'all 0.3s ease',
                                                        // '.MuiBox-root:hover &': {
                                                        //    filter: 'none'
                                                        // }
                                                    }}
                                                />
                                            ) : (
                                                String(index + 1).padStart(2, '0')
                                            )}
                                        </Box>
                                        <Box
                                            className="work-overlay"
                                            sx={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                right: 0,
                                                bottom: 0,
                                                background: 'linear-gradient(135deg, rgba(220, 38, 38, 0.9), rgba(180, 28, 28, 0.9))',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                opacity: 0,
                                                transition: 'opacity 0.3s ease',
                                            }}
                                        >
                                            <ArrowOutwardIcon sx={{ fontSize: '3rem', color: 'white' }} />
                                        </Box>
                                    </Box>

                                    <Box sx={{ p: { xs: 2.5, md: 3 } }}>
                                        <Chip
                                            label={work.year}
                                            size="small"
                                            sx={{
                                                mb: 1.5,
                                                bgcolor: 'transparent',
                                                border: '1px solid',
                                                borderColor: 'primary.main',
                                                color: 'primary.main',
                                                fontWeight: 700,
                                                fontSize: '0.7rem',
                                            }}
                                        />
                                        <Typography
                                            variant="h5"
                                            component="h3"
                                            sx={{
                                                fontWeight: 700,
                                                mb: 0.5,
                                                fontSize: { xs: '1.25rem', md: '1.5rem' },
                                            }}
                                        >
                                            {work.title}
                                        </Typography>
                                        {work.subtitle && (
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    color: 'text.secondary',
                                                    mb: 1,
                                                    fontSize: '0.875rem',
                                                }}
                                            >
                                                {work.subtitle}
                                            </Typography>
                                        )}
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: 'text.secondary',
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.05em',
                                                fontSize: '0.7rem',
                                            }}
                                        >
                                            {work.description}
                                        </Typography>
                                    </Box>
                                </Box>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
