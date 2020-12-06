import React, { Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'

import DashboardPage from 'app/dashboard/DashboardPage'

const UsersPage = React.lazy(() => import('app/users/UsersPage'))

const MainRoutes = () => (
    <Suspense fallback={<div>Loading...</div>}>
        <Switch>
            <Route path="/users">
                <UsersPage />
            </Route>
            <Route exact path="/">
                <DashboardPage />
            </Route>
        </Switch>
    </Suspense>
)

export default MainRoutes
