'use client';

import { useState } from 'react';
import { Container, Typography, Box, TextField, Button, Stack, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { portfolioData } from '@/utils/constants';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function ContactSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setFormData({ name: '', email: '', message: '' });
    };

    const whatsappLink = `https://wa.me/${portfolioData.personal.whatsapp}?text=Olá! Gostaria de fazer um orçamento.`;

    return (
        <Box
            id="contact"
            component="section"
            ref={ref}
            sx={{
                py: { xs: 12, md: 20 },
                bgcolor: '#000000',
                borderTop: '1px solid #1A1A1A',
                borderBottom: '1px solid #1A1A1A',
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
                            mb: 4,
                            fontWeight: 900,
                            textTransform: 'uppercase',
                            letterSpacing: '-0.02em',
                        }}
                    >
                        VAMOS TRABALHAR
                        <Box component="span" sx={{ color: 'primary.main', ml: 2 }}>
                            JUNTOS?
                        </Box>
                    </Typography>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <Box sx={{ textAlign: 'center', mb: 8 }}>
                        <Typography
                            variant="body1"
                            sx={{
                                color: 'text.secondary',
                                fontSize: '1.125rem',
                                mb: 4,
                            }}
                        >
                            {portfolioData.personal.email}
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                color: 'text.secondary',
                                fontSize: '1.125rem',
                            }}
                        >
                            {portfolioData.personal.phone}
                        </Typography>
                    </Box>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={4}>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    label="NOME"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    variant="outlined"
                                    sx={{
                                        bgcolor: 'rgba(255,255,255,0.03)',
                                        '& .MuiInputLabel-root': {
                                            fontSize: '0.875rem',
                                            letterSpacing: '0.1em',
                                            fontWeight: 600,
                                        },
                                        '& .MuiOutlinedInput-root': {
                                            fontSize: '1rem',
                                            '& fieldset': {
                                                borderColor: 'rgba(255,255,255,0.1)',
                                            },
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    label="E-MAIL"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    variant="outlined"
                                    sx={{
                                        bgcolor: 'rgba(255,255,255,0.03)',
                                        '& .MuiInputLabel-root': {
                                            fontSize: '0.875rem',
                                            letterSpacing: '0.1em',
                                            fontWeight: 600,
                                        },
                                        '& .MuiOutlinedInput-root': {
                                            fontSize: '1rem',
                                            '& fieldset': {
                                                borderColor: 'rgba(255,255,255,0.1)',
                                            },
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="MENSAGEM"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    multiline
                                    rows={6}
                                    variant="outlined"
                                    sx={{
                                        bgcolor: 'rgba(255,255,255,0.03)',
                                        '& .MuiInputLabel-root': {
                                            fontSize: '0.875rem',
                                            letterSpacing: '0.1em',
                                            fontWeight: 600,
                                        },
                                        '& .MuiOutlinedInput-root': {
                                            fontSize: '1rem',
                                            '& fieldset': {
                                                borderColor: 'rgba(255,255,255,0.1)',
                                            },
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sx={{ textAlign: 'center', mt: 2 }}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    size="large"
                                    endIcon={<ArrowForwardIcon />}
                                    sx={{
                                        px: 8,
                                        py: 2.5,
                                        bgcolor: 'white',
                                        color: 'black',
                                        fontSize: '0.875rem',
                                        fontWeight: 800,
                                        letterSpacing: '0.1em',
                                        borderRadius: '50px',
                                        '&:hover': {
                                            bgcolor: 'primary.main',
                                            color: 'white',
                                        },
                                    }}
                                >
                                    ENVIAR MENSAGEM
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </motion.div>
            </Container>
        </Box>
    );
}
