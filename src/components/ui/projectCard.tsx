import { Card, CardContent } from "./card";

type ProjectCardProps = {
  redirectionLink: string;
  name: string;
  description: string;
  projectImage: string;
  project: {
    stack?: { name: string; icon: string; link: string }[];
  };
};

export const ProjectCard = ({
  redirectionLink,
  name,
  description,
  projectImage,
  project,
}: ProjectCardProps) => {
  const openInNewTab = (url: string) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div>
      <Card className="bg-muted/10 hover:bg-muted/50 transition-colors">
        <a
          href={redirectionLink}
          onClick={(e) => {
            e.preventDefault();
            openInNewTab(redirectionLink);
          }}
        >
          <img
            className="size-full mx-auto max-h-45 object-cover"
            src={projectImage}
          />
        </a>

        <CardContent>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <a
                href={redirectionLink}
                onClick={(e) => {
                  e.preventDefault();
                  openInNewTab(redirectionLink);
                }}
              >
                <h3 className="text-xl font-semibold">{name}</h3>
              </a>
            </div>
            <div>
              <p className="text-muted-foreground">{description}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-2 text-muted-foreground">
                Technologies & Tools
              </h4>
              <div className="flex gap-2 mt-4">
                {project.stack?.map(
                  (
                    tech: { name: string; icon: string; link: string },
                    index: number,
                  ) => (
                    <div
                      key={index}
                      className="group inline-flex justify-center items-center gap-0 rounded border border-dashed border-gray-600 px-2 py-1 text-sm font-medium text-foreground outline-none transition-all duration-300 ease-out hover:scale-[1.03] hover:gap-1.5 hover:border-border hover:bg-muted hover:shadow-sm focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:gap-1.5 hover:delay-0"
                    >
                      <a
                        key={index}
                        href={tech.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group"
                      >
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          className="w-4 h-4 transition-transform duration-200 group-hover:scale-110"
                        />
                      </a>
                      <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                        {tech.name}
                      </span>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
