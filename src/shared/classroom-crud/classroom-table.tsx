import { HiPencil, HiUserPlus, HiMagnifyingGlass } from "react-icons/hi2";
import { Card, CardHeader, Typography, Button, CardBody, CardFooter, IconButton, Tooltip, Input } from "@material-tailwind/react";
import Pagination from "../../components/pagination";
import SubjectFormModal from "./classroom-form-modal";
import SubjectDeleteModal from "./classroom-delete-modal";
import Loading from "../../components/loading";
import { useState } from "react";
import { useGetAllSubjects } from "../../hooks/useGetAllSubjects";

const TABLE_HEAD = ["Name", "Action"];

const SubjectTable = () => {
    const [page, setPage] = useState<number>(1);

    const { data: subjects, isLoading } = useGetAllSubjects({ page });

    return (
        <Card className="h-full w-full mt-12">
            <CardHeader floated={false} shadow={false} className="rounded-none -mb-5">
                <div className="mb-4 flex flex-col justify-between gap-3 md:flex-row md:items-center">
                    <div>
                        <Typography variant="h5" color="blue-gray">
                            Subjects List
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal">
                            See information about all subjects
                        </Typography>
                    </div>
                    <div className="flex w-full justify-end shrink-0 gap-2 md:w-max">
                        <div className="w-full md:w-72 hidden md:block">
                            <Input label="Search" icon={<HiMagnifyingGlass className="h-5 w-5" />} />
                        </div>
                        <SubjectFormModal type="create">
                            <Button className="flex items-center gap-3" color="blue" size="sm">
                                <HiUserPlus size={23} fill="white" />
                                Add Subject
                            </Button>
                        </SubjectFormModal>
                    </div>
                </div>
            </CardHeader>
            <CardBody className="overflow-scroll px-0">
                {isLoading ? (
                    <Loading />
                ) : (
                    <table className="w-full min-w-max table-auto text-left">
                        <thead>
                            <tr>
                                {TABLE_HEAD.map((head) => (
                                    <th key={head} className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                        <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">
                                            {head}
                                        </Typography>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {subjects?.data.map((subject) => {
                                return (
                                    <tr key={subject.id} className="even:bg-blue-gray-50/50">
                                        <td className="px-4 border-b border-blue-gray-50">
                                            <Typography variant="small" color="blue-gray" className="font-normal">
                                                {subject.name}
                                            </Typography>
                                        </td>
                                        <td className="px-4 border-b border-blue-gray-50 flex">
                                            <SubjectFormModal type="edit">
                                                <Tooltip content="Edit User">
                                                    <IconButton variant="text">
                                                        <HiPencil size={23} />
                                                    </IconButton>
                                                </Tooltip>
                                            </SubjectFormModal>
                                            <SubjectDeleteModal id={subject.id} />
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                )}
            </CardBody>
            <CardFooter placeholder={""} className="flex items-center justify-end border-t border-blue-gray-50 p-4 -mt-5">
                {!isLoading && <Pagination setPage={setPage} lastPage={subjects?.meta.last_page} currentPage={subjects?.meta.current_page} />}
            </CardFooter>
        </Card>
    );
};

export default SubjectTable;
