import {Component} from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";


class MyRouter extends Component {
    render() {
        return(
            <Router>

                <Switch>
                    <Route path="/login" component={LoginPage}></Route>
                    <Route path="/register" component={RegisterPage}></Route>
                    <Route path="/" component={HomePage}></Route>
                </Switch>

            </Router>


        );
    }
}

export default MyRouter;