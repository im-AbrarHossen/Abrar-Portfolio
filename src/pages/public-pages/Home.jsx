import AboutSection from "../../components/AboutSection";
import ContactSection from "../../components/ContactSection";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import SkillSection from "../../components/SkillSection";
import WorkSection from "../../components/WorkSection";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <AboutSection></AboutSection>
            <SkillSection></SkillSection>
            <ContactSection></ContactSection>
            <WorkSection></WorkSection>
            <Footer></Footer>
        </div>
    );
};

export default Home;