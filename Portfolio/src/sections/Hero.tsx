// import memojiImage from "@/assets/images/memoji-computer.png";
import memojiImage from "@/assets/images/memoji.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { HeroOrbit } from "@/components/HeroOrbit";

export const HeroSection = ({ id }: { id?: string }) => {
  return (
    <div id={id} className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      {/* Background layer */}
      <div
        className="absolute inset-0 -z-30 opacity-5"
        style={{ backgroundImage: `url(${grainImage})` }}
      ></div>

      {/* Masked decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
          <div className="size-[620px] hero-ring"></div>
          <div className="size-[820px] hero-ring"></div>
          <div className="size-[1020px] hero-ring"></div>
          <div className="size-[1220px] hero-ring"></div>
          {/* shouldOrbit = false,
              spinDuration,
              shouldSpin = false,
              starSpinDuration, 
          */}
          <HeroOrbit size={430} rotation={-14} shouldOrbit spinDuration="30s" shouldSpin starSpinDuration="3s">
            <SparkleIcon className="size-8 text-emerald-300/20" />
          </HeroOrbit>
          
          <HeroOrbit size={440} rotation={79} shouldOrbit spinDuration="32s" shouldSpin starSpinDuration="3s">
            <SparkleIcon className="size-5 text-emerald-300/20" />
          </HeroOrbit>

          <HeroOrbit size={520} rotation={-41} shouldOrbit spinDuration="34s">
            <div className="size-2 rounded-full bg-emerald-300/20" />
          </HeroOrbit>
          
          <HeroOrbit size={530} rotation={178} shouldOrbit spinDuration="36s" shouldSpin starSpinDuration="3s">
            <SparkleIcon className="size-10 text-emerald-300/20" />
          </HeroOrbit>

          <HeroOrbit size={550} rotation={20} shouldOrbit spinDuration="38s" shouldSpin starSpinDuration="6s">
            <StarIcon className="size-12 text-emerald-300" />
          </HeroOrbit>
          
          <HeroOrbit size={590} rotation={98} shouldOrbit spinDuration="40s" shouldSpin starSpinDuration="6s">
            <StarIcon className="size-8 text-emerald-300" />
          </HeroOrbit>
          
          <HeroOrbit size={650} rotation={-5} shouldOrbit spinDuration="42s">
            <div className="size-2 rounded-full bg-emerald-300/20" />
          </HeroOrbit>

          <HeroOrbit size={710} rotation={144} shouldOrbit spinDuration="44s" shouldSpin starSpinDuration="3s">
            <SparkleIcon className="size-14 text-emerald-300/20" />
          </HeroOrbit>

          <HeroOrbit size={720} rotation={85} shouldOrbit spinDuration="46s">
            <div className="size-3 rounded-full bg-emerald-300/20" />
          </HeroOrbit>

          <HeroOrbit size={800} rotation={-72} shouldOrbit spinDuration="48s" shouldSpin starSpinDuration="6s">
            <StarIcon className="size-28 text-emerald-300" />
          </HeroOrbit>

        </div>
      </div>

      {/* Content */}
      <div className="container">
        <div className="flex flex-col items-center gap-2">
          <Image src={memojiImage} alt="Memoji" className="size-[100px]" />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-full">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium">
              Available for new projects
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-lg mx-auto">
        <h1 className="font-serif text-3xl md:text-5xl mt-8 tracking-wide text-center">
          Designing for Impact and Accessibility
        </h1>
        <p className="mt-4 text-center text-white/60 md:text-lg">
          I specialize in transforming designs into intuitive, user-centered 
          digital solutions. My dream is that make technology accessible for everyone.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
        <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
          <span className="font-semibold">Explore My work </span>
          <ArrowDown className="size-4" />
        </button>
        <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 px-6 h-12 rounded-xl">
          <span>👋</span>
          <span className="font-semibold">Download my CV</span>
        </button>
      </div>
    </div>
  );
};
