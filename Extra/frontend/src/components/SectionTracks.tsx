import React from 'react'

const SectionTracks: React.FC = () => {
  return (
    <section id="tracks" className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Core Tracks</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Everything we do is focused on two high-impact areas designed to provide maximum value and tangible outcomes for our members.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Track 1: Projects & Collaboration</h3>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <p className="text-blue-500 font-semibold text-sm">Oct 15 - Oct 29</p>
                <h4 className="text-xl font-bold mt-1">Phase 1: GenAI Sprint Kick-off</h4>
                <p className="mt-2 text-gray-600">6-week flagship project: building a Multi-Modal BTU Assistant using Gemini/LLaMA. Teams of 4-5 members.</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <p className="text-blue-500 font-semibold text-sm">Oct 30 - Nov 15</p>
                <h4 className="text-xl font-bold mt-1">Phase 2: Core Development</h4>
                <p className="mt-2 text-gray-600">Weekly check-ins focusing on industry-standard Git workflows and basic MLOps concepts.</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <p className="text-blue-500 font-semibold text-sm">Nov 16 - Dec 5</p>
                <h4 className="text-xl font-bold mt-1">Phase 3: Testing & Refinement</h4>
                <p className="mt-2 text-gray-600">Peer code review, optimization, documentation, and GitHub Readme creation.</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <p className="text-blue-500 font-semibold text-sm">Dec 13</p>
                <h4 className="text-xl font-bold mt-1">Project Demo Day</h4>
                <p className="mt-2 text-gray-600">Teams will showcase their functional assistant tool to the group.</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Track 2: Career & Skill Cohorts (4 Sessions)</h3>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <p className="text-blue-500 font-semibold text-sm">Oct 25</p>
                <h4 className="text-xl font-bold mt-1">Session 1: The Impact Resume</h4>
                <p className="mt-2 text-gray-600">Workshop on writing powerful, metrics-based resume bullet points.</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <p className="text-blue-500 font-semibold text-sm">Nov 8</p>
                <h4 className="text-xl font-bold mt-1">Session 2: Portfolio & Application Strategy</h4>
                <p className="mt-2 text-gray-600">Set up a compelling GitHub profile and portfolio; tailor applications for German tech companies.</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <p className="text-blue-500 font-semibold text-sm">Nov 22</p>
                <h4 className="text-xl font-bold mt-1">Session 3: Technical Interview Prep</h4>
                <p className="mt-2 text-gray-600">Mock interview sessions focused on explaining project experience and basics like OOP/Data Structures.</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <p className="text-blue-500 font-semibold text-sm">Dec 6</p>
                <h4 className="text-xl font-bold mt-1">Session 4: Networking & Industry Connect</h4>
                <p className="mt-2 text-gray-600">Professional networking, connecting with alumni, and structuring mentorship outreach via LinkedIn.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionTracks