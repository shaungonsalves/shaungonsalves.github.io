import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { resumeData } from './assets/resumeData';

var BG_IMAGE_URL='https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80';

function App() {
  return (
    
      <div 
        className="min-h-screen w-full bg-cover bg-center flex items-center justify-center"
        style={{ 
          backgroundImage: `url(${BG_IMAGE_URL})`,
          backgroundSize: "cover",
        }}
      >
        {/* Translucent card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 max-w-3xl mx-4 text-center shadow-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{resumeData.name}</h1>
          <p className="text-lg md:text-xl text-gray-800 mb-8">{resumeData.headline}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              Download PDF
            </button>
            <button className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition">
              LinkedIn
            </button>
          </div>
        </div>
      </div>
    
  );
}

export default App
