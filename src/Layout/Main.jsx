import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";

const Main = () => {
    return (
        <div className="flex justify-center h-[80vh] items-center">
            <div>
                <Header></Header>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;
