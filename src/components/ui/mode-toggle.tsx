import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useTheme } from "./theme-provider";
import { useSound } from "@/hooks/use-sound";
import { useCallback } from "react";
import { SOUNDS } from "@/lib/sounds";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const playClick = useSound(SOUNDS.click);

  const switchTheme = useCallback(() => {
    playClick(0.5);
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme, setTheme, playClick]);

  return (
    <Button
      variant="outline"
      className="cursor-pointer"
      size="icon"
      // onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      onClick={switchTheme}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />

      <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
    </Button>
  );
}

// ("use client");

// import { useTheme } from "next-themes";
// import { useCallback } from "react";
// import { useHotkeys } from "react-hotkeys-hook";

// import { Kbd } from "./kbd";
// import { MoonIcon, SunIcon } from "lucide-react";
// import { Button } from "./button";
// import { useSound } from "@/hooks/use-sound";
// import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";
// import { SOUNDS } from "@/lib/sounds";

// export function ThemeToggle() {
//   const { resolvedTheme, setTheme } = useTheme();

//   const playClick = useSound(SOUNDS.click);

//   const switchTheme = useCallback(() => {
//     playClick(0.5);
//     setTheme(resolvedTheme === "dark" ? "light" : "dark");
//   }, [resolvedTheme, setTheme, playClick]);

//   useHotkeys("d", switchTheme);

//   return (
//     <Tooltip>
//       <TooltipTrigger
//         render={
//           <Button
//             variant="ghost"
//             size="icon"
//             onClick={switchTheme}
//             // onClick={() => {
//             //   if (!document.startViewTransition) switchTheme();
//             //   document.startViewTransition(switchTheme);
//             // }}
//           >
//             <MoonIcon className="relative hidden after:absolute after:-inset-2 [html.dark_&]:block" />
//             <SunIcon className="relative hidden after:absolute after:-inset-2 [html.light_&]:block" />
//             <span className="sr-only">Theme Toggle</span>
//           </Button>
//         }
//       />
//       <TooltipContent className="pr-2 pl-3">
//         <div className="flex items-center gap-3">
//           Toggle Mode
//           <Kbd>D</Kbd>
//         </div>
//       </TooltipContent>
//     </Tooltip>
//   );
// }
