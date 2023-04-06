import React from 'react';
import { Link } from 'react-router-dom';
import Friends from '../Friends/Friends';
import './Friend.css'

const Friend = ({friend}) => {
    const {id,name,email,phone}=friend;
    return (
        <div className='friend'>
            <h3>{name}</h3>
            <p>email:{email}</p>
            <p>phone:{phone}</p>
            <p><Link to={`/friend/${id}`}>show details</Link></p>
            {/* [ {``} ] evave dile to er value dynamic hobe
            *dynamic er part 2 ta [friend/:friendId]
            '/' er ager ta change hobe na '/' er chng hobe 
            **/}
        </div>
    )
};

export default Friend;