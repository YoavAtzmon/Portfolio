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
                                image={project1}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Project 1
                                </Typography>
                                <Typography  variant="body2" color="textSecondary" component="p">
                                    lofkdl;k dsflk dslf l;sdkf l;dsk  sdlfk;sd l;fk sd
                                     sdfksld; fskl; sld;kf sd
                                     f skld;f ksd;lf ks
                                     d fslkd; fskdl;fkdsl;fkdsl;fksdl;fk kl;dskf ;lds fk;sl
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                    Live Demo
                                </Button>
                            </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Project 2"
                                height="140"
                                image={project2}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Project 2
                                </Typography>
                                <Typography  variant="body2" color="textSecondary" component="p">
                                    lofkdl;k dsflk dslf l;sdkf l;dsk  sdlfk;sd l;fk sd
                                     sdfksld; fskl; sld;kf sd
                                     f skld;f ksd;lf ks
                                     d fslkd; fskdl;fkdsl;fkdsl;fksdl;fk kl;dskf ;lds fk;sl
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                    Live Demo
                                </Button>
                            </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Project 3"
                                height="140"
                                image={project3}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Project 3
                                </Typography>
                                <Typography  variant="body2" color="textSecondary" component="p">
                                    lofkdl;k dsflk dslf l;sdkf l;dsk  sdlfk;sd l;fk sd
                                     sdfksld; fskl; sld;kf sd
                                     f skld;f ksd;lf ks
                                     d fslkd; fskdl;fkdsl;fkdsl;fksdl;fk kl;dskf ;lds fk;sl
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                    Live Demo
                                </Button>
                            </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Project 4"
                                height="140"
                                image={project4}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Project 4
                                </Typography>
                                <Typography  variant="body2" color="textSecondary" component="p">
                                    lofkdl;k dsflk dslf l;sdkf l;dsk  sdlfk;sd l;fk sd
                                     sdfksld; fskl; sld;kf sd
                                     f skld;f ksd;lf ks
                                     d fslkd; fskdl;fkdsl;fkdsl;fksdl;fk kl;dskf ;lds fk;sl
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                    Live Demo
                                </Button>
                            </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Box>


    )
}