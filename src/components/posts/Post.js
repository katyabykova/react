import React from 'react';

const Post = ({value}) => {
    return (
        <div className={'post'}>
                POST OF USER {value.userId} <br/> TITLE:{value.title}; <br/>BODY: {value.body} <br/><br/>
        </div>
    );
};

export default Post;