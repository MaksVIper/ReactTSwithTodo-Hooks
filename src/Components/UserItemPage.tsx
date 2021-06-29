import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../types/types";
import axios from "axios";
import {useParams, useHistory} from 'react-router-dom';

interface UserItemPageParams {
    id: string;
}

const UserItemPage: FC = () => {

    const [user, setUser] = useState<IUser | null>(null)
    const params = useParams<UserItemPageParams>()
    const history = useHistory()

    useEffect(() => {
        fetchUser()
    }, [])

    async function fetchUser() {
        try {
            const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id)
            setUser(response.data)
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div style={{backgroundColor:"LightYellow",textAlign:"center"}}>
            <button className="waves-effect waves-light btn-large col s4" onClick={() => history.push('/users')} style={{ margin:20 }}>Back</button>
            <h1>Страница пользователя {user?.name}</h1>
            <h3>
                {user?.email}
            </h3>
            <h3>
                {user?.address.city} {user?.address.street} {user?.address.zipcode}
            </h3>
        </div>
    );
};

export default UserItemPage;