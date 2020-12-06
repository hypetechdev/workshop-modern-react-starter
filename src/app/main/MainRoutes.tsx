import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LoginPage from '../auth/LoginPage'
import DashboardPage from '../dashboard/DashboardPage'

const MainRoutes = () => (
    <Switch>
        <Route exact path="/">
            <DashboardPage />
        </Route>
    </Switch>
)

export default MainRoutes
