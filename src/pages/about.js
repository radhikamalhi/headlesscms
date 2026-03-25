import { useEffect, useState } from 'react';
import api from '../api/api';
import { useParams, Link } from 'react-router-dom';
function About() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await api.get('/posts?_embed');
                setPosts(response.data);
            } catch (error) {
                console.error('error in getting posts', error);
            }
        };
        fetchPosts();
    }, []);
    return (
        <div className='container about-box'>
            <div className='row justify-content-center align-items-center'>
                {posts.map((post) => {
                    const image =
                        post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
                    const category =
                        post._embedded?.['wp:term']?.[0] || null;
                    console.log(category, 'categories displayed')
                   
                    return (
                        <div className='col-lg-5 p-3 m-2 card' key={post.id}>
                            {image && <img src={image} alt="post" />}

                            <h4>{post.title.rendered}</h4>
                            <ul className='category-list'>
                                {category.map(cat => (
                                    <li key={cat.id}><Link to={`/category/${cat.id}`}>{cat.name}</Link></li>
                                ))}
                            </ul>

                            <div
                                dangerouslySetInnerHTML={{
                                    __html: post.excerpt.rendered,
                                }}
                            />
                            <Link to={`/post/${post.id}`} className='btn'>Read More</Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
export default About;