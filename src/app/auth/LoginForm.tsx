import React from 'react'
import { useHistory } from 'react-router-dom'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

interface Props {
    onLoginSubmit: (data: any) => void
}

const LoginForm: React.FC<Props> = ({ onLoginSubmit }) => {
    const handleFormSubmit = (event: any) => {
        event.preventDefault()

        onLoginSubmit({ email: '' })
    }

    return (
        <form noValidate onSubmit={handleFormSubmit}>
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
            />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
            />
            <Button type="submit" fullWidth variant="contained" color="primary">
                Sign In
            </Button>
        </form>
    )
}

export default LoginForm
