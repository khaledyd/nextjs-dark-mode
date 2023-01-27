import Head from "next/head";
import Image from "next/image";

import { DarkModeContext, DarkModeContextProps } from "./DarkmodeContext";
import { useContext } from "react";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import Link from "next/link";
export default function About() {
  const { darkMode, toggleDarkMode } =
    useContext<DarkModeContextProps>(DarkModeContext);
  return (
    <>
      <Head>
        <title>Next-dark-mode</title>
      </Head>
      <div className={darkMode ? "dark" : ""}>
        <main className="  w-full h-screen  bg-light-primary pt-5 flex flex-col dark:bg-dark-primary">
          <div className=" w-full flex justify-center gap-5    font-openSans text-lg  text-dark-primary  dark:text-light-primary  ">
            <Link href="/">Home</Link>
            <Link href="/About">About</Link>
            <Link href="/Features">Features</Link>
            {darkMode ? (
              <LightModeOutlinedIcon onClick={toggleDarkMode} />
            ) : (
              <DarkModeOutlinedIcon onClick={toggleDarkMode} />
            )}
          </div>
          <div className="w-5/6 h-5/6 mt-10 bg-light-secondary self-center flex justify-end top-0 bottom-0 items-center justify-content: center pt-20 rounded-md dark:bg-dark-secondary">
            <div className="w-5/6 h-full flex  justify-center bg-light-primary  flex-col rounded-md dark:bg-dark-primary ">
              <p className="text-3xl  w-1/2  self-center font-openSans     text-dark-secondary dark:text-light-primary ">
                About
              </p>
              <p className=" w-1/2 self-center   font-poppins mt-3  text-md    text-dark-primary font-thin  dark:text-light-secondary ">
                This website offers a sleek and modern design, with a
                user-friendly interface that allows for easy navigation between
                its multiple pages. One of the key features of the website is
                its Dark Mode functionality, which can be toggled on and off for
                an enhanced viewing experience in any lighting conditions. With
                its responsive design and intuitive layout, this website is an
                excellent choice for anyone looking for a high-quality,
                easy-to-use online experience.
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
