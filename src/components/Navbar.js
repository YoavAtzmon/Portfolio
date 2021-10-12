import { AppBar, Toolbar, ListItem, IconButton, ListItemText, ListItemIcon ,Avatar, Divider, List, Typography, Box, makeStyles } from "@material-ui/core"
import { ArrowBack, AssignmentInd, Home, Apps, ContactMail} from "@material-ui/icons"
import { useState } from "react"
import avatar from '../avatar.png'
import MobilRightMenuSlider from '@material-ui/core/Drawer'
import { Link } from "react-router-dom"
import Footer from "./Footer"

const useStyles = makeStyles(theme => ({

    menuSliderContainer: {
        width: 250,
        background: "#511",
        height: "100%"
    },
    avatar: {
        display: "block",
        margin: "0.5rem auto", 
        width: theme.spacing(13),
        height: theme.spacing(13)
    },
    listItem:{
        color : "tan"
    }

}))

const menuItems = [
    {
        listIcon: <Home />,
        listText: "Home",
        listPath : "/"
    },
    {
        listIcon: <AssignmentInd />,
        listText: "Resume",
        listPath : "/resume"
    },
    {
        listIcon: <Apps />,
        listText: "Portfolio",
        listPath : "/portfolio"
    },
    {
        listIcon: <ContactMail/>,
        listText: "ContactMail",
        listPath : "/contacts"
    }
]


export default function Navbar() {
    const classes = useStyles()
    const [state,setState] = useState({
        right : false
    })
    const toggleSlider = ((slider,open)=> ()=>{
        setState({...state,[slider]: open})
        
    });
    
    function sideList(slider){
    return(
            <Box 
            className={classes.menuSliderContainer} 
            component="div"
            onClick={toggleSlider(slider,false)}
            >

                <Avatar className={classes.avatar} src={avatar} alt="Russel Crowe" /> {/* the alt is the alterntive if the src is not workink for some reason*/}

                <Divider />{/*like <hr> at css */}
                <List >
                        {menuItems.map((lsItems, key) => (
                            <ListItem button key={key} component={Link} to={lsItems.listPath}>  {/*the button is effect when u press the follow */}
                                <ListItemIcon className={classes.listItem}>{lsItems.listIcon}</ListItemIcon>
                                <ListItemText  className={classes.listItem} primary={lsItems.listText}/>
                            </ListItem>
                        ))}
                </List>
            </Box>
    )}

    return (
        <>
            <Box component="nav" >
                <AppBar position="static" style={{ background: "#222" }}>
                    <Toolbar>
                        <IconButton onClick={toggleSlider("right", true)}>
                            <ArrowBack style={{ color: "tomato" }} />
                        </IconButton>
                        <Typography variant="h5" style={{ color: "tan" }}>Protfolio</Typography>
                        <MobilRightMenuSlider
                        anchor="right" 
                        open={state.right}
                        onClose={toggleSlider("right" ,false)}>
                            {sideList("right")}
                            <Footer />
                        </MobilRightMenuSlider>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}