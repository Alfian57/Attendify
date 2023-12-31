import React from "react";
import { RxDashboard } from "react-icons/rx";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { HiOutlineAcademicCap, HiOutlineHome } from "react-icons/hi2";

export type NavigationList = {
    title: string;
    items: Navigation[];
};

export type Navigation = {
    to: string;
    text: string;
    icon: React.ReactNode;
};

export const getNavigationMenu = (): NavigationList[] => {
    return [
        {
            title: "Data Management",
            items: [
                {
                    to: "#",
                    text: "Beranda",
                    icon: <HiOutlineHome size={23} />,
                },
                {
                    to: "#",
                    text: "Students List",
                    icon: <HiOutlineAcademicCap size={23} />,
                },
                {
                    to: "#",
                    text: "Teachers Data",
                    icon: <LiaChalkboardTeacherSolid size={23} />,
                },
                {
                    to: "#",
                    text: "Beranda",
                    icon: <RxDashboard size={23} />,
                },
                {
                    to: "#",
                    text: "Beranda",
                    icon: <RxDashboard size={23} />,
                },
            ],
        },
        {
            title: "Application Setting",
            items: [
                {
                    to: "#",
                    text: "Setting",
                    icon: <HiOutlineHome size={23} />,
                },
            ],
        },
    ];
};
