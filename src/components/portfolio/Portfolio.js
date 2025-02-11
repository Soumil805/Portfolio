import React, { useState } from 'react';
import PortfolioBlock from "./PortfolioBlock";
import { Box, Grid, Dialog, IconButton, Typography } from "@mui/material";
import { info } from "../../info/Info";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function Portfolio({ innerRef }) {
    // State for modals and gallery
    const [selectedProject, setSelectedProject] = useState(null);
    const [showingGallery, setShowingGallery] = useState(false);
    const [showingDescription, setShowingDescription] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Handler functions
    const handleViewGallery = (project) => {
        setSelectedProject(project);
        setShowingGallery(true);
        setCurrentImageIndex(0);
    };

    const handleViewDescription = (project) => {
        setSelectedProject(project);
        setShowingDescription(true);
    };

    const handleClose = () => {
        setSelectedProject(null);
        setShowingGallery(false);
        setShowingDescription(false);
        setCurrentImageIndex(0);
    };

    const handlePrevImage = () => {
        setCurrentImageIndex((prev) => 
            prev === 0 ? selectedProject.additionalImages.length - 1 : prev - 1
        );
    };

    const handleNextImage = () => {
        setCurrentImageIndex((prev) => 
            prev === selectedProject.additionalImages.length - 1 ? 0 : prev + 1
        );
    };

    return (
        <Box id={'portfolio'} ref={innerRef}>
            {/* Project Grid */}
            <Grid container display={'flex'} justifyContent={'center'}>
                {info.portfolio.map((project, index) => (
                    <Grid item xs={12} md={6} key={index}>
                        <PortfolioBlock 
                            image={project.image} 
                            live={project.live} 
                            source={project.source} 
                            title={project.title}
                            description={project.description}
                            onViewProject={() => handleViewGallery(project)}
                            onViewDescription={() => handleViewDescription(project)}
                        />
                    </Grid>
                ))}
            </Grid>

            {/* Description Modal */}
            <Dialog 
                open={showingDescription} 
                onClose={handleClose}
                maxWidth="md"
                fullWidth
            >
                <Box sx={{ position: 'relative', p: 3 }}>
                    <IconButton
                        onClick={handleClose}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                        }}
                    >
                        <X />
                    </IconButton>
                    {selectedProject && (
                        <>
                            <Typography variant="h4" gutterBottom>
                                {selectedProject.title}
                            </Typography>
                            <Typography variant="h6" style={{ whiteSpace: 'pre-line' }}>
                                {selectedProject.description}
                            </Typography>
                        </>
                    )}
                </Box>
            </Dialog>

            {/* Gallery Modal */}
            <Dialog 
                open={showingGallery} 
                onClose={handleClose}
                maxWidth="md"
                fullWidth
            >
                <Box sx={{ position: 'relative', bgcolor: 'white', p: 0 }}>
                    <IconButton
                        onClick={handleClose}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            zIndex: 1,
                        }}
                    >
                        <X />
                    </IconButton>

                    {selectedProject && selectedProject.additionalImages && (
                        <Box sx={{ 
                            position: 'relative',
                            height: '800px', // Fixed height to avoid layout shifts
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            bgcolor: 'white'
                        }}>
                            <img
                                src={selectedProject.additionalImages[currentImageIndex]}
                                alt={`Project image ${currentImageIndex + 1}`}
                                style={{
                                    maxWidth: '100%',
                                    maxHeight: '100%',
                                    objectFit: 'contain'
                                }}
                            />
                            
                            {selectedProject.additionalImages.length > 1 && (
                                <>
                                    <IconButton
                                        onClick={handlePrevImage}
                                        sx={{
                                            position: 'absolute',
                                            left: 8,
                                            color: 'black',
                                        }}
                                    >
                                        <ChevronLeft />
                                    </IconButton>
                                    <IconButton
                                        onClick={handleNextImage}
                                        sx={{
                                            position: 'absolute',
                                            right: 8,
                                            color: 'black',
                                        }}
                                    >
                                        <ChevronRight />
                                    </IconButton>
                                    
                                    <Box sx={{
                                        position: 'absolute',
                                        bottom: 16,
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        display: 'flex',
                                        gap: 1
                                    }}>
                                        {selectedProject.additionalImages.map((_, idx) => (
                                            <Box
                                                key={idx}
                                                onClick={() => setCurrentImageIndex(idx)}
                                                sx={{
                                                    width: 8,
                                                    height: 8,
                                                    borderRadius: '50%',
                                                    bgcolor: idx === currentImageIndex ? 'black' : 'gray',
                                                    cursor: 'pointer',
                                                }}
                                            />
                                        ))}
                                    </Box>
                                </>
                            )}
                        </Box>
                    )}
                </Box>
            </Dialog>
        </Box>
    );
}