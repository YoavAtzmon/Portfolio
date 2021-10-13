import { BottomNavigation, BottomNavigationAction, makeStyles } from "@material-ui/core"
import { GitHub, WhatsApp, LinkedIn } from "@material-ui/icons"
import { withStyles } from "@material-ui/styles"

const useStyles = makeStyles({
    root: {
        "& .MuiBottomNavigationAction-root": {
            minWidth: 0,
            maxWidth: 250
        },
        " & .MuiSvgIcon-root": {
            fill: "tan",
            "&:hover": {
                fill: "tomato",
                fontSize: "1.8rem"
            }
        }

    }
})

export default function Footer() {
    const classes = useStyles()
    return (
        <BottomNavigation width="auto" style={{ background: "#222" }}>
            <BottomNavigationAction
                className={classes.root}
                style={{ padding: 0 }}
                icon={<a href="https://github.com/YoavAtzmon">
                    <GitHub />
                </a>
                }
            />
            <BottomNavigationAction
                className={classes.root}
                style={{ padding: 0 }}
                icon={
                    <a href="https://chatwith.io/s/6165c5a9d899d">
                        <WhatsApp />
                    </a>
                }
            />
            <BottomNavigationAction
                className={classes.root}
                style={{ padding: 0 }}
                icon={
                    <a href="https://www.linkedin.com/in/yoav-atzmon-0bba89212/">
                        <LinkedIn />
                    </a>
                }
            />
        </BottomNavigation>
    )
}