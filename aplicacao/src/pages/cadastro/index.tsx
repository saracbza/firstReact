import { useState } from "react"
import api from "../../helpers/axios"
import { Button, Center, Heading, Input, Box } from "@chakra-ui/react"
import Layout from "../../assets/components/layout"

function Cadastro(){

    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: ""
    })

    function handleRegister(){
        api.post('/auth/register',userData)
        .then((resposta)=>{
            if(resposta.status == 201){
                alert('Cadastro efetuado com sucesso!')
            } else {
                alert('Erro ao cadastrar!')
            }
        })
        .catch((erro)=> {
            console.log(erro)
        })
    }

    return(         
        <>
            <Layout>
            <Center>
            <Heading as='h1' size='lg'> CADASTRO </Heading>
            </Center>
            <hr/>
            <form>
            <Center>
            <Box maxW='32rem'>
                <Input type="text" placeholder="Nome"
                onChange={(e)=> setUserData({...userData, name: e.target.value})}></Input>
            </Box></Center><Center><Box maxW='32rem'>
                <Input type="email" placeholder="E-mail"
                onChange={(e)=> setUserData({...userData, email: e.target.value})}></Input>
             </Box></Center><Center><Box maxW='32rem'>
                <Input type="password" placeholder="Senha"
                onChange={(e)=> setUserData({...userData, password: e.target.value})}></Input>
            </Box></Center><Center>
                <Button onClick={handleRegister}>Cadastrar</Button>
            </Center>
            </form>
            <hr/>
            </Layout>
        </>
    )
}

export default Cadastro