import React, { useRef } from 'react'

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

    // Using ref to access form
    const formRef = useRef<HTMLFormElement>(null)

    const handleFormReset = () => {
        // Show how to use form reset using ref
        formRef.current?.reset()
    }

    return (
        <form noValidate onSubmit={handleFormSubmit} ref={formRef}>
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
            <p />
            <Button fullWidth variant="text" color="secondary" onClick={handleFormReset}>
                Reset
            </Button>
        </form>
    )
}

export default LoginForm
