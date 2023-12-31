import { useQuery } from "@tanstack/react-query";
import { SubjectListResponse } from "../types/subject";
import { GetAllSubjectParams, getAllSubjects } from "../api/subject-api";

export const useGetAllSubjects = (params: GetAllSubjectParams) => {
    return useQuery<SubjectListResponse>({
        queryKey: ["subjects"],
        queryFn: () => getAllSubjects(params),
    });
}