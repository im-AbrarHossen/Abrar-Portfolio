import { useContext } from "react";
import { CiDark, CiLight } from "react-icons/ci";
import { ThemeContext } from "../providers/ThemeProvider";
import { NavLink } from "react-router";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
    const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

    return (
        <div className="w-11/12 mx-auto py-10">
            <nav className="flex items-center justify-between dark:text-white">
                <div className="lg:hidden flex">
                    <details className="dropdown">
                        <summary className="btn bg-[#970747] text-white border-none"><IoMenu></IoMenu> </summary>
                        <ul className="menu dropdown-content bg-[#970747] rounded-box z-[1] w-52 p-2 shadow">
                            <NavLink className="btn mb-1" to='/'>Home</NavLink>
                            <NavLink className="btn mb-1" to='/about'>About Me</NavLink>
                            <NavLink className="btn mb-1" to='/skills'>Skills</NavLink>
                            <NavLink className="btn mb-1" to='/works'>Works</NavLink>
                            <NavLink className="btn" to='/contact'>Contact</NavLink>
                        </ul>
                    </details>
                </div>
                <div className="text-3xl font-extrabold"><span className="text-[#970747]">&lt;</span>Ab<span className="text-[#970747]">r</span>ar <span className="text-[#970747]">/&gt;</span></div>
                <div className="lg:flex items-center gap-3 hidden">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/about'>About Me</NavLink>
                    <NavLink to='/skills'>Skills</NavLink>
                    <NavLink to='/works'>Works</NavLink>
                    <NavLink to='/contact'>Contact</NavLink>
                </div>
                <button
                    onClick={toggleDarkMode}
                    className="text-3xl btn bg-[#970747] hover:bg-[#c93f7d] border-none text-white">
                    {isDarkMode ? <CiLight></CiLight> : <CiDark></CiDark>}
                </button>
            </nav>
        </div>
    );
};

export default Navbar;