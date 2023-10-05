import React from "react";
import style from "./Home.module.css"
import PresentationCard from "../../components/PresentationCard/PresentationCard";

const Home = ()=>{
    return(
        <div className={style.container}>
            <PresentationCard />
            
        </div>
    )
}

export default Home