import Tarefa from "./Tarefa";
import { TarefaModel } from "./Tarefa";
import { getTarefas } from "./tarefasApi";
import { useEffect, useState } from "react";

function ListaTarefas({
    loading,
    setLoading,
}: {
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const [lista, setLista] = useState<TarefaModel[]>([]);

    useEffect(() => {
        async function fetchTarefas() {
            const tarefas = await getTarefas();
            setLista(tarefas);
        }
        fetchTarefas();
    }, [loading]);

    return (
        <ul className="lista-tarefas">
            {lista.map((item) => (
                <Tarefa
                    key={item.id}
                    id={item.id}
                    tarefa={item.tarefa}
                    setLoading={setLoading}
                />
            ))}
        </ul>
    );
}

export default ListaTarefas;
