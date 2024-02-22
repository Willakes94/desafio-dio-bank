import {Flex } from '@chakra-ui/react';




// Se o Card aceitar props no futuro, defina uma interface para eles
export const Card = ({children}: any) => {

    


    return (
        <Flex  justifyContent='center' alignItems='center' minHeight='100vh' >
            {children}
          
            </Flex>

    );
};