import React from 'react'

const Nav: React.FC = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">
          BTU <span className="text-blue-500">Tech Hub</span>
        </div>
        <div className="hidden md:flex space-x-8 text-gray-600">
          <a href="#mission" className="nav-link hover:text-blue-500">Mission</a>
          <a href="#roadmap" className="nav-link hover:text-blue-500">Roadmap</a>
          <a href="#tracks" className="nav-link hover:text-blue-500">Core Tracks</a>
          <a href="#team" className="nav-link hover:text-blue-500">Team</a>
          <a href="#join" className="nav-link hover:text-blue-500">Join Us</a>
          <a href="https://discord.gg/2epbq5kt" className="nav-link hover:text-blue-500 font-semibold" target="_blank" rel="noopener noreferrer">Discord</a>
        </div>
      </nav>
    </header>
  )
}

export default Nav