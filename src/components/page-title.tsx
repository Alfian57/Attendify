import React from "react";
import { cn } from "../utils/tailwind-merge";
import { Typography } from "@material-tailwind/react";

const PageTitle = ({
    children,
    className,
}: React.HTMLAttributes<HTMLHeadingElement>) => {
    return (
        <Typography
            type="h1"
            className={cn(
                "text-center text-white text-2xl md:text-4xl font-bold my-4 md:my-8",
                className
            )}
        >
            {children}
        </Typography>
    );
};

export default PageTitle;
