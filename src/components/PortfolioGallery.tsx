'use client';

import { useState } from 'react';
import { Container, Typography, Box, Grid, Modal, IconButton } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

// Você pode substituir esses placeholders por imagens reais
const galleryImages = [
    { id: 1, title: 'Social Media - Clínica Mais Vida', category: 'Social Media', src: '/assets/gallery/img1.jpg' },
    { id: 2, title: 'Campanha - Iriri Barbearia', category: 'Campanhas', src: '/assets/gallery/img2.jpg' },
    { id: 3, title: 'Vídeo - Prefeitura Queimados', category: 'Videomaker', src: '/assets/gallery/img3.jpg' },
    { id: 4, title: 'Design - Polos UVA', category: 'Design', src: '/assets/gallery/img4.jpg' },
    { id: 5, title: 'Tráfego Pago', category: 'Tráfego', src: '/assets/gallery/img5.jpg' },
    { id: 6, title: 'Criação de Conteúdo', category: 'Conteúdo', src: '/assets/gallery/img6.jpg' },
];

export default function PortfolioGallery() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    const handleOpen = (index: number) => setSelectedImage(index);
    const handleClose = () => setSelectedImage(null);

    const handlePrevious = () => {
        if (selectedImage !== null) {
            setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length);
        }
    };

    const handleNext = () => {
        if (selectedImage !== null) {
            setSelectedImage((selectedImage + 1) % galleryImages.length);
        }
    };

    return (
        <Box
            id="gallery"
            component="section"
            ref={ref}
            sx={{
                py: { xs: 8, md: 12, lg: 16 },
                bgcolor: '#000000',
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
                        GALERIA DE
                        <Box component="span" sx={{ color: 'primary.main', ml: 1 }}>
                            PROJETOS
                        </Box>
                    </Typography>
                </motion.div>

                <Grid container spacing={{ xs: 2, md: 3 }}>
                    {galleryImages.map((image, index) => (
                        <Grid item xs={6} sm={4} md={4} key={image.id}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.5, delay: index * 0.08 }}
                            >
                                <Box
                                    onClick={() => handleOpen(index)}
                                    sx={{
                                        position: 'relative',
                                        paddingTop: '100%',
                                        overflow: 'hidden',
                                        cursor: 'pointer',
                                        bgcolor: '#0A0A0A',
                                        border: '1px solid #1A1A1A',
                                        '&::after': {
                                            content: '""',
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            bottom: 0,
                                            background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.8) 100%)',
                                            opacity: 0,
                                            transition: 'opacity 0.3s ease',
                                        },
                                        '&:hover': {
                                            borderColor: 'primary.main',
                                            '.gallery-info': {
                                                transform: 'translateY(0)',
                                                opacity: 1,
                                            },
                                            '&::after': {
                                                opacity: 1,
                                            },
                                            '.gallery-number': {
                                                color: 'primary.main',
                                            },
                                        },
                                    }}
                                >
                                    <Box
                                        className="gallery-number"
                                        sx={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            bottom: 0,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: { xs: '3rem', md: '4rem' },
                                            fontWeight: 900,
                                            color: 'white',
                                            filter: 'grayscale(100%)',
                                            transition: 'color 0.3s ease',
                                        }}
                                    >
                                        {String(image.id).padStart(2, '0')}
                                    </Box>

                                    <Box
                                        className="gallery-info"
                                        sx={{
                                            position: 'absolute',
                                            bottom: 0,
                                            left: 0,
                                            right: 0,
                                            p: 2,
                                            zIndex: 2,
                                            transform: 'translateY(100%)',
                                            opacity: 0,
                                            transition: 'all 0.3s ease',
                                        }}
                                    >
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: 'white',
                                                fontWeight: 600,
                                                fontSize: { xs: '0.75rem', md: '0.875rem' },
                                                mb: 0.5,
                                            }}
                                        >
                                            {image.title}
                                        </Typography>
                                        <Typography
                                            variant="caption"
                                            sx={{
                                                color: 'primary.main',
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.1em',
                                                fontSize: '0.65rem',
                                                fontWeight: 700,
                                            }}
                                        >
                                            {image.category}
                                        </Typography>
                                    </Box>
                                </Box>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>

                <Box sx={{ mt: { xs: 4, md: 6 }, textAlign: 'center' }}>
                    <Typography
                        variant="body2"
                        sx={{
                            color: 'text.secondary',
                            fontStyle: 'italic',
                        }}
                    >
                        📸 Atualize as imagens adicionando fotos do Instagram em /public/assets/gallery/
                    </Typography>
                </Box>
            </Container>

            {/* Lightbox Modal */}
            <Modal
                open={selectedImage !== null}
                onClose={handleClose}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: 'rgba(0, 0, 0, 0.95)',
                }}
            >
                <Box sx={{ position: 'relative', outline: 'none', maxWidth: '90vw', maxHeight: '90vh' }}>
                    <IconButton
                        onClick={handleClose}
                        sx={{
                            position: 'absolute',
                            top: { xs: 10, md: -50 },
                            right: { xs: 10, md: 10 },
                            color: 'white',
                            bgcolor: 'rgba(220, 38, 38, 0.9)',
                            zIndex: 10,
                            '&:hover': {
                                bgcolor: 'primary.main',
                            },
                        }}
                    >
                        <CloseIcon />
                    </IconButton>

                    <AnimatePresence mode="wait">
                        {selectedImage !== null && (
                            <motion.div
                                key={selectedImage}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Box
                                    sx={{
                                        width: { xs: '90vw', sm: '70vw', md: '60vw' },
                                        height: { xs: '60vh', md: '70vh' },
                                        maxWidth: 1000,
                                        bgcolor: '#0A0A0A',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        border: '1px solid #1A1A1A',
                                    }}
                                >
                                    <Box
                                        sx={{
                                            fontSize: { xs: '6rem', md: '8rem' },
                                            fontWeight: 900,
                                            color: 'white',
                                        }}
                                    >
                                        {String(galleryImages[selectedImage]?.id).padStart(2, '0')}
                                    </Box>
                                    <Typography variant="h6" sx={{ color: 'text.secondary', mt: 2 }}>
                                        {galleryImages[selectedImage]?.title}
                                    </Typography>
                                </Box>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <IconButton
                        onClick={handlePrevious}
                        sx={{
                            position: 'absolute',
                            left: { xs: -15, md: -60 },
                            top: '50%',
                            transform: 'translateY(-50%)',
                            color: 'white',
                            bgcolor: 'rgba(220, 38, 38, 0.9)',
                            '&:hover': {
                                bgcolor: 'primary.main',
                            },
                        }}
                    >
                        <NavigateBeforeIcon />
                    </IconButton>

                    <IconButton
                        onClick={handleNext}
                        sx={{
                            position: 'absolute',
                            right: { xs: -15, md: -60 },
                            top: '50%',
                            transform: 'translateY(-50%)',
                            color: 'white',
                            bgcolor: 'rgba(220, 38, 38, 0.9)',
                            '&:hover': {
                                bgcolor: 'primary.main',
                            },
                        }}
                    >
                        <NavigateNextIcon />
                    </IconButton>
                </Box>
            </Modal>
        </Box>
    );
}
