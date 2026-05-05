import { Card } from '../components/shared';

function About() {
    return (
        <div className="space-y-8">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">About CommunityHub</h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    A modern community platform built with React, featuring advanced patterns and best practices.
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
                <Card title="Features">
                    <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                            <span className="text-green-500">✓</span>
                            React Router for navigation
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-green-500">✓</span>
                            Custom hooks (useFetch, useLocalStorage)
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-green-500">✓</span>
                            Reusable component library
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-green-500">✓</span>
                            Tailwind CSS styling
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-green-500">✓</span>
                            Loading and error states
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-green-500">✓</span>
                            Responsive design
                        </li>
                    </ul>
                </Card>

                <Card title="Technologies Used">
                    <ul className="space-y-2">
                        <li><strong>Frontend:</strong> React 18</li>
                        <li><strong>Routing:</strong> React Router DOM</li>
                        <li><strong>Styling:</strong> Tailwind CSS</li>
                        <li><strong>Build Tool:</strong> Vite</li>
                        <li><strong>API:</strong> JSONPlaceholder (demo)</li>
                        <li><strong>State:</strong> React Hooks</li>
                    </ul>
                </Card>
            </div>

            <Card title="Learning Outcomes">
                <div className="grid gap-6 md:grid-cols-2">
                    <div>
                        <h3 className="text-lg font-semibold mb-3">React Advanced Patterns</h3>
                        <ul className="space-y-1 text-sm text-gray-600">
                            <li>• useEffect for side effects</li>
                            <li>• Custom hooks for reusability</li>
                            <li>• Component composition</li>
                            <li>• Props drilling solutions</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-3">Modern Development</h3>
                        <ul className="space-y-1 text-sm text-gray-600">
                            <li>• Component libraries</li>
                            <li>• CSS-in-JS alternatives</li>
                            <li>• API integration patterns</li>
                            <li>• Error boundaries</li>
                        </ul>
                    </div>
                </div>
            </Card>
        </div>
    );
}

export default About;