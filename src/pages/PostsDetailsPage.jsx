import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate, Navigate } from "react-router-dom";

function PostsDetailsPage() {
   const { id } = useParams();
   const [postSelected, setPostSelected] = useState({})
   const endpointApi = "http://localhost:3000";
   const navigate = useNavigate()
   //Chiamata per ricevere i dati del singolo post:
   const fetchPost = () => {
      axios.get(`${endpointApi}/posts/${id}`)
         .then(res => {
            setPostSelected(res.data)
         })
   }

   //Gestione di elliminazione di un post:
   function handlerRemove() {
      axios.delete(`${endpointApi}/posts/${id}`)
         .then(res => {
            alert("Il post è stato eliminato con successo!");
            //ritorno all'elenco dei post
            navigate("/posts")
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
                  <p>{postSelected.tags ? postSelected.tags.join(', ') : "tags non trovati"}</p>
                  <div className="btn-container">
                     <Link to={"/posts"} className="btn">Torna alla lista</Link >
                  </div>
                  <button onClick={handlerRemove} className="btn-delete">Elimina Post</button>
               </div>
            </div>
         </div>
      </section>
   )
}

export default PostsDetailsPage