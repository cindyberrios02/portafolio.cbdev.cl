export default function App() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="border border-gray-800 bg-gray-950 p-8">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          
          <div className="font-mono">
            <span className="text-gray-500">$</span>
            <span className="text-green-400 ml-2">echo</span>
            <span className="text-white ml-2">"Hola Mundo"</span>
          </div>
          
          <div className="mt-4 text-2xl font-mono text-white">
            &gt; Hola Mundo
          </div>
          
          <div className="mt-8 flex items-center">
            <div className="w-2 h-5 bg-green-400 animate-pulse"></div>
          </div>
        </div>
        
        <div className="mt-4 text-gray-600 text-sm font-mono text-center">
          React v18 • Build successful
        </div>
      </div>
    </div>
  );
}