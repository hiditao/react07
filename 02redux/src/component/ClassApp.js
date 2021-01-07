import {Component} from "react";
import store from "../store/index";


class ClassApp extends Component {
    componentDidMount() {
        store.subscribe(this.changeValue.bind(this));
    }

    changeValue() {
        this.setState(store.getState())
    }

    render() {
        return(
            <div>
                <h1>类组件：{store.getState().username}</h1>
                <p>显示更改后的数据: {store.getState().count}</p>
                <ul>
                    {(store.getState().stulist || []).map((item, index) => {
                        return <li key={index}>{item}</li>
                    })}
                </ul>
            </div>
        );
    }
}

export default ClassApp;
