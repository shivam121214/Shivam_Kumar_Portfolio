import React, { useState } from 'react';
import { Highlighter } from "@/components/ui/highlighter";
// --- 1. Import your project images ---

import project1Img from '../assets/projects/project1.png';
import project2Img from '../assets/projects/project2.png';
import project3Img from '../assets/projects/Project3.png';
import project4Img from '../assets/projects/Project4.png';
import project5Img from '../assets/projects/project5.png';
import project6Img from '../assets/projects/project6.png';
import project7Img from '../assets/projects/project7.png';
import project8Img from '../assets/projects/project8.png';
import project9Img from '../assets/projects/project9.png';
import { Truck } from 'lucide-react';

// --- Data for the projects ---
const projectData = [
    {
        title: 'Infused Nutrition',
        description: 'A modern e-commerce platform built with Blade and Laravel.',
        // Use your Cloudinary video URL here:
        videoUrl: 'https://res.cloudinary.com/dn1udisiy/video/upload/v1774093143/2026-03-21_16-53-53_srllyq.mkv',
        imageUrl: project1Img, // optional fallback
        liveUrl: 'https://infuse-frontend-k8f7.onrender.com/',
        repoUrl: '#',
        tags: ['Blade', 'Laravel', 'MySQL'],
    },
    {
        title: 'Tea Country',
        description: 'A Tourist website created with React.',
        // --- 2. Use the imported variable here ---
        imageUrl: project2Img,
        liveUrl: 'https://teacountry.in',
        repoUrl: '#',
        tags: ['React', 'Vue', 'Tailwind CSS'],
    },
    // {
    //     title: 'MeghaRise Products',
    //     description: 'A modern e-commerce platform using React (Its Frontend Only For Now).',
    //     // --- 2. Use the imported variable here ---
    //     imageUrl: project3Img,
    //     liveUrl: 'https://meghariseproducts.com',
    //     repoUrl: '#',
    //     tags: ['React', 'Vue', 'Tailwind CSS'],
    // },
    {
        title: 'Scabbard Tech',
        description: 'A Digital Marketing website built with React, Vue and Tailwind CSS.',
        videoUrl: 'https://res.cloudinary.com/dktapziq9/video/upload/v1764397211/1764397136159111_zlcckk.mp4',
        liveUrl: 'https://scabbardtech.com',
        repoUrl: '#',
        tags: ['React', 'Vue', 'Tailwind CSS'],
    },
    {
        title: 'Portfolio Website',
        description: 'My personal portfolio website built with React and Tailwind CSS.',
        videoUrl: 'https://res.cloudinary.com/dktapziq9/video/upload/v1764395075/1764395026924189_ij9257.mov',
        imageUrl: project7Img,
        liveUrl: 'https://ashifelahi.netlify.app',
        repoUrl: 'https://github.com/Deadcoder001/React-Personal-Portfolio.git',
        tags: ['React', 'Tailwind CSS', 'GSAP', 'Spline', 'Framer Motion', 'Lenis'],
    },
];

export default function ProjectsMobile() {
    const [showAll, setShowAll] = useState(false);
    const displayedProjects = showAll ? projectData : projectData.slice(0, 3);

    return (
        <section id="projects-mobile" className="w-full bg-white text-black py-12 px-2">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold font-pixel underline-wavy-yellow inline-block">
                    <Highlighter action="underline" color="#FFD700">
                        Projects 🚀
                    </Highlighter>
                </h2>
            </div>
            <div className="flex flex-col gap-6 max-w-md mx-auto">
                {displayedProjects.map((project, idx) => (
                    <div key={idx} className="bg-white rounded-xl shadow p-4 flex flex-col">
                        <div className="w-full h-40 rounded-lg overflow-hidden mb-3 bg-gray-100">
                            {project.videoUrl ? (
                                <video
                                    src={project.videoUrl}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover"
                                    poster={project.imageUrl}
                                />
                            ) : (
                                <img
                                    src={project.imageUrl}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                            )}
                        </div>
                        <h3 className="text-lg font-bold mb-1">{project.title}</h3>
                        <p className="text-xs text-gray-600 mb-2">{project.description}</p>
                        <div className="flex flex-wrap gap-1 mb-2">
                            {project.tags && project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="bg-gray-200 text-gray-800 text-[10px] font-semibold px-2 py-0.5 rounded-full"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div className="flex gap-3 mt-auto">
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn !w-auto !h-auto !px-4 !py-2 !text-xs !rounded-lg"
                            >
                                Visit Site
                            </a>
                            {project.repoUrl && project.repoUrl !== '#' && (
                                <a
                                    href={project.repoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn !w-auto !h-auto !px-4 !py-2 !text-xs !rounded-lg bg-gray-200 text-gray-800 hover:bg-gray-300"
                                >
                                    View Code
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            {/* View More / View Less Button */}
            <div className="text-center mt-8">
                {!showAll && projectData.length > 3 && (
                    <button
                        onClick={() => setShowAll(true)}
                        className="btn"
                    >
                        View More
                    </button>
                )}
                {showAll && (
                    <button
                        onClick={() => setShowAll(false)}
                        className="btn"
                    >
                        View Less
                    </button>
                )}
            </div>
        </section>
    );
}