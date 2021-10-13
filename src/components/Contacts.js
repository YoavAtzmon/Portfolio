import { Typography, Box, Grid, makeStyles, withStyles, TextField, Button } from "@material-ui/core"
import SendIcon from "@material-ui/icons/Send"
import Navbar from "./Navbar"
import emailjs from 'emailjs-com';
import Typed from "react-typed"
import { useState } from "react";




const useStyles = makeStyles(theme => ({
    form: {
        top: "40%",
        left: "50%",
        transform: "translate(-50% ,-50%)",
        position: "absolute"
    },
    button: {
        marginTop: "1rem",
        color: "tomato",
        borderColor: "tomato"
    },
    subtitle: {
        color: "tan",
        marginBottom: "3rem"
    }

})
)
const InputField = withStyles({
    root: {
        "& label.Mui-focused": {
            color: "tomato"
        },
        "& label": {
            color: "tan"
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "tan"
            },
            "& :hover fieldset": {
                borderColor: "tan"
            },
            "&.Mui-focused fieldset": {
                borderColor: "tan"
            }
        }
    }
})(TextField);

export default function Contacts() {

    const [answer,setAnswer] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()

        const templateParams = Object.values(event.target)
            .reduce((acc, input) => !input.name ? acc : ({
                ...acc,
                [input.name]: input.type == 'checkbox' ? input.checked : input.value
            }), {}
            )

        emailjs.send('service_qqgzubs', 'template_qjuuuat', templateParams, 'user_w3jM0feBNUQztgiyI8DvA')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            }, (err) => {
                console.log('FAILED...', err);
            });
            setAnswer(true)


    }

    const classes = useStyles()
    return (
        <Box component="div" style={{ background: "#233", height: "100vh" }}>
            <Navbar />
            <Grid container justifyContent="center">
                <Box component="form" className={classes.form} onSubmit={handleSubmit}>
                    {/* <Typography variant="h5" style={{color: "tomato", textAlign :"center", textTransform :"uppercase"}}>
                    contact me...
                   </Typography> */}
                    <InputField
                        required
                        fullWidth={true}
                        label="Name"
                        variant="outlined"
                        margin="dense"
                        size="medium"
                        name="name"
                        inputProps={{ style: { color: "white" } }} />
                    <br />
                    <InputField
                        required
                        fullWidth={true}
                        label="Phone"
                        variant="outlined"
                        margin="dense"
                        size="medium"
                        name="phone"
                        inputProps={{ style: { color: "white" } }} />
                    <br />
                    <InputField
                        fullWidth={true}
                        label="Email"
                        variant="outlined"
                        margin="dense"
                        size="medium"
                        name="email"
                        inputProps={{ style: { color: "white" } }} />
                    <br />
                    <InputField
                        fullWidth={true}
                        label="Message"
                        variant="outlined"
                        margin="dense"
                        size="medium"
                        name="message"
                        inputProps={{ style: { color: "white" } }} />
                    <br />
                    <Button type="submit" className={classes.button} variant="outlined" fullWidth={true} endIcon={<SendIcon />}>
                        contact me
                    </Button>
                    <br />
                    <br />
                    {answer ?
                        <Typography className={classes.subtitle} variant="h5">
                            <Typed strings={["Thanks! I'll be in touch", " "]}
                                typeSpeed={80}
                                backSpeed={60}
                                {...setInterval(()=>{setAnswer(false)},6000)}
                            />
                
                        </Typography>
                        : ""}
               </Box>
            </Grid>
        </Box>


    )
}