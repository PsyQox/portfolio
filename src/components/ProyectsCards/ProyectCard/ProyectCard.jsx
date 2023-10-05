import React from "react";
import style from "./ProyectCard.module.css"

const ProyectCard = ()=>{

    return(
        <div className={style.containerCard}>
            <h2>nombre</h2>
            <div>
                <button>Github</button>
                <button>deploy</button>
            </div>
        </div>
    )
}

export default ProyectCard