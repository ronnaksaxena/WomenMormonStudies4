import React from "react";

import { Button } from "@mui/material";
import classes from './Home.module.css'
import WebImage from "../componenet/WebImage";




export default function Home(){
    return(
        <div style={{ height: 650, width: '100%',  }}>
                    <h1 id="home_page"></h1>
            <div style={{ height: 650, width: '60%', display:'inline', marginRight:'30px'  }}>
                <p className = {classes.text} id="our mission">Our mission is to promote the work of women in Mormon Studies, a diverse group of experts that includes women of all racial/ethnic identities, countries of origin and residence, sexual orientations, gender identities and expressions, religious identities, academic backgrounds, and institutional contexts. We connect scholars, researchers, and journalists with women Mormon Studies experts to cite in articles and include in syllabi, events, and projects. We also provide resources to help women in Mormon Studies amplify their voices in academic contexts as well as traditional and new media venues.
                </p>
            </div>
            <div style={{ height: 650, width: '40%', float:'left', display:'inline'  }}>
                <WebImage alt="a decorative tree"/>
            </div>
                
        </div>
    )
}