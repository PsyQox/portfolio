import React from "react"
import style from "./ProyectsCards.module.css"
import ProyectCard from "./ProyectCard/ProyectCard"

const ProyectsCards = ()=>{
    return(
    <div className={style.container}>
        <h1>Proyectos</h1>
        <hr className={style.hr}/>
        <div className={style.containerP}>
            <ProyectCard />
        </div>
    </div>)
}

export default ProyectsCards