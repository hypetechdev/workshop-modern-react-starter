import { useReducer, FC } from 'react'
import { useMount } from 'react-use'

import * as authService from 'lib/services/authService'

import * as authActions from './authActions'
import { AuthDispatchCtx, AuthStateCtx } from './auth-context'

const AuthProvider: FC = ({ children }) => {
    const { authReducer, defaultAuthState } = authActions
    const [state, dispatch] = useReducer(authReducer, defaultAuthState)

    useMount(() => {
        // Simulate long running task
        setTimeout(() => {
            const authenticated = authService.isAuthenticated()
            dispatch(authActions.setAuthenticated(authenticated))
        }, 3000)
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
