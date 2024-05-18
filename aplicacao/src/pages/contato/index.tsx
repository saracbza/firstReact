import { Link } from "react-router-dom";
import FormAtv from "../../assets/components/form-atv";
import Layout from "../../assets/components/layout";
import { Heading } from "@chakra-ui/react";

function Contato(){
    return (
        <Layout>
        <>
            <Heading as='h1' size='lg'> CONTATE-NOS </Heading>
            <hr />
            <FormAtv/>
            <p/>
            <hr />
            <Link to='/'> Voltar para Página Inicial </Link>
        </> 
        </Layout>
    )
}
export default Contato