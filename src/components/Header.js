"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import '../app/globals.css';

import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme") || "light";
    setTheme(currentTheme);
    document.documentElement.classList.toggle("dark", currentTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <header className="bg-gray-800 p-4 flex justify-between items-center">
      <h1 className="text-white text-2xl">
        <Link href="/" legacyBehavior>
          <a className="text-white">Luca</a>
        </Link>
      </h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="#hero" legacyBehavior>
              <a className="text-white">Accueil</a>
            </Link>
          </li>
          <li>
            <Link href="#presentation" legacyBehavior>
              <a className="text-white">Présentation</a>
            </Link>
          </li>
          <li>
            <Link href="#competences" legacyBehavior>
              <a className="text-white">Compétences</a>
            </Link>
          </li>
          <li>
            <Link href="#projets" legacyBehavior>
              <a className="text-white">Projets</a>
            </Link>
          </li>
          <li>
            <Link href="#experiences" legacyBehavior>
              <a className="text-white">Expériences</a>
            </Link>
          </li>
          <li>
            <Link href="#formations" legacyBehavior>
              <a className="text-white">Formations</a>
            </Link>
          </li>
          <li>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-700 text-white focus:outline-none transition duration-500"
            >
              {theme === "light" ? (
                <MoonIcon className="h-6 w-6" />
              ) : (
                <SunIcon className="h-6 w-6" />
              )}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
