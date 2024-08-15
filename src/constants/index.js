import {
    javascript,
    html,
    css,
    reactjs,
    git,
    java,
    python,
    sql,
    georgian,
    lazehrs,
    projectmerc,
    nordgames,
    figma,
    github,
    linkedin,
    happybirthday
  } from "../assets";

  import corey from "/corey.png";
  import shaun from "/shaun.png";
  import user from "/user.png";
  
    export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
       id: "education",
       title: "Education",
    },
    {
      id: "skills",
      title: "Skills",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
      id: "experience",
      title: "Experience",
  },
    {
        id: "contact",
        title: "Contact",
    },
  ];
  
  const technologies = [
    
    {
        name: "Java",
        icon: java,
        fill: 60,
    },
    {
        name: "Python",
        icon: python,
        fill: 60,
    },
    {
        name: "HTML",
        icon: html,
        fill: 70,
    },
    {
        name: "CSS",
        icon: css,
        fill: 60,
    },
    {
        name: "JavaScript",
        icon: javascript,
        fill: 60,
    },
    {
        name: "React",
        icon: reactjs,
        fill: 30,
    },
    {
        name: "SQL",
        icon: sql,
        fill: 60,
    },
    {
        name: "Git",
        icon: git,
        fill: 20,
    },
  ];
  
  const education = [
    {
        title: "Bachelor of Engineering in Information Technology",
        company_name: "Vidyalankar Institute of Technology",
        icon: georgian,
        iconBg: "#383E56",
        date: "2021 - 2025",
        points: [
            
            "CGPA: 9.94"
        ],
    },
    {
        title: "H.S.C",
        company_name: "B.N. Bandodkar College of Science",
        icon: georgian,
        iconBg: "#E6DEDD",
        date: "2019 - 2021",
        points: [
            "Distincion with 96.33%."
        ],
    },
    {
      title: "S.S.C",
      company_name: "S.V.P.T's Saraswati Vidyalaya High School",
      icon: georgian,
      iconBg: "#383E56",
      date: "2018 - 2019",
      points: [
          "Distincion with 96.20%."
      ],
  },
  ];
  
  const testimonials = [
    {
      title: "Machine Learning Intern",
      company_name: "Cere Labs pvt. ltd.",
      icon: georgian,
      iconBg: "#383E56",
      date: "February 2024-March 2024",
      points: [
          
          "Designed a legal document anonymization system, enhancing privacy and confidentiality by 90%.",
          "Leveraged BERT’s Named-Entity Recognition to accurately anonymize 1,000+ names, addresses,contacts, emails, dates, and amounts.",
          "Integrated OpenAI for summarizing anonymized text and thus verifying document integrity with 95% accuracy."
      ],
  },
  {
      title: "Snapchat Opinion Leader",
      company_name: "Snapchat India, Under25 Universe",
      icon: georgian,
      iconBg: "#E6DEDD",
      date: "June 2023-January 2024",
      points: [
          "Designed viral AR-based Snapchat Lenses and spotlight videos.",
          "Garnered a total reach of over 3 million.",
          "Actively participated in various team building and community activities."
      ],
  },
  ];
  
  const projects = [
    {
      name: "Social Media Image Captioning",
      description:
        "A Java based shopping assistance app where users can collaborate and submit the locations of items from stores around the world to help others find them.",
      tags: [
        {
          name: "python",
          color: "pink-text-gradient",
        },
        {
          name: "ml",
          color: "blue-text-gradient",
        },
        {
            name: "cnn",
            color: "green-text-gradient",
        },
      ],
      image: projectmerc,
      source_code_link: "https://github.com/AryanAgrawal2207/Social_Media_Image_Captioning.git",
    },
    {
      name: "IPL Score Predictor",
      description:
        "A reactive e-commerce website for a fictional board game store, built with HTML, CSS, and powered by Javascript where users can browse dynamicly displayed products.",
      tags: [
        {
          name: "ML",
          color: "orange-text-gradient",
        },
        {
          name: "Flask",
          color: "blue-text-gradient",
        },
        {
          name: "Python",
          color: "pink-text-gradient",
        },
      ],
      image: nordgames,
      source_code_link: "https://github.com/AryanAgrawal2207/IPL-Score-Prediction.git",
    },
    {
      name: "Medicinal Plant Identification",
      description:
        "A Python based application that sends emails to clients on their birthday with a personalized message and a promotional coupon code by reading from a spreadsheet.",
      tags: [
        {
          name: "python",
          color: "orange-text-gradient",
        },
        {
          name: "cnn",
          color: "blue-text-gradient",
        },
        {
          name: "streamlit",
          color: "pink-text-gradient",
        },
      ],
      image: happybirthday,
      source_code_link: "https://github.com/AryanAgrawal2207/Medicinal_Plant_Identification.git",
    },
    {
      name: "Clinic Management System",
      description:
        "A Python based application that sends emails to clients on their birthday with a personalized message and a promotional coupon code by reading from a spreadsheet.",
      tags: [
        {
          name: "python",
          color: "orange-text-gradient",
        },
        {
          name: "sql",
          color: "blue-text-gradient",
        }
      ],
      image: lazehrs,
      source_code_link: "https://github.com/AryanAgrawal2207/Clinic-Management-System.git",
    }
  ];

  const heroLinks = [
    {
        src: github,
        alt: "github",
        link: "https://github.com/AryanAgrawal2207",
    },
    {
        src: linkedin,
        alt: "linkedin",
        link: "https://www.linkedin.com/in/aryan-agrawal-14a3532aa/",
    },
  ];
  
  export { technologies, education, testimonials, projects, heroLinks };