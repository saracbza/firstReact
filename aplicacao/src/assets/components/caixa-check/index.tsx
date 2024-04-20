import { Checkbox } from '@chakra-ui/react'

interface Props {
    label: string
}

function CaixaCheck({label}: Props) {
    return (
        <Checkbox> {label} </Checkbox>
    )
}

export default CaixaCheck