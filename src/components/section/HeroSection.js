import HeroLayout from "../layout/HeroLayout";

const HeroSection = () => {
  return (
    <HeroLayout>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-auto object-cover"
      >
        <source src="/vidios/hero_vidio.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </HeroLayout>
  );
};

export default HeroSection;
