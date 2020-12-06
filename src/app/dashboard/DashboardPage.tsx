import React from 'react'

import { Box, Typography } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

export default function DashboardPage() {
    return (
        <Container maxWidth="lg">
            <Box pt={4} pb={4}>
                <Grid container spacing={3}>
                    {/* Chart */}
                    <Grid item xs={12} md={8} lg={9}>
                        <Typography variant="h2">Dashboard</Typography>
                        {/* <Paper className={fixedHeightPaper}>
                                <Chart />
                            </Paper> */}
                    </Grid>
                    {/* Recent Deposits */}
                    <Grid item xs={12} md={4} lg={3}>
                        {/* <Paper className={fixedHeightPaper}>
                                <Deposits />
                            </Paper> */}
                    </Grid>
                    {/* Recent Orders */}
                    <Grid item xs={12}>
                        {/* <Paper className={classes.paper}>
                                <Orders />
                            </Paper> */}
                    </Grid>
                </Grid>
                {/* <Box pt={4}>
                        <Copyright />
                    </Box> */}
            </Box>
        </Container>
    )
}
