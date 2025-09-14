import React from 'react'

type VideoItem = {
  id: string
  title: string
  description: string
  url: string
  embedId: string
  type: 'short' | 'full'
}

const videos: VideoItem[] = [
  {
    id: '1',
    title: 'Quick Parking Solution',
    description: 'Watch how Let Me Goo solves parking conflicts in seconds',
    url: 'https://youtube.com/shorts/uznyyvg0ylg',
    embedId: 'uznyyvg0ylg',
    type: 'short'
  },
  {
    id: '2',
    title: 'Instant Notification',
    description: 'See the magic of instant vehicle owner notification',
    url: 'https://youtube.com/shorts/GKwtetqt7ws',
    embedId: 'GKwtetqt7ws',
    type: 'short'
  },
  {
    id: '3',
    title: 'Stress-Free Parking',
    description: 'No more honking, no more waiting, just tap and go',
    url: 'https://youtube.com/shorts/C1XnBxphirk',
    embedId: 'C1XnBxphirk',
    type: 'short'
  },
  {
    id: '4',
    title: 'Privacy Protection',
    description: 'Your privacy protected while solving parking issues',
    url: 'https://youtube.com/shorts/QQlpBFB_Uag',
    embedId: 'QQlpBFB_Uag',
    type: 'short'
  },
  {
    id: '5',
    title: 'Community Impact',
    description: 'Making parking better for everyone in the community',
    url: 'https://youtube.com/shorts/xGZX6kIw1QE',
    embedId: 'xGZX6kIw1QE',
    type: 'short'
  },
  {
    id: '6',
    title: 'Complete Let Me Goo Experience',
    description: 'Discover the full potential of our parking solution',
    url: 'https://www.youtube.com/watch?v=raUJ14FmLyg',
    embedId: 'raUJ14FmLyg',
    type: 'full'
  }
]

export default function HallOfFamePage() {
  return (
    <main className="min-h-screen bg-gray-50" style={{ fontFamily: 'General Sans, sans-serif' }}>
      {/* Hero Section */}
      <section className="px-6 pt-24 pb-16">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-general-sans-medium text-black mb-6">
            Hall of Fame
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover amazing experiences and stories from our Let Me Goo community.<br />
            Watch how people are using our app to create stress-free parking moments.
          </p>
        </div>
      </section>

      {/* Featured Video Section */}
      <section className="px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-general-sans-medium text-black mb-6">
                  Complete Experience
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Watch our comprehensive demonstration of how Let Me Goo transforms parking conflicts 
                  into seamless solutions. See the complete journey from problem to resolution.
                </p>
                <a
                  href={videos[5].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-[#3B36F4] text-white font-medium rounded-full hover:bg-[#2823c7] transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Watch Full Experience
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-9-4V8a3 3 0 013-3h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 01.293.707V16a3 3 0 01-3 3H8a3 3 0 01-3-3v-8z" />
                  </svg>
                </a>
              </div>
              <div className="relative">
                <div className="aspect-video bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
                  <iframe
                    src={`https://www.youtube.com/embed/${videos[5].embedId}`}
                    title={videos[5].title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Experiences Grid */}
      <section className="px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-general-sans-medium text-black mb-4">
              Quick Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Short videos showcasing real-world Let Me Goo solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {videos.slice(0, 5).map((video, index) => (
              <div key={video.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative">
                  <div className="aspect-video bg-gray-100 relative overflow-hidden">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.embedId}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-[#3B36F4] text-white text-xs px-3 py-1 rounded-full font-medium">
                      Short
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-[#3B36F4] transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {video.description}
                  </p>
                  <a
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#3B36F4] hover:text-[#2823c7] transition-colors duration-200 text-sm font-medium"
                  >
                    Watch on YouTube
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-[#3B36F4] to-[#2823c7] rounded-3xl p-8 lg:p-12 text-center text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl lg:text-4xl font-general-sans-medium mb-6">
                Share Your Experience
              </h2>
              <p className="text-lg lg:text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
                Have you used Let Me Goo for something amazing? We&apos;d love to feature your story 
                in our Hall of Fame and inspire others!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-[#3B36F4] font-semibold rounded-full hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Share Your Story
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <a
                  href="/download"
                  className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-[#3B36F4] transition-all duration-200"
                >
                  Download App
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l2.414 2.414A1 1 0 0116 4v4" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full transform translate-x-32 -translate-y-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full transform -translate-x-24 translate-y-24"></div>
          </div>
        </div>
      </section>
    </main>
  )
}
