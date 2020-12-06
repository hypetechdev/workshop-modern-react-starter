import Axios from 'axios'

import User from 'lib/models/User'

class UserService {
    async fetchUsers() {
        const { data: usersData } = await Axios.get(
            'https://jsonplaceholder.typicode.com/users'
        )

        console.log('usersData', usersData)

        const users = usersData.map((userData: any) => new User(userData))

        console.log('users', users)

        return users
    }
}

export const userService = new UserService()
