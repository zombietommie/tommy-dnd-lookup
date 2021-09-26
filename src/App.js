import "./App.css";
import FrontPage from "./components/FrontPage";
import AcidArrow from "./acid-arrow.json";

const App = () => {
    return (
        <div className="App">
            <h2>Tommy's D&D Lookup</h2>
            <div>
                <FrontPage link={AcidArrow} />
            </div>
        </div>
    );
};

export default App;
