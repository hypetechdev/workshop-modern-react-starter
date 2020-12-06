import Axios from 'axios'
import { API_ENDPOINT } from 'config'
// import mapKeys from 'lodash/mapKeys'

import User from 'lib/models/User'

class UserService {
    async fetchUsers() {
        const requestUrl = `${API_ENDPOINT}/users`
        const { data: usersData } = await Axios.get(requestUrl)

        console.log('usersData', usersData)

        const users = usersData.map((userData: any) => new User(userData))

        console.log('users', users)

        // const normalizedUsers = mapKeys(users, 'id')
        // console.log('normalizedUsers', normalizedUsers)

        return users
    }
}

export const userService = new UserService()
