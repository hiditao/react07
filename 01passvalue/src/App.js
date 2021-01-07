import ClassApp from "./component/ClassApp";
import Father from "./component/Father";
import Box from "./component/Box";
import MyApp from "./component/MyApp";

function App() {
    return (
        <div>
            <Father />
            
            <ClassApp name="这是类组件"/>

            <Box />

            <MyApp />

        </div>
    );
}


export default App;