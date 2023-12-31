import DashboardLayout from "../layouts/dashboard-layout";
import SubjectTable from "../shared/subject-crud/subject-table";

const SubjectDataPage = () => {
    return (
        <DashboardLayout>
            <SubjectTable />
        </DashboardLayout>
    );
};

export default SubjectDataPage;
