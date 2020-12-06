import BackdropLoader from 'components/BackdropLoader'
import React from 'react'

import { useAuthState } from './auth/auth-context'
import AuthProvider from './auth/AuthProvider'
import LoginPage from './auth/LoginPage'
import Main from './main/Main'

function App() {
    const { authenticated, loading } = useAuthState()

    if (loading) {
        return <BackdropLoader isLoading={loading} />
    }

    return authenticated ? <Main /> : <LoginPage />
}

const Root = () => (
    <AuthProvider>
        <App />
    </AuthProvider>
)

export default Root
