import Home from "./components"
// import Resume from "./components/Resume"
import Portfolio from "./components/Portfolio"
import Contacts from "./components/Contacts"
import { CssBaseline } from "@material-ui/core"
import "./App.css"
import { Route } from "react-router"
export default function App() {
    return (
        <>
        <CssBaseline/> {/* canceeling the margin and padding  */}
        <Route exact path="/" component={Home} />
        {/* <Route path="/resume" component={Resume} /> */}
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contacts" component={Contacts} />
        </>
     
    )
}

