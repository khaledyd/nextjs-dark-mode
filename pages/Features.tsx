import Head from "next/head";
import Image from "next/image";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { DarkModeContext, DarkModeContextProps } from "./DarkmodeContext";
import { useContext } from "react";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import Link from "next/link";

export default function Features() {
  const { darkMode, toggleDarkMode } =
    useContext<DarkModeContextProps>(DarkModeContext);
  return (
    <>
      <Head>
        <title>Next-dark-mode</title>
      </Head>
      <div className={darkMode ? "dark" : ""}>
        <main className="  w-full h-screen  bg-light-primary pt-5 flex flex-col dark:bg-dark-primary ">
          <div className=" w-full flex justify-center gap-5    font-openSans text-lg  text-dark-primary   dark:text-light-primary  ">

      
            <Link href="/">Home</Link>
            <Link href="/About">About</Link>
            <Link href="/Features">Features</Link>
  
            {darkMode ? (
              <LightModeOutlinedIcon onClick={toggleDarkMode} />
            ) : (
              <DarkModeOutlinedIcon onClick={toggleDarkMode} />
            )}
          </div>
          <div className="w-5/6 h-5/6 mt-10 bg-light-secondary self-center flex justify-center top-0 bottom-0   items-center rounded-md dark:bg-dark-secondary">
            <div className="w-5/6 h-5/6 flex  justify-center      bg-gray-400/10  rounded-md  items-center ">
              <div className=" w-1/2 h-1/2  flex  flex-col ">
                <p className="  self-center  text-2xl mb-3 dark:text-light-primary ">Light Mode</p>

                <div className=" w-1/2 h-1/3 bg-light-primary self-center"></div>
                <div className=" w-1/2 h-1/3    bg-light-secondary self-center"></div>
              </div>
              <div className=" w-1/2 h-1/2  flex  flex-col ">
                <p className="  self-center  text-2xl mb-3 dark:text-light-primary ">Dark Mode</p>

                <div className=" w-1/2 h-1/3 bg-dark-primary self-center"></div>
                <div className=" w-1/2 h-1/3  bg-dark-secondary self-center"></div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
//nav
//sectopn
