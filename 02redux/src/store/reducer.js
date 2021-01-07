
const defaultState = {
    count: 0,
    username: "小明",
    stulist: ["张三", "李四"]
}


// 1.reducer是一个纯函数
const reducer = (state=defaultState, action) => {

    console.log(action);
    switch(action.type) {
        case "SUB": 
            state.count--;
            break;
        case "ADD":
            state.count++;
            break;
        case "UPDATE_NAME":
            state.username = action.data;
            break;
        case "ADD_STU": 
            // state.stulist.push(action.data);
            // splice参数2表示删除几个元素
            state.stulist.splice(1, 0, action.data);
            break;

    }

    console.log(state);


    return state; //一定要返回state
}

export default reducer;


