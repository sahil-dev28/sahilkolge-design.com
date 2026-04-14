import { resumeConfig } from "@/util/Resume";
import Footer from "../footer/Footer";
import { Navbar2 } from "../navbar/Navbar";
import { Separator } from "../ui/separator";

function Resume() {
  return (
    <section className="flex flex-col gap-8 w-full" id="archive">
      <Navbar2 />

      <div className="flex flex-col w-full md:w-2xl xl:max-w-3xl mx-auto px-6">
        {/* HEADER */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold lg:text-4xl">Resume</h1>
          <p className="text-muted-foreground text-sm mt-2">
            View and download my professional resume.
          </p>
        </div>
        <Separator />
        {/* RESUME VIEWER */}
        <div className="mt-10">
          <div className="mx-auto max-w-2xl">
            <iframe
              src={resumeConfig.url}
              className="min-h-screen w-full"
            ></iframe>
          </div>
        </div>
      </div>
      {/* FOOTER */}
      <Footer />
    </section>
  );
}

export default Resume;
