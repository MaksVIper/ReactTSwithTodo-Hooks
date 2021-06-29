
import React, {FC} from 'react';
import {IUser} from "../types/types";

interface UserItemProps {
    user: IUser;
    onClick: (user: IUser) => void;
}

const UserItem: FC<UserItemProps> = ({user, onClick}) => {
    return (
        <div onClick={() => onClick(user)} style={{padding: 30, border: '5px inset gray', margin:50,backgroundColor:'LavenderBlush',fontWeight:700,textAlign:"center"}}>
            {user.id}. {user.name} проживает в городе {user.address.city} на улице {user.address.street}
        </div>
    );
};

export default UserItem;