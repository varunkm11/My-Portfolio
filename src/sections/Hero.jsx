import HeroText from "../components/HeroText";
import { Particles } from "../components/Particles";

const Hero = () => {
  return (
    <section id="home" className="relative flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start">
      {/* Stars Background - Full Coverage */}
      <Particles
        className="absolute inset-0 -z-50"
        quantity={120}
        staticity={80}
        ease={50}
        size={0.6}
        color={"#ffffff"}
        refresh
      />
      <HeroText />
      {/* VIDEO PLACEMENT: Add your blackhole video here as a <video> element */}
      {/* Example: <video className="absolute inset-0 -z-40 w-full h-full object-cover" autoPlay loop muted><source src="/path/to/video.mp4" type="video/mp4" /></video> */}
    </section>
  );
}

export default Hero;
