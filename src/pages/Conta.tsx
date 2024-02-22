import { Center, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";
import CardInfo from "../components/CardInfo";
import { useContext, useEffect, useState } from "react";
import { api } from "../api";
import { AppContext } from "../components/App.Context";


interface UserData {
    email: string
    password: string
    name: string
    balance: number
    id: string
}

const Conta = () => {
    const [userData, setUserData] = useState<null | UserData>()
    const{ id } = useParams()
    const navigate = useNavigate()

    const {isLoggedIn} = useContext(AppContext)

    !isLoggedIn && navigate('/')
    
    useEffect(() => {
        const getData = async () => {
            const data: any | UserData = await api
            setUserData(data)
        }

        getData()
    }, [])

    const actualData = new Date();

    const formattedDate = new Intl.DateTimeFormat('pt-BR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false // Use true para AM/PM
    }).format(actualData);

   


    if(userData && id !== userData.id  ) {
        navigate('/')
    }


    return (

        <Center>
            <SimpleGrid columns={2} spacing={8} paddingTop={16}>
                {
                    userData === undefined || userData === null ? (
                        <Center>
                            <Spinner size='xl' color='white' />
                        </Center>
                    ) : (<>
                        <CardInfo mainContent={`Bem vindo ${userData?.name}!`} content={formattedDate} />
                        <CardInfo mainContent='Saldo' content={`R$ ${userData.balance}`}/>
                    </>
                    )
                }


            </SimpleGrid>
        </Center>

    )
}

export default Conta;