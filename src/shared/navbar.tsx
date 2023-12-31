import React from "react";
import { cn } from "../utils/tailwind-merge";
import MobileNavigation from "./mobile-navigation";

const Navbar = ({ className }: React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <nav className={cn("bg-primary-600 flex justify-end items-center py-2 px-5 h-12 md:h-16 shadow-lg", className)}>
            <MobileNavigation />
        </nav>
    );
};

export default Navbar;
