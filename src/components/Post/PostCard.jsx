import { Link } from 'react-router-dom';

function PostCard({ post }) {
    return (
        <div className="group bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-blue-500/20 hover:border-purple-500/50 transition-all duration-300 h-full hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-1">
            <Link to={`/posts/${post.id}`} className="block">
                <h3 className="text-lg font-bold mb-3 text-blue-300 group-hover:text-pink-300 transition-colors line-clamp-2">
                    {post.title}
                </h3>
            </Link>
            <p className="text-gray-400 mb-4 line-clamp-3 text-sm leading-relaxed">
                {post.body.length > 100 ? `${post.body.slice(0, 100)}...` : post.body}
            </p>
            <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">Post #{post.id}</span>
                <Link
                    to={`/posts/${post.id}`}
                    className="text-purple-400 hover:text-pink-400 font-semibold text-sm transition-colors"
                >
                    Read more →
                </Link>
            </div>
        </div>
    );
}

export default PostCard;