import React, { useState } from 'react'
import { useMount } from 'react-use'

import { CircularProgress, Typography } from '@material-ui/core'

import PageLayout from 'components/PageLayout'

import User from 'lib/models/User'

import UsersTable from './UsersTable'
import { userService } from 'lib/services/userService'

interface Props {}

const UsersPage = (props: Props) => {
    const [users, setUsers] = useState<User[] | null>(null)

    // useEffect(() => {

    //     return () => {}
    // }, [])

    useMount(async () => {
        const users = await userService.fetchUsers()

        setUsers(users)
    })

    return (
        <PageLayout titleComponent={<Typography variant="h2">Users</Typography>}>
            {users ? <UsersTable users={users} /> : <CircularProgress size={60} />}
        </PageLayout>
    )
}

export default UsersPage
