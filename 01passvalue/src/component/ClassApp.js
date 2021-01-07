import { Component } from "react";


class ClassApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            color: "red"
        }
    }

    render() {
        return(
            <div>
                <h1>属性：{this.props.name}</h1>
                <h1>状态：{this.state.count}</h1>
                <button onClick={()=>{
                    this.setState({
                        count: this.state.count+1
                    })
                }}>+</button>
            </div>
        );
    }
}

export default ClassApp;