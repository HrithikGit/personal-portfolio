export default function TestPage() {
  return (
    <div className="p-4">
      {/* Test with direct colors */}
      <div className="bg-blue-500 text-white p-4 rounded-lg mb-4">
        <h1 className="text-2xl font-bold mb-2">Direct Color Test</h1>
        <p className="mb-4 text-gray-200">Testing with direct Tailwind colors.</p>
        <div className="space-y-4">
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors">
            Green Button
          </button>
          <button className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition-colors">
            Purple Button
          </button>
        </div>
      </div>

      {/* Test with CSS variables */}
      <div className="p-4 rounded-lg mb-4" style={{ backgroundColor: 'var(--primary-color)', color: 'var(--primary-text)' }}>
        <h1 className="text-2xl font-bold mb-2">CSS Variable Test</h1>
        <p className="mb-4" style={{ color: 'var(--muted-text)' }}>Testing with CSS variables.</p>
        <div className="space-y-4">
          <button 
            className="px-4 py-2 rounded transition-colors"
            style={{ 
              backgroundColor: 'var(--secondary-color)',
              color: 'var(--secondary-text)'
            }}
          >
            Secondary Button
          </button>
          <button 
            className="px-4 py-2 rounded transition-colors"
            style={{ 
              backgroundColor: 'var(--accent-color)',
              color: 'var(--accent-text)'
            }}
          >
            Accent Button
          </button>
        </div>
      </div>
    </div>
  );
} 