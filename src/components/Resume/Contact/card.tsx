import { ContactCardProps } from "@/utils/types";
import { Link } from "react-router-dom";

const ContactCard = (props: ContactCardProps) => {
    const { data } = props;
    const { title, link, icon } = data;

    return (
        <Link
            to={link}
            target="_blank"
            className="transition ease-in-out delay-50 bg-blue-950 text-white shadow-lg rounded-xl p-8 lg:p-10 flex flex-col items-center space-y-8 lg:space-y-10 transform hover:scale-105 transition-transform duration-300 dark:text-gray-800 dark:hover:text-teal-500 dark:bg-white"
        >
            <div className="w-16 h-16 flex items-center justify-center bg-teal-100 text-teal-600 rounded-full">
                {/* Aquí podrías usar un icono SVG */}
                {icon}
            </div>
            <h3 className="text-xl font-semibold">{title}</h3>
        </Link>
    );
};

export default ContactCard;
