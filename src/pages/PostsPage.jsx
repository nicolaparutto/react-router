import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function PostsPage() {

   //API default endpoint:
   const endpointApi = "http://localhost:3000";

   const [postsData, setPostsData] = useState([])

   //Chiamata Api per dati dei post:
   const fetchPosts = () => {
      axios.get(`${endpointApi}/posts`)
         .then(res => {
            setPostsData(res.data)
         })
   }

   useEffect(() => {
      fetchPosts()
   }, [])
   return (
      <section className="container">
         <div className="posts-container">
            <ul>
               {postsData.map(post => (
                  <li key={post.id}>
                     <span>{post.title}</span>
                     <Link className="btn" to={`/dettaglio-post/${post.id}`}>Vedi dettagli</Link>
                  </li>
               ))}
            </ul>

            <Link className="add-post" to={"/aggiungi-post"}>AGGIUNGI UN POST</Link>

         </div>
      </section>
   )
}

export default PostsPage


/*
<div className="post" key={post.id}>
   <div className="post-content">
      <div className="post-image">
         <img src={post.image} alt="" />
      </div>
      <div className="post-text">
         <h1>{post.title}</h1>
         <p>{post.content}</p>
      </div>
   </div>
</div>
*/