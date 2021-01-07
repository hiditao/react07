import React,{useContext} from "react";

// 父组件向多层子组件传值，使用上下文对象context

//1.创建上下文对象context
const myContext = React.createContext()

function One() {
    return (
        <div className="one">
            <Two />
        </div>
    );
}

function Two() {
    return (
        <div className="two">
            <Three />
        </div>
    );
}

function Three() {
    // 3. 在子组件中，使用useContext()来访问父组件传递的数据
    let a = useContext(myContext);

    return (
        <div className="three">{a?.name}</div>
    );
}


function Box() {
    let obj = {
        id: 100,
        name: "小明"
    }
    return (
        <div className="box">
            {/* 2.在父组件中，通过context.Provider包裹了子组件，用value指定需要传递的数据 */}
            <myContext.Provider value={obj}>
                <One/>
            </myContext.Provider>
        </div>
    );
}

export default Box;