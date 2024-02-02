import AboutSection from '@/components/ui/aboutSection'
import { Button } from '@/components/ui/button'
import { Navbar } from '@/components/ui/navbar'
import ProjectsSection from '@/components/ui/projectsSection'
import WelcomeSection from '@/components/ui/welcomeSection'
import Image from 'next/image'

export default function Home() {
  return (
    // flex and flex col??
    <main className='flex flex-col min-h-screen bg-gray-800'> 
      <Navbar />
      <div className="mt-24 mx-auto py-3 px-10">
        <WelcomeSection />
        <AboutSection />
        <ProjectsSection />
      </div>
    </main>
  )
}
