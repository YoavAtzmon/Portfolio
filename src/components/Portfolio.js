import { Grid, Box, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button ,Card, makeStyles} from "@material-ui/core";
import Navbar from "./Navbar";
import project1 from '../images/html-css-javascript-lg.jpg'
import project2 from '../images/javascript-fullstack.jpg'
import project3 from '../images/html-css-javascript.jpg'
import project4 from '../images/mern-stack.jpg'

const useStyles = makeStyles({
    cardContainer:{
        maxWidth : 345,
        margin : "5rem auto",
        borderRadius : "15px"
         
    }
})

export default function Portfolio() {
    const classes = useStyles()
    return (
        <Box component="div">
            <Navbar />
            <Grid container justifyContent="center" >
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Project 1"
                                height="140"
                                image={`https://cdn.pixabay.com/photo/2017/07/20/03/53/homework-2521144_960_720.jpg`}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Make A Test
                                </Typography>
                                <Typography  variant="body2" color="textSecondary" component="p">
                                  Web application project,where you can make your own test,and send him to anyone you would like to.
                                  The web was built using JS CSS REACT.JS MONGO-DB NODE.JS 
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    <a style={{ textDecoration:"none"}}href="https://atzmon.herokuapp.com">
                                    WEB
                                    </a>

                                </Button>
                                <Button size="small" color="primary">
                                    <a style={{ textDecoration:"none"}}href="https://bitbucket.org/yoatzmon/yoav/src/master/">
                                    GIT
                                    </a>
                                </Button>
                            </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Project 1"
                                height="140"
                                image={`https://cdn.pixabay.com/photo/2015/01/20/12/51/mobile-605422_960_720.jpg`}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Looper Machine
                                </Typography>
                                <Typography  variant="body2" color="textSecondary" component="p">
                                  Web application project, where you can make you own loop and record him.
                                  The web wah built using JS CSS REACT.JS MATERIAL-UI HEROKU
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    <a style={{ textDecoration:"none"}}href="https://loopmachine.herokuapp.com">
                                    WEB
                                    </a>

                                </Button>
                                <Button size="small" color="primary">
                                    <a style={{ textDecoration:"none"}}href="https://github.com/YoavAtzmon/Loop-Machine">
                                    GIT
                                    </a>
                                </Button>
                            </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Project 1"
                                height="140"
                                image={`https://cdn.pixabay.com/photo/2018/05/31/13/13/rainy-day-3443977_960_720.jpg`}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Weather app
                                </Typography>
                                <Typography  variant="body2" color="textSecondary" component="p">
                                  Weather app, where you can watch the weather of every city in the world.
                                  The web was built using JS CSS REACT.JS REDUX MATERIAL-UI HEROKU
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    <a style={{ textDecoration:"none"}}href="https://yoavweather.herokuapp.com">
                                    WEB
                                    </a>
                                </Button>
                                <Button size="small" color="primary">
                                    <a style={{ textDecoration:"none"}}href="https://github.com/YoavAtzmon/Yoav-Atzmon-01-11-2021">
                                    GIT
                                    </a>
                                </Button>
                            </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Box>


    )
}