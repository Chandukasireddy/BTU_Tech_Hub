import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; 2025 BTU Tech Hub. An informal student collective at BTU Cottbus-Senftenberg.</p>
        <p className="mt-2">Join the conversation on <a href="https://discord.gg/2epbq5kt" className="underline hover:text-gray-200" target="_blank" rel="noopener noreferrer">Discord</a>.</p>
      </div>
    </footer>
  )
}

export default Footer