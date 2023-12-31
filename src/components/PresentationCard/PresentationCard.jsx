import React from "react";
import style from './PresentationCard.module.css'
import {BsLinkedin,BsGithub} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'

const PresentationCard = ()=>{
    return(
        <div className={style.containerCard}>
            <div className={style.containerImgContact}>
                <img className={style.img} src="https://avatars.githubusercontent.com/u/79774787?v=4" alt="" />
                <h1>Contacto</h1>
                <div className={style.containerContact}>
                    <table cellSpacing={10}>
                        <tr>
                            <td><BsLinkedin size={24}/></td>
                            <td><a href="https://www.linkedin.com/in/luis-enrique-r-r/" target="_blank">LinkedIn</a></td>
                        </tr>
                        <tr>
                            <td><BsGithub size={24}/></td>
                            <td><a href="https://github.com/PsyQox" target="_blank">GitHub</a></td>
                        </tr>
                        <tr>
                            <td><AiOutlineMail size={24}/></td>
                            <td><a href="mailto:luisrodrizza@gmail.com">luisrodrizza@gmail.com</a></td>
                        </tr>
                    </table>
                      
                </div>
            </div>
            <div className={style.containerText}>
                    <h1>¿Quién soy?</h1>
                <div className={style.containerWhoIAM}>
                    <p>Soy Luis Rodriguez, un joven de México que le apasiona el sector de la tecnología. Me di cuenta de que desde pequeño me apasionaba todo lo relacionado con la tecnología, todo lo que tuviera que ver con aprender y solucionar algún problema de este sector. ✅<br/><br/> 
                    En el sector en el cual desemboco toda mi pasión hoy en día es en el desarrollo Full Stack, manejando las siguientes tecnologías: JavaScript, NodeJS, React, Redux, Express, Sequelize, PostgresSQL. 🚀</p>
                </div>
                
                    <h1>Tecnologías</h1>
                <div className={style.containerTecnology}>
                    <img src="https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png" alt="express" width="40" height="40"/>
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="40" height="40"/>
                    <img src="https://www.vectorlogo.zone/logos/sequelizejs/sequelizejs-icon.svg" alt="sequelize" width="40" height="40"/>
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/>
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="40" height="40"/>
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/>
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" width="40" height="40"/>
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html" width="40" height="40"/>
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css" width="40" height="40"/>
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/>
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="linux" width="40" height="40"/>    
                </div>
            </div>
        </div>
    )
}

export default PresentationCard