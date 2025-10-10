import React from 'react'

const SectionMission: React.FC = () => {
  return (
    <section id="mission" className="py-20 md:py-28">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
          Bridging the Gap Between <br />
          <span className="text-blue-500">Theory & Real-World Impact</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          We are a student-led collective dedicated to turning academic knowledge into tangible professional assets by <strong>solving local problems digitally</strong> and fostering an entrepreneurial mindset.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Building & Research</h3>
            <p className="text-gray-600">Deliver tangible, portfolio-ready tech projects and engage in meaningful research work to push the boundaries of knowledge.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Local Collaboration</h3>
            <p className="text-gray-600">Connect with local organizations and communities to digitally solve their problems, putting your skills into practical use and generating real impact.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Entrepreneurial Mindset</h3>
            <p className="text-gray-600">Ignite the spirit of innovation and enterprise, encouraging members to develop solutions that can scale into future startups or impactful ventures.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionMission