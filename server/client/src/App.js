import Topbar from "./components/Topbar/Topbar";
import Home from "./views/Home/Home";
import Login from "./views/Login/Login";
import Register from "./views/Register/Register";
import Settings from "./views/Settings/Settings";
import Single from "./views/Single/Single";
import Write from "./views/Write/Write";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
    const { user } = useContext(Context);
    return (
        <Router>
            <Topbar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/posts">
                    <Home />
                </Route>
                <Route path="/register">
                    {user ? <Home /> : <Register />}
                </Route>
                <Route path="/login">{user ? <Home /> : <Login />}</Route>
                <Route path="/post/:id">
                    <Single />
                </Route>
                <Route path="/write">{user ? <Write /> : <Login />}</Route>
                <Route path="/settings">
                    {user ? <Settings /> : <Login />}
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
