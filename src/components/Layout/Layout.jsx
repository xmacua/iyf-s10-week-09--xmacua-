import { Outlet, Link, NavLink } from 'react-router-dom';

function Layout() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
            <header className="bg-gradient-to-r from-slate-900 to-slate-800 shadow-lg border-b border-blue-500/20 backdrop-blur-md bg-opacity-80 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <Link to="/" className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent hover:scale-110 transition-transform">
                            🌟 CommunityHub
                        </Link>

                        <nav className="flex space-x-2">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `text-gray-300 hover:text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                                        isActive ? 'text-white bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg' : 'hover:bg-slate-700'
                                    }`
                                }
                            >
                                🏠 Home
                            </NavLink>
                            <NavLink
                                to="/posts"
                                className={({ isActive }) =>
                                    `text-gray-300 hover:text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                                        isActive ? 'text-white bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg' : 'hover:bg-slate-700'
                                    }`
                                }
                            >
                                📝 Posts
                            </NavLink>
                            <NavLink
                                to="/create-post"
                                className={({ isActive }) =>
                                    `text-gray-300 hover:text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                                        isActive ? 'text-white bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg' : 'hover:bg-slate-700'
                                    }`
                                }
                            >
                                ✍️ Create
                            </NavLink>
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    `text-gray-300 hover:text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                                        isActive ? 'text-white bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg' : 'hover:bg-slate-700'
                                    }`
                                }
                            >
                                ℹ️ About
                            </NavLink>
                        </nav>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <Outlet />
            </main>

            <footer className="bg-gradient-to-r from-slate-900 to-slate-800 border-t border-blue-500/20 mt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="text-center text-gray-400 text-sm">
                        <p>✨ &copy; 2026 CommunityHub | Built with ❤️ using React & Tailwind CSS</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Layout;