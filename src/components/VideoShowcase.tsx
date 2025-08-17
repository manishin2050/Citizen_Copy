import React, { useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react';

const VideoShowcase = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [currentVideo, setCurrentVideo] = useState(0);

  const videos = [
    {
      title: 'Master of Time',
      subtitle: 'Swiss Precision Engineering',
      src: 'https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1c9a91a7d&profile_id=139&oauth2_token_id=57447761',
      poster: 'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    {
      title: 'Crafted for Excellence',
      subtitle: 'Titanium Innovation',
      src: 'https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1c9a91a7d&profile_id=139&oauth2_token_id=57447761',
      poster: 'https://images.pexels.com/photos/1034063/pexels-photo-1034063.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    {
      title: 'Professional Grade',
      subtitle: 'Built for Performance',
      src: 'https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1c9a91a7d&profile_id=139&oauth2_token_id=57447761',
      poster: 'https://images.pexels.com/photos/1697216/pexels-photo-1697216.jpeg?auto=compress&cs=tinysrgb&w=1200'
    }
  ];

  const togglePlay = () => {
    const video = document.getElementById('showcase-video') as HTMLVideoElement;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    const video = document.getElementById('showcase-video') as HTMLVideoElement;
    if (video) {
      video.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Watch
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white">
              Stories
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Experience the artistry and precision that goes into every timepiece through our cinematic showcase.
          </p>
        </div>

        {/* Main Video Player */}
        <div className="relative max-w-6xl mx-auto mb-16">
          <div className="relative aspect-video bg-gray-900 rounded-3xl overflow-hidden group">
            <video
              id="showcase-video"
              className="w-full h-full object-cover"
              poster={videos[currentVideo].poster}
              muted={isMuted}
              loop
              playsInline
            >
              <source src={videos[currentVideo].src} type="video/mp4" />
            </video>
            
            {/* Video Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-3xl font-bold text-white mb-2">
                  {videos[currentVideo].title}
                </h3>
                <p className="text-gray-300 text-lg">
                  {videos[currentVideo].subtitle}
                </p>
              </div>
            </div>

            {/* Video Controls */}
            <div className="absolute bottom-8 right-8 flex items-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <button
                onClick={togglePlay}
                className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors"
              >
                {isPlaying ? (
                  <Pause className="w-6 h-6 text-white" />
                ) : (
                  <Play className="w-6 h-6 text-white" />
                )}
              </button>
              
              <button
                onClick={toggleMute}
                className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors"
              >
                {isMuted ? (
                  <VolumeX className="w-6 h-6 text-white" />
                ) : (
                  <Volume2 className="w-6 h-6 text-white" />
                )}
              </button>
              
              <button className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors">
                <Maximize className="w-6 h-6 text-white" />
              </button>
            </div>

            {/* Play Button Overlay */}
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={togglePlay}
                  className="bg-white/20 backdrop-blur-sm p-8 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110"
                >
                  <Play className="w-16 h-16 text-white ml-2" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Video Thumbnails */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {videos.map((video, index) => (
            <div
              key={index}
              className={`relative cursor-pointer group ${
                currentVideo === index ? 'ring-2 ring-white' : ''
              }`}
              onClick={() => setCurrentVideo(index)}
            >
              <div className="aspect-video bg-gray-900 rounded-xl overflow-hidden">
                <img
                  src={video.poster}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full group-hover:bg-white/30 transition-colors">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <h4 className="text-lg font-semibold text-white mb-1">{video.title}</h4>
                <p className="text-gray-400 text-sm">{video.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;