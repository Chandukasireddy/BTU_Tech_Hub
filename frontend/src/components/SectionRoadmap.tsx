import React, { useState } from 'react'
import RoadmapChart from './RoadmapChart'
import { allEvents, EventItem } from '../utils/roadmapData'

const SectionRoadmap: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'projects' | 'careers'>('all')

  const filterEvents = (f: typeof filter): EventItem[] => {
    if (f === 'all') return allEvents
    if (f === 'projects') {
      return allEvents.filter(e => e.category === 'projects' || e.category === 'setup' || e.category === 'social')
    }
    if (f === 'careers') {
      return allEvents.filter(e => e.category === 'careers' || e.category === 'setup' || e.category === 'social')
    }
    return allEvents
  }

  const filtered = filterEvents(filter)

  const btnClass = (active: boolean) => active ? 'bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold shadow' : 'bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-300'

  return (
    <section id="roadmap" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Winter Semester 2025/26 Roadmap</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Interactive timeline with filters — click to focus on specific tracks.</p>
        </div>

        <div className="flex justify-center space-x-2 md:space-x-4 mb-8">
          <button id="filter-all" onClick={() => setFilter('all')} className={btnClass(filter==='all')}>All Events</button>
          <button id="filter-projects" onClick={() => setFilter('projects')} className={btnClass(filter==='projects')}>Projects Track</button>
          <button id="filter-careers" onClick={() => setFilter('careers')} className={btnClass(filter==='careers')}>Careers Track</button>
        </div>

        <RoadmapChart events={filtered} />
      </div>
    </section>
  )
}

export default SectionRoadmap