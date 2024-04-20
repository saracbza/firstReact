import { Button } from '@chakra-ui/react'

interface Props {
    type: 'button' | 'submit' | 'reset'
    label: string
    color: string
}

function ButtonAtv({label, type, color}: Props) {
    return (
        <Button colorScheme={color} size='lg' type={type}> {label} </Button>
    )
}

export default ButtonAtv