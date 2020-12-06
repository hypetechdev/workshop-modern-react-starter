import React from 'react'

import { ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
}))

interface Props {}

const NavigationDrawer = (props: Props) => {
    const classes = useStyles()

    return (
        <Drawer variant="permanent" open={true} className={classes.drawerPaper}>
            <Divider />
            <ListItem button>
                {/* <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon> */}
                <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button>
                {/* <ListItemIcon>
                    <ShoppingCartIcon />
                </ListItemIcon> */}
                <ListItemText primary="Orders" />
            </ListItem>
        </Drawer>
    )
}

export default NavigationDrawer
