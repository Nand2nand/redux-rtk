import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { selectAllPosts,getPostsStatus,getPostsError,fetchPosts } from './postSlice';
import PostExcerpt from './postExcerpt';





const PostList = () => {
    const dispatch = useDispatch();
    const posts = useSelector(selectAllPosts);
    const postStatus = useSelector(getPostsStatus);
    const error = useSelector(getPostsError);

    useEffect(() => {
      if (postStatus === 'idle') {
          dispatch(fetchPosts())
      }
  }, [postStatus, dispatch])
  

    let content;
    if (postStatus === 'loading') {
        content = <p>"Loading..."</p>;
    } else if (postStatus === 'succeeded') {
        const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
        content = orderedPosts.map((post,index) => <PostExcerpt key={index} post={post} />)
    } else if (postStatus === 'failed') {
        content = <p>{error}</p>;
    }

  return (
    <section>
        <h2>posts</h2>
        {content}
    </section>
  )
}

export default PostList
