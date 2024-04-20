import './InputAtv.css'
import { Input } from '@chakra-ui/react'

interface Props {
    defaultValue: string
    placeholder: string
    type: 'text' | 'email' | 'number'
    className: string
}

function InputAtv({defaultValue, placeholder, type, className}: Props) {
    return (
        <Input type={type} className={className} defaultValue={defaultValue} placeholder={placeholder}></Input>
    )
}

export default InputAtv