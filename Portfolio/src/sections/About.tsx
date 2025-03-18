import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HtmlIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import FlutterIcon from "@/assets/icons/flutter.svg";
import GithubIcon from "@/assets/icons/github.svg";
import FigmaIcon from "@/assets/icons/figma.svg";
import { TechIcon } from "@/components/Technologies";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";

const technologies = [
  {
    title: "JavaScript",
    iconType: JavascriptIcon,
  },
  {
    title: "CSS",
    iconType: CssIcon,
  },

  {
    title: "HTML",
    iconType: HtmlIcon,
  },

  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Flutter",
    iconType: FlutterIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
  {
    title: "Figma",
    iconType: FigmaIcon,
  },
];

const hobbies = [
  {
    title: "Painting",
    emoji: "🎨",
    left:"5%",
    top:"5%",
  },
  {
    title: "Dancing",
    emoji: "💃🏽",
    left:"50%",
    top:"5%",
  
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left:"10%",
    top:"35%",
  },
  {
    title: "Martial arts",
    emoji: "🥋",
    left:"40%",
    top:"50%",
  },
  {
    title: "Music",
    emoji: "🎵",
    left:"55%",
    top:"27%",
  },
  {
    title: "Movies",
    emoji: "🍿",
    left:"5%",
    top:"65%",
  },
  {
    title: "Reading",
    emoji: "📚",
    left:"45%",
    top:"72%",
  },
  

];
export const AboutSection = () => {
  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Flimpse Into My World"
          description="Learn more about who I am, what I do, and what inspires me"
        ></SectionHeader>
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
          <Card className="h-[320px] md:col-span-2 lg:col-span-1">
            <CardHeader
              title="My Reads"
              description="Explore the books shaping my life."
            />
            <div className="w-40 mx-auto mt-2 md:mt-0">
              <Image src={bookImage} alt="" />
            </div>
          </Card>
          
          <Card className="h-[320px] md:col-span-3 lg:col-span-2">
            <CardHeader
              title="My toolbox"
              description="Explore the technologies and tools I use to create expectional
                digital expereinces."
              className=""
            />
            <ToolboxItems className="" techStacks={technologies} />
            <ToolboxItems className="" techStacks={technologies} itemsWrapperClassName="-translate-x-1/2" />
          </Card>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
          <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
            <CardHeader
              title="Beyond the Code"
              description="Explore my interest and hobbies beyond the digital realm."
              className="px-6 py-6" />
            <div className="relative flex-1">
              {hobbies.map((hobby) => (
                <div key={hobby.title} className=" absolute inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5"
                style={{left:hobby.left, top:hobby.top}}>
                  <span className="font-medium text-gray-950">{hobby.title}</span>
                  <span>{hobby.emoji}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
            <Image src={mapImage} alt="map" className="h-full w-full object-cover object-left-top"/>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
            <Image src={smileMemoji} alt="Smiling memoji" className="size-20" />
            </div>
          </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
