import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import grainImage from "@/assets/images/grain.jpg";
import { Card } from "@/components/Card";
import { Fragment } from "react";

const testimonials = [
  {
    name: "Jean-Claude Niyonzima",
    position: "Director @ MINAGRI Digital Office",
    text: "Aimee Marie transformed our livestock registration system with remarkable insight. Her ability to simplify a complex five-step process into just two steps made our platform accessible even for users with minimal digital literacy. Her user-centered approach delivered real results for Rwandan farmers.",
    avatar: memojiAvatar1,
  },
  {
    name: "Patricia Uwase",
    position: "Program Manager @ GanzAfrica",
    text: "Aimee Marie's contributions to our fellowship program were invaluable. Her UI designs for the NLA dashboard combined beautiful aesthetics with practical functionality. Her concept note was instrumental in securing $50,000 in funding for our alumni network.",
    avatar: memojiAvatar2,
  },
  {
    name: "Emmanuel Hakizimana",
    position: "Head Teacher @ Gatsata Catholique",
    text: "Watching Aimee Marie test her Quizzle application with our primary students was inspiring. The children were deeply engaged, solving challenges and learning complex English vocabulary with enthusiasm. Her thoughtful design approach created an educational experience our students genuinely enjoyed.",
    avatar: memojiAvatar3,
  },
  {
    name: "Esther Mugisha",
    position: "Fellow Student @ ALU",
    text: "Aimee Marie's guidance transformed my English writing skills. Her patient mentorship during our Sunday and Wednesday sessions helped me progress from basic grammar to confident academic writing. She has a gift for making complex concepts accessible and engaging.",
    avatar: memojiAvatar4,
  },
  {
    name: "Dr. Joseph Nkurunziza",
    position: "Computer Science Professor @ ALU",
    text: "Aimee Marie's capstone project showcased exceptional UX design thinking. Her gamified learning application demonstrated a deep understanding of both technical implementation and human-centered design principles. Her ability to blend education theory with engaging interfaces sets her apart.",
    avatar: memojiAvatar5,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Happy Clients"
          title="What Clients Say About Me"
          description="Do not just take my word for it. See what my clients have to say about my work."
        />
        <div className="mt-12 lg:mt-20 overflow-x-clip flex 
        [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex flex-none gap-8 pr-8 animate-move-left 
          [animation-duration:90s] hover:[animation-play-state:paused]">
            {new Array(3).fill(0).map((_, i) => (
              <Fragment key={i}>
                {testimonials.map((testimonial) => (
                  <Card
                    key={testimonial.name}
                    className="max-w-xs p-6 md:p-8 md:max-w-md hover:-rotate-3 transition duration-300"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="inline-flex items-center justify-center bg-gray-700 rounded-full flex-shrink-0">
                        <Image
                          src={testimonial.avatar.src}
                          alt={testimonial.name}
                          width={64}
                          height={64}
                          className="max-h-full"
                        />
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-white/40">
                          {testimonial.position}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 md:mt-6 text-sm md:text-base">
                      {testimonial.text}
                    </p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};