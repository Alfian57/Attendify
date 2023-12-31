import { useMutation } from "@tanstack/react-query";
import { createSubject } from "../api/subject-api";

const useCreateSubject = ()=> {
  return useMutation({
    mutationFn: createSubject,
    onSuccess(data) {
        console.log("success");
        console.log(data.data);
    },
    onError(error, variables, context) {
        console.log(error)
    },
  });
};

export default useCreateSubject;
