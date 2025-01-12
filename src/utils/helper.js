import { BlockChainIcon, ConsulationIcon, FacebookIcon, InstagramIcon, MarketingIcon, NftServices, SmartContractIcon, TrustIcon, WebServicesIcon, WThreeIcon, XIcon, YoutubeIcon } from "./icons"

export const HEADER_LIST = [
    {
        item: 'Home',
        link: "#home"
    },
    {
        item: 'Services',
        link: "#services"
    },
    {
        item: 'Projects',
        link: "#projects"
    },
    {
        item: 'About',
        link: "#about"
    }
]

export const UPCOMING_PROJECTS_LIST = [
    {
        image:"./assets/nubbies-card-img.webp",
        name:"Nubbies"
    },
    {
        image:"./assets/nekozuma-img.webp",
        name:"Nekozuma"
    },
    {
        image:"./assets/galactium-img.webp",
        name:"Galactium"
    },
    {
        image:"./assets/frenz-forever-img.webp",
        name:"Frenz Forever "
    }
]

export const  SERVICES_LIST = [
    {
        icon:<SmartContractIcon/> ,
        name:"Smart Contract ",
        description:"Tailored smart contracts to fit your needs, no matter the size. No idea is too big, too small, or too degen... "
    },
    {
        icon:<WebServicesIcon/> ,
        name:"Web3 Services",
        list :[
            "Metmask integration",
            "NFT's",
            "Dapps",
            "Tokenomics",
            "Metaverse AR/VR",
            "SDK Gaming Integration",            
        ]
    },
    {
        icon:<MarketingIcon/> ,
        name:"Marketing / Media",
        description:"We have worked with some of the spaces most reputable figures to drive audiences."
    },
    {
        icon:<ConsulationIcon/> ,
        name:"Consultation ",
        description:"Have an idea but not sure where to start? Hop on a call with us and we will help you to put plans into action. "
    },
    {
        icon:<NftServices/> ,
        name:"NFT Services ",
        description:"NFT solutions from start to finish. From Initial Concept to Secondary market listings, we will guide you every step of the way to ensure your project is a successfully and seemlessly delivered come mint day."
    }
]

export const CARDS_LIST = [
    "./assets/nubbies-project.webp",
    "./assets/nubbies-project-img-2.webp",
    "./assets/galactium-project.webp",
    "./assets/galactium-pfp.webp",
    "./assets/nekozuma-project.webp",
    "./assets/frenz-forever-project.webp",
    "./assets/teacherspet.webp",
    "./assets/teacherspet-pfp.webp",
  ]

  export const KARMIC_LIST = [
    "./assets/karmic-img-one.webp",
    "./assets/karmic-img-two.webp",
    "./assets/karmic-img-three.webp",
  ]
  
  export const VALUE_LIST = [
    {
      icon: <WThreeIcon/>,
      title: "W3",
      description:
        "Not your average degens. Karmic is lead by a team of Industry professionals with extensive backgrounds in web3 and web2. We are actively involved in all that we do. Boots on the ground. We know the ins and outs of the space, because we are building it.",
    },
    {
      icon: <BlockChainIcon/>,
      title: "Blockchain Agnostic",
      description:
        "Our team of seasoned developers will help you to launch your project on the network of your choosing- be it ethereum, solana, polygon, etc..",
    },
    {
      icon: <TrustIcon/>,
      title: "Trust",
      description:
        "Trustless and results driven development backed by a portfolio of success. You're the captain of the ship, and the keys are always in your hands.",
    },
  ];
  
  export const MEDIA_ICON_LIST = [
    {
      icon: <InstagramIcon/>,
      link: "https://www.instagram.com/",
    },
    { icon: <XIcon/>,
         link: "https://www.x.com/" },
    {
      icon: <FacebookIcon/>,
      link: "https://www.facebook.com/",
    },
    {
      icon: <YoutubeIcon/>,
      link: "https://www.youtube.com/",
    },
  ];