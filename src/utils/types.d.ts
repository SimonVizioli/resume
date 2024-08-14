import { ReactElement } from "react";

interface PortfolioBoxProps {
    data: {
        id: number;
        title: string;
        image: string;
        urlGithub: string;
        urlDemo: string | undefined;
    };
}
interface NavLinksProps {
    className: string | undefined;
}
interface ContactCardProps {
    data: {
        title: string;
        link: string;
        icon: ReactNode;
    };
}

interface HardSkillIcons {
    [key: string]: ReactElement;
}
