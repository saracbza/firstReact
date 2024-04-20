import { Link } from "react-router-dom";
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from '@chakra-ui/react'

function NotFound(){
    return(
        <>
         <Alert status='error'>
            <AlertIcon />
            <AlertTitle>404</AlertTitle>
            <AlertDescription>Página não encontrada.</AlertDescription>
         </Alert>
            <Link to='/'> Voltar para Página Inicial </Link>
        </>
    )
}

export default NotFound