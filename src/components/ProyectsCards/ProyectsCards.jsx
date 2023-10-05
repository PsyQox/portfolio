import React from "react"
import style from "./ProyectsCards.module.css"
import ProyectCard from "./ProyectCard/ProyectCard"

const ProyectsCards = ()=>{
    return(<div className={style.container}>
        <h1>Proyectos</h1>
        {/* <div className={style.containerSearch}>
            <input className={style.input} type="" name="" value=""/>
            <button className={style.button} type="">buscar</button>
        </div> */}
            <hr className={style.hr}/>
        <ProyectCard />
        <div>
        </div>
    </div>)
}

export default ProyectsCards