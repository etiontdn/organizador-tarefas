import React from "react";
import { novaTarefa } from "./tarefasApi";

async function adicionarTarefa(tarefa: string) {
    return await novaTarefa(tarefa);
}

function AdicionadorTarefas({
    setLoading,
}: {
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        setLoading(true);
        event.preventDefault();
        const form = event.currentTarget;
        const tarefaInput = form.elements.namedItem(
            "tarefa"
        ) as HTMLInputElement;
        if (tarefaInput.value.trim() === "") return;
        adicionarTarefa(tarefaInput.value.trim()).finally(() => {
            setLoading(false);
        });
        tarefaInput.value = "";
    };

    return (
        <form className="adicionador-tarefas" onSubmit={handleSubmit}>
            <input
                className="input-tarefa"
                type="text"
                name="tarefa"
                placeholder="Adicionar nova tarefa..."
                required
            />
            <button className="botao-adicionar" type="submit">
                Adicionar
            </button>
        </form>
    );
}

export default AdicionadorTarefas;
