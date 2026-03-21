import React from 'react';
import ScrollReveal from './ScrollReveal';
import { Highlighter } from "@/components/ui/highlighter";

export default function About({ scrollContainerRef }) {
  return (
    <section id="about" className="w-full min-h-screen bg-white text-black p-8 sm:p-16 md:p-24 flex items-center justify-center">
      <div className="max-w-4xl text-center">
        <div className="mb-12 flex justify-center">
                    <h2 className="text-5xl font-bold font-pixel underline-wavy-yellow inline-block">
                        <Highlighter action="underline" color="#FFD700">
                            About Me 😊
                        </Highlighter>
                    </h2>
        </div>  
        <ScrollReveal
          scrollContainerRef={scrollContainerRef}
          baseOpacity={0}
          enableBlur={true}
          baseRotation={1.2}
          blurStrength={10}
          containerClassName="my-12"
          textClassName="font-sans text-base sm:text-lg md:text-xl"
        >
          I’m a full-stack developer focused on building practical and scalable web applications. I enjoy working across both frontend and backend, with a strong interest in developing clean user interfaces and reliable backend systems.

          I have built projects like a Lost and Found Management System and an e-commerce platform for a fitness brand, where I implemented features such as authentication, structured APIs, and responsive design. Through these projects, I focused on real-world usability, performance, and maintainable code.

          I believe in learning by building — continuously improving my skills by solving real problems and working on complete applications. My goal is to create solutions that are not just functional, but efficient, reliable, and meaningful.
        </ScrollReveal>
      </div>
    </section>
  );
}