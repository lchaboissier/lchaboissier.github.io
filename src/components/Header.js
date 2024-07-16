"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import '../app/globals.css';

const Header = () => {
  const [theme, setTheme] = useState("light");
  const [isOpen, setIsOpen] = useState(false);

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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white dark:bg-slate-900 p-4 shadow-md fixed w-full z-50">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">Luca</h1>
        <nav className="hidden md:flex space-x-8">
          <Link href="#hero" legacyBehavior><a className="text-gray-900 dark:text-white">Accueil</a></Link>
          <Link href="#presentation" legacyBehavior><a className="text-gray-900 dark:text-white">Présentation</a></Link>
          <Link href="#competences" legacyBehavior><a className="text-gray-900 dark:text-white">Compétences</a></Link>
          <Link href="#projets" legacyBehavior><a className="text-gray-900 dark:text-white">Projets</a></Link>
          <Link href="#experiences" legacyBehavior><a className="text-gray-900 dark:text-white">Expériences</a></Link>
          <Link href="#formations" legacyBehavior><a className="text-gray-900 dark:text-white">Formations</a></Link>
          <button onClick={toggleTheme} className="p-0.5 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none transition duration-100">
            {theme === "light" ? (
              <MoonIcon className="h-6 w-6" />
            ) : (
              <SunIcon className="h-6 w-6" />
            )}
          </button>
        </nav>
        <div className="md:hidden flex items-center">
          <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none transition duration-100 mr-4">
            {theme === "light" ? (
              <MoonIcon className="h-6 w-6" />
            ) : (
              <SunIcon className="h-6 w-6" />
            )}
          </button>
          <button onClick={toggleMenu} className="text-gray-900 dark:text-white">
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
          </button>
        </div>
      </div>
      {isOpen && (
        <nav className="md:hidden bg-white dark:bg-slate-900 p-4 absolute top-full left-0 w-full shadow-lg">
          <Link href="#hero" legacyBehavior><a onClick={toggleMenu} className="block py-2 text-gray-900 dark:text-white">Accueil</a></Link>
          <Link href="#presentation" legacyBehavior><a onClick={toggleMenu} className="block py-2 text-gray-900 dark:text-white">Présentation</a></Link>
          <Link href="#competences" legacyBehavior><a onClick={toggleMenu} className="block py-2 text-gray-900 dark:text-white">Compétences</a></Link>
          <Link href="#projets" legacyBehavior><a onClick={toggleMenu} className="block py-2 text-gray-900 dark:text-white">Projets</a></Link>
          <Link href="#experiences" legacyBehavior><a onClick={toggleMenu} className="block py-2 text-gray-900 dark:text-white">Expériences</a></Link>
          <Link href="#formations" legacyBehavior><a onClick={toggleMenu} className="block py-2 text-gray-900 dark:text-white">Formations</a></Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
