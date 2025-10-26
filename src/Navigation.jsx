import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8 items-center">
            <Link
              to="/"
              className="text-gray-900 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition"
            >
              🌍 Translator
            </Link>
            <Link
              to="/string-generator"
              className="text-gray-900 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition"
            >
              🎲 String Generator
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
