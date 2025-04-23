"use client"
import { SectionHeader } from "@/components/SectionHeader"
import Aimee from "@/assets/images/Aimee.jpeg"
import Image from "next/image";
import GithubIcon from "@/assets/icons/github.svg";
import LinkedinIcon from "@/assets/icons/linkedin.svg";
import { useState } from "react"
import { TechIcon } from "@/components/Technologies";
import { Card } from "@/components/Card";

// Define social media links array
const socialLinks = [
  {
    url: "https://www.linkedin.com/in/aimeemarieishimwe-30612a146",
    iconType: LinkedinIcon, 
  },
  {
    url: "https://github.com/yourusername",
    iconType: GithubIcon, 
  },
  
];

const WorkExperience = [
  {
    company: "GanzAfrica",
    title: "Junior Analyst",
    timeline: "2025-Now",
  },
  {
    company: "GanzAfrica",
    title: "Policy Animation Fellow",
    timeline: "2023-2025",
  },
  {
    company: "MINAGRI",
    title: "UX/UI Designer",
    timeline: "2024-2025",
  }
];

const EducationalBackground =[
  {
    degree: "BSc Computer Science",
    school: "African Leadership University",
    timeline:"2021-2024"

  }
];

export const AboutSection = () => {
  const [copied, setCopied] = useState(false);
  
  const copyEmail = () => {
    navigator.clipboard.writeText("ishimweaime77@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="container py-20 lg:py-28">
      <div className="mb-16">
        <SectionHeader
          eyebrow="Personal Background"
          title="Who is Aimee Marie?"
          description="Learn more about me, my professional journey, and my educational background."
        />
      </div>

      {/* Parent div for responsive layout */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left div with image, name, and social links */}
        <Card className="lg:w-2/5 flex flex-col p-6">
          {/* Profile Image */}
          <div className="mb-6 relative">
            <Image 
              src={Aimee} 
              alt="map"
              className="w-full aspect-square object-cover rounded-lg"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-60 rounded-lg"></div>
          </div>

          {/* Name and Title */}
          <div className="mb-6">
            <h3 className="font-serif text-2xl">Meet Aimee Marie</h3>
            <p className="text-sm lg:text-base max-w-xs text-white/60 mt-2">UX/UI Designer Based in Rwanda</p>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => {
              const IconComponent = link.iconType;
              
              return (
                <a 
                  key={index} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <TechIcon component={link.iconType} />
                </a>
              );
            })}
          </div>
          
          {/* Horizontal Line */}
          <hr className="border-gray-700 my-6" />
          
          {/* Email Copy Section */}
          <div className="flex items-center gap-2 py-2">
            <div className="bg-gray-800 border border-gray-700 text-gray-300 py-2 px-3 rounded-md">
              ishimweaime77@gmail.com
            </div>
            <button 
              onClick={copyEmail}
              className="bg-white text-gray-950 py-2 px-3 rounded-md hover:bg-white/70 hover:text-gray-900"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </Card>

        {/* Right div */}
        <Card className="lg:w-2/3 p-6">
          {/* Bio Section */}
          <div className="mb-8">
            <p className="text-gray-300 py-2 text-justify">
            I am passionate about creating
            digital learning solutions that empower children, particularly those from
            vulnerable communities and those with physical disabilities, through design and
            AI.
            <br />
            <br />
            From teaching new languages and technical concepts to addressing
            culturally sensitive topics like sexual and reproductive health, I take pride in
            designing inclusive tools that inspire and educate. My mission is to shape the
            next generation of leaders and change-makers through innovative, accessible,
            and impactful technology.
            </p>
          </div>
          
          {/* Divider */}
          <hr className="border-gray-700" />
          
          {/* Education Section */}
          <div className="py-3">
            {/* <h3 className="text-xl font-medium text-gray-200 mb-4">Education</h3> */}
            
            {EducationalBackground.map((education) => (
              <div key={education.degree} className="flex justify-between items-center p-2 py-2">
                <div  className="flex flex-col">
                  <div className="font-semibold">{education.degree}</div>
                  <div className="lg:text-base text-white/40">{education.school}</div>
                </div>
              
                <span className="lg:text-base uppercase text-gray-400">{education.timeline}</span>
              </div>
            
          ))}
          </div>
          
          {/* Divider */}
          <hr className="border-gray-700" />
          
          {/* Professional Experience Section */}
          <div>
            <div className="py-3">
            {WorkExperience.map((expereince)=>(
              <div key={expereince.company} className="flex justify-between items-center p-2 py-2">
                
                  <div className="flex flex-col">
                  <div className="font-semibold">{expereince.company}</div>
                  <div className="text-sm lg:text-base text-white/40">{expereince.title}</div>
                </div>
              
                <span className="text-sm lg:text-base uppercase text-gray-400">{expereince.timeline}</span>
              </div>
            ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}