import { Button, Input } from "@material-tailwind/react";
import { MdOutlineAlternateEmail, MdPassword } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate("/");
    };

    return (
        <div className="flex items-center justify-center h-screen w-screen bg-[url('assets/bg-login.jpg')] bg-cover bg-no-repeat">
            <div className="shadow-2xl bg-white p-5 rounded-xl">
                <h1 className="font-bold text-xl md:text-3xl text-center text-primary-600 mb-5">Login</h1>
                <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                    <Input color="blue" label="Email" icon={<MdOutlineAlternateEmail />} />
                    <Input color="blue" label="Password" type="password" icon={<MdPassword />} />

                    <Button color="blue" type="submit">
                        Login
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
