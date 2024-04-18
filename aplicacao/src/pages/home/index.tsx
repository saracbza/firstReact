import { Link } from "react-router-dom";

function Home(){
    return (
        <>
            <h1> HOME </h1>

            <hr />
            <Link to='/sobre'> Sobre </Link>
            <p/>
            <Link to='/contato'> Contate-nos </Link>
            <p/>
            <Link to='/tasks'> Tarefas </Link>
            <br />
            <hr />
            <br />
            <p>Este projeto é o desenvolvimento do contéudo do 4º Semestre</p>
            <p>Desenvolvido em: React + Typescript</p>
        </>
        
    )
}
export default Home