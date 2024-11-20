'use client';
import React from 'react';
import useStore from '@/store/zustandStore';
import config from "@/config";
import ButtonCheckout from "@/components/framework/ButtonCheckout";


const PricingTable = () => {
    const { appData, middlewareSetAppData, middlewareReadAppData } = useStore();

    const getActivePlan = () => {
        if (appData && appData?.user?.plan?.name) {
            return appData?.user?.plan?.name
        }
        return "free"
    }
    const activePlan = getActivePlan();

    const checked = (
        <div className="flex items-center justify-center text-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
        </div>
    );
    const na = (
        "-"
    );

    //sticky behaviour is managed via CSS in global.css !
    return (
        <table className="table-auto w-full border-collapse pricing">
            <thead>
                <tr className="overflow-visible">
                    <th className="overflow-visible" >free
                        {activePlan == "free" &&
                            <div className="badge badge-accent badge-sm absolute -top-1 -left-1">active</div>
                        }
                    </th>
                    <th className="" >PRO
                        {activePlan == "PRO" &&
                            <div className="badge badge-accent badge-sm absolute -top-1 -left-1">active</div>
                        }
                    </th>
                </tr>
                <tr className="titlepart -mt6 ">
                    <td className="pt-0"></td>
                    <td className="pt-0"></td>
                </tr>

            </thead>
            <tbody className="text-center rounded-lg text-xs p-2">





                <tr className="subtitle">
                    <td>Motivational Game <span className='text-accent'>free</span></td>
                    <td></td>
                </tr>
                <tr>
                    <td>{checked}</td>
                    <td>{checked}</td>
                </tr>

                <tr className="subtitle">
                    <td>Notification Management</td>
                    <td></td>
                </tr>
                <tr>
                    <td>eMail, Push, Line, WhatsApp, Telegram</td>
                    <td>eMail, Push, Line, WhatsApp, Telegram</td>
                </tr>



                <tr className="subtitle">
                    <td>Chores <span className='text-accent'>free</span></td>
                    <td></td>
                </tr>
                <tr>
                    <td>daily, weekly, monthly</td>
                    <td>daily, weekly, monthly</td>
                </tr>



                <tr className="subtitle">
                    <td>Chores Calendar Plan <span className='text-accent'>free</span></td>
                    <td></td>
                </tr>
                <tr>
                    <td>{checked}</td>
                    <td>{checked}</td>
                </tr>


                <tr className="subtitle">
                    <td>unlimited Kids</td>
                    <td></td>
                </tr>
                <tr>
                    <td>max. 2</td>
                    <td>{checked}</td>
                </tr>




                <tr className="subtitle">
                    <td>unlimited Contracts</td>
                    <td></td>
                </tr>
                <tr>
                    <td>max. 4</td>
                    <td>{checked}</td>
                </tr>



                <tr className="subtitle">
                    <td> Print Chore Calendar</td>
                    <td></td>
                </tr>
                <tr>
                    <td>{na}</td>
                    <td>{checked}</td>
                </tr>



                <tr className="subtitle">
                    <td>Dodo Ball Hanger</td>
                    <td></td>
                </tr>
                <tr>
                    <td>{na}</td>
                    <td>{checked}</td>
                </tr>



                <tr className="subtitle">
                    <td>Global Leaderboard</td>
                    <td></td>
                </tr>
                <tr>
                    <td>{na}</td>
                    <td>{checked}</td>
                </tr>


                <tr className="subtitle">
                    <td>Export Data</td>
                    <td></td>
                </tr>
                <tr>
                    <td>{na}</td>
                    <td>{checked}</td>
                </tr>


                <tr className="subtitle">
                    <td>Avatar Generator</td>
                    <td></td>
                </tr>
                <tr>
                    <td>{na}</td>
                    <td>{checked}</td>
                </tr>



                <tr className="subtitle">
                    <td>Custom Theme</td>
                    <td></td>
                </tr>
                <tr>
                    <td>{na}</td>
                    <td>{checked}</td>
                </tr>

                <tr className='select-cta'>
                    <td>
                        {activePlan !== 'free' ?
                            <div className="btn btn-primary btn-sm" >
                                <p>select</p>
                            </div> :
                            <a className="btn btn-accent btn-sm" href={config.appPathPublic}>open</a>
                        }
                    </td>
                    <td>
                        {activePlan !== 'PRO' ?
                            <ButtonCheckout mode="subscription" priceId={config.stripe.plans[0].priceId} customText='select' icon={false} customClass="btn-sm" /> :
                            <a className="btn btn-accent btn-sm" href={config.appPathPublic}>open</a>
                        }
                    </td>
                </tr>

                {/* Add more rows as needed */}
            </tbody>
        </table>

    )
}

export default PricingTable