import Image from "next/image";
import { NavbarDemo } from "./Components/Navbar/Navbar";
import { TabsDemo } from "./Components/TabsMenu/TabsDemo";
import FloatingButton from "./Components/WhatsAppLogo/WhatsAppButton";
import BrandsComponent from "./Components/marcas/BrandsComponent";
import StatsComponent from "./Components/stats/StatsComponent";

export default function Home() {
  return (
    <div>
    <NavbarDemo></NavbarDemo>
  
    <TabsDemo></TabsDemo>
    <StatsComponent></StatsComponent>
    <BrandsComponent></BrandsComponent>
      
    <FloatingButton></FloatingButton>
    </div>
  );
}
