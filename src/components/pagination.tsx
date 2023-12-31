import React from "react";
import { IconButton, Typography } from "@material-tailwind/react";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import { cn } from "../utils/tailwind-merge";

type Props = {
    currentPage: number | undefined;
    lastPage: number | undefined;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    attributes?: React.HTMLAttributes<HTMLDivElement>;
};

const Pagination = ({ currentPage, lastPage, attributes, setPage }: Props) => {
    const next = () => {
        setPage(currentPage ?? 1 + 1);
    };

    const prev = () => {
        setPage(currentPage ?? 1 - 1);
    };

    return (
        <div className={cn("flex justify-center items-center md:justify-end md:pe-6 mt-3 md:mt-5 gap-8", attributes?.className)}>
            <IconButton size="sm" variant="outlined" onClick={prev} disabled={currentPage === 1}>
                <HiArrowLeft strokeWidth={2} className="h-4 w-4" />
            </IconButton>
            <Typography color="gray" className="font-normal">
                Page <strong className="text-gray-900">{currentPage}</strong> of <strong className="text-gray-900">{lastPage}</strong>
            </Typography>
            <IconButton size="sm" variant="outlined" onClick={next} disabled={currentPage === lastPage}>
                <HiArrowRight strokeWidth={2} className="h-4 w-4" />
            </IconButton>
        </div>
    );
};

export default Pagination;
