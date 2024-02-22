import { Box, Button, Center, Flex, Spacer, Text } from '@chakra-ui/react';
import { useContext } from 'react';
import { AppContext } from './App.Context';
import { useNavigate } from 'react-router-dom';
import { changeLocalStorage } from '../services/storage';



export const Header = () => {

    const { isLoggedIn, setIsLoggedIn } = useContext(AppContext)
    const navigate = useNavigate()
    const logout = () => {
        changeLocalStorage({ login: false })
        setIsLoggedIn(false)
        navigate('/')
    }

    const navigateToUser = () => {
        changeLocalStorage({login: true})
        setIsLoggedIn(true)
        navigate('/info/1'); // Use o caminho correto para sua rota User
    };

    const navigateToHome = () => {
        changeLocalStorage({login: true})
        setIsLoggedIn(true)
        navigate('/conta/1');
    }

    return (
        <Flex backgroundColor='#836FFF' padding='10px' >
            <Box  >
                <Center>
                    <Text fontSize='3xl'>Dio Bank</Text>

                </Center>

            </Box>



            {
                isLoggedIn && (
                    <>
                        <Spacer />
                        <Button onClick={navigateToHome} mr="4">
                            Conta
                        </Button>
                        <Button onClick={navigateToUser} mr="4">
                            Perfil
                        </Button>
                        <Button onClick={() => logout()} >
                            Sair
                        </Button>
                    </>
                )
            }
        </Flex>

    )
}