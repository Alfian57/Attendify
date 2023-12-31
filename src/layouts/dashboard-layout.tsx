import React from "react";
import Sidebar from "../shared/sidebar";
import Content from "../components/content";
import Navbar from "../shared/navbar";

type Props = {
    children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="w-full relative">
                <Navbar />
                <Content>{children}</Content>
            </div>
        </div>
    );
};

export default DashboardLayout;
