import React from 'react'
import Nav from './components/Nav'
import SectionMission from './components/SectionMission'
import SectionRoadmap from './components/SectionRoadmap'
import SectionTracks from './components/SectionTracks'
import SectionTeam from './components/SectionTeam'
import SectionJoin from './components/SectionJoin'
import Footer from './components/Footer'

const App: React.FC = () => {
  return (
    <div className="font-inter bg-serene-bg text-gray-800 antialiased">
      <Nav />
      <main>
        <SectionMission />
        <SectionRoadmap />
        <SectionTracks />
        <SectionTeam />
        <SectionJoin />
      </main>
      <Footer />
    </div>
  )
}

export default App