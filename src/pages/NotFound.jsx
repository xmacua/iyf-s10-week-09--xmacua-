import { Link } from 'react-router-dom';
import { Button, Card } from '../components/shared';

function NotFound() {
    return (
        <div className="flex items-center justify-center min-h-[60vh]">
            <Card className="text-center max-w-md">
                <div className="mb-6">
                    <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Page Not Found</h2>
                    <p className="text-gray-600">
                        The page you're looking for doesn't exist or has been moved.
                    </p>
                </div>

                <div className="space-y-4">
                    <Button as={Link} to="/" fullWidth>
                        Go Home
                    </Button>
                    <Button variant="outline" as={Link} to="/posts" fullWidth>
                        Browse Posts
                    </Button>
                </div>
            </Card>
        </div>
    );
}

export default NotFound;