function Card({ title, children, className = '' }) {
    return (
        <div className={`bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl shadow-lg border border-blue-500/20 p-6 hover:border-purple-500/50 transition-all duration-300 ${className}`}>
            {title && (
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                    {title}
                </h3>
            )}
            <div className="text-gray-400">
                {children}
            </div>
        </div>
    );
}

export default Card;