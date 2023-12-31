import React from "react";
import { Button, Dialog, Card, CardBody, Typography, Input } from "@material-tailwind/react";
import { useFormik } from "formik";
import { Subject } from "../../types/subject";
import useCreateSubject from "../../hooks/useCreateSubject";

type Props = {
    children: React.ReactNode;
    type: "create" | "edit";
    subject?: Subject;
};

const SubjectFormModal = ({ children, type, subject }: Props) => {
    const { mutate } = useCreateSubject();

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen((open) => !open);

    const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        formik.setFieldValue(target.name, target.value);
    };

    const handleSubmit = async () => {
        if (type === "create") {
            mutate({ name: "dkasjdkdasdasjd" });
        } else {
            //
        }
    };

    const formik = useFormik({
        initialValues: {
            name: subject?.name,
        },
        onSubmit: handleSubmit,
    });

    return (
        <>
            <div onClick={handleOpen}>{children}</div>

            <Dialog size="xs" open={open} handler={handleOpen} className="bg-transparent shadow-none">
                <Card className="mx-auto w-full max-w-[24rem]">
                    <CardBody className="flex flex-col gap-4">
                        <form onSubmit={formik.handleSubmit}>
                            <Typography variant="h4" color="blue-gray" className="mb-3">
                                {type === "create" ? "New Subject" : "Edit Subject"}
                            </Typography>
                            <Typography className="mb-2" variant="h6">
                                Subject Name
                            </Typography>
                            <Input label="Name" size="lg" onChange={handleChange} name="name" />
                            <Button variant="gradient" type="submit" color="blue" onClick={handleOpen} className="mt-3" fullWidth>
                                Submit
                            </Button>
                        </form>
                    </CardBody>
                </Card>
            </Dialog>
        </>
    );
};

export default SubjectFormModal;
