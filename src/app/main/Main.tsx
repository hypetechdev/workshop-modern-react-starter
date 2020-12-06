import React from 'react'
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

    return (
        <Box display="flex">
            <CssBaseline />
            <TopAppBar />
            <NavigationDrawer />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <MainRoutes />
            </main>
        </Box>
    )
}

export default Main
