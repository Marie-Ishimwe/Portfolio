import { SectionHeader } from "@/components/SectionHeader";
import PlusIcon from "@/assets/icons/plus.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { Card } from "@/components/Card";
import { twMerge } from "tailwind-merge";
const faqs=[
    {
        question: "What type of projects do you specialize in?",
        answer: "My experience spans gamified learning applications, government service platforms, and content management systems. However, I am passionate about extending language beyond the confinement of classrooms with technology.",
        },
        {
        question: "What's your design process?",
        answer:
            "I typically start with thorough user research to understand needs and pain points. From there, I create wireframes and prototypes, conduct usability testing with real users, refine based on feedback, and finally implement the designs myself or with developers.",
        },

        {
            question: "How do you measure the success of your designs?",
            answer:
                "Success metrics depend on project goals, but I consider both quantitative data (completion rates, error rates, time-on-task) and qualitative feedback from users.",
            },

        {
            question: "Can you code as well as design?",
            answer:
                "Yes! My computer science background gives me an advantage in bridging design and development. I can create high-fidelity prototypes and implement front-end components myself with Flutter, ReactJS, NextJS, and others.",
        },

        {
            question: "What are you looking for in your next role?",
            answer:
                "I look forward to creatign impactful digital experiences as I continue to grow professionally. I would love roles/opportunities that allow me to explore inclusive design practices and work with diverse user groups. I value collaborative environments where design decisions are informed by research and user needs.",
        },

        {
            question: "How do you stay updated on UX/UI trends?",
            answer:
                "I regularly follow design publications like Nielsen Norman Group and Smashing Magazine, participate in online communities, and experiment with new tools and techniques in personal projects. However, I believe in adopting new trends only when they genuinely improve the user experience, not just for aesthetic reasons.",
            },
];

export const FaqsSection = () => { 
    const activeFaq = 0; 
    return (
        <section className="py-24"> 
        <div className="container">
            <SectionHeader
            eyebrow="Answers to some of your questions"
            title="Frequently Asked Questions"
            description="Learn more about my approach, experience, and design philosophy through these common inquiries."></SectionHeader>
        
        <div className="mt-12 flex flex-col gap-6 max-w-xl mx-auto">
            {faqs.map((faq,faqIndex) => (
                <Card key={faq.question} className="p-6">
                    <div className="flex items-stretch justify-between">
                        <h3 className="font-semibold">{faq.question}</h3>
                        <PlusIcon className={twMerge("size-6 flex-shrink-0", activeFaq===faqIndex && "rotate-45")} />
                    </div>
                    <div className={twMerge("mt-4", activeFaq!== faqIndex && "hidden")}>
                        <p className="text-sm lg:text-base text-white/60">{faq.answer}</p>
                    </div>
                </Card>
            ))}
        </div>
        </div>
        </section>);
 }