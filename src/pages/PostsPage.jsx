//Import dati dei post:
import postsData from "../data/postsData"

function PostsPage() {
   return (
      <section className="container">
         <div className="posts-container">
            {postsData.map(post => (
               <div className="post" key={post.id}>
                  <div className="post-content">
                     <div className="post-image">
                        <img src={post.url} alt="" />
                     </div>
                     <div className="post-text">
                        <h1>{post.titolo}</h1>
                        <p>{post.testo}</p>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </section>
   )
}

export default PostsPage