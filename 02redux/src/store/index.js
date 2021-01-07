import {createStore} from "redux";
import reducer from "./reducer";

// 2.创建仓库store（状态管理容器）
const store = createStore(reducer);

export default store;