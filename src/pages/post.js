import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api/api";
function Post() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await api.get(`/posts/${id}?_embed`);
                setPost(response.data)
            }
            catch (error) {
                console.error("error in fetching post", error);
            }

        };
        fetchPost();
    },
        [id]
    );

    if (!post) {
        return <p>...Loading</p>
    }
    const image = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || null;
    const categories = post._embedded?.['wp:term']?.[0] || [];
     const author = post.acf?.post_group;
     const faq =post.acf?.post_group.pros_cons;
 console.log(author);
    return (

        <>
            <div className='container about-box'>
                <h1 className='text-center'>{post.title.rendered}</h1>
                <div>
                   <b>Categories:</b> {" "}
                    {categories.length > 0
                        ? categories.map(cat => (
                            <span key={cat.id} style={{ marginRight: "8px" }}>
                                {cat.name},
                            </span>
                        ))
                        : "No categories"}
                </div>
                <div>Post Content {author?.author}
                        <div dangerouslySetInnerHTML={{
                        __html: author?.author
                    }}/>
                    <p dangerouslySetInnerHTML={{
                        __html: author?.extra_details
                    }}  />

                </div>
                <div className='faq'>
                    {faq.map(item=>(
                        <p><b>Pros: </b>{item.pros} <b>Cons:</b> {item.cons}</p>
                        
                    ))}
                </div>
                <div className='text-center' >{image && <img src={image} className='img-fluid ' />}</div>
                <div
                    className='content'
                    dangerouslySetInnerHTML={{
                        __html: post.content.rendered
                    }}
                />
            </div>
        </>
    )
}
export default Post;
