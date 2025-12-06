'use client';

import { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Container,
    Button,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Box,
    useScrollTrigger,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from 'framer-motion';

const navItems = [
    { label: 'INÍCIO', href: '#hero' },
    { label: 'SOBRE', href: '#about' },
    { label: 'TRABALHOS', href: '#works' },
    { label: 'EXPERIÊNCIA', href: '#experience' },
];

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 50,
    });

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMobileOpen(false);
        }
    };

    return (
        <>
            <AppBar
                position="fixed"
                elevation={0}
                sx={{
                    bgcolor: trigger ? '#000000' : 'transparent',
                    borderBottom: trigger ? '1px solid #1A1A1A' : 'none',
                    transition: 'all 0.3s ease',
                }}
            >
                <Container maxWidth="lg">
                    <Toolbar sx={{ justifyContent: 'space-between', py: 2 }}>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Box
                                component="a"
                                href="#hero"
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection('#hero');
                                }}
                                sx={{
                                    fontSize: '1.25rem',
                                    fontWeight: 900,
                                    textDecoration: 'none',
                                    cursor: 'pointer',
                                    letterSpacing: '0.05em',
                                    textTransform: 'uppercase',
                                    color: 'white',
                                    '&:hover': {
                                        color: 'primary.main',
                                    },
                                    transition: 'color 0.3s ease',
                                }}
                            >
                                MV
                                <Box component="span" sx={{ color: 'primary.main' }}>
                                    .
                                </Box>
                            </Box>
                        </motion.div>

                        {/* Desktop Navigation */}
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
                            {navItems.map((item, index) => (
                                <motion.div
                                    key={item.label}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <Button
                                        onClick={() => scrollToSection(item.href)}
                                        sx={{
                                            color: 'text.secondary',
                                            fontSize: '0.75rem',
                                            fontWeight: 600,
                                            letterSpacing: '0.1em',
                                            '&:hover': {
                                                color: 'primary.main',
                                                bgcolor: 'transparent',
                                            },
                                        }}
                                    >
                                        {item.label}
                                    </Button>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                            >
                                <Button
                                    variant="outlined"
                                    onClick={() => scrollToSection('#contact')}
                                    sx={{
                                        ml: 2,
                                        borderColor: 'primary.main',
                                        color: 'primary.main',
                                        fontSize: '0.75rem',
                                        fontWeight: 700,
                                        letterSpacing: '0.1em',
                                        px: 3,
                                        '&:hover': {
                                            borderColor: 'primary.light',
                                            bgcolor: 'rgba(220, 38, 38, 0.1)',
                                        },
                                    }}
                                >
                                    CONTATO
                                </Button>
                            </motion.div>
                        </Box>

                        {/* Mobile Menu Button */}
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ display: { md: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </Container>
            </AppBar>

            {/* Mobile Drawer */}
            <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': {
                        width: 280,
                        bgcolor: '#000000',
                        borderLeft: '1px solid #1A1A1A',
                    },
                }}
            >
                <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
                    <IconButton onClick={handleDrawerToggle} sx={{ color: 'white' }}>
                        <CloseIcon />
                    </IconButton>
                </Box>
                <List>
                    {navItems.map((item) => (
                        <ListItem key={item.label} disablePadding>
                            <ListItemButton
                                onClick={() => scrollToSection(item.href)}
                                sx={{
                                    '&:hover': {
                                        bgcolor: 'rgba(220, 38, 38, 0.1)',
                                        '& .MuiListItemText-primary': {
                                            color: 'primary.main',
                                        },
                                    },
                                }}
                            >
                                <ListItemText
                                    primary={item.label}
                                    sx={{
                                        '& .MuiListItemText-primary': {
                                            fontSize: '0.875rem',
                                            fontWeight: 600,
                                            letterSpacing: '0.1em',
                                        },
                                    }}
                                />
                            </ListItemButton>
                        </ListItem>
                    ))}
                    <ListItem disablePadding>
                        <ListItemButton
                            onClick={() => scrollToSection('#contact')}
                            sx={{
                                m: 2,
                                border: '1px solid',
                                borderColor: 'primary.main',
                                color: 'primary.main',
                                '&:hover': {
                                    bgcolor: 'rgba(220, 38, 38, 0.1)',
                                },
                            }}
                        >
                            <ListItemText
                                primary="CONTATO"
                                sx={{
                                    textAlign: 'center',
                                    '& .MuiListItemText-primary': {
                                        fontSize: '0.875rem',
                                        fontWeight: 700,
                                        letterSpacing: '0.1em',
                                    },
                                }}
                            />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
        </>
    );
}
