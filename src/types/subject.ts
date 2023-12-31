import { Link, Meta } from "./response";

export type SubjectListResponse = {
    data: Subject[];
    link: Link;
    message: string;
    meta: Meta;
}

export type SubjectDetailResponse = {
    data: Subject;
    message: string;
}

export type Subject = {
    id: string;
    name: string;
    created_at: string;
    updated_at: string;
}