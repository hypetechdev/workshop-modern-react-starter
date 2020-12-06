import React from 'react'

import { Paper, Typography } from '@material-ui/core'
import PageLayout from 'components/PageLayout'

const DashboardPage = () => (
    <PageLayout titleComponent={<Typography variant="h2">Dashboard</Typography>}>
        {/* <Paper>his</Paper> */}
        <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, dignissimos,
            tempora ea exercitationem suscipit quidem perspiciatis magni odio consectetur
            quasi totam est voluptates omnis! Quasi nihil praesentium ipsum expedita
            quibusdam.
        </Typography>
    </PageLayout>
)

export default DashboardPage
