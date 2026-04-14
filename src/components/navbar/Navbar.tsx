import { ModeToggle } from "../ui/mode-toggle";
import { Avatar, AvatarImage } from "../ui/avatar";
import profileImage from "./../../assets/ProfileImage.png";
import { Link } from "react-router";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 max-w-screen backdrop-blur-sm rounded-md py-2">
      <div className="flex w-full lg:w-2xl xl:max-w-3xl mx-auto justify-between items-center">
        <div className="flex pl-5 items-center gap-10">
          <a href="#portfolio" className="flex sm:gap-2 gap-1">
            <div>
              <Avatar className="size-10 hover:scale-90 transition-transform duration-300 border-2 border-solid border-transparent rounded-lg">
                <AvatarImage
                  src={profileImage}
                  alt="profile"
                  className="rounded-lg object-cover size-full"
                />
              </Avatar>
            </div>
            <div className="rounded-none text-muted-foreground shadow-none mt-3 text-md focus-visible:z-10 p-0">
              Portfolio /
            </div>
          </a>
        </div>

        <div className="flex items-center text-muted-foreground text-md justify-center gap-6 mr-5">
          <ul className="flex sm:gap-5 gap-2 justify-center items-center">
            <a href="#about">
              <li>
                <div className="rounded-none shadow-none focus-visible:z-10 p-0">
                  About
                </div>
              </li>
            </a>

            <a href="#project">
              <li>
                <div className="rounded-none shadow-none focus-visible:z-10 p-0">
                  Projects
                </div>
              </li>
            </a>

            <a href="#contact">
              <li>
                <div className="rounded-none shadow-none focus-visible:z-10 p-0">
                  Contact
                </div>
              </li>
            </a>
          </ul>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}

export function Navbar2() {
  return (
    <nav className="sticky top-0 z-50 max-w-screen backdrop-blur-sm rounded-md py-2">
      <div className="flex w-full lg:w-2xl xl:max-w-3xl mx-auto justify-between items-center">
        <div className="flex pl-5 items-center gap-10">
          <Link to="/" className="flex sm:gap-2 gap-1">
            <div>
              <Avatar className="size-10 hover:scale-90 transition-transform duration-300 border-2 border-solid border-transparent rounded-lg">
                <AvatarImage
                  src={profileImage}
                  alt="profile"
                  className="rounded-lg object-cover size-full ring-ring"
                />
              </Avatar>
            </div>
            <div className="rounded-none shadow-none text-muted-foreground mt-3 text-sm focus-visible:z-10 p-0">
              Portfolio /
            </div>
          </Link>
        </div>

        <div className="flex items-center justify-center  gap-6 mr-5">
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
