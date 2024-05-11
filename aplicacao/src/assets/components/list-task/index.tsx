import api from "../../../helpers/axios";
import { Tarefa } from "../../../interfaces/tasks";
import FormTask from "../form-task";
import LinhaTask from "../linha-task";
import { useEffect, useState } from "react";

function ListTask(){
    const [tasks, setTasks] = useState<Tarefa[]>([])

   async function loadTasks(){
    const resposta = await api.get('/task')
    if (resposta.status == 200){
        setTasks(resposta.data) //.data ja esta em json
    }
}

    useEffect(()=> {
        loadTasks()
    }, [])

    function deleteTask(id: number){
        api.delete(`/task/${id}`)
        .then(()=> {
            loadTasks()
        })
        .catch(erro => {
            console.log(erro)
        })
    }

    function changeStatus(task: Tarefa){
        task.completed = !task.completed
        api.put(`/task/${task.id}`, task)
        .then(()=> {
            loadTasks()
        })
    }

    return(
        <>
        <FormTask loadTasks={loadTasks}/>
        <hr />
        {
            tasks.map((task) => (
                <LinhaTask key={task.id} 
                task={task} 
                deleteTask={deleteTask}
                changeStatus={changeStatus}/>
            ))
        }
        <hr />              
        </>
    )
}

export default ListTask