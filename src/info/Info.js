import self from "../img/self.png"
import OpenD1 from "../img/OpenD/Img1.png"
import OpenD2 from "../img/OpenD/Img2.png"
import OpenD3 from "../img/OpenD/Img3.png"
import OpenD4 from "../img/OpenD/Img4.png"
import OpenD5 from "../img/OpenD/Img5.png"
import Dsurv1 from "../img/Dsurv/Img1.png"
import Dsurv2 from "../img/Dsurv/Img2.png"
import swole from "../img/SwoleNormous.png"
import SimonGame from "../img/Simon Game.png"
import Notes from "../img/Notes Keeper.png"
import Blog1 from "../img/BlogApi/Img1.png"
import Blog2 from "../img/BlogApi/Img2.png"
import Blog3 from "../img/BlogApi/Img3.png"
import Blog4 from "../img/BlogApi/Img4.png"


export let colors = [" rgb(66, 66, 67), rgb(194, 192, 196)"];


export const info = {
    firstName: "Soumil",
    lastName: "Singh",
    initials: "SS", 
    position: "a Full Stack Developer",
    selfPortrait: self,
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, 
    baseColor: colors[0],
    miniBio: [ 
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in India'
        },
        {
            emoji: "📧",
            text: "singhsoumil805@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://github.com/Soumil805",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/soumil-singh-0069bb238/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://x.com/singhsoumil805",
            icon: "fa fa-twitter",
            label: 'twitter'
        }

    ],
    bio: "Hello Im soumil a Bsc Comp Sci Graduate and a Full stack Developer along with some interest in Web3 and entrepreneurship.",
    skills:
        {
            exposedTo: ['Java', 'Android Studio', 'C#', 'Kotlin', '.Net', 'Data Structures']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        

    ],
    portfolio: [ 
        {
            title: "Open-D",
            additionalImages: [
                OpenD1,
                OpenD2,
                OpenD3,
                OpenD4,
                OpenD5
            ],
            description:`A Decentralized NFT marketplace that eliminates reliance on centralized servers, enhancing security and resilience against cyber threats, with a on-chain storage using the Internet Computer Blockchain through Motoko Smart Contracts, ensuring transparency and immutability.
             Also, an intuitive UI with React was made, optimizing user experience and seamless navigation.`,
            source: "https://github.com/Soumil805/OpenD", 
            image: OpenD1
        },
        {
            title: "Dsurv",
            additionalImages: [
                Dsurv1,
                Dsurv2
            ],
            description: `Introduced SoM Token as the primary transaction currency for OpenD the NFT marketplace, enabling newcomers to receive free tokens for trading on OpenD.
            Users are also able to check their balance and send tokens to other users`,
            source: "https://github.com/Soumil805/Token",
            image: Dsurv1
        },
        {
            title: "Swolenormous",
            description:`A Fitness web app which provides personalized workouts based on specific user needs.
            Developed using React and Tailwind CSS, ensuring an interactive and responsive design.`,
            live: "https://swole-fit.netlify.app/",
            source: "https://github.com/Soumil805/The_Fit.git",
            image: swole
        },
        {
            title: "Notes Keeper App",
            live: "https://3m3tg3.csb.app/",
            description:"A Google Keep-inspired web app using React.js to manage notes efficiently using custom components, state management, and reusable UI elements, improving user interaction.",
            source: "https://codesandbox.io/p/sandbox/keeper-app-final-3m3tg3",
            image: Notes
        },
        {
            title: "Blog Api",
            additionalImages:[
                Blog1,
                Blog2,
                Blog3,
                Blog4
            ],
            description:`A custom made Api for blogs including event handlers for adding, deleting, editing and extracting all the other Blogs
            The project also includes a Front-end which showcases a way to access and use the Api`,
            source: "https://github.com/Soumil805/Blog-Api",
            image: Blog1
        },
        {
            title: "Simon Game",
            description:`A simple yet intricate Simon game which uses simple JavaScript logic to create the Back-end conditions to run the game.
            HTML and CSS are used for the frontend of this game`,
            live: "https://soumil805.github.io/Simon-Game/",
            source: "https://github.com/Soumil805/Simon-Game",
            image: SimonGame
        },
        
    ]
}