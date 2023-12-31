import { Navigation } from "../navigation";

const MobileNavigationItem = ({ to, text, icon }: Navigation) => {
    return (
        <li>
            <a href={to} className="flex gap-3">
                {icon}
                {text}
            </a>
        </li>
    );
};

export default MobileNavigationItem;
