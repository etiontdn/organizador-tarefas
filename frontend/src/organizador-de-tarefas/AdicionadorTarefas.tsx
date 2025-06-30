import React from "react";

async function adicionarTarefa(tarefa: string) {
    console.log(tarefa); // TODO: finalizar a implementação
}

function AdicionadorTarefas() {
    const [loading, setLoading] = React.useState(false);

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
                className={["input-tarefa", loading ? "loading" : ""].join(" ")}
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
