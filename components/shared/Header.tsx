'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const links = [
    { title: "Home", url: "/" },
    { title: "About", url: "/about" },
    { title: "New Event", url: "/new-event" },
    { title: "Booked Event", url: "/booked-event" }
]

function Header() {
    const pathname = usePathname()

    return (
        <header className="bg-white dark:bg-gray-800 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex-shrink-0">
                            <span className="font-bold text-xl text-gray-800 dark:text-white">Event</span>
                        </Link>
                        <nav className="hidden md:block ml-10">
                            <ul className="flex items-baseline space-x-4">
                                {links.map((link) => (
                                    <li key={link.url}>
                                        <Link 
                                            href={link.url} 
                                            className={`${
                                                pathname === link.url 
                                                    ? "bg-gray-900 text-white" 
                                                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                                            } px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200`}
                                        >
                                            {link.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                    <div className="flex items-center">
                        <ModeToggle />
                    </div>
                </div>
            </div>
            {/* Mobile menu */}
            <div className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {links.map((link) => (
                        <Link
                            key={link.url}
                            href={link.url}
                            className={`${
                                pathname === link.url
                                    ? "bg-gray-900 text-white"
                                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                            } block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`}
                        >
                            {link.title}
                        </Link>
                    ))}
                </div>
            </div>
        </header>
    )
}

function ModeToggle() {
    const { setTheme } = useTheme()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="ml-4">
                    <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default Header