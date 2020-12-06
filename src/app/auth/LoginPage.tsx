import React from 'react'

import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { Box } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'

import * as authActions from './authActions'
import * as authService from 'lib/services/authService'
import { useAuthDispatch } from './auth-context'

import LoginForm from './LoginForm'

const useStyles = makeStyles((theme) => ({
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
}))

const LoginPage = () => {
    // const history = useHistory()
    const classes = useStyles()

    const authDispatch = useAuthDispatch()

    const handleLogin = async (data: any) => {
        try {
            const res = await authService.login(data)
            authDispatch(authActions.setAuthenticated(true))
        } catch (error) {
            console.log('error', error)
        }
    }

    return (
        <Container component="main" maxWidth="xs">
            <Box display="flex" flexDirection="column" mt={8} alignItems="center">
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <LoginForm onLoginSubmit={handleLogin} />
            </Box>
        </Container>
    )
}

export default LoginPage
