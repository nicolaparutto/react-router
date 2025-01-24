import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PostsDetailsPage() {
   const { id } = useParams();
   const [postSelected, setPostSelected] = useState({})
   const endpointApi = "http://localhost:3000";


   const fetchPost = () => {
      axios.get(`${endpointApi}/posts/${id}`)
         .then(res => {
            setPostSelected(res.data)
         })
   }

   useEffect(() => {
      fetchPost()
   }, [])
   return (
      <section className="container">
         <div className="postDetails-container" key={postSelected.id}>
            <div className="postDetails-content">
               <div className="post-image">
                  <img src={postSelected.image} alt="" />
               </div>
               <div className="post-text">
                  <h1>{postSelected.title}</h1>
                  <p>{postSelected.content}</p>
               </div>
            </div>
         </div>
      </section>
   )
}

export default PostsDetailsPage