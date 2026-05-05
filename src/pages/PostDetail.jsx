import { useParams, Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { LoadingSpinner, ErrorMessage, Card } from '../components/shared';

function PostDetail() {
    const { postId } = useParams();
    const { data: post, loading, error } = useFetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
    );

    if (loading) return <LoadingSpinner text="Loading post..." />;
    if (error) return <ErrorMessage message={error} />;
    if (!post) return <p className="text-center text-gray-500">Post not found.</p>;

    return (
        <div className="space-y-8">
            <div className="flex items-center gap-4">
                <Link
                    to="/posts"
                    className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2"
                >
                    ← Back to Posts
                </Link>
            </div>

            <Card className="max-w-4xl">
                <article>
                    <header className="mb-6">
                        <h1 className="text-3xl font-bold text-gray-900 mb-4">
                            {post.title}
                        </h1>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span>Post #{post.id}</span>
                            <span>•</span>
                            <span>User ID: {post.userId}</span>
                        </div>
                    </header>

                    <div className="prose prose-lg max-w-none">
                        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                            {post.body}
                        </p>
                    </div>
                </article>
            </Card>

            {/* Comments section could be added here */}
            <Card className="max-w-4xl">
                <h2 className="text-2xl font-bold mb-4">Comments</h2>
                <p className="text-gray-600">
                    Comments feature would be implemented here with real API integration.
                </p>
            </Card>
        </div>
    );
}

export default PostDetail;