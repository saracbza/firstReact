import { Link } from "react-router-dom"
import Layout from "../../assets/components/layout"
import { Heading } from "@chakra-ui/react"

function Sobre(){
    return (
        <Layout>
        <>
        <Heading as='h1' size='lg'>SOBRE </Heading>
            <hr />
            <br />
            <p>Desenvolvido por Sara Barboza - RA 1050482223047</p>
            <p>Estudante do 4° semestre do curso de Análise e Desenvolvimento de Sistemas - Fatec</p>
            <hr />

            <Link to='/'> Voltar para Página Inicial </Link>
        </> 
        </Layout>
    )
}
export default Sobre