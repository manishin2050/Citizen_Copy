import React from 'react';

const videos = [

  "https://www.youtube.com/embed/mlLc1YqLvws",
  "https://www.youtube.com/embed/F0qc9CbP_CI",
  "https://www.youtube.com/embed/-ctPLWwwAw4",
  "https://www.youtube.com/embed/Qj8T_wfVrDI",
  "https://www.youtube.com/embed/btbAKw8TMSc",
  "https://www.youtube.com/embed/c7WgkkPZ2zQ",
  "https://www.youtube.com/embed/9aAVtaS-bWk",
  "https://www.youtube.com/embed/lVVsNBhdiFA",
];
const RelevantVideo = () => {
  return (
    <section className="py-16 md:px-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Relevant Video</h2>
        <div className="w-16 h-1 bg-gray-400 mx-auto mb-12"></div>
        {/* First row: 2 videos */}
        <div className="grid grid-cols-1 md:px-20 md:grid-cols-2 md:gap-2 gap-5 mb-5">
          {videos.slice(0, 2).map((src, idx) => (
            <div key={idx} className="w-full aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe
                src={src}
                title={`Relevant Video ${idx + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          ))}
        </div>
        {/* Second row: 3 videos */}
        <div className="grid grid-cols-1 md:px-16 md:grid-cols-3 gap-8 mb-8">
          {videos.slice(2, 5).map((src, idx) => (
            <div key={idx} className="w-full aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe
                src={src}
                title={`Relevant Video ${idx + 3}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          ))}
        </div>
        {/* Third row: 3 videos */}
        <div className="grid grid-cols-1 md:px-16 md:grid-cols-3 gap-8">
          {videos.slice(5, 8).map((src, idx) => (
            <div key={idx} className="w-full aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe
                src={src}
                title={`Relevant Video ${idx + 6}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RelevantVideo;
