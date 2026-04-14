import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function StackLogo() {
  const openInNewTab = (url: string) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  return (
    <div className="w-full md:w-2xl max-w-full border-y-2 mx-auto relative overflow-x-hidden">
      {/* LEFT FADE */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-5 lg:w-15 bg-linear-to-r from-white to-transparent dark:from-black" />

      {/* RIGHT FADE */}
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-5 lg:w-15 bg-linear-to-l from-white to-transparent dark:from-black" />

      {/* SLIDING LOGOS */}
      <div className="flex w-max animate-slide hover:paused">
        <ul className="flex gap-8 p-5">
          <li className="flex">
            <Tooltip>
              <TooltipTrigger>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    openInNewTab("https://www.typescriptlang.org/");
                  }}
                >
                  <img
                    width="40"
                    height="40"
                    src="https://assets.chanhdai.com/images/tech-stack-icons/typescript.svg"
                  />
                </a>
              </TooltipTrigger>
              <TooltipContent>TypeScript</TooltipContent>
            </Tooltip>
          </li>
          <li className="flex">
            <Tooltip>
              <TooltipTrigger>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    openInNewTab(
                      "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
                    );
                  }}
                >
                  <img
                    width="40"
                    height="40"
                    src="https://assets.chanhdai.com/images/tech-stack-icons/js.svg"
                  />
                </a>
              </TooltipTrigger>
              <TooltipContent>JavaScript</TooltipContent>
            </Tooltip>
          </li>
          <li className="flex">
            <Tooltip>
              <TooltipTrigger>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    openInNewTab("https://react.dev/");
                  }}
                >
                  <img
                    width="40"
                    height="40"
                    src="https://assets.chanhdai.com/images/tech-stack-icons/react.svg"
                  />
                </a>
              </TooltipTrigger>
              <TooltipContent>React</TooltipContent>
            </Tooltip>
          </li>
          <li className="flex">
            <Tooltip>
              <TooltipTrigger>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    openInNewTab("https://tanstack.com/");
                  }}
                >
                  <img
                    width="40"
                    height="40"
                    className="hidden [html.light_&]:block"
                    src="https://assets.chanhdai.com/images/tech-stack-icons/tanstack-light.svg"
                  />
                  <img
                    width="40"
                    height="40"
                    className="hidden [html.dark_&]:block"
                    src="https://assets.chanhdai.com/images/tech-stack-icons/tanstack-dark.svg"
                  />
                </a>
              </TooltipTrigger>
              <TooltipContent>TanStack</TooltipContent>
            </Tooltip>
          </li>
          <li className="flex">
            <Tooltip>
              <TooltipTrigger>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    openInNewTab("https://redux.js.org/");
                  }}
                >
                  <img
                    width="40"
                    height="40"
                    src="https://assets.chanhdai.com/images/tech-stack-icons/redux.svg"
                  />
                </a>
              </TooltipTrigger>
              <TooltipContent>Redux</TooltipContent>
            </Tooltip>
          </li>
          <li className="flex">
            <Tooltip>
              <TooltipTrigger>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    openInNewTab("https://reactrouter.com/");
                  }}
                >
                  <img
                    width="40"
                    height="40"
                    className="hidden [html.light_&]:block"
                    src="https://assets.chanhdai.com/images/tech-stack-icons/react-router-light.svg"
                  />

                  <img
                    width="40"
                    height="40"
                    className="hidden [html.dark_&]:block"
                    src="https://assets.chanhdai.com/images/tech-stack-icons/react-router-dark.svg"
                  />
                </a>
              </TooltipTrigger>
              <TooltipContent>React Router</TooltipContent>
            </Tooltip>
          </li>
          <li className="flex">
            <Tooltip>
              <TooltipTrigger>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    openInNewTab("https://tailwindcss.com/");
                  }}
                >
                  <img
                    width="40"
                    height="40"
                    src="https://assets.chanhdai.com/images/tech-stack-icons/tailwindcss.svg"
                  />
                </a>
              </TooltipTrigger>
              <TooltipContent>Tailwind CSS</TooltipContent>
            </Tooltip>
          </li>
          <li className="flex">
            <Tooltip>
              <TooltipTrigger>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    openInNewTab("https://ui.shadcn.com/");
                  }}
                >
                  <img
                    width="40"
                    height="40"
                    src="https://images.seeklogo.com/logo-png/51/1/shadcn-ui-logo-png_seeklogo-519786.png"
                  />
                </a>
              </TooltipTrigger>
              <TooltipContent>Shadcn</TooltipContent>
            </Tooltip>
          </li>
          <li className="flex">
            <Tooltip>
              <TooltipTrigger>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    openInNewTab("https://zustand-demo.pmnd.rs/");
                  }}
                >
                  <img
                    width="40"
                    height="40"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpHj4UwTW4ANSlNjzQOiiOqfDa6kal9RpF0A&s"
                  />
                </a>
              </TooltipTrigger>
              <TooltipContent>Zustand</TooltipContent>
            </Tooltip>
          </li>
          <li className="flex">
            <Tooltip>
              <TooltipTrigger>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    openInNewTab("https://react-hook-form.com/");
                  }}
                >
                  <img
                    width="40"
                    height="40"
                    src="https://react-hook-form.com/images/logo/react-hook-form-logo-only.svg"
                  />
                </a>
              </TooltipTrigger>
              <TooltipContent>React Hook Form</TooltipContent>
            </Tooltip>
          </li>
        </ul>

        {/*  */}
        <ul className="flex gap-8 p-5">
          <li className="flex">
            <Tooltip>
              <TooltipTrigger>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    openInNewTab("https://www.typescriptlang.org/");
                  }}
                >
                  <img
                    width="40"
                    height="40"
                    src="https://assets.chanhdai.com/images/tech-stack-icons/typescript.svg"
                  />
                </a>
              </TooltipTrigger>
              <TooltipContent>TypeScript</TooltipContent>
            </Tooltip>
          </li>
          <li className="flex">
            <Tooltip>
              <TooltipTrigger>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    openInNewTab(
                      "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
                    );
                  }}
                >
                  <img
                    width="40"
                    height="40"
                    src="https://assets.chanhdai.com/images/tech-stack-icons/js.svg"
                  />
                </a>
              </TooltipTrigger>
              <TooltipContent>JavaScript</TooltipContent>
            </Tooltip>
          </li>
          <li className="flex">
            <Tooltip>
              <TooltipTrigger>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    openInNewTab("https://react.dev/");
                  }}
                >
                  <img
                    width="40"
                    height="40"
                    src="https://assets.chanhdai.com/images/tech-stack-icons/react.svg"
                  />
                </a>
              </TooltipTrigger>
              <TooltipContent>React</TooltipContent>
            </Tooltip>
          </li>
          <li className="flex">
            <Tooltip>
              <TooltipTrigger>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    openInNewTab("https://tanstack.com/");
                  }}
                >
                  <img
                    width="40"
                    height="40"
                    className="hidden [html.light_&]:block"
                    src="https://assets.chanhdai.com/images/tech-stack-icons/tanstack-light.svg"
                  />
                  <img
                    width="40"
                    height="40"
                    className="hidden [html.dark_&]:block"
                    src="https://assets.chanhdai.com/images/tech-stack-icons/tanstack-dark.svg"
                  />
                </a>
              </TooltipTrigger>
              <TooltipContent>TanStack</TooltipContent>
            </Tooltip>
          </li>
          <li className="flex">
            <Tooltip>
              <TooltipTrigger>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    openInNewTab("https://redux.js.org/");
                  }}
                >
                  <img
                    width="40"
                    height="40"
                    src="https://assets.chanhdai.com/images/tech-stack-icons/redux.svg"
                  />
                </a>
              </TooltipTrigger>
              <TooltipContent>Redux</TooltipContent>
            </Tooltip>
          </li>
          <li className="flex">
            <Tooltip>
              <TooltipTrigger>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    openInNewTab("https://reactrouter.com/");
                  }}
                >
                  <img
                    width="40"
                    height="40"
                    className="hidden [html.light_&]:block"
                    src="https://assets.chanhdai.com/images/tech-stack-icons/react-router-light.svg"
                  />

                  <img
                    width="40"
                    height="40"
                    className="hidden [html.dark_&]:block"
                    src="https://assets.chanhdai.com/images/tech-stack-icons/react-router-dark.svg"
                  />
                </a>
              </TooltipTrigger>
              <TooltipContent>React Router</TooltipContent>
            </Tooltip>
          </li>
          <li className="flex">
            <Tooltip>
              <TooltipTrigger>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    openInNewTab("https://tailwindcss.com/");
                  }}
                >
                  <img
                    width="40"
                    height="40"
                    src="https://assets.chanhdai.com/images/tech-stack-icons/tailwindcss.svg"
                  />
                </a>
              </TooltipTrigger>
              <TooltipContent>Tailwind CSS</TooltipContent>
            </Tooltip>
          </li>
          <li className="flex">
            <Tooltip>
              <TooltipTrigger>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    openInNewTab("https://ui.shadcn.com/");
                  }}
                >
                  <img
                    width="40"
                    height="40"
                    src="https://images.seeklogo.com/logo-png/51/1/shadcn-ui-logo-png_seeklogo-519786.png"
                  />
                </a>
              </TooltipTrigger>
              <TooltipContent>Shadcn</TooltipContent>
            </Tooltip>
          </li>
          <li className="flex">
            <Tooltip>
              <TooltipTrigger>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    openInNewTab("https://zustand-demo.pmnd.rs/");
                  }}
                >
                  <img
                    width="40"
                    height="40"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpHj4UwTW4ANSlNjzQOiiOqfDa6kal9RpF0A&s"
                  />
                </a>
              </TooltipTrigger>
              <TooltipContent>Zustand</TooltipContent>
            </Tooltip>
          </li>
          <li className="flex">
            <Tooltip>
              <TooltipTrigger>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    openInNewTab("https://react-hook-form.com/");
                  }}
                >
                  <img
                    width="40"
                    height="40"
                    src="https://react-hook-form.com/images/logo/react-hook-form-logo-only.svg"
                  />
                </a>
              </TooltipTrigger>
              <TooltipContent>React Hook Form</TooltipContent>
            </Tooltip>
          </li>
        </ul>
      </div>
    </div>
  );
}
