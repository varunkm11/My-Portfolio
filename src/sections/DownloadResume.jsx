import DownloadResumeButton from "../components/DownloadResumeButton";
import { Particles } from "../components/Particles";

const DownloadResume = () => {
  return (
    <section className="relative flex items-center justify-center py-24 c-space">
      <Particles
        className="absolute inset-0 -z-50"
        quantity={60}
        ease={80}
        color={"#33c2cc"}
        refresh
      />
      
      <div className="flex flex-col items-center gap-8 text-center">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold text-white">
            Get My Complete Resume
          </h2>
          <p className="text-neutral-400 max-w-2xl text-lg leading-relaxed">
            Download my comprehensive resume featuring all my experience, technical skills, 
            projects, and achievements. Click the button below to get started!
          </p>
        </div>
        
        <div className="mt-8">
          <DownloadResumeButton />
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-2 h-2 bg-aqua/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-3 h-3 bg-mint/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-5 w-1 h-1 bg-lavender/40 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-20 right-5 w-1.5 h-1.5 bg-royal/40 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>
    </section>
  );
};

export default DownloadResume;
