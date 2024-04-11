import './InputAtv.css'

interface Props {
    defaultValue: string
    placeholder: string
    type: 'text' | 'email' | 'number'
}

function InputAtv({defaultValue, placeholder, type}: Props) {
    return (
        <input type={type} className='input-text-red' defaultValue={defaultValue} placeholder={placeholder}></input>
    )
}

export default InputAtv