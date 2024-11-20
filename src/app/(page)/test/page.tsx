'use client';

import { redirect } from 'next/navigation';

export default function Page() {

    return (
        <div className="h-96 flex-col justify-start items-start inline-flex">
            <div className="h-96 bg-white flex-col justify-start items-center flex">
                <div className="self-stretch h-16 px-16 border-b border-black justify-between items-center inline-flex">
                    <div className="justify-start items-center gap-6 flex">
                        <div className="w-20 h-9 relative">
                            <div className="w-16 h-9 left-[6.67px] top-0 absolute" />
                        </div>
                        <div className="justify-start items-center gap-8 flex">
                            <div className="text-black text-base font-normal font-['Roboto'] leading-normal">Home Page</div>
                            <div className="text-black text-base font-normal font-['Roboto'] leading-normal">Features</div>
                            <div className="text-black text-base font-normal font-['Roboto'] leading-normal">Testimonials</div>
                            <div className="justify-center items-center gap-1 flex">
                                <div className="text-black text-base font-normal font-['Roboto'] leading-normal">More Options</div>
                                <div className="w-6 h-6 relative" />
                            </div>
                        </div>
                    </div>
                    <div className="justify-center items-center gap-4 flex">
                        <div className="px-5 py-2 border border-black justify-center items-center gap-2 flex">
                            <div className="text-black text-base font-normal font-['Roboto'] leading-normal">Help</div>
                        </div>
                        <div className="px-5 py-2 bg-black border border-black justify-center items-center gap-2 flex">
                            <div className="text-white text-base font-normal font-['Roboto'] leading-normal">More</div>
                        </div>
                    </div>
                </div>
                <div className="self-stretch h-96 flex-col justify-start items-start flex">
                    <div className="self-stretch pl-16 pr-8 py-8 justify-start items-start gap-8 inline-flex">
                        <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
                            <div className="self-stretch text-black text-sm font-semibold font-['Roboto'] leading-tight">Explore Our App</div>
                            <div className="flex-col justify-start items-start gap-4 flex">
                                <div className="w-80 h-16 py-2 justify-start items-start gap-3 inline-flex">
                                    <div className="w-6 h-6 relative" />
                                    <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                                        <div className="self-stretch text-black text-base font-semibold font-['Roboto'] leading-normal">User Guide</div>
                                        <div className="self-stretch text-black text-sm font-normal font-['Roboto'] leading-tight">Discover how to motivate your kids effectively.</div>
                                    </div>
                                </div>
                                <div className="w-80 h-16 py-2 justify-start items-start gap-3 inline-flex">
                                    <div className="w-6 h-6 relative" />
                                    <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                                        <div className="self-stretch text-black text-base font-semibold font-['Roboto'] leading-normal">Rewards System</div>
                                        <div className="self-stretch text-black text-sm font-normal font-['Roboto'] leading-tight">Learn about our unique rewards program.</div>
                                    </div>
                                </div>
                                <div className="w-80 h-16 py-2 justify-start items-start gap-3 inline-flex">
                                    <div className="w-6 h-6 relative" />
                                    <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                                        <div className="self-stretch text-black text-base font-semibold font-['Roboto'] leading-normal">Parent Resources</div>
                                        <div className="self-stretch text-black text-sm font-normal font-['Roboto'] leading-tight">Helpful tips for engaged parenting.</div>
                                    </div>
                                </div>
                                <div className="w-80 h-16 py-2 justify-start items-start gap-3 inline-flex">
                                    <div className="w-6 h-6 relative" />
                                    <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                                        <div className="self-stretch text-black text-base font-semibold font-['Roboto'] leading-normal">Support Center</div>
                                        <div className="self-stretch text-black text-sm font-normal font-['Roboto'] leading-tight">Get assistance with any app-related issues.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
                            <div className="self-stretch text-black text-sm font-semibold font-['Roboto'] leading-tight">Join Our Community</div>
                            <div className="flex-col justify-start items-start gap-4 flex">
                                <div className="w-80 h-16 py-2 justify-start items-start gap-3 inline-flex">
                                    <div className="w-6 h-6 relative" />
                                    <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                                        <div className="self-stretch text-black text-base font-semibold font-['Roboto'] leading-normal">Blog Posts</div>
                                        <div className="self-stretch text-black text-sm font-normal font-['Roboto'] leading-tight">Read articles on parenting and motivation.</div>
                                    </div>
                                </div>
                                <div className="w-80 h-16 py-2 justify-start items-start gap-3 inline-flex">
                                    <div className="w-6 h-6 relative" />
                                    <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                                        <div className="self-stretch text-black text-base font-semibold font-['Roboto'] leading-normal">FAQ Section</div>
                                        <div className="self-stretch text-black text-sm font-normal font-['Roboto'] leading-tight">Find answers to common questions.</div>
                                    </div>
                                </div>
                                <div className="w-80 h-16 py-2 justify-start items-start gap-3 inline-flex">
                                    <div className="w-6 h-6 relative" />
                                    <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                                        <div className="self-stretch text-black text-base font-semibold font-['Roboto'] leading-normal">Contact Us</div>
                                        <div className="self-stretch text-black text-sm font-normal font-['Roboto'] leading-tight">Reach out for more information.</div>
                                    </div>
                                </div>
                                <div className="w-80 h-16 py-2 justify-start items-start gap-3 inline-flex">
                                    <div className="w-6 h-6 relative" />
                                    <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                                        <div className="self-stretch text-black text-base font-semibold font-['Roboto'] leading-normal">About Us</div>
                                        <div className="self-stretch text-black text-sm font-normal font-['Roboto'] leading-tight">Learn more about our mission.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
                            <div className="self-stretch text-black text-sm font-semibold font-['Roboto'] leading-tight">Stay Updated</div>
                            <div className="flex-col justify-start items-start gap-4 flex">
                                <div className="w-80 h-16 py-2 justify-start items-start gap-3 inline-flex">
                                    <div className="w-6 h-6 relative" />
                                    <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                                        <div className="self-stretch text-black text-base font-semibold font-['Roboto'] leading-normal">Newsletter</div>
                                        <div className="self-stretch text-black text-sm font-normal font-['Roboto'] leading-tight">Subscribe for the latest news and updates.</div>
                                    </div>
                                </div>
                                <div className="w-80 h-16 py-2 justify-start items-start gap-3 inline-flex">
                                    <div className="w-6 h-6 relative" />
                                    <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                                        <div className="self-stretch text-black text-base font-semibold font-['Roboto'] leading-normal">Events</div>
                                        <div className="self-stretch text-black text-sm font-normal font-['Roboto'] leading-tight">Join us for upcoming community events.</div>
                                    </div>
                                </div>
                                <div className="w-80 h-16 py-2 justify-start items-start gap-3 inline-flex">
                                    <div className="w-6 h-6 relative" />
                                    <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                                        <div className="self-stretch text-black text-base font-semibold font-['Roboto'] leading-normal">Partnerships</div>
                                        <div className="self-stretch text-black text-sm font-normal font-['Roboto'] leading-tight">Explore collaboration opportunities with us.</div>
                                    </div>
                                </div>
                                <div className="w-80 h-16 py-2 justify-start items-start gap-3 inline-flex">
                                    <div className="w-6 h-6 relative" />
                                    <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                                        <div className="self-stretch text-black text-base font-semibold font-['Roboto'] leading-normal">Careers</div>
                                        <div className="self-stretch text-black text-sm font-normal font-['Roboto'] leading-tight">Join our team and make a difference.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
                            <div className="self-stretch text-black text-sm font-semibold font-['Roboto'] leading-tight">Get Involved</div>
                            <div className="flex-col justify-start items-start gap-4 flex">
                                <div className="py-2 justify-start items-start gap-3 inline-flex">
                                    <div className="w-6 h-6 relative" />
                                    <div className="w-72 flex-col justify-start items-start inline-flex">
                                        <div className="self-stretch text-black text-base font-semibold font-['Roboto'] leading-normal">Feedback</div>
                                        <div className="self-stretch text-black text-sm font-normal font-['Roboto'] leading-tight">We value your thoughts and suggestions.</div>
                                    </div>
                                </div>
                                <div className="w-80 h-16 py-2 justify-start items-start gap-3 inline-flex">
                                    <div className="w-6 h-6 relative" />
                                    <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                                        <div className="self-stretch text-black text-base font-semibold font-['Roboto'] leading-normal">Privacy Policy</div>
                                        <div className="self-stretch text-black text-sm font-normal font-['Roboto'] leading-tight">Understand how we protect your information.</div>
                                    </div>
                                </div>
                                <div className="w-80 h-16 py-2 justify-start items-start gap-3 inline-flex">
                                    <div className="w-6 h-6 relative" />
                                    <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                                        <div className="self-stretch text-black text-base font-semibold font-['Roboto'] leading-normal">Terms of Use</div>
                                        <div className="self-stretch text-black text-sm font-normal font-['Roboto'] leading-tight">Read our terms for using the app.</div>
                                    </div>
                                </div>
                                <div className="w-80 h-16 py-2 justify-start items-start gap-3 inline-flex">
                                    <div className="w-6 h-6 relative" />
                                    <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                                        <div className="self-stretch text-black text-base font-semibold font-['Roboto'] leading-normal">Sitemap</div>
                                        <div className="self-stretch text-black text-sm font-normal font-['Roboto'] leading-tight">Navigate our website easily.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="self-stretch px-16 py-4 bg-[#eeeeee] border-b border-black justify-between items-start inline-flex">
                        <div className="justify-start items-start gap-2 flex">
                            <div className="text-black text-base font-normal font-['Roboto'] leading-normal">Ready to get started?</div>
                            <div className="text-black text-base font-normal font-['Roboto'] underline leading-normal">Sign up for free</div>
                        </div>
                        <div className="justify-start items-start gap-6 flex">
                            <div className="justify-center items-center gap-2 flex">
                                <div className="w-6 h-6 relative" />
                                <div className="text-black text-base font-normal font-['Roboto'] leading-normal">Join</div>
                            </div>
                            <div className="justify-center items-center gap-2 flex">
                                <div className="w-6 h-6 relative" />
                                <div className="text-black text-base font-normal font-['Roboto'] leading-normal">Login</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-96 h-96 bg-black justify-center items-center inline-flex">
                <div className="w-96 flex-col justify-start items-center gap-8 inline-flex">
                    <div className="self-stretch h-52 flex-col justify-start items-center gap-6 flex">
                        <div className="self-stretch text-center text-white text-6xl font-bold font-['Roboto'] leading-10">Empower Your Kids with Fun Rewards</div>
                        <div className="self-stretch text-center text-white text-lg font-normal font-['Roboto'] leading-relaxed">Kidodo is the ultimate motivational app designed for parents and kids. Transform daily tasks into exciting rewards that inspire and engage your children.</div>
                    </div>
                    <div className="justify-start items-start gap-4 inline-flex">
                        <div className="px-6 py-3 bg-white border border-white justify-center items-center gap-2 flex">
                            <div className="text-black text-base font-normal font-['Roboto'] leading-normal">Get Started</div>
                        </div>
                        <div className="px-6 py-3 border border-white justify-center items-center gap-2 flex">
                            <div className="text-white text-base font-normal font-['Roboto'] leading-normal">Learn More</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-96 px-16 py-28 bg-white flex-col justify-start items-start gap-20 flex">
                <div className="self-stretch justify-start items-start gap-20 inline-flex">
                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
                        <div className="justify-start items-center inline-flex">
                            <div className="text-black text-base font-semibold font-['Roboto'] leading-normal">Empower</div>
                        </div>
                        <div className="self-stretch text-black text-5xl font-bold font-['Roboto'] leading-10">Unlock Your Child's Potential with Kidodo</div>
                    </div>
                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-8 inline-flex">
                        <div className="self-stretch h-72 flex-col justify-start items-start gap-8 flex">
                            <div className="self-stretch text-black text-lg font-normal font-['Roboto'] leading-relaxed">Kidodo transforms parenting into a rewarding journey. Engage your kids with fun tasks and meaningful rewards.</div>
                            <div className="self-stretch h-48 flex-col justify-start items-start gap-4 flex">
                                <div className="self-stretch py-2 justify-start items-start gap-6 inline-flex">
                                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
                                        <div className="w-12 h-12 relative" />
                                        <div className="self-stretch text-black text-xl font-bold font-['Roboto'] leading-7">For Parents</div>
                                        <div className="self-stretch text-black text-base font-normal font-['Roboto'] leading-normal">Foster responsibility and motivation in your children through structured tasks and rewards.</div>
                                    </div>
                                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
                                        <div className="w-12 h-12 relative" />
                                        <div className="self-stretch text-black text-xl font-bold font-['Roboto'] leading-7">For Kids</div>
                                        <div className="self-stretch text-black text-base font-normal font-['Roboto'] leading-normal">Enjoy a sense of achievement while trading tasks for exciting rewards every day.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="justify-start items-center gap-6 inline-flex">
                            <div className="px-6 py-3 border border-black justify-center items-center gap-2 flex">
                                <div className="text-black text-base font-normal font-['Roboto'] leading-normal">Join</div>
                            </div>
                            <div className="justify-center items-center gap-2 flex">
                                <div className="text-black text-base font-normal font-['Roboto'] leading-normal">Learn More</div>
                                <div className="w-6 h-6 relative" />
                            </div>
                        </div>
                    </div>
                </div>
                <img className="self-stretch h-96" src="https://via.placeholder.com/1312x738" />
            </div>
            <div className="h-96 px-16 py-28 bg-white flex-col justify-start items-center gap-20 flex">
                <div className="h-60 flex-col justify-start items-center gap-4 flex">
                    <div className="justify-start items-center inline-flex">
                        <div className="text-center text-black text-base font-semibold font-['Roboto'] leading-normal">Empower</div>
                    </div>
                    <div className="self-stretch h-48 flex-col justify-start items-center gap-6 flex">
                        <div className="self-stretch text-center text-black text-5xl font-bold font-['Roboto'] leading-10">Unlock Your Child's Potential with Kidodo</div>
                        <div className="self-stretch text-center text-black text-lg font-normal font-['Roboto'] leading-relaxed">Kidodo is designed to motivate your kids through engaging tasks and rewards. Transform daily routines into fun opportunities for growth and learning.</div>
                    </div>
                </div>
                <div className="self-stretch h-72 flex-col justify-start items-start gap-16 flex">
                    <div className="self-stretch h-72 justify-start items-start gap-12 inline-flex">
                        <div className="grow shrink basis-0 flex-col justify-start items-center gap-6 inline-flex">
                            <div className="w-12 h-12 relative" />
                            <div className="self-stretch h-32 flex-col justify-start items-center gap-6 flex">
                                <div className="self-stretch text-center text-black text-3xl font-bold font-['Roboto'] leading-10">Effortless Task Management for Parents</div>
                                <div className="self-stretch text-center text-black text-base font-normal font-['Roboto'] leading-normal">Easily assign and track tasks to keep your kids engaged.</div>
                            </div>
                        </div>
                        <div className="grow shrink basis-0 flex-col justify-start items-center gap-6 inline-flex">
                            <div className="w-12 h-12 relative" />
                            <div className="self-stretch h-40 flex-col justify-start items-center gap-6 flex">
                                <div className="self-stretch text-center text-black text-3xl font-bold font-['Roboto'] leading-10">Reward Tracking Made Simple</div>
                                <div className="self-stretch text-center text-black text-base font-normal font-['Roboto'] leading-normal">Monitor your child's progress and celebrate their achievements.</div>
                            </div>
                        </div>
                        <div className="grow shrink basis-0 flex-col justify-start items-center gap-6 inline-flex">
                            <div className="w-12 h-12 relative" />
                            <div className="self-stretch h-40 flex-col justify-start items-center gap-6 flex">
                                <div className="self-stretch text-center text-black text-3xl font-bold font-['Roboto'] leading-10">Daily Trade-Ins for Exciting Rewards</div>
                                <div className="self-stretch text-center text-black text-base font-normal font-['Roboto'] leading-normal">Kids can trade their earned rewards for fun daily incentives.</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="justify-start items-center gap-6 inline-flex">
                    <div className="px-6 py-3 border border-black justify-center items-center gap-2 flex">
                        <div className="text-black text-base font-normal font-['Roboto'] leading-normal">Learn More</div>
                    </div>
                    <div className="justify-center items-center gap-2 flex">
                        <div className="text-black text-base font-normal font-['Roboto'] leading-normal">Sign Up</div>
                        <div className="w-6 h-6 relative" />
                    </div>
                </div>
            </div>
            <div className="h-96 px-16 py-28 bg-white flex-col justify-start items-start gap-20 flex">
                <div className="h-28 flex-col justify-start items-start gap-6 flex">
                    <div className="self-stretch text-black text-5xl font-bold font-['Roboto'] leading-10">Customer Testimonials</div>
                    <div className="self-stretch text-black text-lg font-normal font-['Roboto'] leading-relaxed">Kidodo has transformed our family’s daily routine!</div>
                </div>
                <div className="self-stretch h-80 flex-col justify-start items-start gap-16 flex">
                    <div className="self-stretch justify-start items-start gap-8 inline-flex">
                        <div className="grow shrink basis-0 flex-col justify-start items-start gap-8 inline-flex">
                            <div className="justify-start items-start gap-1 inline-flex" />
                            <div className="self-stretch text-black text-xl font-bold font-['Roboto'] leading-7">"Kidodo has made parenting easier and more fun!"</div>
                            <div className="flex-col justify-start items-start gap-4 flex">
                                <img className="w-14 h-14 rounded-full" src="https://via.placeholder.com/56x56" />
                                <div className="flex-col justify-start items-start flex">
                                    <div className="text-black text-base font-semibold font-['Roboto'] leading-normal">Emily Johnson</div>
                                    <div className="text-black text-base font-normal font-['Roboto'] leading-normal">Parent, Happy Family</div>
                                </div>
                                <div className="w-32 h-12 relative" />
                            </div>
                        </div>
                        <div className="grow shrink basis-0 flex-col justify-start items-start gap-8 inline-flex">
                            <div className="justify-start items-start gap-1 inline-flex" />
                            <div className="self-stretch text-black text-xl font-bold font-['Roboto'] leading-7">"My kids love earning rewards with Kidodo!"</div>
                            <div className="flex-col justify-start items-start gap-4 flex">
                                <img className="w-14 h-14 rounded-full" src="https://via.placeholder.com/56x56" />
                                <div className="flex-col justify-start items-start flex">
                                    <div className="text-black text-base font-semibold font-['Roboto'] leading-normal">Michael Smith</div>
                                    <div className="text-black text-base font-normal font-['Roboto'] leading-normal">Parent, Proud Dad</div>
                                </div>
                                <div className="w-32 h-12 relative" />
                            </div>
                        </div>
                        <div className="grow shrink basis-0 flex-col justify-start items-start gap-8 inline-flex">
                            <div className="justify-start items-start gap-1 inline-flex" />
                            <div className="self-stretch text-black text-xl font-bold font-['Roboto'] leading-7">"Kidodo has brought us closer together as a family."</div>
                            <div className="flex-col justify-start items-start gap-4 flex">
                                <img className="w-14 h-14 rounded-full" src="https://via.placeholder.com/56x56" />
                                <div className="flex-col justify-start items-start flex">
                                    <div className="text-black text-base font-semibold font-['Roboto'] leading-normal">Sarah Williams</div>
                                    <div className="text-black text-base font-normal font-['Roboto'] leading-normal">Parent, Family Advocate</div>
                                </div>
                                <div className="w-32 h-12 relative" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-96 px-16 py-28 bg-white flex-col justify-start items-center gap-20 flex">
                <div className="w-96 text-center text-black text-4xl font-bold font-['Roboto'] leading-10">Discover the Fun and Engaging Way to Motivate Your Kids</div>
                <div className="self-stretch h-64 flex-col justify-start items-start gap-16 flex">
                    <div className="self-stretch justify-center items-start gap-12 inline-flex">
                        <div className="grow shrink basis-0 flex-col justify-start items-center gap-8 inline-flex">
                            <div className="self-stretch h-52 flex-col justify-start items-center gap-6 flex">
                                <div className="w-12 h-12 relative" />
                                <div className="self-stretch h-36 flex-col justify-start items-start gap-6 flex">
                                    <div className="self-stretch text-center text-black text-2xl font-bold font-['Roboto'] leading-loose">Empower Your Children with Tasks and Rewards for Daily Success</div>
                                    <div className="self-stretch text-center text-black text-base font-normal font-['Roboto'] leading-normal">Kidodo makes parenting easier by turning daily tasks into exciting rewards.</div>
                                </div>
                            </div>
                            <div className="self-stretch h-6 flex-col justify-start items-center gap-2 flex">
                                <div className="justify-center items-center gap-2 inline-flex">
                                    <div className="text-black text-base font-normal font-['Roboto'] leading-normal">Learn More</div>
                                    <div className="w-6 h-6 relative" />
                                </div>
                            </div>
                        </div>
                        <div className="grow shrink basis-0 flex-col justify-start items-center gap-8 inline-flex">
                            <div className="self-stretch h-52 flex-col justify-start items-center gap-6 flex">
                                <div className="w-12 h-12 relative" />
                                <div className="self-stretch h-36 flex-col justify-start items-start gap-6 flex">
                                    <div className="self-stretch text-center text-black text-2xl font-bold font-['Roboto'] leading-loose">Simple Steps to Start Using Kidodo for Your Family</div>
                                    <div className="self-stretch text-center text-black text-base font-normal font-['Roboto'] leading-normal">Create tasks, set rewards, and watch your kids thrive with motivation.</div>
                                </div>
                            </div>
                            <div className="self-stretch h-6 flex-col justify-start items-center gap-2 flex">
                                <div className="justify-center items-center gap-2 inline-flex">
                                    <div className="text-black text-base font-normal font-['Roboto'] leading-normal">Sign Up</div>
                                    <div className="w-6 h-6 relative" />
                                </div>
                            </div>
                        </div>
                        <div className="grow shrink basis-0 flex-col justify-start items-center gap-8 inline-flex">
                            <div className="self-stretch h-52 flex-col justify-start items-center gap-6 flex">
                                <div className="w-12 h-12 relative" />
                                <div className="self-stretch h-36 flex-col justify-start items-start gap-6 flex">
                                    <div className="self-stretch text-center text-black text-2xl font-bold font-['Roboto'] leading-loose">Track Progress and Celebrate Achievements with Kidodo</div>
                                    <div className="self-stretch text-center text-black text-base font-normal font-['Roboto'] leading-normal">Monitor your child's progress and celebrate their achievements together.</div>
                                </div>
                            </div>
                            <div className="self-stretch h-6 flex-col justify-start items-center gap-2 flex">
                                <div className="justify-center items-center gap-2 inline-flex">
                                    <div className="text-black text-base font-normal font-['Roboto'] leading-normal">Get Started</div>
                                    <div className="w-6 h-6 relative" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-96 px-16 py-28 bg-white flex-col justify-start items-start gap-20 flex">
                <div className="self-stretch justify-start items-start gap-20 inline-flex">
                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex">
                        <div className="self-stretch text-black text-5xl font-bold font-['Roboto'] leading-10">Empower Your Child Today</div>
                    </div>
                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-8 inline-flex">
                        <div className="self-stretch text-black text-lg font-normal font-['Roboto'] leading-relaxed">Join Kidodo and transform the way your child learns responsibility and motivation. Sign up now to unlock a world of fun tasks and rewarding experiences!</div>
                        <div className="justify-start items-start gap-4 inline-flex">
                            <div className="px-6 py-3 bg-black border border-black justify-center items-center gap-2 flex">
                                <div className="text-white text-base font-normal font-['Roboto'] leading-normal">Sign Up</div>
                            </div>
                            <div className="px-6 py-3 border border-black justify-center items-center gap-2 flex">
                                <div className="text-black text-base font-normal font-['Roboto'] leading-normal">Learn More</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-96 px-16 py-28 bg-white flex-col justify-start items-center gap-20 flex">
                <div className="self-stretch justify-start items-center gap-20 inline-flex">
                    <img className="grow shrink basis-0 h-96" src="https://via.placeholder.com/616x640" />
                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-8 inline-flex">
                        <div className="self-stretch h-56 flex-col justify-start items-start gap-6 flex">
                            <div className="self-stretch text-black text-4xl font-bold font-['Roboto'] leading-10">Inspiring Progress: Discover Our Amazing Kidodo Achievements and Milestones</div>
                            <div className="self-stretch text-black text-lg font-normal font-['Roboto'] leading-relaxed">Join a community of engaged parents and motivated kids. Together, we’ve completed thousands of tasks and earned countless rewards!</div>
                        </div>
                        <div className="self-stretch h-32 flex-col justify-start items-start gap-4 flex">
                            <div className="self-stretch py-2 justify-start items-start gap-6 inline-flex">
                                <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                                    <div className="self-stretch text-black text-5xl font-bold font-['Roboto'] leading-10">75%</div>
                                    <div className="self-stretch text-black text-base font-normal font-['Roboto'] leading-normal">Tasks completed by our dedicated users</div>
                                </div>
                                <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                                    <div className="self-stretch text-black text-5xl font-bold font-['Roboto'] leading-10">1000+</div>
                                    <div className="self-stretch text-black text-base font-normal font-['Roboto'] leading-normal">Rewards distributed to encourage positive behavior</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-80 px-16 py-28 bg-white flex-col justify-start items-start gap-20 flex">
                <div className="self-stretch justify-start items-center gap-8 inline-flex">
                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex">
                        <div className="self-stretch text-black text-4xl font-bold font-['Roboto'] leading-10">Join Our Kidodo Community</div>
                        <div className="self-stretch text-black text-lg font-normal font-['Roboto'] leading-relaxed">Get tips and updates straight to your inbox!</div>
                    </div>
                    <div className="w-96 flex-col justify-start items-start gap-4 inline-flex">
                        <div className="self-stretch justify-start items-start gap-4 inline-flex">
                            <div className="grow shrink basis-0 h-12 p-3 border border-black justify-start items-center gap-2 flex">
                                <div className="grow shrink basis-0 text-[#666666] text-base font-normal font-['Roboto'] leading-normal">Enter your email</div>
                            </div>
                            <div className="h-12 px-6 py-3 bg-black border border-black justify-center items-center gap-2 flex">
                                <div className="text-white text-base font-normal font-['Roboto'] leading-normal">Sign up</div>
                            </div>
                        </div>
                        <div className="self-stretch text-black text-xs font-normal font-['Roboto'] leading-none">By clicking Sign Up, you agree to our Terms and Conditions.</div>
                    </div>
                </div>
            </div>
            <div className="h-96 px-16 py-20 bg-white flex-col justify-start items-center gap-20 flex">
                <div className="self-stretch justify-start items-start gap-16 inline-flex">
                    <div className="w-96 flex-col justify-start items-start gap-8 inline-flex">
                        <div className="w-20 h-9 relative">
                            <div className="w-16 h-9 left-[6.67px] top-0 absolute" />
                        </div>
                        <div className="self-stretch h-36 flex-col justify-start items-start gap-6 flex">
                            <div className="self-stretch h-11 flex-col justify-start items-start gap-1 flex">
                                <div className="self-stretch text-black text-sm font-semibold font-['Roboto'] leading-tight">Address:</div>
                                <div className="self-stretch text-black text-sm font-normal font-['Roboto'] leading-tight">Level 1, 12 Sample St, Sydney NSW 2000</div>
                            </div>
                            <div className="self-stretch h-16 flex-col justify-start items-start gap-1 flex">
                                <div className="self-stretch text-black text-sm font-semibold font-['Roboto'] leading-tight">Contact:</div>
                                <div className="self-stretch h-10 flex-col justify-start items-start flex">
                                    <div className="self-stretch text-black text-sm font-normal font-['Roboto'] underline leading-tight">1800 123 4567</div>
                                    <div className="self-stretch text-black text-sm font-normal font-['Roboto'] underline leading-tight">info@kidodo.com</div>
                                </div>
                            </div>
                        </div>
                        <div className="justify-start items-start gap-3 inline-flex">
                            <div className="w-6 h-6 relative" />
                            <div className="w-6 h-6 relative" />
                            <div className="w-6 h-6 relative" />
                            <div className="w-6 h-6 relative" />
                            <div className="w-6 h-6 relative" />
                        </div>
                    </div>
                    <div className="grow shrink basis-0 h-48 justify-start items-start gap-6 flex">
                        <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                            <div className="self-stretch py-2 justify-start items-start inline-flex">
                                <div className="grow shrink basis-0 text-black text-sm font-semibold font-['Roboto'] leading-tight">Help Center</div>
                            </div>
                            <div className="self-stretch py-2 justify-start items-start inline-flex">
                                <div className="grow shrink basis-0 text-black text-sm font-semibold font-['Roboto'] leading-tight">Blog Posts</div>
                            </div>
                            <div className="self-stretch py-2 justify-start items-start inline-flex">
                                <div className="grow shrink basis-0 text-black text-sm font-semibold font-['Roboto'] leading-tight">FAQs</div>
                            </div>
                            <div className="self-stretch py-2 justify-start items-start inline-flex">
                                <div className="grow shrink basis-0 text-black text-sm font-semibold font-['Roboto'] leading-tight">User Guide</div>
                            </div>
                            <div className="self-stretch py-2 justify-start items-start inline-flex">
                                <div className="grow shrink basis-0 text-black text-sm font-semibold font-['Roboto'] leading-tight">Contact Us</div>
                            </div>
                        </div>
                        <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                            <div className="self-stretch py-2 justify-start items-start inline-flex">
                                <div className="grow shrink basis-0 text-black text-sm font-semibold font-['Roboto'] leading-tight">Support Team</div>
                            </div>
                            <div className="self-stretch py-2 justify-start items-start inline-flex">
                                <div className="grow shrink basis-0 text-black text-sm font-semibold font-['Roboto'] leading-tight">Community Forum</div>
                            </div>
                            <div className="self-stretch py-2 justify-start items-start inline-flex">
                                <div className="grow shrink basis-0 text-black text-sm font-semibold font-['Roboto'] leading-tight">Feedback Form</div>
                            </div>
                            <div className="self-stretch py-2 justify-start items-start inline-flex">
                                <div className="grow shrink basis-0 text-black text-sm font-semibold font-['Roboto'] leading-tight">Careers Page</div>
                            </div>
                            <div className="self-stretch py-2 justify-start items-start inline-flex">
                                <div className="grow shrink basis-0 text-black text-sm font-semibold font-['Roboto'] leading-tight">About Us</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="self-stretch h-14 flex-col justify-start items-start gap-8 flex">
                    <div className="self-stretch h-px bg-black border border-black" />
                    <div className="self-stretch justify-between items-start inline-flex">
                        <div className="text-black text-sm font-normal font-['Roboto'] leading-tight">© 2024 Kidodo. All rights reserved.</div>
                        <div className="justify-start items-start gap-6 flex">
                            <div className="text-black text-sm font-normal font-['Roboto'] underline leading-tight">Privacy Policy</div>
                            <div className="text-black text-sm font-normal font-['Roboto'] underline leading-tight">Terms of Service</div>
                            <div className="text-black text-sm font-normal font-['Roboto'] underline leading-tight">Cookies Settings</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}