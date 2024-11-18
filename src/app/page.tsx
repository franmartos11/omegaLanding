import { NavbarDemo } from "./Components/Navbar/Navbar";
import { TabsDemo } from "./Components/TabsMenu/TabsDemo";
import FloatingButton from "./Components/WhatsAppLogo/WhatsAppButton";
import Footer from "./Components/footer/Footer";
import BrandsComponent from "./Components/marcas/BrandsComponent";
import StatsComponent from "./Components/stats/StatsComponent";

export default function Home() {
  return (
    <div>
    <NavbarDemo></NavbarDemo>
  
    <TabsDemo></TabsDemo>
    <StatsComponent></StatsComponent>
    <BrandsComponent></BrandsComponent>
      <Footer></Footer>
    <FloatingButton></FloatingButton>
    </div>
  );
}
