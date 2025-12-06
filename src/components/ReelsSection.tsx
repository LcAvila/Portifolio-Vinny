'use client';

import { useState, useRef } from 'react';
import { Container, Typography, Box, IconButton, Modal, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef as useReactRef } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import TelegramIcon from '@mui/icons-material/Telegram';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { portfolioVideos } from '@/utils/videos';

export default function ReelsSection() {
    const ref = useReactRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [isPaused, setIsPaused] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState<number | null>(null);
    const [likedVideos, setLikedVideos] = useState<Set<string>>(new Set());
    const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});

    // Duplicate videos 6x for seamless infinite loop
    const duplicatedVideos = [
        ...portfolioVideos,
        ...portfolioVideos,
        ...portfolioVideos,
        ...portfolioVideos,
        ...portfolioVideos,
        ...portfolioVideos,
    ];

    const cardWidth = 320;
    const gap = 24;
    const totalWidth = (cardWidth + gap) * portfolioVideos.length;

    const handleVideoClick = (id: number) => {
        setSelectedVideo(id);
    };

    const handleCloseModal = () => {
        const video = videoRefs.current[`modal-${selectedVideo}`];
        if (video) {
            video.pause();
            video.currentTime = 0;
        }
        setSelectedVideo(null);
    };

    const handleLike = (e: React.MouseEvent, uniqueKey: string) => {
        e.stopPropagation();
        setLikedVideos((prev) => {
            const newSet = new Set(prev);
            if (newSet.has(uniqueKey)) {
                newSet.delete(uniqueKey);
            } else {
                newSet.add(uniqueKey);
            }
            return newSet;
        });
    };

    return (
        <Box
            id="reels"
            component="section"
            ref={ref}
            sx={{
                py: { xs: 8, md: 12 },
                bgcolor: '#000000',
                borderTop: '1px solid #1A1A1A',
                overflow: 'hidden',
            }}
        >
            <Container maxWidth="lg" sx={{ mb: 6 }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <Typography
                        variant="h2"
                        component="h2"
                        sx={{
                            mb: 2,
                            fontWeight: 900,
                            textTransform: 'uppercase',
                            letterSpacing: '-0.02em',
                        }}
                    >
                        VÍDEOS &
                        <Box component="span" sx={{ color: 'primary.main', ml: 1 }}>
                            REELS
                        </Box>
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            color: 'text.secondary',
                            mb: 4,
                        }}
                    >
                        @vinnyfilmsofc • 3.281 seguidores • 175 publicações
                    </Typography>
                </motion.div>
            </Container>

            {/* Infinite Carousel */}
            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    overflow: 'hidden',
                    py: 2,
                }}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                <motion.div
                    animate={{
                        x: [`0px`, `-${totalWidth}px`],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: 'loop',
                            duration: 45,
                            ease: 'linear',
                        },
                    }}
                    style={{
                        display: 'flex',
                        gap: `${gap}px`,
                        paddingLeft: `${gap}px`,
                    }}
                    {...(isPaused && { animate: { x: undefined } })}
                >
                    {duplicatedVideos.map((video, index) => {
                        const uniqueKey = `${video.id}-${index}`;
                        const isLiked = likedVideos.has(uniqueKey);

                        return (
                            <Box
                                key={uniqueKey}
                                onClick={() => handleVideoClick(video.id)}
                                sx={{
                                    flexShrink: 0,
                                    width: `${cardWidth}px`,
                                    cursor: 'pointer',
                                    transition: 'transform 0.3s ease',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                    },
                                }}
                            >
                                {/* Instagram Reels Card */}
                                <Box
                                    sx={{
                                        position: 'relative',
                                        width: '100%',
                                        paddingTop: '177.78%', // 9:16
                                        bgcolor: '#000',
                                        borderRadius: '20px',
                                        overflow: 'hidden',
                                        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.6)',
                                    }}
                                >
                                    {/* Video */}
                                    <video
                                        key={uniqueKey}
                                        ref={(el) => {
                                            if (el) videoRefs.current[uniqueKey] = el;
                                        }}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        onError={(e) => {
                                            console.error(`Error loading video: ${video.filename}`);
                                            e.currentTarget.style.display = 'none';
                                        }}
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            zIndex: 1,
                                        }}
                                    >
                                        <source src={`/assets/Videos/${video.filename}`} type="video/mp4" />
                                    </video>

                                    {/* Fallback for broken videos */}
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
                                            bgcolor: '#0A0A0A',
                                            zIndex: 0,
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                fontSize: '4rem',
                                                fontWeight: 900,
                                                color: '#DC2626',
                                            }}
                                        >
                                            {String(video.id).padStart(2, '0')}
                                        </Typography>
                                    </Box>

                                    {/* Progress Bar - Instagram Style */}
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            height: '2px',
                                            bgcolor: 'rgba(255,255,255,0.3)',
                                            zIndex: 10,
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                height: '100%',
                                                width: '0%',
                                                bgcolor: 'white',
                                                animation: 'progressBar 15s linear infinite',
                                                '@keyframes progressBar': {
                                                    '0%': { width: '0%' },
                                                    '100%': { width: '100%' },
                                                },
                                            }}
                                        />
                                    </Box>

                                    {/* Top Header - User Info */}
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            top: 10,
                                            left: 0,
                                            right: 0,
                                            px: 2,
                                            zIndex: 5,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                        }}
                                    >
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                            <Avatar
                                                src="/assets/pdf-images/perfil 2.png"
                                                alt="Vinny"
                                                sx={{
                                                    width: 32,
                                                    height: 32,
                                                    border: '2px solid rgba(255, 255, 255, 0.3)',
                                                    borderRadius: '50% !important',
                                                }}
                                            />
                                            <Typography
                                                variant="caption"
                                                sx={{
                                                    color: 'white',
                                                    fontWeight: 600,
                                                    fontSize: '0.8rem',
                                                    textShadow: '0 2px 4px rgba(0,0,0,0.8)',
                                                }}
                                            >
                                                vinnyfilmsofc
                                            </Typography>
                                        </Box>
                                        <IconButton
                                            size="small"
                                            onClick={(e) => e.stopPropagation()}
                                            sx={{ color: 'white', p: 0.5 }}
                                        >
                                            <MoreHorizIcon sx={{ fontSize: '1.3rem' }} />
                                        </IconButton>
                                    </Box>

                                    {/* Right Side Actions - Instagram Style */}
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            right: 10,
                                            bottom: 60,
                                            zIndex: 5,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: 2.5,
                                            alignItems: 'center',
                                        }}
                                    >
                                        {/* Like */}
                                        <Box
                                            onClick={(e) => handleLike(e, uniqueKey)}
                                            sx={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                cursor: 'pointer',
                                            }}
                                        >
                                            {isLiked ? (
                                                <FavoriteIcon
                                                    sx={{
                                                        fontSize: '1.6rem',
                                                        color: '#FF3040',
                                                        filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))',
                                                    }}
                                                />
                                            ) : (
                                                <FavoriteBorderIcon
                                                    sx={{
                                                        fontSize: '1.6rem',
                                                        color: 'white',
                                                        filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))',
                                                    }}
                                                />
                                            )}
                                            <Typography
                                                variant="caption"
                                                sx={{
                                                    color: 'white',
                                                    fontWeight: 600,
                                                    fontSize: '0.7rem',
                                                    mt: 0.3,
                                                    textShadow: '0 1px 3px rgba(0,0,0,0.8)',
                                                }}
                                            >
                                                {video.likes}
                                            </Typography>
                                        </Box>

                                        {/* Comment */}
                                        <Box
                                            onClick={(e) => e.stopPropagation()}
                                            sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                                        >
                                            <ModeCommentOutlinedIcon
                                                sx={{
                                                    fontSize: '1.6rem',
                                                    color: 'white',
                                                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))',
                                                }}
                                            />
                                            <Typography
                                                variant="caption"
                                                sx={{
                                                    color: 'white',
                                                    fontWeight: 600,
                                                    fontSize: '0.7rem',
                                                    mt: 0.3,
                                                    textShadow: '0 1px 3px rgba(0,0,0,0.8)',
                                                }}
                                            >
                                                {video.comments}
                                            </Typography>
                                        </Box>

                                        {/* Share */}
                                        <Box
                                            onClick={(e) => e.stopPropagation()}
                                            sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                                        >
                                            <TelegramIcon
                                                sx={{
                                                    fontSize: '1.6rem',
                                                    color: 'white',
                                                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))',
                                                }}
                                            />
                                            <Typography
                                                variant="caption"
                                                sx={{
                                                    color: 'white',
                                                    fontWeight: 600,
                                                    fontSize: '0.7rem',
                                                    mt: 0.3,
                                                    textShadow: '0 1px 3px rgba(0,0,0,0.8)',
                                                }}
                                            >
                                                {video.shares}
                                            </Typography>
                                        </Box>

                                        {/* Bookmark */}
                                        <BookmarkBorderIcon
                                            onClick={(e) => e.stopPropagation()}
                                            sx={{
                                                fontSize: '1.6rem',
                                                color: 'white',
                                                cursor: 'pointer',
                                                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))',
                                            }}
                                        />
                                    </Box>

                                    {/* Bottom Info - Caption & Tags */}
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            bottom: 0,
                                            left: 0,
                                            right: 60,
                                            p: 2,
                                            background: 'linear-gradient(0deg, rgba(0,0,0,0.8) 0%, transparent 100%)',
                                            zIndex: 4,
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                flexWrap: 'wrap',
                                                gap: 0.5,
                                                mb: 0.8,
                                            }}
                                        >
                                            <Typography
                                                component="span"
                                                sx={{
                                                    color: 'white',
                                                    fontSize: '0.7rem',
                                                    fontWeight: 600,
                                                    textShadow: '0 1px 3px rgba(0,0,0,0.8)',
                                                }}
                                            >
                                                #{video.category.toLowerCase()}
                                            </Typography>
                                            <Typography
                                                component="span"
                                                sx={{
                                                    color: 'white',
                                                    fontSize: '0.7rem',
                                                    fontWeight: 600,
                                                    textShadow: '0 1px 3px rgba(0,0,0,0.8)',
                                                }}
                                            >
                                                #videomaker
                                            </Typography>
                                            <Typography
                                                component="span"
                                                sx={{
                                                    color: 'white',
                                                    fontSize: '0.7rem',
                                                    fontWeight: 600,
                                                    textShadow: '0 1px 3px rgba(0,0,0,0.8)',
                                                }}
                                            >
                                                #socialmedia
                                            </Typography>
                                        </Box>
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: 'white',
                                                fontSize: '0.8rem',
                                                fontWeight: 400,
                                                lineHeight: 1.3,
                                                textShadow: '0 2px 6px rgba(0,0,0,0.9)',
                                                display: '-webkit-box',
                                                WebkitLineClamp: 2,
                                                WebkitBoxOrient: 'vertical',
                                                overflow: 'hidden',
                                            }}
                                        >
                                            <Box component="span" sx={{ fontWeight: 600 }}>
                                                vinnyfilmsofc
                                            </Box>{' '}
                                            {video.title} {video.description}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        );
                    })}
                </motion.div>
            </Box >

            {/* Fullscreen Modal with Audio */}
            < Modal
                open={selectedVideo !== null
                }
                onClose={handleCloseModal}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: 'rgba(0, 0, 0, 0.98)',
                }}
            >
                <Box
                    sx={{
                        position: 'relative',
                        outline: 'none',
                        maxWidth: '90vw',
                        maxHeight: '90vh',
                    }}
                >
                    <IconButton
                        onClick={handleCloseModal}
                        sx={{
                            position: 'absolute',
                            top: { xs: -50, md: -60 },
                            right: 0,
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

                    {selectedVideo !== null && (
                        <Box
                            sx={{
                                position: 'relative',
                                maxWidth: '420px',
                            }}
                        >
                            <Box
                                sx={{
                                    position: 'relative',
                                    width: '100%',
                                    paddingTop: '177.78%',
                                    bgcolor: '#000',
                                    borderRadius: '20px',
                                    overflow: 'hidden',
                                    boxShadow: '0 40px 120px rgba(0, 0, 0, 0.9)',
                                }}
                            >
                                <video
                                    key={selectedVideo}
                                    ref={(el) => {
                                        if (el) videoRefs.current[`modal-${selectedVideo}`] = el;
                                    }}
                                    autoPlay
                                    loop
                                    playsInline
                                    controls
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                    }}
                                >
                                    <source
                                        src={`/assets/Videos/${portfolioVideos.find((v) => v.id === selectedVideo)?.filename}`}
                                        type="video/mp4"
                                    />
                                </video>
                            </Box>

                            <Box sx={{ mt: 3, textAlign: 'center' }}>
                                <Typography variant="h6" sx={{ color: 'white', fontWeight: 700, mb: 1 }}>
                                    {portfolioVideos.find((v) => v.id === selectedVideo)?.title}
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    {portfolioVideos.find((v) => v.id === selectedVideo)?.description}
                                </Typography>
                            </Box>
                        </Box>
                    )}
                </Box>
            </Modal >
        </Box >
    );
}
