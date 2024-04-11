import './ButtonAtv.css'

interface Props {
    type: 'button' | 'submit' | 'reset'
    label: string
}

function ButtonAtv({label, type}: Props) {
    return (
        <button className='button-red' type={type}> {label}</button>
    )
}

export default ButtonAtv