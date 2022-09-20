import React from 'react';

const Userdetails = ({user,postsofclicked}) => {


    return (<div>
        <div className={'user'}>
            {JSON.stringify(user)}
            <br/><br/>
            <button onClick={()=>{
                postsofclicked(user.id)
            }}>Posts of user</button>
        </div></div>
    );
};

export default Userdetails;