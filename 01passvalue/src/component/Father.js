import {useState} from "react";

// 父组件传值到子组件，使用props传递

// 子组件
function Son(props) {
    return(
        <div>
            {props.name}---{props.msg}
        </div>
    );
}

// 父组件
function Father() {
    //使用hook声明状态
    let [value, setValue] = useState("");
    let [num, setNum] = useState(100);

    // 事件函数
    function change(event) {
        // 更改状态值
        setValue(event.target.value);
    }
    return(
        <div>
            <input type="text" value={value} onChange={change}/>

            <Son name="张三" msg={value} func={change}/>
        </div>
    );
}

export default Father;



