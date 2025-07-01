import { deleteTarefa } from "./tarefasApi";
import React from "react";
import "./Tarefa.css";

export class TarefaModel {
    id: number;
    tarefa: string;

    constructor(id: number, tarefa: string) {
        this.id = id;
        this.tarefa = tarefa;
    }
}

function Tarefa({
    id,
    tarefa,
    setLoading,
}: TarefaModel & {
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const handleDelete = async () => {
        setLoading(true);
        try {
            await deleteTarefa(id);
        } catch (error) {
            console.error("Erro ao deletar tarefa:", error);
        } finally {
            setLoading(false);
        }
    };
    return (
        <li className="tarefa">
            <p className="conteudo">{tarefa}</p>
            <button className="botao-deletar" onClick={handleDelete}>
                Deletar
            </button>
        </li>
    );
}

export default Tarefa;
