import React from 'react';
import Style from './Navbar.module.scss';
import Toggler from "./home/Toggler";
import { HashLink as Link } from 'react-router-hash-link';
import { Box } from "@mui/material";
import { info } from "../info/Info";

const links = [
    {
        name: 'Home',
        to: '#home',
        active: 'home'
    },
    {
        name: 'About Me',
        to: '#about',
        active: 'about'
    },
    {
        name: info.initials,
        type: 'initials',
        to: '#home',
        active: 'home'
    },
    {
        name: 'Portfolio',
        to: '#portfolio',
        active: 'portfolio'
    }
];

// Function to create a scroll offset for the navbar
const scrollWidthOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80; // Adjust this value as per your navbar height
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
};

export default function Navbar({ darkMode, handleClick, active, setActive }) {
    return (
        <Box paddingTop={'3rem'} component={'nav'} width={'100%'} position={'fixed'} className={darkMode ? Style.dark : Style.light}>
            <Box component={'ul'} display={'flex'} justifyContent={'center'} alignItems={'center'}
                gap={{ xs: '2rem', md: '8rem' }}
                textTransform={'lowercase'} fontSize={'1.5rem'}>
                {links.map((link, index) => (
                    <Box
                        key={index}
                        component={'li'}
                        className={(link.active === active && !link.type) ? Style.active : ''}
                        sx={{ borderImageSource: info.gradient }}
                    >
                        <Link
                            to={link.to}
                            scroll={el => scrollWidthOffset(el)}
                            smooth
                            onClick={() => setActive(link.active)}
                            className={Style.link}
                        >
                            {!link.type && <p style={{ padding: '0.5rem 0' }}>{link.name}</p>}
                            {link.type && <h1>{link.name}</h1>}
                        </Link>
                    </Box>
                ))}
                <li>
                    <Toggler darkMode={darkMode} handleClick={handleClick} />
                </li>
            </Box>
        </Box>
    );
}
