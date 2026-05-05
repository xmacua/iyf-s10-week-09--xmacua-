import CreatePostForm from '../components/Post/CreatePostForm';

function CreatePost() {
    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Create New Post</h1>
            <CreatePostForm />
        </div>
    );
}

export default CreatePost;