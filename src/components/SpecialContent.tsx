import React from 'react';

const specialItems = [
	{
		img: 'https://www.citizenwatches.co.in/images/IMG28012022115243.jpg',
		text: 'LIGHT is TIME',
	},
	{
		img: 'https://www.citizenwatches.co.in/images/IMG23032023160125.jpg',
		text: 'PROMASTER Global Campaign',
	},
	{
		img: 'https://www.citizenwatches.co.in/images/IMG23032023160249.jpg',
		text: 'Manufacture',
	},
	{
		img: 'https://www.citizenwatches.co.in/images/IMG23032023160339.jpg',
		text: 'CITIZEN Sustainability',
	},
	{
		img: 'https://www.citizenwatches.co.in/images/IMG23032023160405.jpg',
		text: '50th Anniversary of CITIZEN Titanium Technology',
	},
];

const SpecialContent = () => {
	return (
		<section className="py-16 bg-white shadow-lg md:px-20">
			<div className="container mx-auto px-4">
				<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
					Special Content
				</h2>
				<div className="w-16 h-1 bg-gray-400  mx-auto mb-12"></div>
				<div className="grid grid-cols-1 md:px-16 md:grid-cols-3 gap-2">
					{specialItems.slice(0, 3).map((item, idx) => (
						<div key={idx} className="flex cursor-pointer rounded-lg hover:shadow-lg hover:bg-gray-50 p-2 transition-all duration-300 flex-col items-center w-full">
							<img
								src={item.img}
								alt={item.text}
								className="w-full md:w-[400px] h-48 object-cover rounded-lg mb-4"
							/>
							<div className="flex items-center text-base font-semibold">
								<span className="text-gray-400 mr-2 text-xl">{'>'}</span>
								<span className="text-blue-500">{item.text}</span>
							</div>
						</div>
					))}
				</div>
				<div className="grid grid-cols-1 md:mx-20 md:grid-cols-2 lg:grid-cols-2 gap-2 mt-8">
					{specialItems.slice(3, 5).map((item, idx) => (
						<div key={idx} className="flex cursor-pointer rounded-lg hover:shadow-lg hover:bg-gray-50 p-2 transition-all duration-300  flex-col items-center w-full">
							<img
								src={item.img}
								alt={item.text}
								className="w-full md:w-[400px] h-48 object-cover rounded-lg mb-4"
							/>
							<div className="flex items-center text-base font-semibold">
								<span className="text-gray-400 mr-2 text-xl">{'>'}</span>
								<span className="text-blue-500">{item.text}</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default SpecialContent;