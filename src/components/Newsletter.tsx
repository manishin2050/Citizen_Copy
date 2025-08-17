import React, { useState } from 'react';

const newsItems = [
	{
		img: 'https://www.citizenwatches.co.in/images/DESK13032025113920.jpg',
		date: '2025-07-03',
		title: 'CITIZEN ATTESA Blue Universe Collection',
	},
	{
		img: 'https://www.citizenwatches.co.in/images/DESK05072025005329.jpg',
		date: '2025-07-03',
		title: 'The CITIZEN Limited-Edition 30th Anniversary Models - Iconic Nature Collection',
	},
	{
		img: 'https://www.citizenwatches.co.in/images/DESK13032025114132.jpg',
		date: '2025-07-03',
		title: 'New “Sea of Silence” models - UNITE with BLUE collection',
	},
	{
		img: 'https://www.citizenwatches.co.in/images/DESK05072025004857.jpg',
		date: '2025-07-03',
		title: 'CITIZEN Series 8 - New limited edition 831 Mechanical model with a crisp ice blue dial',
	},
	{
		img: 'https://www.citizenwatches.co.in/images/DESK13032025113810.jpg',
		date: '2025-07-03',
		title: 'New light-powered Eco-Drive*1 Professional Diver 300 m with E365 movement that runs for 365 days on a full charge',
	},
	{
		img: 'https://www.citizenwatches.co.in/images/DESK13032025113732.jpg',
		date: '2025-07-03',
		title: 'New CITIZEN TSUYOSA 37 mm Models',
	},
];

const Newsletter = () => {
	return (
		<section className="py-16 md:px-20 bg-gray-50 shadow-lg">
			
			<div className="container mx-auto px-4">
				<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
					News
				</h2>
				<div className="w-16 h-1 bg-gray-400 mx-auto mb-12"></div>
				<div className="mt-16">
					<div className="grid grid-cols-1  md:px-20 md:grid-cols-2 ">
						{newsItems.map((item, idx) => (
							<div
								key={idx}
								className="flex cursor-pointer rounded-lg hover:shadow-lg hover:bg-gray-50 p-2 transition-all duration-300  flex-col  md:flex-row items-center gap-6 bg-white/5 rounded-xl p-4"
							>
								<img
									src={item.img}
									alt={item.title}
									className="w-full h-40 md:w-40 md:h-40 object-cover rounded-lg flex-shrink-0"
								/>
								<div className="w-full">
                                    <span className="bg-gray-600  inline text-white px-4 py-1 text-xs font-bold rounded block mb-2">
                                        PRESS
                                    </span>
                                    <span className="text-black font-semibold text-lg block mb-2">
                                        {item.date}
                                    </span>
                                    <div className="text-gray-600 font-semibold text-base">
                                        {item.title}
                                    </div>
                                </div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Newsletter;