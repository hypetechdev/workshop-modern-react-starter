import React from 'react'

import { useAuthState } from './auth/auth-context'
import AuthProvider from './auth/AuthProvider'
import LoginPage from './auth/LoginPage'
import Main from './main/Main'

function App() {
    const { authenticated } = useAuthState()

    return authenticated ? <Main /> : <LoginPage />
}

export default () => (
    <AuthProvider>
        <App />
    </AuthProvider>
)
