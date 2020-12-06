export const defaultAuthState = {
    authenticated: false,
}

/*----------  Actions  ----------*/

enum AuthActionType {
    setAuthenticated = '@auth/set-authenticated',
}

export const setAuthenticated = (authenticated: boolean) =>
    ({
        type: AuthActionType.setAuthenticated,
        authenticated,
    } as const)

export type AuthAction = ReturnType<typeof setAuthenticated>

/*----------  Reducer  ----------*/

type AuthState = typeof defaultAuthState

export const authReducer = (state: AuthState = defaultAuthState, action: AuthAction) => {
    switch (action.type) {
        case AuthActionType.setAuthenticated:
            return {
                ...state,
                authenticated: action.authenticated,
            }
        default:
            return state
    }
}
