import { Link } from "react-router-dom";
import FormAtv from "../../assets/components/form-atv";

function Contato(){
    return (
        <>
            <h1> Contate-nos </h1>
            <hr />
            <FormAtv/>
            <p/>
            <hr />
            <Link to='/'> Voltar para Página Inicial </Link>
        </>
        
    )
}
export default Contato