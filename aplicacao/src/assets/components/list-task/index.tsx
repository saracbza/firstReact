import { Box, Stack } from "@chakra-ui/react";
import ButtonTask from "../button-task";
import CaixaCheck from "../caixa-check";
import InputAtv from "../input-atv";
import LinhaTask from "../linha-task";

function ListTask(){
    return(
        <>
        <Stack direction="row" spacing={4} alignItems="center">
        <Box maxW={'32rem'}>
        <InputAtv className='' defaultValue='' placeholder='Digite o título da task' type='text'></InputAtv>
        </Box>
        <CaixaCheck label='Realizada?'/>
        <ButtonTask size='sm' color='blue' type='button' label='Inserir'/>
        </Stack>
            <hr />
            <ul>
                <LinhaTask titleTask='Tarefa 1'/>
                <LinhaTask titleTask='Tarefa 2'/>
                <LinhaTask titleTask='Tarefa 3'/>
            </ul>
            <hr />
        </>
    )
}

export default ListTask