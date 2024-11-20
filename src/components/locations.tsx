import React from 'react';

const locations = [
    {
        city: 'Berlin',
        country: 'Germany',
        flag: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 3" className="w-6 h-4">
                <rect width="5" height="3" y="0" fill="#000000" />
                <rect width="5" height="2" y="1" fill="#DD0000" />
                <rect width="5" height="1" y="2" fill="#FFCE00" />
            </svg>
        ),
        imgSrc: '/MTV_Osthafen_Berlin_4.png',
        imgAlt: 'MTV Osthafen Berlin',
        type: 'Origins'
    },
    {
        city: 'Tallinn',
        country: 'Estonia',
        flag: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513 342" className="w-6 h-4">
                <rect y="0" fill="#111111" width="513" height="342" />
                <rect y="0" fill="#368FD8" width="513" height="114" />
                <rect y="228" fill="#FFFFFF" width="513" height="114" />
            </svg>
        ),
        imgSrc: 'RE-Arihooned-droon_069-1024x682.webp',
        imgAlt: 'Tallinn Office Building',
        type: 'Tech Hub'
    },
    {
        city: 'Bangkok',
        country: 'Thailand',
        flag: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" className="w-6 h-4">
                <rect width="900" height="600" fill="#ED1C24" />
                <rect width="900" height="400" y="100" fill="#FFFFFF" />
                <rect width="900" height="200" y="200" fill="#241D4F" />
            </svg>
        ),
        imgSrc: 'centralworld.jpg',
        imgAlt: 'CentralwOrld Bangkok',
        type: 'Headquarters'
    }
];

const OfficeLocations = () => {
    return (

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((location) => (
                <div key={location.city} className="card animhover">
                    <figure className="relative">
                        <img
                            src={location.imgSrc}
                            alt={location.imgAlt}
                            className="w-full h-48 object-cover"
                        />
                        <div className="absolute top-2 right-2 shadow-lg rounded overflow-hidden">
                            {location.flag}
                        </div>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {location.city}
                            <div className="badge badge-secondary">{location.country}</div>
                        </h2>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span>{location.type}</span>
                        </div>
                        <div className="card-actions justify-end mt-4">
                            <button className="btn btn-primary btn-sm">
                                View Office Details
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default OfficeLocations;