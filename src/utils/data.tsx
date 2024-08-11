const dataCV = {
    nombre: "Simón Vizioli",
    ubicacion: "Mendoza, Argentina",
    contacto: [
        {
            id: 1,
            icon: "Linkedin",
            link: "linkedin.com/in/simón-vizioli/",
        },
        {
            id: 2,
            icon: "Mails",
            link: "github.com/SimonVizioli",
        },
        {
            id: 3,
            icon: "Github",
            link: "github.com/SimonVizioli",
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
                "Gestiono el equipo de desarrollo para crear un software de planificación a medida, integrando el negocio de la empresa a la planificación.",
                "Lidero un equipo de desarrollo para crear un software de procesamiento de muestras, facilitando la gestión, trazabilidad, procesamiento y entrega de los resultados de las respectivas muestras.",
                "Implementé un sistema de logs para facilitar el seguimiento del avance de los proyectos y utilicé Jira para la gestión de tareas y procesos.",
            ],
        },
        {
            id: 2,
            empresa: "Departamento General de Irrigación",
            cargo: "Frontend Developer",
            periodo: "2022 - 2023",
            responsabilidades: [
                "Desarrollé el sistema de planificación como Lead Frontend, estandarizando procesos, controlando la calidad del código y brindando estructura al proceso.",
                "Construí el frontend del sistema de procesamiento de muestras, estandarizando procesos para commits, controlando la calidad del código y brindando estructura al proceso.",
                "Implementé visualizaciones de mapas en una aplicación de telemetría, facilitando la ubicación espacial de los usuarios para auditar sensores.",
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
            id: 5,
            institucion: "CERTIFICACION CDT - DIGITAL HOUSE",
            especializacion: "Especialización frontend",
            modalidad: "virtual",
            periodo: "En curso",
        },
        {
            id: 4,
            institucion: "UNDERSTANDING TYPESCRIPT - UDEMY",
            modalidad: "virtual",
            periodo: "En curso",
        },
        {
            id: 3,
            institucion: "BOOTCAMP - ARGENTINA PROGRAMA 4.0",
            especializacion: [
                "Programación Funcional",
                "Programación Orientada a Objetos",
                "Machine Learning - Python y Pandas",
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
            title: "ExpensesApp",
            image: "src/assets/under-construction.webp",
            urlGithub: "https://github.com/SimonVizioli/WorkoutTracker",
            urlDemo: "#!",
        },
        {
            id: 2,
            title: "Workout Tracker",
            image: "src/assets/under-construction.webp",
            urlGithub: "https://github.com/SimonVizioli/BudgetApp",
            urlDemo: "#!",
        },
        {
            id: 3,
            title: "Express Boilerplate",
            image: "src/assets/under-construction.webp",
            urlGithub: "https://github.com/SimonVizioli/CreateExpressProject",
            urlDemo: undefined,
        },
    ],
    habilidades_adicionales: {
        hard_skills: [
            "React.js",
            "JavaScript",
            "TypeScript",
            "CSS",
            "Tailwind",
            "Git",
            "Node.js",
        ],
        soft_skills: [
            "Metodologías Agile",
            "Scrum",
            "Interacción con el Cliente",
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
