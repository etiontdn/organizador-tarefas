const endpoint = "/api/tasks";
async function getTarefas() {
    const response = await fetch(endpoint, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    if (!response.ok) {
        console.log(response);
        throw new Error("Erro ao buscar tarefas");
    }
    return response.json();
}

async function novaTarefa(tarefa: string) {
    const response = await fetch(endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({ tarefa }),
    });
    if (!response.ok) {
        throw new Error("Erro ao criar nova tarefa");
    }
    return response.json();
}

async function deleteTarefa(id: number) {
    const response = await fetch(`${endpoint}/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
        },
    });
    if (!response.ok) {
        throw new Error("Erro ao deletar tarefa");
    }
    return response.json();
}

export { getTarefas, novaTarefa, deleteTarefa };
