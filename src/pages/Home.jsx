import { Link } from 'react-router-dom';
import { Card, Button } from '../components/shared';
import useFetch from '../hooks/useFetch';

function Home() {
    // Fetch recent posts
    const { data: posts, loading, error } = useFetch(
        'https://jsonplaceholder.typicode.com/posts?_limit=3'
    );

    return (
        <div className="space-y-16">
            {/* Hero Section */}
            <section className="relative pt-20 pb-16 px-6">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-3xl -z-10"></div>
                <div className="text-center space-y-6">
                    <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                        Welcome to CommunityHub
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Connect, share, and discover amazing content in our community.
                        Join discussions, share your thoughts, and explore what others are talking about.
                    </p>
                    <div className="flex gap-4 justify-center pt-4 flex-wrap">
                        <Link to="/posts" className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105 transition-all duration-200">
                            📚 Browse Posts
                        </Link>
                        <Link to="/create-post" className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105 transition-all duration-200">
                            ✍️ Create Post
                        </Link>
                    </div>
                </div>
            </section>

            {/* Recent Posts Section */}
            <section>
                <div className="flex justify-between items-center mb-10">
                    <h2 className="text-4xl font-bold text-transparent bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text">Recent Posts</h2>
                    <Link
                        to="/posts"
                        className="text-purple-400 hover:text-pink-400 font-semibold transition-colors text-lg"
                    >
                        View all posts →
                    </Link>
                </div>

                {loading && (
                    <div className="text-center py-16">
                        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-500 mx-auto"></div>
                        <p className="mt-4 text-gray-400 text-lg">Loading amazing posts...</p>
                    </div>
                )}

                {error && (
                    <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-6 text-center">
                        <p className="text-red-300 text-lg">Failed to load recent posts</p>
                    </div>
                )}

                {posts && (
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {posts.map(post => (
                            <Link key={post.id} to={`/posts/${post.id}`} className="group">
                                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-blue-500/20 hover:border-purple-500/50 transition-all duration-300 h-full hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-1">
                                    <h3 className="text-lg font-semibold mb-3 text-blue-300 group-hover:text-pink-300 transition-colors line-clamp-2">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm line-clamp-3 mb-4">
                                        {post.body.length > 100 ? `${post.body.slice(0, 100)}...` : post.body}
                                    </p>
                                    <div className="flex justify-between items-center text-xs text-gray-500">
                                        <span>Post #{post.id}</span>
                                        <span className="text-purple-400 group-hover:text-pink-400 transition-colors">Read more →</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </section>

            {/* Features Section */}
            <section className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl border border-blue-500/30 p-12">
                <h2 className="text-4xl font-bold text-transparent bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text mb-12 text-center">
                    Why Join Our Community?
                </h2>
                <div className="grid gap-8 md:grid-cols-3">
                    <div className="group text-center">
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300">
                            <span className="text-3xl">👥</span>
                        </div>
                        <h3 className="text-2xl font-bold text-blue-300 mb-3">Connect</h3>
                        <p className="text-gray-400 group-hover:text-gray-300 transition-colors">Connect with like-minded people and build meaningful relationships with community members.</p>
                    </div>
                    <div className="group text-center">
                        <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300">
                            <span className="text-3xl">💬</span>
                        </div>
                        <h3 className="text-2xl font-bold text-purple-300 mb-3">Share</h3>
                        <p className="text-gray-400 group-hover:text-gray-300 transition-colors">Share your ideas, experiences, and knowledge with a passionate and engaged community.</p>
                    </div>
                    <div className="group text-center">
                        <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-pink-500/50 transition-all duration-300">
                            <span className="text-3xl">🌟</span>
                        </div>
                        <h3 className="text-2xl font-bold text-pink-300 mb-3">Discover</h3>
                        <p className="text-gray-400 group-hover:text-gray-300 transition-colors">Discover new perspectives and learn from diverse viewpoints and unique ideas.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;