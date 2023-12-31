import React from "react";
import style from "./ProyectCard.module.css"
import Food from "../../../assets/img/food.png"
import {Link} from "react-router-dom"
import {AiOutlineGithub} from "react-icons/ai"
import {LuExternalLink} from "react-icons/lu"

const ProyectCard = ()=>{

    return(
        <div className={style.containerP}>
            <div className={style.containerCard}>
                    <img className={style.image} src={Food} alt=""/>
                    <div className={style.overlay}>
                        <h3>Food</h3>
                        <div className={style.containerTecnologies}>
                            <button className={style.tag}>React</button>
                            <button className={style.tag}>Redux</button>
                            <button className={style.tag}>NodeJS</button>
                            <button className={style.tag}>Express</button>
                            <button className={style.tag}>Sequelize</button>
                            <button className={style.tag}>PostgreSQL</button>
                        </div>
                        <div className={style.containerButton}>
                            <Link to="https://github.com/PsyQox/food" target="_blank" rel="noopener noreferrer">
                                <button className={style.button}><AiOutlineGithub size={32}/></button>
                            </Link>
                            <Link to="https://food-front-flax.vercel.app" target="_blank" rel="noopener noreferrer">
                                <button className={style.button}><LuExternalLink size={32} /></button>
                            </Link> 
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default ProyectCard