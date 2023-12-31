import React from "react";
import { Button, Dialog, Card, CardBody, CardFooter, Typography, Tooltip, IconButton } from "@material-tailwind/react";
import { HiTrash } from "react-icons/hi2";

type Props = {
    id: string;
};

const SubjectDeleteModal = ({ id }: Props) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen((cur) => !cur);

    return (
        <>
            <div onClick={handleOpen}>
                <Tooltip content="Delete User">
                    <IconButton variant="text">
                        <HiTrash size={23} fill="red" />
                    </IconButton>
                </Tooltip>
            </div>

            <Dialog size="xs" open={open} handler={handleOpen} className="bg-transparent shadow-none">
                <Card className="mx-auto w-full max-w-[24rem]">
                    <CardBody className="flex flex-col gap-4">
                        <Typography variant="h4" color="blue-gray">
                            Delete Subject
                        </Typography>
                        <p className="font-medium">Data cannot be recovered</p>
                    </CardBody>
                    <CardFooter placeholder={""} className="pt-0 flex gap-3">
                        <Button variant="gradient" color="red" onClick={handleOpen} fullWidth>
                            Cancel
                        </Button>
                        <Button variant="gradient" color="blue" onClick={handleOpen} fullWidth>
                            Yes, Delete it
                        </Button>
                    </CardFooter>
                </Card>
            </Dialog>
        </>
    );
};

export default SubjectDeleteModal;
