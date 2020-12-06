import React from 'react'
import { Switch, Route } from 'react-router-dom'

import UsersPage from 'app/users/UsersPage'
import DashboardPage from 'app/dashboard/DashboardPage'

const MainRoutes = () => (
    <Switch>
        <Route path="/users">
            <UsersPage />
        </Route>
        <Route exact path="/">
            <DashboardPage />
        </Route>
    </Switch>
)

export default MainRoutes
