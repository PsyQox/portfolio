import React from "react"
import style from "./ProyectsCards.module.css"

const ProyectsCards = ()=>{
    return(<div className={style.container}>
        <h1>Proyectos</h1>
        <div className={style.containerSearch}>
            <input className={style.input} type="" name="" value=""/>
            <button className={style.button} type="">buscar</button>
        </div>
            <hr className={style.hr}/>
        <div>
        </div>
    </div>)
}

export default ProyectsCards