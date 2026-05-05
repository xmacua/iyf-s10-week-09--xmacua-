import PostCard from './PostCard';
import { LoadingSpinner, ErrorMessage } from '../shared';

function PostList({ posts, loading, error, onRetry }) {
    if (loading) return <LoadingSpinner text="Loading posts..." />;
    if (error) return <ErrorMessage message={error} onRetry={onRetry} />;
    if (!posts || posts.length === 0) return <p className="text-center text-gray-500">No posts found.</p>;

    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map(post => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    );
}

export default PostList;