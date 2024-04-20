import { Button } from '@chakra-ui/react'

interface Props {
    type: 'button' | 'submit' | 'reset'
    label: string
    color: string
    size: string
}

function ButtonTask({label, type, color, size}: Props) {
    return (
        <Button colorScheme={color} size={size} type={type}> {label} </Button>
    )
}

export default ButtonTask