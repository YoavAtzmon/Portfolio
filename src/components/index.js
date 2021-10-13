import Navbar from "./Navbar";
import Header from "./Header";
import Particles from 'react-particles-js'
import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles({
    particlesCanva :{
        position: "absolute",
        opacity: "0.3"
    }
})

export default function Home(){
    const classes = useStyles()
    return(
        <div>
            <Navbar/>
            <Header />
            <Particles
                canvasClassName={classes.particlesCanva}
                params={{
                    particles :{
                        number:{
                            value:45,
                            density : {
                                enable :true,
                                value_area : 900
                            }
                        },
                        shape:{
                            type:"circle",
                            stroke:{
                                width :2,
                                color: "tomato"
                            }
                        },
                        size:{
                            value :3,
                            random :true,
                            anim:{
                                enable:true,
                                speed:0.5,
                                size_min : 0.1,
                                sync:true
                            }
                        },
                        opacity:{
                            value:1,
                            random: true,
                            anim:{
                                enable:true,
                                speed:1,
                                opacity_min:0.1,
                                sync:true
                            }
                        }
                    }
                }}/>
        </div>
    )
}