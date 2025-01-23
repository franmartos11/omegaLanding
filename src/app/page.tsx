
import { NavbarDemo } from "./Components/Navbar/Navbar";
import OmegaShowcase2 from "./Components/OmegaShowcase2/OmegaShowcase2";
import { TabsDemo } from "./Components/TabsMenu/TabsDemo";
import FloatingButton from "./Components/WhatsAppLogo/WhatsAppButton";
import { Contacto } from "./Components/contacto/Contacto";
import Footer from "./Components/footer/Footer";
import BrandsComponent from "./Components/marcas/BrandsComponent";
import MissionVision from "./Components/misionVision/MisionVision";
import StatsComponent from "./Components/stats/StatsComponent";
import WorkComponent from "./Components/workProcess/WorkComponent";


export default function Home() {

  return (
    <div className="font-montserrat">
      <NavbarDemo />     
      <OmegaShowcase2></OmegaShowcase2>
      <MissionVision />
      <TabsDemo />
      <WorkComponent/>
      <StatsComponent />
      <BrandsComponent />
      <Contacto/>
      <Footer />
      <FloatingButton />
    </div>
  );
}

