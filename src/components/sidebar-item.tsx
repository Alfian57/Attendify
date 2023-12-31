import { Navigation } from "../navigation";
import { cn } from "../utils/tailwind-merge";

const SidebarItem = ({ text, to, icon }: Navigation) => {
    const active = false;

    return (
        <a
            href={to}
            className={cn(" hover:bg-primary-500 hover:text-white text-gray-700 text-lg font-medium rounded-lg px-2 py-3 flex gap-3 items-center", {
                "bg-primary-500": active,
                "text-white": active,
                "shadow-2xl": active,
                "font-medium": active,
            })}
        >
            {icon}
            {text}
        </a>
    );
};

export default SidebarItem;
