import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from "./routes/Project - Home";

function App() {
    return <Router>
        <Switch>
        {/* switch -- route(URL) 찾아주는 역할 */}
            <Route path="/abot-us">
                <h1>Hello</h1>
            </Route>
            <Route path="/movie">
                <Detail />
            </Route>
            <Route path="/"> 
            {/* "/" -- 홈 화면으로 간다 */}
                <Home />
            </Route>
        </Switch>
    </Router>;
};

export default App;

    // 페이지를 나눌 것이므로 App 함수에서는 null 출력, 여기 있던 코드는 Home으로 이동
    // 대신 App에서는 router을 렌더링함 (보고 있는 URL에 따라 보여주는 컴포넌트 달라짐)