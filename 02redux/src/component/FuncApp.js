import { useEffect, useState } from "react";
import store from "../store/index";

function FuncApp() {
    // 定义状态  受控组件input
    let [value, setValue] = useState("");
    let [count, setCount] = useState(store.getState().count);
    let [name, setName] = useState(store.getState().username);

    function change() {
        setCount(store.getState().count);
        setName(store.getState().username);
    }

    useEffect(() => {
        store.subscribe(change)
    })

    return(
        <div>
            {/* 3.通过store.getState()获取仓库中的数据 */}
            <h1>函数组件：{name}</h1>
            
            <button onClick={()=>{
                let action = {
                    type: "SUB" //在reducer中通过type判断操作类型
                };
                // 通过store对象派发action，reducer可以接收到这个action
                store.dispatch(action);
            }}>-</button>
            {count}
            <button onClick={() => {
                let action = {
                    type: "ADD"
                }
                store.dispatch(action);
            }}>+</button>
            <br />


            <input type="text" value={value} onChange={(e)=>{
                setValue(e.target.value);
            }}/> <br />
            <button onClick={()=> {
                let action = {
                    type: "UPDATE_NAME",
                    data: value
                }
                store.dispatch(action);
            }}>修改username</button>

            <button onClick={()=> {
                let action = {
                    type: "ADD_STU",
                    data: value
                };
                store.dispatch(action);
            }}>向数组中添加数据</button>
        </div>
    );
}

export default FuncApp;