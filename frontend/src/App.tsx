import "./App.css";
import AdicionadorTarefas from "./organizador-de-tarefas/AdicionadorTarefas";
import ListaTarefas from "./organizador-de-tarefas/ListaTarefas";
import viteLogo from "/vite.svg";
import { useState } from "react";

function App() {
    const [loading, setLoading] = useState(false);
    return (
        <>
            <main className={"" + (loading ? "loading" : "")}>
                <div className="text">
                    <h1 className="titulo">
                        Organizador de Tarefas
                        <img
                            className="logo"
                            src={viteLogo}
                            alt="logotipo do Vite"
                        />
                    </h1>
                    <p className="descricao">
                        <span>
                            Frontend feito com React + Vite + TypeScript
                        </span>
                        <span className="descricao-pequena">
                            (e backend com NestJs + TypeScript + PostgresSQL)
                        </span>
                    </p>
                </div>

                <AdicionadorTarefas setLoading={setLoading} />
                <ListaTarefas loading={loading} setLoading={setLoading} />
            </main>
            <div className={"loader" + (loading ? " loading" : "")}></div>
            <footer>
                <p className="descricao-footer">
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
