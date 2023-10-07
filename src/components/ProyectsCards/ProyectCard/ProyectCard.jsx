import React from "react";
import style from "./ProyectCard.module.css"

const ProyectCard = ()=>{

    return(
        <div className={style.containerCard}>
                <img style={style.img} src="https://climate.onep.go.th/wp-content/uploads/2020/01/default-image.jpg" alt=""/>
            <h2>nombre</h2>
            <div>
                <button>Github</button>
                <button>deploy</button>
            </div>
        </div>
    )
}

export default ProyectCard