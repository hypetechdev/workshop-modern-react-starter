import React from 'react'

import { Box, Typography } from '@material-ui/core'
import Container from '@material-ui/core/Container'

interface Props {
    titleComponent?: React.ReactNode
    headerAction?: React.ReactNode
    children?: React.ReactNode
}

const PageLayout: React.FC<Props> = ({ titleComponent, children }) => (
    <Container maxWidth="lg">
        <Box pt={4} pb={4}>
            {titleComponent}
            {children}
        </Box>
    </Container>
)

export default React.memo(PageLayout)
