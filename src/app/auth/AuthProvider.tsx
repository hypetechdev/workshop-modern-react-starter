import React, { useReducer } from 'react'
import { useMount } from 'react-use'

import * as authService from 'lib/services/authService'
import * as authActions from './authActions'

import { AuthDispatchCtx, AuthStateCtx } from './auth-context'
import { authReducer, defaultAuthState } from './authActions'

const AuthProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, defaultAuthState)

    useMount(() => {
        const authenticated = authService.isAuthenticated()
        dispatch(authActions.setAuthenticated(authenticated))
    })

    return (
        <AuthStateCtx.Provider value={state}>
            <AuthDispatchCtx.Provider value={dispatch}>
                {children}
            </AuthDispatchCtx.Provider>
        </AuthStateCtx.Provider>
    )
}

export default AuthProvider
