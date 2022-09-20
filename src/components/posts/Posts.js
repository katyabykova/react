import React from 'react';
import {useEffect, useState} from "react";
import {postsAxios} from "../../services/Posts.api.service";
import Post from "./Post";

const Posts = ({id},clicked) => {
    let [posts, setPosts] = useState([]);

    useEffect(() => {
        postsAxios(id).then(post => setPosts(post.data))
    },[id]);

    return (<div>

            {posts && posts.map((value, index) => <Post key={index} value={value} clicked={clicked}/>)}
    </div>
    );
};

export default Posts;