import { useState } from "react";
import { Link } from "react-router-dom";

export const Post = ({post,deletePost}) =>{

    const [like,setLike] = useState(0);
    const [dislike,setDislike] = useState(0);
    const [body,setBody] = useState(post.body);
    const [edit,setEdit] = useState(false);

    const editPost = (e)=>{
        setBody(e.target.value);
    }

    const addLike = () =>{
        setLike(like+1);
    }

    const addDislike = () =>{
        setDislike(dislike+1);
    }
return(
    <div key={post.id}>
    <h3>{post.id}</h3>
    <h4><Link to='/profile'>Username : {post.username}</Link></h4>
    <p>
        {
            body
        }
    </p>
    <h4>LIKE : {like}</h4>
    <h4>DISLIKE : {dislike}</h4>
    <button
    onClick={()=>deletePost(post.id)}>delete</button>
    <button onClick={()=>addLike()}>like</button>
    <button onClick={()=>addDislike()}>dislike</button>
    {
        edit &&(
            <textarea type="text" value={body} onChange={(e)=>editPost(e)}/>
        )
    }
    <button onClick={()=>setEdit(!edit)}>{edit ? 'save' : 'edit'}</button>
</div>
)
}