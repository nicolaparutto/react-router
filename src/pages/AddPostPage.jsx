import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function AddPostPage() {

   const navigate = useNavigate()
   const endpointApi = "http://localhost:3000";

   const initialPostData = {
      title: "",
      content: "",
      image: "",
      tags: []
   }

   const [postData, setPostData] = useState(initialPostData);

   const handlerNewPost = (e) => {
      setPostData((prevPostData) => ({
         ...prevPostData,
         [e.target.name]: e.target.value
      }))
   }

   const handlerSendPost = (e) => {
      e.preventDefault()
      //conversione della stringa dei tag, in un array:
      const tagsConversion = postData.tags.split(",").map(tag => tag.trim());

      const updatedPost = {
         ...postData,
         tags: tagsConversion
      }

      //Effetto la chiamata all'API con il metodo post, e gli passo il nuovo oggetto:
      axios.post(`${endpointApi}/posts`, updatedPost)
         .then(res => {
            //In fine resetto il form:
            setPostData(initialPostData)
            //Reindirizzo alla pagina della lista dei post:
            navigate("/posts")
         })
   }

   return (
      <section className="container">
         <div className="form-container">
            <h1>Aggiungi un post</h1>
            <form action="">
               <div>
                  <h4>Titolo del post</h4>
                  <input type="text" name="title" placeholder='Inserisci il titolo' value={postData.title} onChange={handlerNewPost} />
               </div>
               <div>
                  <h4>Immagine del post</h4>
                  <input type="text" name="image" placeholder="Inserisci il link dell'immagine" value={postData.image} onChange={handlerNewPost} />
               </div>
               <div>
                  <h4>Testo del post</h4>
                  <input type="text" name="content" placeholder='Inserisci il testo' value={postData.content} onChange={handlerNewPost} />
               </div>
               <div>
                  <h4>Tags del post (separati da una virgola!!!)</h4>
                  <input type="text" name="tags" placeholder='Inserisci i tags' valuee={postData.tags} onChange={handlerNewPost} />
               </div>
               <button className='btn' onClick={handlerSendPost}>Crea</button>
            </form>
         </div>
      </section>
   )
}

export default AddPostPage