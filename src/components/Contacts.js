import  {Typography,Box,Grid,makeStyles,withStyles, TextField, Button } from "@material-ui/core"
import SendIcon from "@material-ui/icons/Send"
import Navbar from "./Navbar"


const useStyles = makeStyles(theme=>({
    form:{ 
        top: "40%",
        left: "50%",
        transform : "translate(-50% ,-50%)",
        position : "absolute"
    },
    button :{
        marginTop : "1rem",
        color: "tomato",
        borderColor : "tomato"
    }
    
})
)
const InputField =withStyles({
    root:{
        "& label.Mui-focused" :{
            color : "tomato"
        },
        "& label" :{
            color :"tan"
        },
        "& .MuiOutlinedInput-root" : {
            "& fieldset" :{
                borderColor :"tan"
            },
            "& :hover fieldset" : {
                borderColor :"tan"
            },
            "&.Mui-focused fieldset" :{
                borderColor :"tan"
            }
        }
    }
})(TextField);

export default function Contacts() {
    const classes = useStyles()
    return (
        <Box component="div" style={{background :"#233", height: "100vh"}}>
            <Navbar />
           <Grid container justifyContent="center">
               <Box component="form" className={classes.form}> 
                   <Typography variant="h5" style={{color: "tomato", textAlign :"center", textTransform :"uppercase"}}>
                       hire or contact me...
                   </Typography>
                   <InputField 
                   fullWidth ={true} 
                   label="Name" 
                   variant="outlined" 
                   margin="dense" 
                   size="medium" 
                   inputProps={{style : {color :"white"}}}/>
                   <br />
                   <InputField 
                   fullWidth ={true} 
                   label="Email" 
                   variant="outlined" 
                   margin="dense" 
                   size="medium" 
                   inputProps={{style : {color :"white"}}}/>
                   <br />
                   <InputField 
                   fullWidth ={true} 
                   label="Company name" 
                   variant="outlined" 
                   margin="dense" 
                   size="medium" 
                   inputProps={{style : {color :"white"}}}/>
                   <br />
                   <Button className={classes.button} variant="outlined" fullWidth={true} endIcon={<SendIcon />}>
                       contact me 
                   </Button>
               </Box>
           </Grid>
        </Box>


    )
}