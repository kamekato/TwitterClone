import { useState } from "react";
import {Post} from '../post/index'
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";

export const Posts = () =>{
    
    const intialData = [
        {
            id:0,
            username:'Invoker',
            body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero incidunt, recusandae a dolorum maxime beatae suscipit laudantium aliquam possimus quidem. Totam nulla nihil est veritatis nisi qui blanditiis dicta eius, deserunt facere, aperiam doloremque numquam consequuntur sed eveniet laudantium quidem magni libero fuga omnis ipsa non esse odio quo! Nisi sit obcaecati vitae veritatis a atque tempore id ratione aliquid nam cumque, necessitatibus, incidunt possimus. Sequi dolor quisquam asperiores quod, error vel minima temporibus numquam deserunt voluptatem officia nam, repudiandae aliquam eos corporis modi, quibusdam laboriosam delectus quia ad. Ullam pariatur cum optio. Architecto mollitia tempore pariatur nesciunt, cumque voluptatum!',
        },
    ]

    const [posts, setPosts] = useState(intialData)
    
    const addNewPost = () =>{
        const newPost = {
            id:posts.length,
            username:'ME',
            body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero incidunt, recusandae a dolorum maxime beatae suscipit laudantium aliquam possimus quidem. Totam nulla nihil est veritatis nisi qui blanditiis dicta eius, deserunt facere, aperiam doloremque numquam consequuntur sed eveniet laudantium quidem magni libero fuga omnis ipsa non esse odio quo! Nisi sit obcaecati vitae veritatis a atque tempore id ratione aliquid nam cumque, necessitatibus, incidunt possimus. Sequi dolor quisquam asperiores quod, error vel minima temporibus numquam deserunt voluptatem officia nam, repudiandae aliquam eos corporis modi, quibusdam laboriosam delectus quia ad. Ullam pariatur cum optio. Architecto mollitia tempore pariatur nesciunt, cumque voluptatum!',
        }
        const timeoutId = setTimeout(()=>{
            setPosts((prevValue) => [newPost,...prevValue])
        },100)
        return () => {
            clearTimeout(timeoutId);
          };        
    }

    const deletePost = (postId) => {
        console.log(postId);
        console.log(posts)
        const newPosts = posts.filter(post => post.id !== postId);
        setPosts(newPosts);
    }
    
    
    return (
        <div style={{padding: 36 + 'px', border: '1px solid rgba(0, 0, 0, 0.05)'}}>
            <div>
                <button
                    onClick={()=>addNewPost()}
                >
                    add
                </button>
                <Typography variant="h6"component="div" sx={{flexGrow: 1 }}> 
                    <Link to='/profile'>MY PROFILE</Link>
                </Typography>             
            </div>
            {
                posts.map((post)=>(
                   <Post post={post} deletePost={deletePost} key={post.id}/>
                ))
            }
        </div>
    )
}