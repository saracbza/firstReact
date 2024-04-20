import Layout from "../../assets/components/layout";
import { Heading } from "@chakra-ui/react";

function Home(){
    return (
    <Layout>
        <div>
        <Heading as='h1' size='lg'> HOME </Heading>
          <hr />
          <br />
          <Heading as='h4' size='md'> Apresentação </Heading>
          <p>Este projeto é o desenvolvimento do contéudo do 4º Semestre</p>
          <p>Desenvolvido em: React + Typescript</p>
        </div> 
    </Layout>
    )
}
export default Home