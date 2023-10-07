import React from "react";
import style from "./Home.module.css"
import PresentationCard from "../../components/PresentationCard/PresentationCard";
import ProyectsCards from "../../components/ProyectsCards/ProyectsCards";

const Home = ()=>{
    return(
        <div className={style.container}>
            <PresentationCard />
            <ProyectsCards />
            
        </div>
    )
}

export default Home