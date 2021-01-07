import { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";
import Discover from "../component/Discover";
import Position from "../component/Position";


class HomePage extends Component {
    render() {
        return(
            <div>
                <ul>
                    <li>
                        <Link to="/">主页</Link>
                    </li>
                    <li>
                        <Link to="/discover">发现</Link>
                    </li>
                    <li>
                        <Link to="/position">职位</Link>
                    </li>
                    <li>
                        <Link to="/login">登录</Link>
                    </li>
                    <li>
                        <Link to="/register">注册</Link>
                    </li>
                </ul>

                <Switch>
                    <Route path="/discover">
                        <Discover />
                    </Route>
                    <Route path="/position">
                        <Position />
                    </Route>
                </Switch>

            </div>
        );
    }
}

export default HomePage;