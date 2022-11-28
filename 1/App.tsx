import { st, classes } from "./App.st.css";

function App() {
    return <div className={st(classes.root, { active: true })}>App</div>;
}

export default App;
