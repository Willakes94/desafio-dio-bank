import { login } from "./login";



describe('login', () => {

    
    const mockEmail = 'jose@teste.com'
    const mockPassword = '12345678'



    it('Deve exibir um alert com boas vindas caso o email seja valido ', async () => {
        const response = await login(mockEmail, mockPassword)
        expect(response).toBeTruthy()
        
    })



    it('Deve exibir um erro caso o email seja inválido', async () => {
       const response = await login('email@teste.com', '1234')
        expect(response).toBeFalsy()
       
    })
})