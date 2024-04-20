import { Center, Heading, Box } from "@chakra-ui/react"
import ButtonAtv from "../button-atv"
import InputAtv from "../input-atv"

function FormAtv() {
    return (
    <>
    <Center>
    <Heading as='h4' size='md' > Entre em contato </Heading>
    </Center>
    <hr/>
    <Center>
    <Box maxW='32rem'>
    <InputAtv className='input-text-red' type='text' defaultValue='' placeholder='Seu nome aqui'/>
    </Box>
    </Center>
    <br/>
    <Center>
    <Box maxW='32rem'>
    <InputAtv className='input-text-red' type='email' defaultValue='' placeholder='Seu email aqui'/>
    </Box></Center>
    <br/>
    <Center>
    <Box maxW='32rem'>
    <InputAtv className='input-text-red' type='text' defaultValue='' placeholder='Seu telefone aqui'/>
    </Box></Center>
    <hr/>
    <Center>
    <ButtonAtv color='red' type='button' label='Fatec: Enviar mensagem'/>
    </Center>
    </>
    )
}

export default FormAtv