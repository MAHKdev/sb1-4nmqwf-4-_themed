import BackgroundBlurry from '@/components/backgroundsBlurry';
import { UsersRound, Heart, Zap, CheckCircle } from 'lucide-react';
import AffiliateRegisterForm from '@/components/affiliates/AffiliateRegisterForm';

import { getSEOTags } from "@/lib/seo";
import { Suspense } from 'react';
export const metadata = getSEOTags({
    title: "Careers",
    description: "Join the Kidodo team and take your stake in contemporary app development for the EdTech sector.",
});

export default function Broker() {

    const careers = [
        {
            title: 'Senior UX Designer',
            brief: 'Join our dynamic team as a Senior UX Designer and lead the creation of seamless user experiences by bridging 3D and 2D animations into a cohesive and innovative brand identity.',
            skills: [
                'Proficiency in UX design tools (Figma, Adobe XD, or Sketch).',
                'Expertise in 3D modeling and animation tools (Blender, Cinema 4D, or similar).',
                'Strong understanding of 2D animation principles and tools (Adobe After Effects, Lottie, or similar).',
                'Proven ability to interpret and integrate brand guidelines into interactive designs.',
                'Knowledge of HTML, CSS, and basic JavaScript to collaborate with developers effectively.',
                'Excellent communication and storytelling skills to present designs and concepts.'
            ],
            dailyjob: [
                'Collaborate with cross-functional teams to conceptualize and create user-centric interfaces.',
                'Design and prototype 3D and 2D animations that align with the brand identity.',
                'Conduct user research and usability testing to refine designs and animations.',
                'Work closely with developers to ensure smooth implementation of animations in the final product.',
                'Iterate on designs based on feedback and analytics to enhance user engagement.'
            ],
            benefits: [
                'Competitive salary and performance-based bonuses.',
                'Opportunities for professional development and upskilling.',
                'Access to cutting-edge tools and resources for design innovation.',
                'Flexible working hours and remote work options.',
                'Collaborative and inclusive company culture that values creativity.'
            ],
            workspace: 'Our creative studio offers an open and inspiring environment equipped with state-of-the-art technology to support your creative process. Remote work options are available, ensuring flexibility to match your workflow preferences.'
        },
        {
            title: 'PR Specialist – B2B Global',
            brief: 'We are looking for a PR Specialist with expertise in B2B communication to elevate our global brand presence and establish impactful relationships across key markets.',
            skills: [
                'Proven experience in B2B PR or communications at a global level.',
                'Strong understanding of media relations and public messaging strategies.',
                'Excellent written and verbal communication skills, with fluency in English (additional languages are a plus).',
                'Ability to craft compelling press releases, media kits, and thought leadership pieces.',
                'Strong organizational skills to manage multiple campaigns across regions.',
                'Familiarity with analytics tools to measure PR effectiveness (e.g., Google Analytics, Meltwater).'
            ],
            dailyjob: [
                'Develop and execute comprehensive PR campaigns to enhance brand reputation in B2B sectors.',
                'Build and nurture relationships with global media outlets, influencers, and industry analysts.',
                'Collaborate with internal teams to align PR initiatives with business goals and marketing strategies.',
                'Monitor industry trends and provide insights to shape messaging strategies.',
                'Analyze the success of PR campaigns and provide actionable recommendations for improvement.'
            ],
            benefits: [
                'Competitive salary and growth opportunities.',
                'Access to advanced PR tools and resources.',
                'Collaborative team with a global outlook.'
            ],
            workspace: 'Enjoy the flexibility of remote work while collaborating with a diverse and driven team. Our environment encourages creativity and innovation in every aspect of your work.'
        }
    ];


    return (
        <div className="container mx-auto relative gap-10">
            <section className="py-8 flex w-full flex-col">
                <h1 className="text-5xl font-bold">Careers</h1>
                <p className="py-4">Join the Kidodo team and take your stake in contemporary app development for the EdTech sector.</p>
            </section>
            <section className="py-8 flex w-full flex-col gap-10">
                <h2 className="text-3xl font-semibold py-4">Open Roles</h2>
                {careers.map((career, index) => (
                    <div key={index + career.title} className="card flex w-full flex-col ">
                        {/* Hero Section */}
                        <BackgroundBlurry />

                        <div className="card-body flex flex-col">
                            <h1 className="text-5xl font-bold">{career.title}</h1>
                            <p className="py-4">{career.brief}</p>
                            <h2 className="text-3xl font-semibold py-4">Skills</h2>
                            <div className="flex flex-col text-left gap-4">
                                {career.skills.map((item, index) => (
                                    <div key={index} className=" flex flex-col">
                                        <p >{item}</p>
                                    </div>
                                ))}
                            </div>
                            <h2 className="text-3xl font-semibold py-4">Daily Job</h2>
                            <div className="flex flex-col text-left gap-4">
                                {career.dailyjob.map((item, index) => (
                                    <div key={index} className=" flex flex-col">
                                        <p >{item}</p>
                                    </div>
                                ))}
                            </div>
                            <h2 className="text-3xl font-semibold py-4 relative">Benefits</h2>
                            <div className="flex flex-col text-left gap-4">
                                {career.benefits.map((item, index) => (
                                    <div key={index} className=" flex flex-col">
                                        <p >{item}</p>
                                    </div>
                                ))}
                                <BackgroundBlurry />

                            </div>
                            <h2 className="text-3xl font-semibold py-4">Workspace</h2>
                            <p>{career.workspace}</p>

                        </div>
                    </div>
                ))}

            </section>


        </div>
    );
}