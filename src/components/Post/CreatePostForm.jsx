import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Input, Card } from '../shared';

function CreatePostForm() {
    const [formData, setFormData] = useState({
        title: '',
        body: ''
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const validate = () => {
        const newErrors = {};
        if (!formData.title.trim()) newErrors.title = 'Title is required';
        if (!formData.body.trim()) newErrors.body = 'Body is required';
        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setLoading(true);
        try {
            // Simulate API call - in real app, this would be a POST request
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    title: formData.title,
                    body: formData.body,
                    userId: 1,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });

            if (!response.ok) throw new Error('Failed to create post');

            const newPost = await response.json();
            alert('Post created successfully!');
            navigate('/posts');
        } catch (error) {
            alert('Failed to create post: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Card title="Create New Post" className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                    label="Title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    error={errors.title}
                    required
                    placeholder="Enter post title"
                />

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Body <span className="text-red-500">*</span>
                    </label>
                    <textarea
                        name="body"
                        value={formData.body}
                        onChange={handleChange}
                        placeholder="Enter post content"
                        rows={6}
                        className={`
                            w-full px-3 py-2 border rounded-md
                            focus:outline-none focus:ring-2 focus:ring-blue-500
                            ${errors.body ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'}
                        `}
                    />
                    {errors.body && (
                        <p className="mt-1 text-sm text-red-500">{errors.body}</p>
                    )}
                </div>

                <div className="flex gap-4">
                    <Button type="submit" loading={loading} fullWidth>
                        Create Post
                    </Button>
                    <Button
                        type="button"
                        variant="secondary"
                        onClick={() => navigate('/posts')}
                        fullWidth
                    >
                        Cancel
                    </Button>
                </div>
            </form>
        </Card>
    );
}

export default CreatePostForm;