import React from 'react';
import { File, Folder, Tree } from "@/components/ui/file-tree";
import { Highlighter } from "@/components/ui/highlighter";

export default function Education() {
  return (
    <section id="education" className="w-full bg-white text-black pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="inline-block mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-pixel">
              <Highlighter action="underline" color="#FFD700">
                Qualifications
              </Highlighter>
            </h2>
          </div>
          <div className="relative flex max-w-lg mx-auto flex-col items-center justify-center overflow-hidden rounded-lg border bg-background p-4">
            <Tree
              className="w-full bg-background overflow-hidden rounded-md"
              initialExpandedItems={["Education", "LPU", "SXHS", "SXHS", "Certifications"]}
            >
              <Folder element="My Education" value="Education">
                <Folder element="Lovely Professional University, Punjab" value="LPU">
                  <File value="LPU-BTech">
                    <p>B.Tech in Computer Science and Engineering (2023 – 2027)</p>
                  </File>
                </Folder>
                <Folder element="St. Xaviers High School, Patna" value="SXHS">
                  <File value="SXHS-HigherSecondary">
                    <p>Higher Secondary (2022)</p>
                  </File>
                </Folder>
                 <Folder element="St. Xaviers High School, Patna" value="SXHS">
                   <File value="SXHS-Matric">
                    <p>Matriculation (2020)</p>
                  </File>                   
                </Folder>
              </Folder>
                <Folder element="My Certifications" value="Certifications">
                  <Folder element="SkillStone" value="SkillStone">
                    <File value="SkillStone-Intro">
                      <a href="https://drive.google.com/file/d/13WlVIkJayCTGvn5hdmo3KwEuY6D1T7kq/view" target="_blank" rel="noopener noreferrer">
                        <p>Java Fundamentals</p>
                      </a>
                    </File>
                  </Folder>
                  <Folder element="Oracle University" value="Oracle">
                    <File value="Oracle-AI">
                      <a href="https://drive.google.com/file/d/1Mb4nT2DpZ1Vdwtsyg5QGM3mpV9_89HSF/view" target="_blank" rel="noopener noreferrer">
                        <p>Oracle Cloud Infrastructure AI Foundation Associate</p>
                      </a>
                    </File>
                  </Folder>
                  <Folder element="IIT Kharagpur" value="IITK">
                    <File value="IITK-Cloud">
                      <a href="https://drive.google.com/file/d/1KDF6DFNdAYysejn0wNAsXM-SC7f_zfpo/view" target="_blank" rel="noopener noreferrer">
                        <p>Cloud Computing</p>
                      </a>
                    </File>
                  </Folder>
                  <Folder element="NEO Colab" value="NEO">
                    <File value="NEO-DSA">
                      <a href="https://drive.google.com/file/d/13-4QtdPVJTYUYnWEeTfOOxevDDLxJBmZ/view" target="_blank" rel="noopener noreferrer">
                        <p>Data Structures and Algorithms</p>
                      </a>
                    </File>
                  </Folder>
                </Folder>
            </Tree>
          </div>
        </div>
      </div>
    </section>
  );
}