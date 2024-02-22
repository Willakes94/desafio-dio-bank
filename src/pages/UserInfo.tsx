import { Text } from "@chakra-ui/react"
import { Link } from "react-router-dom";

const ContaInfo = () => {
    return (
        <>
            <Text fontSize='3xl' fontWeight='bold'>
                Informações do Usuário
            </Text>
            <Link to='/info/1'>
                <Text fontSize='xl'>
                    Usuário
                </Text>
            </Link>
        </>
    )
}

export default ContaInfo;