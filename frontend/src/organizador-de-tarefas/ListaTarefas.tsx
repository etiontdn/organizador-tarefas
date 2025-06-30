import Tarefa from "./Tarefa";
import { TarefaModel } from "./Tarefa";

function ListaTarefas() {
    const lista: TarefaModel[] = [
        new TarefaModel(1, "Estudar TypeScript"),
        new TarefaModel(2, "Estudar React"),
        new TarefaModel(3, "Estudar NestJs"),
        new TarefaModel(4, "Estudar PostgresSQL"),
        new TarefaModel(5, "Estudar Docker"),
    ];
    return (
        <ul className="lista-tarefas">
            {lista.map((item) => (
                <Tarefa key={item.id} id={item.id} tarefa={item.tarefa} />
            ))}
        </ul>
    );
}

export default ListaTarefas;
