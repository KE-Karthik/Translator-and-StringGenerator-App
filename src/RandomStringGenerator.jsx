import { useState, useCallback, useEffect } from 'react';

const RandomStringGenerator = () => {
  const [length, setLength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [generatedString, setGeneratedString] = useState('');
  const [history, setHistory] = useState([]);

  // Character sets
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';
  const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';

  // Generate random string using useCallback
  const generateString = useCallback(() => {
    let characters = letters;
    if (includeNumbers) characters += numbers;
    if (includeSymbols) characters += symbols;

    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    setGeneratedString(result);
    setHistory((prev) => [result, ...prev.slice(0, 9)]); // Keep last 10
  }, [length, includeNumbers, includeSymbols]);

  // Auto-generate on mount and when options change using useEffect
  useEffect(() => {
    generateString();
  }, [generateString]);

  // Copy to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedString);
    alert('Copied to clipboard! ✅');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            🎲 Random String Generator
          </h1>
          <p className="text-gray-600 text-lg">
            Generate secure random strings for passwords, tokens, or IDs
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
          {/* Generated String Display */}
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-6 text-white">
            <p className="text-sm font-medium mb-2">Generated String:</p>
            <div className="flex items-center justify-between">
              <p className="text-2xl font-mono font-bold break-all">
                {generatedString || 'Click Generate!'}
              </p>
              <button
                onClick={copyToClipboard}
                className="ml-4 bg-white text-purple-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition flex-shrink-0"
              >
                📋 Copy
              </button>
            </div>
          </div>

          {/* Length Slider */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              String Length: {length}
            </label>
            <input
              type="range"
              min="4"
              max="32"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>4</span>
              <span>32</span>
            </div>
          </div>

          {/* Options */}
          <div className="space-y-3">
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={includeNumbers}
                onChange={(e) => setIncludeNumbers(e.target.checked)}
                className="w-5 h-5 text-purple-600 rounded"
              />
              <span className="text-gray-700">Include Numbers (0-9)</span>
            </label>

            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={includeSymbols}
                onChange={(e) => setIncludeSymbols(e.target.checked)}
                className="w-5 h-5 text-purple-600 rounded"
              />
              <span className="text-gray-700">Include Symbols (!@#$%...)</span>
            </label>
          </div>

          {/* Generate Button */}
          <button
            onClick={generateString}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
          >
            🎲 Generate New String
          </button>

          {/* History */}
          {history.length > 0 && (
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-3">
                Recent History:
              </h3>
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {history.map((str, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 px-4 py-2 rounded-lg font-mono text-sm text-gray-700"
                  >
                    {str}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RandomStringGenerator;
