const conta = {
    email: 'jose@teste.com',
    password: '12345678',
    name: 'Jose',
    balance: 2000.00,
    id: '1'
}

export const api = new Promise((resolve) => {
    setTimeout(()=> {
        resolve(conta)
    }, 3000)
})