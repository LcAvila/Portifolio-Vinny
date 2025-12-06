'use client';

import { useRef } from 'react';
import { Box, Container, Typography, IconButton, Grid } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Project } from '@/utils/projects';
import { useRouter } from 'next/navigation';
import Footer from '@/components/Footer';

interface ProjectDetailClientProps {
    project: Project;
}

export default function ProjectDetailClient({ project }: ProjectDetailClientProps) {
    const router = useRouter();
    const { scrollYProgress } = useScroll();

    // Parallax effect for hero
    const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <Box sx={{ bgcolor: '#000000', minHeight: '100vh', color: 'white' }}>
            {/* Navigation */}
            <Box sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: 100,
                p: { xs: 2, md: 4 }
            }}>
                <IconButton
                    onClick={() => window.history.length > 1 ? router.back() : router.push('/')}
                    sx={{
                        color: 'white',
                        bgcolor: 'rgba(0,0,0,0.5)',
                        backdropFilter: 'blur(10px)',
                        '&:hover': { bgcolor: 'primary.main' }
                    }}
                >
                    <ArrowBackIcon />
                </IconButton>
            </Box>

            {/* Hero Section */}
            <Box sx={{
                position: 'relative',
                height: '80vh',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'end',
                pb: 10
            }}>
                {/* Background Video/Image */}
                <motion.div style={{ y, opacity, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
                    {project.heroVideo ? (
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }}
                        >
                            <source src={project.heroVideo} type="video/mp4" />
                        </video>
                    ) : (
                        <Box
                            component="img"
                            src={project.heroImage}
                            alt={project.title}
                            sx={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }}
                        />
                    )}
                    <Box sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(to top, #000000 0%, transparent 80%)'
                    }} />
                </motion.div>

                {/* Content */}
                <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 600, letterSpacing: 2 }}>
                            {project.category} — {project.date}
                        </Typography>
                        <Typography variant="h1" sx={{
                            fontSize: { xs: '3rem', md: '5rem' },
                            fontWeight: 900,
                            lineHeight: 0.9,
                            mb: 4,
                            textTransform: 'uppercase'
                        }}>
                            {project.title}
                        </Typography>

                        {/* Stats */}
                        <Grid container spacing={4} sx={{ borderTop: '1px solid rgba(255,255,255,0.2)', pt: 4 }}>
                            {project.stats.map((stat, index) => (
                                <Grid item xs={4} md={2} key={index}>
                                    <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>
                                        {stat.label}
                                    </Typography>
                                    <Typography variant="h5" sx={{ fontWeight: 700 }}>
                                        {stat.value}
                                    </Typography>
                                </Grid>
                            ))}
                        </Grid>
                    </motion.div>
                </Container>
            </Box>

            {/* Description Section */}
            <Container maxWidth="md" sx={{ py: 10 }}>
                <Typography variant="h5" sx={{ lineHeight: 1.6, fontWeight: 300, color: '#CCCCCC' }}>
                    {project.description}
                </Typography>
            </Container>

            {/* Media Grid (Masonry-ish) */}
            <Container maxWidth="lg" sx={{ py: 5, pb: 15 }}>
                <Grid container spacing={3}>
                    {project.media.map((item, index) => (
                        <Grid item xs={12} md={index % 3 === 0 ? 12 : 6} key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Box sx={{
                                    position: 'relative',
                                    paddingTop: item.type === 'video' ? '56.25%' : '0',
                                    height: item.type === 'image' ? '500px' : 'auto',
                                    borderRadius: '8px',
                                    overflow: 'hidden',
                                    bgcolor: '#111'
                                }}>
                                    {item.type === 'video' ? (
                                        <video
                                            controls
                                            playsInline
                                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                                        >
                                            <source src={item.src} type="video/mp4" />
                                        </video>
                                    ) : (
                                        <Box
                                            component="img"
                                            src={item.src}
                                            alt={`Project media ${index + 1}`}
                                            sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                    )}
                                </Box>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            <Footer />
        </Box>
    );
}
