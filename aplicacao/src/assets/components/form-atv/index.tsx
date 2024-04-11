import ButtonAtv from "../button-atv"
import InputAtv from "../input-atv"

function FormAtv() {
    return (
    <>
    <h3> Entre em contato </h3>
    <hr/>
    <InputAtv type='text' defaultValue='Nome Sobrenome' placeholder='Seu nome aqui'/>
    <p/>
    <InputAtv type='email' defaultValue='email@terra.com' placeholder='Seu email aqui'/>
    <p/>
    <InputAtv type='text' defaultValue='(00) 00000-0000' placeholder='Seu telefone aqui'/>
    <hr/>
    <ButtonAtv type='button' label='Fatec: Enviar mensagem'/>
    </>
    )
}

export default FormAtv