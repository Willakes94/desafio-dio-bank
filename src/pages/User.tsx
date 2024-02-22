import { Center, SimpleGrid, Spinner } from "@chakra-ui/react"
import CardInfo from "../components/CardInfo"
import { useEffect, useState, useContext } from "react"
import { api } from "../api"
import { useNavigate, useParams } from "react-router-dom"
import { AppContext } from "../components/App.Context"

interface UserData {
    email: string
    password: string
    name: string
    balance: number
    id: string
}


const User = () => {

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

    if(userData && id !== userData.id  ) {
        navigate('/')
    }

    return (
        <Center>
            <SimpleGrid columns={2} spacing={8} paddingTop={16}>
                {
                    userData === undefined || userData === null ? (
                        <Center>
                            <Spinner size='xl' color='white' justifyContent='center' />
                        </Center>
                    ) : (<>
                        <CardInfo mainContent='Nome' content={userData.name} />
                        <CardInfo mainContent='Email' content={userData.email} />
                    </>
                    )
                }


            </SimpleGrid>
        </Center>
    )
}


export default User