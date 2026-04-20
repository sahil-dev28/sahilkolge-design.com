import { PortfolioPage } from "@/components/porfolio-page/Portfolio-Page";
import { ThemeProvider } from "./components/ui/theme-provider";
import { Toaster } from "./components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ArchiveProject } from "./components/archive-projects/Archive-Project";
import Resume from "./components/resume/Resume";
import { ScrollToTop } from "./components/ui/scroll-to-top";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <PortfolioPage />,
  },
  {
    path: "/archive",
    element: <ArchiveProject />,
  },
  {
    path: "/resume",
    element: <Resume />,
  },
]);

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ScrollToTop />
      </QueryClientProvider>
      <Toaster position="top-right" richColors />
    </ThemeProvider>
  );
}

export default App;
