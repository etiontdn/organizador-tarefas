export class TarefaModel {
    id: number;
    tarefa: string;

    constructor(id: number, tarefa: string) {
        this.id = id;
        this.tarefa = tarefa;
    }
}

function Tarefa({ id, tarefa }: TarefaModel) {
    console.log(id);
    return (
        <li className="tarefa">
            <p className="conteudo">{tarefa}</p>
        </li>
    );
}

export default Tarefa;
