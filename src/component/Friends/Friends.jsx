import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import{useLoaderData} from 'react-router-dom'
import Friend from '../Friend/Friend';

const Friends = () => {
    const friends =useLoaderData();
    
    // console.log(friends);
    return (
        <div>
            <h2>This are my friends: {friends.length} </h2>
            <div>
            <div>
            {
                friends.map(friend=> <Friend
                    key={friend.id}
                    friend={friend}>
                </Friend>)
            }
        </div>
            </div>
            
        </div>
    );
};

export default Friends;