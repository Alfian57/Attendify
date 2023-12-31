import { SubjectDetailResponse, SubjectListResponse } from "../types/subject";
import axiosInstance from "../utils/axios";

const token = "1|yc8BTFk8Hb9WBisCNZgivRsIMaBZSMzSh4LchuAQe52a868b";

export type GetAllSubjectParams = {
    page: number
}

export const getAllSubjects = async ({page}: GetAllSubjectParams) => {
    return await axiosInstance.get<SubjectListResponse>("/api/v1/subjects", {
        params: {
            'page["size"]': 30,
            'page["number"]': page
        },
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }).then((response) => response.data)
        
}

export type CreateSubjectParams = {
    name: string;
};

export const createSubject = async ({name}: CreateSubjectParams) => {
    return await axiosInstance.post<SubjectDetailResponse>("/api/v1/subjects", {
        name: name
    }, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }).then(response => response.data)
}