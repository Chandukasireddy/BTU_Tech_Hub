import React from 'react'

const SectionTeam: React.FC = () => {
  return (
    <section id="team" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Core Team Structure</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">We operate with an agile core team to ensure we stay focused on our mission.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg text-center border border-gray-200">
            <h4 className="text-xl font-bold text-gray-800">Lead Organizer</h4>
            <p className="mt-2 text-gray-600">Sets overall vision and external communication.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg text-center border border-gray-200">
            <h4 className="text-xl font-bold text-gray-800">Projects & Research Lead</h4>
            <p className="mt-2 text-gray-600">Scopes and mentors collaborative projects and research groups.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg text-center border border-gray-200">
            <h4 className="text-xl font-bold text-gray-800">Career Development Lead</h4>
            <p className="mt-2 text-gray-600">Designs career-focused cohorts and workshops.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg text-center border border-gray-200">
            <h4 className="text-xl font-bold text-gray-800">Outreach & Platform Lead</h4>
            <p className="mt-2 text-gray-600">Manages community and member onboarding.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionTeam