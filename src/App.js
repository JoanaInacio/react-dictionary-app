import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1 className="logo">
          <span className="logo-bracket">&lt;</span>
          <span className="logo-name">Joana</span>
          <span className="logo-dev">.dev</span>
          <span className="logo-bracket">/&gt;</span>
        </h1>
      </header>

      <Dictionary />

      <footer className="app-footer">
        Coded by Joana Inácio,{" "}
        <a href="https://github.com/JoanaInacio/react-dictionary-app" target="_blank" rel="noreferrer">open-sourced on GitHub</a>
        {" "}and{" "}
        <a href="https://react-dictionary-joana-inacio.netlify.app/" target="_blank" rel="noreferrer">hosted on Netlify</a>
      </footer>
    </div>
  );
}