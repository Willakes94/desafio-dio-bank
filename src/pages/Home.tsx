import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, Center, Input } from "@chakra-ui/react";
import { Card } from "../components/Card";
import DButton from "../components/Button";
import { login } from "../services/login";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/App.Context";
import { changeLocalStorage } from "../services/storage";

const Home = () => {

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [showAlert, setShowAlert] = useState(false);

    const { setIsLoggedIn, isLoggedIn } = useContext(AppContext)
    const navigate = useNavigate()


    useEffect(() => {
        if (isLoggedIn) {
            navigate('/conta/1')
        }
    }, [isLoggedIn, navigate])


    const validateUser = async (email: string, password: string) => {
        const loggedIn = await login(email, password)

        if (!loggedIn) {
            setShowAlert(true); 
            setTimeout(() => setShowAlert(false), 5000);
            return; 
        }
        setIsLoggedIn(true)
        changeLocalStorage({ login: true })
        navigate('/conta/1')
    }






    return (
        <Box minHeight='100vh' backgroundColor='#9413dc' >


            <Card>

                <Box backgroundColor='#FFFFFF' borderRadius='lg' padding='30px' width="400px" alignContent='center' >
                    
                    <Center>
                        <h1>Faça o login</h1>
                    </Center>

                    <Input
                        type='email'
                        placeholder='Email'
                        marginTop='4'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <Input
                        type='password'
                        placeholder='Password'
                        marginTop='4'
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}

                    />
                    <Center padding='15px'>
                        <DButton onClick={() => validateUser(email, password)} />

                    </Center>
                    {showAlert && ( // Renderiza condicionalmente o Alert baseado no estado showAlert
                        <Alert status='error' position='absolute' top='10%' width='auto' marginLeft='auto' marginRight='auto' left={0} right={0}>
                            <AlertIcon />
                            <AlertTitle>Erro de Login</AlertTitle>
                            <AlertDescription>Seu email ou senha estão inválidos!</AlertDescription>
                        </Alert>
                    )}

                </Box>
            </Card>
        </Box>
    )
}

export default Home;