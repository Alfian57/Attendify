import { Drawer, Typography, IconButton } from "@material-tailwind/react";
import { RiMenu3Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { getNavigationMenu } from "../navigation";
import MobileNavigationItem from "../components/mobile-navigation-item";

const MobileNavigation = () => {
    const navigationMenus = getNavigationMenu();
    const [open, setOpen] = useState(false);

    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);

    return (
        <>
            <RiMenu3Line
                size={25}
                onClick={openDrawer}
                className="text-white md:hidden"
            />
            <Drawer
                open={open}
                placement="right"
                onClose={closeDrawer}
                className="p-4"
            >
                <div className="mb-6 flex items-center justify-between">
                    <Typography variant="h5" color="blue-gray">
                        Attendify
                    </Typography>
                    <IconButton
                        variant="text"
                        color="blue-gray"
                        onClick={closeDrawer}
                    >
                        <IoClose size={24} />
                    </IconButton>
                </div>
                <ul className="flex flex-col gap-2">
                    {navigationMenus.map((menu, index) => {
                        return (
                            <MobileNavigationItem
                            key={index}
                                to={menu.to}
                                text={menu.text}
                                icon={menu.icon}
                            />
                        );
                    })}
                </ul>
            </Drawer>
        </>
    );
};

export default MobileNavigation;
