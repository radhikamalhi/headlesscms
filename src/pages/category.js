import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../api/api';

function Category() {
    const { categoryId } = useParams();  // Get categoryId from URL params
    const [posts, setPosts] = useState([]);  // State to hold the posts for this category
    const [loading, setLoading] = useState(true);  // State to track loading status
    const [categoryName, setCategoryName] = useState('');  // State to hold category name
    const [error, setError] = useState(null);  // State to handle errors

    useEffect(() => {
        const fetchCategoryData = async () => {
            try {
                // Fetch the category details using categoryId
                const categoryResponse = await api.get(`/categories/${categoryId}`);  // Fetch category by ID
                
                setCategoryName(categoryResponse.data.name);  // Set the category name

                // Fetch posts in this category
                const postsResponse = await api.get(`/posts?categories=${categoryId}&_embed`);  // Fetch posts by category
                setPosts(postsResponse.data);  // Set the posts data to state
            } catch (err) {
                // Handle errors with specific messages
                if (err.response?.status === 404) {
                    setError('Category not found');
                } else {
                    setError('Failed to fetch posts for this category');
                }
                console.error('Error fetching category posts:', err);
            } finally {
                setLoading(false);  // Set loading to false once data is fetched
            }
        };

        fetchCategoryData();
    }, [categoryId]);  // Dependency on categoryId to refetch data when category changes

    if (loading) {
        return <div>Loading...</div>;  // Show loading state while fetching data
    }

    if (error) {
        return <div>{error}</div>;  // Show error message if something goes wrong
    }
     
    return (
        <div className="container category-page about-box">
            <h3>Posts in Category: {categoryName}</h3>

            {Array.isArray(posts) && posts.length > 0 ? (
                <div className="row justify-content-center">
                    {posts.map((post) => {
                        const image = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;  // Get featured image URL
                        return (
                            <div className="col-lg-5 p-3 m-2 card" key={post.id}>
                                {image && <img src={image} alt={post.title.rendered} className="card-img-top" />}
                                <div className="card-body">
                                    <h5 className="card-title">{post.title.rendered}</h5>
                                    <p className="card-text" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                                    <Link to={`/post/${post.id}`} className="btn">Read More</Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            ) : (
                <p>No posts available for this category.</p>  // Show message if no posts found
            )}
        </div>
    );
}

export default Category;