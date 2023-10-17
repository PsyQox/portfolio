import React, { useEffect, useState } from "react";
import style from "./Home.module.css"
import PresentationCard from "../../components/PresentationCard/PresentationCard";
import ProyectsCards from "../../components/ProyectsCards/ProyectsCards";


const Home = ()=>{
    const [cargaCompleta, setCargaCompleta] = useState(false)

    useEffect(()=>{
        // setTimeout(()=>{
        //     setCargaCompleta(true);
        // },2000)
        window.addEventListener('load', ()=> setCargaCompleta(true))
        return function(){
            window.removeEventListener('load',()=> setCargaCompleta(true))
        }
    },[])

    return(
        <>
            {!cargaCompleta ? (<div id={style.contenedor_carga}>
                <div id={style.carga}>        
                </div>
            </div>):(<div className={style.container}>
                <PresentationCard />
                <ProyectsCards />
            </div> 
            )}
          
        </>
        
    )
}

export default Home