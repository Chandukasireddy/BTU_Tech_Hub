import React from 'react'

const SectionJoin: React.FC = () => {
  return (
    <section id="join" className="py-20 md:py-28">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Ready to Be a Hub Member?</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Join our community of builders and innovators. Our inaugural meeting is on <strong>October 15th</strong>. Sign up to get updates and join our Discord server to connect with the team.</p>
        <div className="mt-8">
          <a href="https://discord.gg/2epbq5kt" className="bg-blue-500 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-blue-600 transition duration-300 shadow-lg" target="_blank" rel="noopener noreferrer">Join Discord</a>
        </div>
      </div>
    </section>
  )
}

export default SectionJoin