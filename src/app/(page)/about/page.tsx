import { Users, Bot, Trophy, Globe, Clock, Briefcase } from 'lucide-react'
import Image from 'next/image'
import BackgroundBlurry from '@/components/backgroundsBlurry'
import Location from '@/components/locations'

import { getSEOTags } from "@/lib/seo";
export const metadata = getSEOTags({
  title: "About",
  description: "Find out more about who is behind the scenes, where we physically operate and our team history.",
});

//Kidodo - empowering parenthood through integrative technology since 2012

const About = () => {
  const avatars = [
    { src: "/avatars/myAvatar.svg", alt: "HUGO", isbot: false, name: "Hugo", function: "CTO" },
    { src: "/avatars/myAvatar (1)_victor.svg", alt: "myAvatar", isbot: false, name: "Dave t.W", function: "CMO" },
    { src: "/avatars/myAvatar (2)_Pradeep.svg", alt: "myAvatar", isbot: false, name: "Pradeep", function: "Quant" },
    { src: "/avatars/myAvatar (3)_bot1.svg", alt: "myAvatar", isbot: true, name: "Bot", function: "Analyst" },
    { src: "/avatars/myAvatar (3)_bot1.svg", alt: "myAvatar", isbot: true, name: "Bot", function: "Screener" },
    { src: "/avatars/myAvatar (4)_bot2.svg", alt: "myAvatar", isbot: true, name: "Bot", function: "Strategist" },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="hero min-h-[60vh] bg-base-200 rounded-box my-8">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold mb-8">About Us</h1>
            <div className="relative w-40 h-40 mx-auto">
              <Image
                src="/logo_dodoball.svg"
                alt="badge"
                width={200}
                height={200}
                className="mask mask-squircle"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="my-16">
        <div className="flex items-center gap-2 mb-8">
          <Users className="w-8 h-8 text-primary" />
          <h2 className="text-3xl font-bold">Our Team</h2>
        </div>
        <BackgroundBlurry />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {avatars.map((avatar, index) => (
            <div key={index} className="card bg-base-100 shadow-xl">
              <figure className="px-4 pt-4">
                <div className="avatar">
                  <div className="w-24 rounded-xl ring ring-primary ring-offset-base-100 ring-offset-2">
                    <Image
                      src={avatar.src}
                      alt={avatar.alt}
                      width={200}
                      height={200}
                      className="filter sepia"
                    />
                  </div>
                </div>
              </figure>
              <div className="card-body items-center text-center p-4">
                <h3 className="card-title text-sm">{avatar.name}</h3>
                <div className="flex gap-2">
                  {avatar.isbot && (
                    <div className="badge badge-primary gap-1">
                      <Bot className="w-3 h-3" />
                      BOT
                    </div>
                  )}
                  <div className="badge badge-secondary">{avatar.function}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="my-16">
        <div className="flex items-center gap-2 mb-8">
          <Clock className="w-8 h-8 text-primary" />
          <h2 className="text-3xl font-bold">Our Journey</h2>
        </div>
        <div className="px-4">
          <ul className="timeline timeline-vertical">
            <li className="timeline-item">
              <div className="timeline-middle">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>
              <div className="timeline-start timeline-box">2010</div>
              <div className="timeline-end">Discretionary Trading</div>
            </li>
            <li className="timeline-item">
              <div className="timeline-middle">
                <Trophy className="w-5 h-5 text-primary" />
              </div>
              <div className="timeline-start">2017</div>
              <div className="timeline-end timeline-box">Algorithmic Strategy</div>
            </li>
            <li className="timeline-item">
              <div className="timeline-middle">
                <Bot className="w-5 h-5 text-primary" />
              </div>
              <div className="timeline-start timeline-box">2023</div>
              <div className="timeline-end">AI for Strategy Tuning</div>
            </li>
            <li className="timeline-item">
              <div className="timeline-middle">
                <Bot className="w-5 h-5 text-primary" />
              </div>
              <div className="timeline-start">2024</div>
              <div className="timeline-end timeline-box">Fully Automated Bot</div>
            </li>
            <li className="timeline-item">
              <div className="timeline-middle">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>
              <div className="timeline-start timeline-box">2024</div>
              <div className="timeline-end">Asset Management</div>
            </li>
          </ul>
        </div>
      </section>

      {/* Locations Section */}
      <section className="my-16" id="locations">
        <div className="flex items-center gap-2 mb-8">
          <Globe className="w-8 h-8 text-primary" />
          <h2 className="text-3xl font-bold">Our Global Headquarters</h2>
        </div>
        <BackgroundBlurry />
        <Location />
      </section>
    </div>
  )
}

export default About