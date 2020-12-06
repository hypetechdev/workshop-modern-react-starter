import { Box, Typography } from '@material-ui/core'
import React from 'react'

interface Props {
    title: string
}

const EmptyView: React.FC<Props> = ({ title, children }) => {
    return (
        <Box display="flex" justifyContent="center" p={8}>
            <Typography variant="h4">{title}</Typography>
            {children}
        </Box>
    )
}

export default EmptyView
