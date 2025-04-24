import React, { useState } from 'react';
import PortfolioBlock from "./PortfolioBlock";
import { Box, Grid, Dialog, IconButton, Typography, Tabs, Tab } from "@mui/material";
import { info } from "../../info/Info";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function Portfolio({ innerRef }) {
    // State for modals and gallery
    const [selectedProject, setSelectedProject] = useState(null);
    const [showingGallery, setShowingGallery] = useState(false);
    const [showingDescription, setShowingDescription] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
    // State for tab selection
    const [tabValue, setTabValue] = useState(0);

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

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    // Get the projects based on the selected tab
    const projectsToShow = tabValue === 0 ? info.portfolio : info.lowcodeProjects || [];

    return (
        <Box id={'portfolio'} ref={innerRef}>
            {/* Project Type Tabs */}
            <Box 
                sx={{ 
                    width: '100%', 
                    display: 'flex', 
                    justifyContent: 'center',
                    mb: 4, 
                    py: 4,
                }}
            >
                <Tabs 
                    value={tabValue} 
                    onChange={handleTabChange}
                    indicatorColor="primary"
                    textColor= "White"
                    centered
                    sx={{
                        '& .MuiTab-root': { 
                            fontSize: '1.3rem',
                            fontWeight: 600,
                            px: 4,
                        }
                    }}
                >
                    <Tab label="Coding Projects" />
                    <Tab label="UI/UX Lowcode Projects" />
                </Tabs>
            </Box>

            {/* Project Grid */}
            <Grid container display={'flex'} justifyContent={'center'}>
                {projectsToShow.map((project, index) => (
                    <Grid item xs={12} md={6} key={index}>
                        <PortfolioBlock 
                            image={project.image} 
                            live={project.live} 
                            source={tabValue === 0 ? project.source : null} // Only show source for coding projects
                            title={project.title}
                            description={project.description}
                            onViewProject={() => handleViewGallery(project)}
                            onViewDescription={() => handleViewDescription(project)}
                            isLowcode={tabValue === 1} // Pass flag to indicate lowcode project
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
                                alt={`project`}
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