import React, { useReducer } from 'react'
import { AuthDispatchCtx, AuthStateCtx } from './auth-context'
import { authReducer, defaultAuthState } from './authActions'

const AuthProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, defaultAuthState)

    return (
        <AuthStateCtx.Provider value={state}>
            <AuthDispatchCtx.Provider value={dispatch}>
                {children}
            </AuthDispatchCtx.Provider>
        </AuthStateCtx.Provider>
    )
}

export default AuthProvider
