import { useState } from "react"
import api from "../../helpers/axios"
import { Button, Center, Heading, Input, Box } from "@chakra-ui/react"
import Layout from "../../assets/components/layout"

function Login(){

    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })

    function handleLogin(){
        api.post('/auth/login',userData, {withCredentials: true})
        .then((resposta)=>{
            if(resposta.status == 200){
                localStorage.setItem('login', 'true')
                localStorage.setItem('token',resposta.data.token)
                alert('Login efetuado com sucesso!')
            } else {
                alert('Erro ao entrar!')
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
            <Heading as='h1' size='lg'> LOGIN </Heading>
            </Center>
            <hr/>
            <form>
            <Center><Box maxW='32rem'>
                <Input type="email" placeholder="E-mail"
                onChange={(e)=> setUserData({...userData, email: e.target.value})}></Input>
             </Box></Center><Center><Box maxW='32rem'>
                <Input type="password" placeholder="Senha"
                onChange={(e)=> setUserData({...userData, password: e.target.value})}></Input>
            </Box></Center><Center>
                <Button onClick={handleLogin}>Entrar</Button>
            </Center>
            </form>
            <hr/>
            </Layout>
        </>
    )
}

export default Login