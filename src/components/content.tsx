import React from "react";

type Props = {
    children: React.ReactNode;
};

const Content = ({ children }: Props) => {
    return (
        <>
            <div className="bg-primary-700 w-full h-60 absolute -z-50"></div>
            <main className="px-6 md:px-12">{children}</main>
        </>
    );
};

export default Content;
