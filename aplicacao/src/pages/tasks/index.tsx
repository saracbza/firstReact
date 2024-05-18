import { Link } from "react-router-dom";
import Layout from "../../assets/components/layout";
import ListTask from "../../assets/components/list-task";
import { Heading } from "@chakra-ui/react";


function Task(){
    return (
        <Layout>
        <>
        <Heading as='h1' size='lg'>LISTA DE TAREFAS </Heading>
        <Heading as='h4' size='md'>Inserir nova tarefa</Heading>
            
            <ListTask/>

            <Link to='/'> Voltar para Página Inicial </Link>
        </> 
        </Layout>
    )
}
export default Task