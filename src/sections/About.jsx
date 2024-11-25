import React, { useRef } from "react";
import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";
import StarIcon from "../assets/icons/star.svg?react";
import bookImage from "../assets/images/book-cover.png";
import JavaScriptIcon from "../assets/icons/square-js.svg?react";
import HTMLIcon from "../assets/icons/html5.svg?react";
import CSSIcon from "../assets/icons/css3.svg?react";
import ReactIcon from "../assets/icons/react.svg?react";
import ChromeIcon from "../assets/icons/chrome.svg?react";
import GithubIcon from "../assets/icons/github.svg?react";
import { motion } from "framer-motion";

import CardHeader from "../components/CardHeader";
import ToolboxItems from "../components/ToolboxItems";

const toolboxItems = [
  {
    title: "JavaScript",
    iconType: JavaScriptIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CSSIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Chrome",
    iconType: ChromeIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
];

const hobbies = [
  {
    title: "Gaming",
    emoji: "🎮",
    left: "5%",
    top: "5%",
  },
  {
    title: "Reading",
    emoji: "📖",
    left: "50%",
    top: "5%",
  },
  {
    title: "Photography",
    emoji: "📸",
    left: "10%",
    top: "35%",
  },
  {
    title: "Traveling",
    emoji: "✈️",
    left: "35%",
    top: "40%",
  },
  {
    title: "Cooking",
    emoji: "🍳",
    left: "70%",
    top: "45%",
  },
  {
    title: "Hiking",
    emoji: "🏞️",
    left: "5%",
    top: "65%",
  },
];

function About() {
  const constraintRef = useRef(null);
  return (
    <div className="py-20 lg:py-28" id="about">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who i am, what i do, and where i come from."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grif-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspective."
              />

              <div className="w-40 mx-auto mt-2 md:mt-0">
                <img src={bookImage} alt="Book Cover" />
              </div>
            </Card>

            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools i use to craft exceptional digital experiences."
              />

              <ToolboxItems items={toolboxItems} className="" itemsWrapperClassName="animate-move-left [animation-duration:30s]" />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="animate-move-right [animation-duration:15s]"
              />
            </Card>
          </div>

          <Card className="h-[320px] p-0 flex flex-col">
            <CardHeader
              title="Beyond the Code"
              description="Explore my interests and hobbies beyond the digital realm."
              className="px-6 py-6"
            />
            <div className="relative flex-1" ref={constraintRef}>
              {hobbies.map((hobby) => (
                <motion.div
                  key={hobby.title}
                  className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                  style={{
                    left: hobby.left,
                    top: hobby.top,
                  }}
                  drag
                  dragConstraints={constraintRef}
                >
                  <span className="font-medium text-gray-950">
                    {hobby.title}
                  </span>
                  <span>{hobby.emoji}</span>
                </motion.div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default About;
