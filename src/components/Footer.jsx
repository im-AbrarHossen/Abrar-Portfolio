import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
    return (
        <div className="bg-[#970747] p-5 text-white flex flex-col items-center gap-10">
            <div className="text-3xl font-extrabold">&lt;Abrar /&gt;</div>
            <div className="flex items-center justify-center gap-5 text-xl">
                <Link to='/'>Home</Link>
                <Link to='/about'>About Me</Link>
                <Link to='/skills'>Skills</Link>
                <Link to='/works'>Works</Link>
                <Link to='/contact'>Contact</Link>
            </div>
            <div className="flex items-center justify-center gap-5 text-2xl">
                <a href="https://www.facebook.com/abrarhossen273" target="_blank"><FaFacebook></FaFacebook></a>
                <a href="https://www.instagram.com/whose_abrar" target="_blank"><FaInstagram></FaInstagram></a>
                <a href="https://www.linkedin.com/in/im-AbrarHossen" target="_blank"><FaLinkedin></FaLinkedin></a>
            </div>
            <div className="flex items-center justify-center text-center text-sm">
                <p>Copyright © {new Date().getFullYear()} - All right reserved by Abrar</p>
            </div>
        </div>
    );
};

export default Footer;