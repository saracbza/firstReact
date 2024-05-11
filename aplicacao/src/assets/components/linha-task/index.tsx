import { ButtonGroup, Flex, Box, Spacer, Button} from "@chakra-ui/react"
import { Tarefa } from "../../../interfaces/tasks"

interface Props{
    task: Tarefa
    deleteTask(id: number): void
    changeStatus(task: Tarefa): void
}

function LinhaTask({ task, deleteTask, changeStatus }: Props){
    return(
    <Flex maxW={'32rem'} >
        <Box p="13">
          {task.id} - {task.title}
        </Box>
        <Spacer />
        <Box maxW={'32rem'}>
        <ButtonGroup gap='1'>
            <Button onClick={()=> changeStatus(task)} size='md' colorScheme={task.completed ? 'green' : 'orange'}> 
            {task.completed ? 'Concluída' : 'Pendente'} </Button>
            <Button size='md' colorScheme='red' onClick={()=> deleteTask(task.id)}> Excluir</Button>
        </ButtonGroup> 
        </Box>
    </Flex>
    )
}

export default LinhaTask