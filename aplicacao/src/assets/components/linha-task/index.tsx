import { ButtonGroup, Flex, Box, Spacer} from "@chakra-ui/react"
import ButtonTask from "../button-task"

interface Props{
    titleTask: string
}

function LinhaTask({titleTask}: Props){
    return(
        <li>
    <Flex maxW={'32rem'} >
        <Box p="13">
          {titleTask}
        </Box>
        <Spacer />
        <Box maxW={'32rem'}>
        <ButtonGroup gap='1'>
            <ButtonTask size='md' color='red' type='submit' label='Pendente'/>
            <ButtonTask size='md' color='red' type='submit' label='Excluir'/>
        </ButtonGroup> 
        </Box>
    </Flex>
    </li>   
    )
}

export default LinhaTask