import { Typography } from "@material-tailwind/react";
import { FaUserCircle } from "react-icons/fa";
import SidebarItem from "../components/sidebar-item";
import { getNavigationMenu } from "../navigation";

const Sidebar = () => {
    const navigationMenus = getNavigationMenu();

    return (
        <nav className="w-[350px] hidden md:block bg-primary-100 bg-opacity-5 h-screen">
            <div className="h-12 md:h-16 bg-primary-500 md:flex shadow-2xl items-center ps-6">
                <Typography type="h1" color="white" className="font-bold text-2xl">
                    Attendify
                </Typography>
            </div>
            <div className="h-screen shadow-2xl px-6">
                <div className="flex gap-3 mt-3 items-center">
                    <FaUserCircle size={40} />
                    <div className="flex flex-col justify-between">
                        <Typography className="font-medium text-gray-700">Alfian Gading Saputra</Typography>
                        <Typography className="font-extrabold text-sm">Administrator</Typography>
                    </div>
                </div>

                <hr className="h-[2px] my-4 bg-blue-gray-400 opacity-50 border-0 rounded" />

                <div className="flex flex-col gap-8">
                    {navigationMenus.map((menu, index) => {
                        return (
                            <div key={index}>
                                <h1 className="ps-2 font-bold mb-1">{menu.title}</h1>
                                {menu.items.map((item, index) => {
                                    return <SidebarItem key={index} to={item.to} text={item.text} icon={item.icon} />;
                                })}
                            </div>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
};

export default Sidebar;
