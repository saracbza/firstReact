import { Stack, Box, Checkbox, Input, Button } from "@chakra-ui/react"
import { useEffect, useRef, useState } from "react"
import api from "../../../helpers/axios"
import { PostTask } from "../../../interfaces/tasks"

interface FormTaskProps{
    loadTasks(): void //sem parametros e sem retorno
}

function FormTask({loadTasks}: FormTaskProps){
    const [nameTask, setNameTask] = useState('')
    const [okTask, setOkTask] =  useState(false)

    function addTask(){
        if(nameTask != ''){
            const newTask:PostTask = {
                title: nameTask,
                completed: okTask
            }
            api.post('/task', newTask)
            .then (()=> {
                setNameTask('')
                loadTasks()
            })
        }
    }
    const inputTask = useRef<HTMLInputElement | null>(null)
    useEffect(() => {
        if(inputTask.current) inputTask.current.focus()
    }, [])

    return(
        <Stack direction="row" spacing={4} alignItems="center">
        <Box maxW={'32rem'}>
        <Input 
            ref={inputTask}
            value={nameTask}
            onChange={(evento) => setNameTask(evento.target.value)}
            placeholder="Digite o título da tarefa" 
            size='md'></Input>
        </Box>
        <Checkbox onChange={(evento) => setOkTask(evento.target.checked)}> Realizada? </Checkbox>
        <Button onClick={addTask} colorScheme='blue' size='sm' > Inserir </Button>
        </Stack>
    )
}

export default FormTask