import {UserList } from "./UserList";
import { useState } from "react"

export const UsersApp = () => {
const [endpoint, setEndpoint] = useState('users')

    const handleFetch = () => {
        setEndpoint('comments')
    }

    return (
        <>
            <h1>Lista de usuarios</h1>
            <UserList endPoint={endpoint} />
            <button onClick={handleFetch}>llamar API</button>
        </>
    )


}

