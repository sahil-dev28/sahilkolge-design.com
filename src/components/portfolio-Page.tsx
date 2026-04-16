"use client";

import { Navbar } from "./navbar/Navbar";
import { Button } from "./ui/button";
import { ScrollText } from "lucide-react";
import StackLogo from "./stack-logos/Stack-Logo";
import ContactForm from "./contact-form/Contact-Form";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ContainerTextFlip } from "./ui/container-text-flip";
import profileImage from "./../assets/ProfileImage.png";
import { Projects } from "@/util/constant";
import { ProjectCard } from "./ui/projectCard";
import { Link } from "react-router";
import Footer from "./footer/Footer";

const featuredProjects = Projects.slice(0, 4);

export const PortfolioPage = () => {
  const openInNewTab = (url: string) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  return (
    <section className="flex flex-col gap-5" id="portfolio">
      <Navbar />
      <div className="flex flex-col gap-10 w-full md:w-2xl xl:max-w-3xl mx-auto m-10 px-10 lg:px-0">
        {/* INTRODUCTION */}
        <div className="flex flex-col md:flex-row justify-start items-start max-w-3xl mx-auto gap-5 md:gap-10">
          <div>
            <Avatar className="size-33">
              <AvatarImage
                src={profileImage}
                alt="shadcn"
                className="rounded-full object-cover size-full"
              />
              <AvatarFallback className="text-xs">SK</AvatarFallback>
            </Avatar>
          </div>
          <div className="font-extrabold text-3xl md:mt-3 flex flex-col">
            <h1>Hi, I'm Sahil.</h1>
            <h2 className="text-muted-foreground">Frontend Developer</h2>

            <ContainerTextFlip
              words={["React", "TypeScript", "JavaScript", "Tailwind CSS"]}
              className={"text-sm rounded-sm p-1 font-semibold"}
              animationDuration={500}
            />
          </div>
        </div>

        {/* STACK */}
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold">Skills</h2>
          <StackLogo />
        </div>

        {/* ABOUT */}
        <div className="flex flex-col gap-3" id="about">
          <h2 className="text-2xl font-bold">About</h2>
          <div className="flex flex-col gap-2">
            <ul className="list-disc text-md text-muted-foreground ml-5">
              <li>
                I’m a frontend developer who’s all about crafting clean, fast,
                and intuitive web applications. With a strong focus on React and
                modern JavaScript, I’m passionate about turning ideas into
                polished digital experiences.
              </li>
              <li>
                My expertise spans UI design, state management, form handling,
                and responsive design. I’ve built projects ranging from simple
                tools to complex frontend workflows with authentication and API
                integration.
              </li>
              <li>
                I’m currently focused on sharpening my frontend skills while
                steadily expanding toward full-stack development. I believe good
                developers aren’t defined by frameworks alone, but by curiosity,
                consistency, and the willingness to keep improving — and that’s
                exactly how I approach my journey.
              </li>
              <li>
                If you’re looking for someone who cares about both code quality
                and user experience, you’re in the right place.
              </li>
            </ul>
          </div>
          <div className="flex gap-4 mt-5">
            <Link to="/resume" id="resume">
              <Button variant="outline" className="cursor-pointer">
                <ScrollText />
                Resume / CV
              </Button>
            </Link>

            <a id="contact" href="#contact-form">
              <ContactForm />
            </a>
          </div>
        </div>

        {/* SOCAIL MEDIA */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Link
            onClick={(e) => {
              e.preventDefault();
              openInNewTab("https://x.com/sahilkolge28");
            }}
            to=""
            className="group flex cursor-pointer items-center border rounded-xl gap-4 p-4 pr-2 transition-[background-color] ease-out hover:bg-accent-muted max-sm:screen-line-before max-sm:screen-line-after sm:nth-[2n+1]:screen-line-before sm:nth-[2n+1]:screen-line-after"
          >
            <div>
              <img
                width="48"
                height="48"
                src="https://assets.chanhdai.com/images/link-icons/x.webp?t=1759581475"
              />
            </div>
            <div>
              <h3 className="flex items-center font-medium underline-offset-4 group-hover:underline">
                X
              </h3>

              <p className="text-sm text-muted-foreground">Sahil Kolge</p>
            </div>
          </Link>
          <Link
            onClick={(e) => {
              e.preventDefault();
              openInNewTab("https://www.linkedin.com/in/sahilkolge-dev");
            }}
            to="https://www.linkedin.com/in/sahilkolge-dev"
            className="group flex cursor-pointer items-center border rounded-xl gap-4 p-4 pr-2 transition-[background-color] ease-out hover:bg-accent-muted max-sm:screen-line-before max-sm:screen-line-after sm:nth-[2n+1]:screen-line-before sm:nth-[2n+1]:screen-line-after"
          >
            <div>
              <img
                width="48"
                height="48"
                src="https://assets.chanhdai.com/images/link-icons/linkedin.webp?t=1759581475"
              />
            </div>
            <div>
              <h3 className="flex items-center font-medium underline-offset-4 group-hover:underline">
                LinkedIn
              </h3>

              <p className="text-sm text-muted-foreground">Sahil Kolge</p>
            </div>
          </Link>
          <Link
            onClick={(e) => {
              e.preventDefault();
              openInNewTab("https://github.com/sahil-dev28");
            }}
            to="https://github.com/sahil-dev28"
            className="group flex cursor-pointer items-center border rounded-xl gap-4 p-4 pr-2 transition-[background-color] ease-out hover:bg-accent-muted max-sm:screen-line-before max-sm:screen-line-after sm:nth-[2n+1]:screen-line-before sm:nth-[2n+1]:screen-line-after"
          >
            <div>
              <img
                width="48"
                height="48"
                src="https://assets.chanhdai.com/images/link-icons/github.webp?t=1759581475"
              />
            </div>
            <div>
              <h3 className="flex items-center font-medium underline-offset-4 group-hover:underline">
                GitHub
              </h3>

              <p className="text-sm text-muted-foreground">Sahil Kolge</p>
            </div>
          </Link>
          <Link
            onClick={(e) => {
              e.preventDefault();
              openInNewTab("mailto:sahilkolge028@gmail.com");
            }}
            to="mailto:sahilkolge028@gmail.com"
            className="group flex cursor-pointer items-center border rounded-xl gap-4 p-4 pr-2 transition-[background-color] ease-out hover:bg-accent-muted max-sm:screen-line-before max-sm:screen-line-after sm:nth-[2n+1]:screen-line-before sm:nth-[2n+1]:screen-line-after"
          >
            <div>
              <img
                width="48"
                height="48"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/1280px-Gmail_icon_%282020%29.svg.png"
              />
            </div>
            <div>
              <h3 className="flex items-center font-medium underline-offset-4 group-hover:underline">
                Email
              </h3>

              <p className="text-sm text-muted-foreground">Sahil Kolge</p>
            </div>
          </Link>
        </div>

        {/* PROJECTS */}
        <div className="">
          <h2 className="text-2xl font-bold" id="project">
            Projects
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 mt-5">
            {featuredProjects.map((project) => {
              return (
                <ProjectCard
                  name={project.name}
                  description={project.description}
                  projectImage={project.projectImage}
                  redirectionLink={project.redirectionLink}
                  project={project}
                />
              );
            })}
          </div>
          <div>
            <Link
              to="/archive"
              className="text-sm font-light capitalize border rounded-sm w-fit mt-10 flex justify-center items-center mx-auto px-2 py-1 gap-2 hover:bg-muted cursor-pointer"
            >
              View All Archive Projects
            </Link>
          </div>
        </div>
      </div>
      {/* FOOTER */}
      <Footer />
    </section>
  );
};
