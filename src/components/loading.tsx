import loadingImg from "../assets/loading.gif";

const Loading = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <img src={loadingImg} alt="Loading GIF" className="w-1/5" />
            <h6 className="font-bold text-2xl">Load the page...</h6>
        </div>
    );
};

export default Loading;
