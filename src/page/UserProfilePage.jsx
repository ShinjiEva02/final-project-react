import React from 'react';
import {useParams} from 'react-router-dom'

export const UserProfilePage = () => {
    const userId = useParams().id;

    return (
        <div>
            <h1>User Profile { userId } Page</h1>
        </div>
    );
}   