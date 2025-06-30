import "./App.css";
import AdicionadorTarefas from "./organizador-de-tarefas/AdicionadorTarefas";
import ListaTarefas from "./organizador-de-tarefas/ListaTarefas";
import viteLogo from "/vite.svg";

function App() {
    return (
        <>
            <main>
                <h1 className="titulo">
                    Organizador de Tarefas
                    <img
                        className="logo"
                        src={viteLogo}
                        alt="logotipo do Vite"
                    />
                </h1>
                <p className="descricao">
                    Frontend feito com React + Vite + TypeScript
                    <span className="descricao-pequena">
                        e backend com NestJs + TypeScript + PostgresSQL
                    </span>
                </p>

                <AdicionadorTarefas />
                <ListaTarefas />
            </main>
            <footer>
                <p className="descricao">
                    Feito por mim
                    <a className="link" href="https://github.com/etiontdn">
                        João J A Silva
                    </a>
                </p>
            </footer>
        </>
    );
}

export default App;
