import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="flex gap-4 my-4">
            <Link className="btn btn-primary" to={"/"}>
                Home
            </Link>
            <Link className="btn btn-primary" to={"/login"}>
                Login
            </Link>
        </div>
    );
};

export default Header;
