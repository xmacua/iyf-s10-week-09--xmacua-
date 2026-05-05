import { useState, useEffect } from 'react';
import PostList from '../components/Post/PostList';
import { Button } from '../components/shared';
import { Link } from 'react-router-dom';

function Posts() {
    const [posts, setPosts] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const fetchPosts = async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            if (!response.ok) throw new Error('Failed to fetch posts');
            const data = await response.json();
            setPosts(data);
            setFilteredPosts(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    useEffect(() => {
        if (searchTerm.trim() === '') {
            setFilteredPosts(posts);
        } else {
            const filtered = posts.filter(post =>
                post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                post.body.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredPosts(filtered);
        }
    }, [searchTerm, posts]);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center flex-wrap gap-4">
                <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">All Posts</h1>
                <Link to="/create-post" className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105 transition-all duration-200">
                    ✍️ Create New Post
                </Link>
            </div>

            {/* Search Bar */}
            <div className="max-w-md">
                <input
                    type="text"
                    placeholder="🔍 Search posts..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className="w-full px-4 py-3 bg-slate-800 border border-purple-500/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                />
            </div>

            {/* Results count */}
            {!loading && !error && (
                <p className="text-gray-400 text-sm">
                    Showing <span className="text-purple-400 font-semibold">{filteredPosts.length}</span> of <span className="text-blue-400 font-semibold">{posts.length}</span> posts
                    {searchTerm && ` for "${searchTerm}"`}
                </p>
            )}

            <PostList
                posts={filteredPosts}
                loading={loading}
                error={error}
                onRetry={fetchPosts}
            />
        </div>
    );
}

export default Posts;