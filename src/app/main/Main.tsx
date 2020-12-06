import React, { useCallback, useState } from 'react'
import { Box, CssBaseline, makeStyles } from '@material-ui/core'

import TopAppBar from '../appbar/TopAppBar'
import NavigationDrawer from '../navigation/NavigationDrawer'
import MainRoutes from './MainRoutes'

const useStyles = makeStyles((theme) => ({
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
}))

interface Props {}

const Main = (props: Props) => {
    const classes = useStyles()

    const [open, setOpen] = useState(true)

    const handleDrawerOpen = () => {
        setOpen(true)
    }

    const handleDrawerClose = useCallback(() => {
        setOpen(false)
    }, [])

    return (
        <Box display="flex">
            <CssBaseline />
            <TopAppBar handleDrawerOpen={handleDrawerOpen} open={open} />
            <NavigationDrawer handleDrawerClose={handleDrawerClose} open={open} />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <MainRoutes />
            </main>
        </Box>
    )
}

export default Main
