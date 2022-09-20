import React, {useEffect, useState} from 'react';
import {userAxios} from "../../services/Users.api.service";
import User from "./User";
import Userdetails from "./Userdetails";
import Posts from "../posts/Posts";

const Users = () => {

    let [users, setUsers] = useState([]);
    let [user, setUser] = useState();
    let [id, setId] = useState()

    const clicked = (user) => setUser(user);
    const postsofclicked = (id) => setId(id);

    useEffect(() => {
            userAxios().then(value => setUsers(value.data))
        }, []
    )

    return (<div className={'box'}>
            <div className={'users'}>
                {users.map((value, index) => <User key={index} value={value} clicked={clicked}/>)}

            </div>
            <div className={'userdetails'}>
                {user && <Userdetails user={user} postsofclicked={postsofclicked}/>}
            </div>
            {id && <div className={'posts'}><Posts id={id} clicked={clicked}/>
                <hr/>
            </div>}
        </div>
    );
};

export default Users;