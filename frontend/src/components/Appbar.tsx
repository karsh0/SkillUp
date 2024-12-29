import { Link } from "react-router-dom";
import { Button } from "./ui/Button";
import skillupLogo from "../assets/skillup-logo.png";
import axios from "axios";

export const Appbar = () => {

    return (
        <div className="flex items-center justify-center">
        <div className="text-black px-10 py-2 flex items-center justify-between gap-5 w-2/3 max-w-screen">
            <div className="flex gap-10 items-center text-md">
                  <img
                    src={skillupLogo}
                    alt="SkillUp Logo"
                    className="h-16 w-auto"
                />
            <div className="flex gap-10 items-center text-md">
                <Link to="/courses">
                    Courses
                </Link>
                <Link to="/courses">
                    Test Series
                </Link>
                <Link to="/courses">
                    Results
                </Link>
                <Link to="/courses">
                    Mock tests
                </Link>
                <Link to="/courses">
                    About us
                </Link>
            </div>
            </div>
                <Link to={'/signup'}><Button title="Signup" background={true} /></Link>
        </div>
        </div>
    );
};
