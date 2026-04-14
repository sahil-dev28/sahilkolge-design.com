import { Projects } from "@/util/constant";
import { Navbar2 } from "../navbar/Navbar";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import Footer from "../footer/Footer";

export const ArchiveProject = () => {
  return (
    <section
      className="flex flex-col justify-center items-center gap-8 bg-background text-foreground"
      id="archive"
    >
      <Navbar2 />

      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold lg:text-4xl">Project Archive</h1>
          <p className="text-muted-foreground text-sm mt-2">
            A collection of projects showcasing my skills, growth, and
            experience.
          </p>
        </div>

        <div className="relative border-l border-border pl-6 space-y-10">
          {Projects.map((project) => {
            return (
              <div key={project.name} className="relative">
                <div className="absolute -left-2.5 top-2 w-4 h-4 bg-primary rounded-full border-2 border-background shadow" />

                {/* Card */}
                <div className="p-5 rounded-xl border border-border bg-card hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <h2 className="text-xl font-semibold">{project.name}</h2>

                    {/* Year Badge */}
                    <Badge className="rounded font-medium bg-primary/10 text-primary px-2 py-1 ">
                      {project.year}
                    </Badge>
                  </div>

                  {/* Status / Type */}
                  <div className="flex gap-2 mt-2">
                    {project.status && (
                      <span className="text-xs bg-green-500/10 text-green-600 dark:text-green-400 px-2 py-1 rounded">
                        {project.status}
                      </span>
                    )}
                    {project.type && (
                      <span className="text-xs bg-purple-500/10 text-purple-600 dark:text-purple-400 px-2 py-1 rounded">
                        {project.type}
                      </span>
                    )}
                  </div>

                  <Separator className="my-4" />

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  {/* {project.highlights && (
                    <ul className="mt-3 text-sm text-muted-foreground list-disc pl-5 space-y-1">
                      {project.highlights.map((point: string, i: number) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  )} */}

                  {/* Tech Stack */}
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold mb-2">
                      Technologies & Tools
                    </h4>

                    <div className="flex flex-wrap gap-2">
                      {project.stack?.map((tech, index) => (
                        <div
                          key={index}
                          className="relative group/tech flex items-center justify-center border border-dashed border-border rounded px-2 py-1 hover:bg-muted transition"
                        >
                          <a
                            href={tech.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              src={tech.icon}
                              alt={tech.name}
                              className="w-4 h-4"
                            />
                          </a>

                          {/* Tooltip */}
                          <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-foreground text-background text-xs px-2 py-1 rounded opacity-0 group-hover/tech:opacity-100 transition">
                            {tech.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 mt-5 flex-wrap">
                    {project.redirectionLink && (
                      <a
                        href={project.redirectionLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition"
                      >
                        Live Demo
                      </a>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 text-sm font-medium border border-border rounded-lg hover:bg-muted transition"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* FOOTER */}
      <Footer />
    </section>
  );
};
