import { Icons } from "../ui/icons";
import { Separator } from "../ui/separator";

function Footer() {
  return (
    <footer className="mx-auto border-t border-border pt-10 pb-5 flex flex-col gap-3 w-full bg-card">
      <div className="p-3 lg:p-0 flex flex-col gap-1 text-xs text-muted-foreground max-w-3xl justify-center items-center mx-auto">
        <p>
          Design & Developed by <b className="underline">SahilK</b>
        </p>
        <p className="text-center tex-sm md:text-left xl:text-md px-2 md:px-0">
          Inspired by tailwindcss.com & ui.shadcn.com. The source code is
          available on GitHub.
        </p>
      </div>

      <div className="screen-line-top screen-line-bottom flex w-full before:z-1 after:z-1">
        <div className="mx-auto flex items-center justify-center gap-3 border border-line px-4 py-1">
          <a
            className="flex items-center text-muted-foreground transition-[color] hover:text-foreground"
            href="https://x.com/iamncdai?utm_source=chanhdai.com"
            target="_blank"
            rel="noopener"
          >
            <Icons.x className="size-4" />
            <span className="sr-only">X</span>
          </a>
          <Separator orientation="vertical" />
          <a
            className="flex items-center text-muted-foreground transition-[color] hover:text-foreground"
            href="https://github.com/sahil-dev28"
            target="_blank"
            rel="noopener"
          >
            <Icons.github className="size-4" />
            <span className="sr-only">GitHub</span>
          </a>
          <Separator orientation="vertical" />
          <a
            className="flex items-center text-muted-foreground transition-[color] hover:text-foreground"
            href="https://www.linkedin.com/in/ncdai?utm_source=chanhdai.com"
            target="_blank"
            rel="noopener"
          >
            <Icons.linkedin className="size-4" />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
