import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';

const SinglePage = () => {
  const {id} = useParams();
  const [post, setPost] = useState({})
  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(id);
    setPost(response.data)
  })

  useEffect(()=> {
    fetchPostById(id)
  },[])

  console.log(post)
    return (
        <>
           <h1>You opened page of post c ID = {id}</h1>
           {isLoading ? <Loader /> : <div className='postById'>{post.id}, {post.title}</div> }
           
        </>
    );
};

export default SinglePage;