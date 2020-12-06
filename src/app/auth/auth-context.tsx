import React, { useContext } from 'react'

type AuthDispatch = (action: any) => void

type AuthState = {
    authenticated: boolean // to check if authenticated or not
}

export const AuthStateCtx = React.createContext<AuthState | undefined>(undefined)
export const AuthDispatchCtx = React.createContext<AuthDispatch | undefined>(undefined)

export const useAuthState = (): AuthState => {
    const ctx = useContext(AuthStateCtx)
    if (ctx === undefined) {
        throw new Error('useAuthState must be used within a AuthProvider')
    }

    return ctx
}

export const useAuthDispatch = (): AuthDispatch => {
    const ctx = useContext(AuthDispatchCtx)
    if (ctx === undefined) {
        throw new Error('useAuthDispatch must be used within a AuthProvider')
    }

    return ctx
}
