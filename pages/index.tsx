import Head from "next/head";
import Image from "next/image";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { DarkModeContext, DarkModeContextProps } from "./DarkmodeContext";
import { useContext } from "react";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import Link from "next/link";
export default function Home() {
  const { darkMode, toggleDarkMode } =
    useContext<DarkModeContextProps>(DarkModeContext);
  return (
    <>
      <Head>
        <title>Next-dark-mode</title>
      </Head>
      <div className={darkMode ? "dark" : ""}>
        <main className="  w-full h-screen  bg-light-primary pt-5 flex flex-col dark:bg-dark-primary">
          <div className=" w-full flex justify-center gap-5    font-openSans text-lg  text-dark-primary dark:text-light-primary  ">
            <Link href="/">Home</Link>
            <Link href="/About">About</Link>
            <Link href="/Features">Features</Link>
            {darkMode ? (
              <LightModeOutlinedIcon onClick={toggleDarkMode} />
            ) : (
              <DarkModeOutlinedIcon onClick={toggleDarkMode} />
            )}
          </div>
          <div className="w-5/6 h-5/6 mt-10 self-center  bg-light-secondary flex justify-center top-0 bottom-0 items-center justify-content: center dark:bg-dark-secondary rounded-lg">
            <div className="w-5/6 h-5/6  flex  justify-center bg-light-primary  flex-col dark:bg-dark-primary rounded-lg">
              <p className="text-2xl w-1/2  self-center font-openSans     text-dark-secondary dark:text-light-primary  ">
                Dark Mode on Multi-Page Website
              </p>
              <p className="w-1/2   self-center  font-poppins mt-3  text-sm    text-dark-primary font-thin dark:text-light-secondary  ">
                The website has three pages, and each page includesfunctionality
                for a dark mode using the Context API. This allows for a
                seamless user experience as the user can toggle between the dark
                and light mode on any of the pages
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
//nav
//sectopn
