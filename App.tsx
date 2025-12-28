
import React from 'react';
import { Mail, Twitter, Linkedin, Github } from 'lucide-react';
import { HighlightText } from './components/HighlightText';
import { DotGrid } from './components/DotGrid';
import { Blob } from './components/Blob';
import { SPEAKING_ENGAGEMENTS, BLOG_POSTS, COLORS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative overflow-hidden pb-20">
      {/* Decorative Blobs */}
      <Blob color={COLORS.pink} className="absolute -top-20 -right-20 w-[600px] h-[600px] opacity-80 pointer-events-none" />
      <Blob color={COLORS.blue} className="absolute top-[800px] -left-40 w-[800px] h-[800px] opacity-60 pointer-events-none" />
      <Blob color={COLORS.green} className="absolute top-[1800px] -right-40 w-[600px] h-[600px] opacity-50 pointer-events-none" />

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-6 pt-20 relative z-10">
        
        {/* Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-32">
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight leading-none text-slate-900 mb-2">
              <span className="relative">
                Sasha Solomon
                <div className="absolute -bottom-2 left-0 w-3/4 h-3 bg-[#22C55E]" />
              </span>
              <br />
              <span className="mt-4 block">Software Engineer</span>
            </h1>

            <div className="bg-[#4B56D2] p-8 text-white text-lg md:text-xl font-medium leading-relaxed rounded-sm shadow-xl max-w-2xl">
              <p className="mb-6">
                I'm a Staff Software Engineer and an industry expert in GraphQL with a focus on data and schema modeling.
              </p>
              <p>
                I have experience as a Tech Lead designing, and scaling systems, building robust and usable APIs, and operating those systems and APIs at scale.
              </p>
            </div>

            <div className="bg-[#4B56D2] p-8 text-white text-md md:text-lg leading-relaxed rounded-sm shadow-xl max-w-2xl">
              <p className="mb-4">
                I was previously a Staff Software engineer and co-Tech Lead of the Core API Platform Team at <a href="#" className="underline font-bold hover:text-pink-300">Twitter</a> helping build the next generation API with GraphQL and Scala.
              </p>
              <p className="mb-4">
                I served on the GraphQL Governing Board as a representative of Twitter, as well as on the Technical Steering Committee for GraphQL.
              </p>
              <p>
                I also worked at <a href="#" className="underline font-bold hover:text-pink-300">Medium</a> as the Tech Lead of the Platform Team, jumpstarting Medium's move to GraphQL.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 relative mt-12 lg:mt-0 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Image Frame */}
              <div className="relative z-20 w-80 h-80 overflow-hidden bg-gray-200 border-8 border-white shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/sasha/400/400" 
                  alt="Sasha Solomon" 
                  className="w-full h-full object-cover filter sepia-[0.3]"
                />
              </div>
              {/* Dot decoration */}
              <DotGrid className="absolute -left-12 top-1/2 -translate-y-1/2 z-10" rows={6} cols={3} />
              <DotGrid className="absolute -right-8 -bottom-8 z-30" rows={3} cols={8} />
            </div>
          </div>
        </section>

        {/* Speaking Section */}
        <section className="mb-32">
          <div className="mb-12">
            <HighlightText color={COLORS.blue} className="text-4xl md:text-5xl">
              Speaking
            </HighlightText>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {SPEAKING_ENGAGEMENTS.map((talk) => (
              <div key={talk.id} className="group cursor-pointer">
                <div className="aspect-video bg-gray-300 border border-gray-400 overflow-hidden relative shadow-sm group-hover:shadow-md transition-shadow flex items-center justify-center">
                   {/* Placeholder icon as seen in the mockup */}
                   <div className="text-gray-400 opacity-50 flex flex-col items-center">
                     <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                   </div>
                   {/* Real image overlay (hidden to match the "placeholder" request but functional) */}
                   <img src={talk.thumbnail} alt={talk.title} className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-20 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Posts Section */}
        <section className="mb-32">
          <div className="mb-12 flex items-center justify-between">
            <HighlightText color={COLORS.pink} className="text-4xl md:text-5xl">
              Posts
            </HighlightText>
            <DotGrid className="hidden md:grid" rows={3} cols={2} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
            {BLOG_POSTS.map((post) => (
              <a key={post.id} href={post.link} className="group block">
                <div className="aspect-[4/3] bg-gray-100 border border-gray-200 mb-4 overflow-hidden shadow-md group-hover:shadow-xl transition-shadow">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                </div>
                <div className="space-y-2">
                   <h3 className="text-sm font-extrabold uppercase tracking-widest text-slate-800 leading-tight border-b-2 border-slate-900 pb-2">
                    {post.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>
          
          {/* Decorative Dot Grid at bottom right of posts */}
          <div className="flex justify-end mt-8">
            <DotGrid rows={5} cols={8} />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#FF5E8E] py-12 text-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <a href="mailto:sasha@sashatsolomon.com" className="flex items-center gap-3 font-bold hover:underline">
            <Mail size={20} /> sasha@sashatsolomon.com
          </a>
          <a href="#" className="flex items-center gap-3 font-bold hover:underline">
            <Twitter size={20} /> @sachee
          </a>
          <a href="#" className="flex items-center gap-3 font-bold hover:underline">
            <span className="font-serif text-xl">M</span> sachee
          </a>
          <a href="#" className="flex items-center gap-3 font-bold hover:underline">
            <Linkedin size={20} /> in/sasha
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;
