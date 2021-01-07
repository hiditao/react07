
// 将数据从子组件传递到父组件：使用函数传递

import { Component } from "react";

class Son extends Component{

    // 子组件中事件监听时，在事件函数内部访问父组件传递过来的函数，并执行这个函数且传，
    //父组件中定义的函数就会被调用,实参会被传递到父组件中声明的形参位置
    change() {
        this.props.func("hello"); //执行父组件传递过来的函数
    }

    render() {
        return(
            <div>
                <button onClick={this.change.bind(this)}>点我试试</button>
            </div>
        );
    }  
}

class MyApp extends Component {

    getValue(msg) {
        console.log("get...", msg);
    }

    render() {
        return(
            <div>
                {/* 父组件中使用子组件时，通过属性传递一个函数 */}
                <Son func={this.getValue}/>
            </div>
        );
    }
   
}

export default MyApp;
