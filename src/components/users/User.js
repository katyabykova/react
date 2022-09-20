import React from 'react';

const User = ({value,clicked}) => {
    return (
        <div className={'user'}>
            {value.id} - {value.name} {value.username} -
            <button onClick={()=>{
                clicked(value);
            }}>Details</button>
        </div>
    );
};

export default User;