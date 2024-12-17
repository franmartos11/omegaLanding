
import OmegaShowcase from "./Components/Hero/OmegaShowcase";
import { NavbarDemo } from "./Components/Navbar/Navbar";
import { TabsDemo } from "./Components/TabsMenu/TabsDemo";
import FloatingButton from "./Components/WhatsAppLogo/WhatsAppButton";
import Footer from "./Components/footer/Footer";
import BrandsComponent from "./Components/marcas/BrandsComponent";
import MissionVision from "./Components/misionVision/MisionVision";
import StatsComponent from "./Components/stats/StatsComponent";
import TeamSection from "./Components/team/TeamSection";
import WorkComponent from "./Components/workProcess/WorkComponent";


export default function Home() {

  return (
    <div>
      <NavbarDemo />
      <OmegaShowcase />
      <MissionVision />
      <TabsDemo />
      <WorkComponent/>
      <StatsComponent />
      <BrandsComponent />
      
      <Footer />
      <FloatingButton />
    </div>
  );
}

