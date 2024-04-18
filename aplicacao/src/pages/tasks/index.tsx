import { Link } from "react-router-dom";

function Task(){
    return (
        <>
            <h1> Lista de Tarefas </h1>
            <hr />
            <ul>
                <li>Tarefa 1</li>
                <li>Tarefa 2</li>
                <li>Tarefa 3</li>
            </ul>
            <hr />

            <Link to='/'> Voltar para Página Inicial </Link>
        </>
        
    )
}
export default Task