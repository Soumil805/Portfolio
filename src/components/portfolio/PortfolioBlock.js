import React from 'react';
import IconLink from "./IconLink";
import { Box } from "@mui/material";

function PortfolioBlock(props) {
   const { 
     image, 
     live, 
     source, 
     title, 
     onViewProject, // Opens image gallery
     onViewDescription, // Opens description modal
     isLowcode = false // New prop to indicate if this is a lowcode project
   } = props;
   
   return (
      // Main container
      <Box 
        display={'flex'} 
        flexDirection={'column'} 
        justifyContent={'center'} 
        alignItems={'center'}
        sx={{ padding: '2rem' }}
      >
        {/* Project Card with Flip Effect */}
        <Box 
          sx={{
            width: '100%',
            maxWidth: '500px',
            height: '300px',
            perspective: '1000px',
            cursor: 'pointer',
            marginBottom: '1.5rem'
          }}
        >
          <Box
            onClick={onViewDescription}
            sx={{
              position: 'relative',
              width: '100%',
              height: '100%',
              transformStyle: 'preserve-3d',
              transition: 'transform 0.6s',
              '&:hover': {
                transform: 'rotateY(180deg)'
              }
            }}
          >
            {/* Front of card - Project Image */}
            <Box
              sx={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backfaceVisibility: 'hidden',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              }}
            >
              <Box 
                component={'img'} 
                src={image} 
                alt={title}
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </Box>
            
            {/* Back of card - Preview Text */}
            <Box
              sx={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)',
                backgroundColor: '#1a1a1a',
                color: 'white',
                borderRadius: '12px',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              }}
            >
              <h3 style={{ 
                fontSize: '1.5rem', 
                marginBottom: '1rem',
                fontWeight: 600 
              }}>
                About this project
              </h3>
              <p style={{ 
                fontSize: '1rem',
                lineHeight: '1.5',
                overflow: 'auto'
              }}>
                Click to read full description
              </p>
            </Box>
          </Box>
        </Box>

        {/* Project Title */}
        <h1 style={{
          fontSize: '1.75rem',
          marginBottom: '1rem',
          fontWeight: 600
        }}>{title}</h1>
        
        {/* Action Buttons */}
        <Box 
          className={'portfolio'} 
          display={'flex'} 
          flexDirection={'column'} 
          gap={'0.75rem'}
          alignItems={'center'} 
          fontSize={'1.5rem'} 
        >
          {/* Conditional Live Demo/View Project Button */}
          {live ? (
            <Box 
              p={1.5} 
              border={'2px solid black'} 
              borderRadius={'25px'}
              sx={{
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                  backgroundColor: 'black',
                  color: 'white',
                  transform: 'translateY(-2px)'
                }
              }}
            >
              <IconLink link={live} title={'Live Demo'} icon={'fa fa-safari'}/>
            </Box>
          ) : (
            <Box 
              p={1.5} 
              border={'2px solid black'} 
              borderRadius={'25px'} 
              onClick={onViewProject}
              sx={{ 
                cursor: 'pointer',
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                  backgroundColor: 'black',
                  color: 'white',
                  transform: 'translateY(-2px)'
                }
              }}
            >
              <IconLink title={'View Project'} icon={'fa fa-image'}/>
            </Box>
          )}
          
          {/* Source Code Button - Only show for coding projects */}
          {source && !isLowcode && (
            <Box 
              p={1.5} 
              border={'2px solid black'} 
              borderRadius={'25px'}
              sx={{
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                  backgroundColor: 'black',
                  color: 'white',
                  transform: 'translateY(-2px)'
                }
              }}
            >
              <IconLink link={source} title={'Source Code'} icon={'fa fa-code'}/>
            </Box>
          )}
        </Box>
      </Box>
   );
}

export default PortfolioBlock;