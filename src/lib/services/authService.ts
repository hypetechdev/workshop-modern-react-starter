enum KEYS {
    TOKEN = '@ls/token',
}

export const isAuthenticated = (): boolean => {
    return !!localStorage.getItem(KEYS.TOKEN)
}

export const login = (data: any) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const token = '232asd5765asd76fsa67df57sad6f'
            localStorage.setItem(KEYS.TOKEN, token)

            resolve({
                token,
            })
        }, 3000)
    })
}
