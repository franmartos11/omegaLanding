import { NavbarDemo } from "./Components/Navbar/Navbar";
import { TabsDemo } from "./Components/TabsMenu/TabsDemo";
import FloatingButton from "./Components/WhatsAppLogo/WhatsAppButton";
import Footer from "./Components/footer/Footer";
import BrandsComponent from "./Components/marcas/BrandsComponent";
import MissionVision from "./Components/misionVision/MisionVision";
import StatsComponent from "./Components/stats/StatsComponent";
import TeamSection from "./Components/team/TeamSection";
import WorkProcess from "./Components/workProcess/WorkProcesss";

export default function Home() {
  return (
    <div>
    <NavbarDemo></NavbarDemo>
  
    <TabsDemo></TabsDemo>
    <MissionVision></MissionVision>
    <StatsComponent></StatsComponent>
    <WorkProcess></WorkProcess>
    <BrandsComponent></BrandsComponent>
    <TeamSection></TeamSection>
    <Footer></Footer>
    <FloatingButton></FloatingButton>
    </div>
  );
}
