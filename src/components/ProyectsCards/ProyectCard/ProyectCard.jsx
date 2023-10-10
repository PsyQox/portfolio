import React from "react";
import style from "./ProyectCard.module.css"
import Food from "../../../assets/img/food.png"
import {Link} from "react-router-dom"

const ProyectCard = ()=>{

    return(
        <div className={style.containerP}>
            <div className={style.containerCard}>
                    <img className={style.image} src={Food} alt=""/>
                    <div className={style.overlay}>
                        <h2>Food</h2>
                        <div>
                            <Link to="https://github.com/PsyQox/food" target="_blank" rel="noopener noreferrer">
                                <button className={style.button}>GitHub</button>
                            </Link>
                            <Link to="https://food-front-flax.vercel.app" target="_blank" rel="noopener noreferrer">
                                <button>Deploy</button>
                            </Link>
                        </div>
                    </div>
            </div>
            <div className={style.containerCard}>
                    <img className={style.image} src="https://climate.onep.go.th/wp-content/uploads/2020/01/default-image.jpg" alt=""/>
                    <div className={style.overlay}>
                        <h2>nombre</h2>
                        <div>
                            <button>Github</button>
                            <button>deploy</button>
                        </div>
                    </div>
            </div>
            <div className={style.containerCard}>
                    <img className={style.image} src="https://climate.onep.go.th/wp-content/uploads/2020/01/default-image.jpg" alt=""/>
                    <div className={style.overlay}>
                        <h2>nombre</h2>
                        <div>
                            <button>Github</button>
                            <button>deploy</button>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default ProyectCard