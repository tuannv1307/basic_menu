import { st, classes } from "./App.st.css";
import { Header } from "./header";
import "./globals.st.css";

const App = () => {
  return (
    <main className={st(classes.root)}>
      <div style={{ height: "65px" }}></div>
      <Header />
      <div style={{ height: "150vh" }}></div>
    </main>
  );
};

export default App;
