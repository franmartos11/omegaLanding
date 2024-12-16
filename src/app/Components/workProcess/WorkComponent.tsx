'use client'
import { useMediaQuery } from "react-responsive";
import WorkProcessV2 from "./WorkProcessV2";
import WorkProcess from "./WorkProcesss";

export default function WorkComponent() {
    // Media queries
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

    return (
        <div>
            {isMobile ? <WorkProcessV2 /> : <WorkProcess />}
        </div>
    );
}
