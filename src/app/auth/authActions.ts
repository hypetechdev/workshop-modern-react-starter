export const defaultAuthState = {
    authenticated: false,
    loading: true,
}

/*----------  Actions  ----------*/

enum AuthActionType {
    setAuthenticated = '@auth/set-authenticated',
    setLoading = '@auth/set-loading',
}

export const setAuthenticated = (authenticated: boolean) =>
    ({
        type: AuthActionType.setAuthenticated,
        authenticated,
    } as const)

export const setLoading = (loading: boolean = true) =>
    ({
        type: AuthActionType.setLoading,
        loading,
    } as const)

export type AuthAction =
    | ReturnType<typeof setAuthenticated>
    | ReturnType<typeof setLoading>

/*----------  Reducer  ----------*/

type AuthState = typeof defaultAuthState

export const authReducer = (state: AuthState = defaultAuthState, action: AuthAction) => {
    switch (action.type) {
        case AuthActionType.setAuthenticated:
            return {
                ...state,
                authenticated: action.authenticated,
                loading: false,
            }
        case AuthActionType.setLoading:
            return {
                ...state,
                loading: action.loading,
            }
        default:
            return state
    }
}
