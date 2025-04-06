import { Github, Linkedin, Mails } from "lucide-react";

const dataCV = {
    nombre: "Simón Vizioli",
    ubicacion: "Mendoza, Argentina",
    contacto: [
        {
            id: 1,
            icon: <Linkedin />,
            title: "LinkedIn",
            link: "https://linkedin.com/in/simón-vizioli/",
        },
        {
            id: 2,
            icon: <Mails />,
            title: "Email",
            link: "mailto:simonvizioi@gmail.com",
        },
        {
            id: 3,
            icon: <Github />,
            title: "GitHub",
            link: "https://github.com/SimonVizioli",
        },
    ],
    perfil: "Desarrollador de Software con experiencia en React. He implementado exitosamente soluciones de software en diversos proyectos como Frontend developer. Además, lidero y gestiono proyectos como Project Owner y Scrum Master. Aplicando metodologías ágiles, he mejorado la evolución de los proyectos. Además, cuento con experiencia en integración Frontend-Backend y contribuciones al Backend con Java y Node.js.",
    experiencia_laboral: [
        {
            id: 3,
            empresa: "Departamento General de Irrigación",
            cargo: "Project Manager",
            ubicacion: "Mendoza, Argentina",
            periodo: "2023 – 2024",
            responsabilidades: [
                "Implemented my work methodology within an additional team, boosting performance by improving communication, resolving internal conflicts, and providing tools for effective planning and incremental delivery.",
                "Led cross-functional teams and established a logging methodology for project tracking and clear communication.",
                "Developed and implemented frontend features that integrate business logic into planning processes, enabling traceability between project progress and allocated funds.",
                "Created an interface for external companies to submit telemetry data from registered wells, improving data collection and monitoring.",
                "Enhanced code quality and optimized development processes.",
            ],
        },
        {
            id: 2,
            empresa: "Departamento General de Irrigación",
            cargo: "Frontend Developer",
            periodo: "2022 - 2023",
            responsabilidades: [
                "Designed enhancements to streamline sample request workflows, automate document generation, reduce paper usage, and generate performance reports to monitor lab efficiency.",
                "Integrated interactive map visualizations to enhance spatial tracking for sensor audits.",
            ],
        },
        {
            id: 1,
            cargo: "Fotógrafo Independiente",
            empresa: "Freelance",
            ubicacion: "Mendoza, Argentina",
            periodo: "2015 – 2022",
        },
    ],
    formacion_academica: [
        {
            id: 7,
            institucion: "CERTIFICACION CDT - DIGITAL HOUSE",
            especializacion: ["Especialización frontend"],
            modalidad: "virtual",
            periodo: "En curso",
        },
        {
            id: 6,
            institucion: "UNDERSTANDING TYPESCRIPT - UDEMY",
            modalidad: "virtual",
            periodo: "En curso",
        },
        {
            id: 5,
            institucion: "Procesamiento de datos con Python",
            modalidad: "virtual",
            periodo: "2023",
            especializacion: ["Machine Learning - Python y Pandas"],
        },
        {
            id: 4,
            institucion: "RedHat - RH124",
            especializacion: ["Red Hat System Administration I"],
            modalidad: "virtual",
            periodo: "2023",
        },
        {
            id: 3,
            institucion: "ARGENTINA PROGRAMA 4.0",
            especializacion: [
                "Programación Funcional",
                "Programación Orientada a Objetos",
            ],
            ubicacion: "Mendoza, Argentina",
            periodo: "2022 - 2023",
        },
        {
            id: 2,
            institucion: "UNIVERSIDAD TECNOLÓGICA NACIONAL",
            titulo: "Ingeniería Química",
            ubicacion: "Mendoza, Argentina",
            periodo: "2020 - 2022",
        },
        {
            id: 1,
            institucion: "COLEGIO TOMÁS ALVA EDISON",
            titulo: "Bachiller en Producción de bienes y servicios con orientación en informática",
            ubicacion: "Mendoza, Argentina",
            periodo: "2009 - 2014",
        },
    ],
    proyectos: [
        {
            id: 1,
            title: "Stock Tracker",
            image: "/src/assets/under-construction.webp",
            urlGithub: "https://github.com/SimonVizioli/autoctono-frontend",
            urlDemo: "#!",
        },
        {
            id: 1,
            title: "Workout Tracker",
            image: "/src/assets/under-construction.webp",
            urlGithub: "https://github.com/SimonVizioli/WorkoutTracker",
            urlDemo: "#!",
        },
        {
            id: 2,
            title: "Expenses Tracker",
            image: "/src/assets/under-construction.webp",
            urlGithub: "https://github.com/SimonVizioli/BudgetApp",
            urlDemo: "#!",
        },
        {
            id: 3,
            title: "Express Boilerplate",
            image: "/src/assets/under-construction.webp",
            urlGithub: "https://github.com/SimonVizioli/CreateExpressProject",
            urlDemo: undefined,
        },
    ],
    habilidades_adicionales: {
        hard_skills: [
            "React.js",
            "Node.js",
            "TypeScript",
            "Tailwind",
            "PostgreSQL",
            "MongoDB",
            "Git",
        ],
        soft_skills: [
            "Leadership",
            "Teamwork",
            "Adaptability",
            "Communication",
        ],
        idiomas: [
            {
                idioma: "Español",
                nivel: "Nativo",
            },
            {
                idioma: "Inglés",
                nivel: "C1",
            },
            {
                idioma: "Alemán",
                nivel: "B2",
                institucion: "Goethe Institut 2017- 2019",
            },
        ],
    },
};

export default dataCV;
