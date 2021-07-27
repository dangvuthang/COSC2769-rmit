import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import useBreakpoint from "../hooks/useBreakpoint";

export default function Wrapper() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);
    return <>{mounted && <DashboardLayout />}</>;
}

function DashboardLayout({ children }) {
    const { pathname } = useRouter(); // get current path
    const isStatic = useBreakpoint("sm");
    const [isClosed, setIsClosed] = useState(false);

    const activeLinkClass = "p-3 hover:bg-gray-600 cursor-pointer ";
    const inactiveLinkClass = "p-3 hover:bg-gray-600 cursor-pointer opacity-60";
    let ScreenName = "";
    switch (pathname) {
        case "/dashboard":
            ScreenName = "Dashboard";
            break;
        case "/profile":
            ScreenName = "Profile";
    }

    return (
        <>
            <div className="flex bg-gray-100">
                {(isStatic || !isClosed) && (
                    <aside className="bg-gray-700 w-64 min-h-screen flex flex-col">
                        <div className="bg-gray-700 border-r border-b-gray-800 border-b px-4 h-10 flex items-center">
                            <span className="text-white py-2">
                                Expert Dashboard
                            </span>
                        </div>

                        <div className="bg-gray-700 border-r py-4 flex-grow text-white">
                            <nav>
                                <ul>
                                    <Link href="/dashboard">
                                        <li
                                            className={
                                                pathname === "/dashboard"
                                                    ? activeLinkClass
                                                    : inactiveLinkClass
                                            }
                                        >
                                            Dashboard
                                        </li>
                                    </Link>

                                    <Link href="/profile">
                                        <li
                                            className={
                                                pathname === "/profile"
                                                    ? activeLinkClass
                                                    : inactiveLinkClass
                                            }
                                        >
                                            Profile
                                        </li>
                                    </Link>
                                </ul>
                            </nav>
                        </div>
                    </aside>
                )}

                <main className="flex-grow flex flex-col min-h-screen">
                    <header className="bg-white border-b h-10 flex items-center justify-center">
                        {!isStatic &&
                            (isClosed ? (
                                <button
                                    tabIndex="1"
                                    className="w-10 p-1"
                                    onClick={() => setIsClosed(false)}
                                    aria-label="Open Menu"
                                    title="Open Menu"
                                >
                                    <MenuIcon />
                                </button>
                            ) : (
                                <button
                                    tabIndex="1"
                                    className="w-10 p-1"
                                    onClick={() => setIsClosed(true)}
                                    aria-label="Close Menu"
                                    title="Close Menu"
                                >
                                    <XIcon />
                                </button>
                            ))}
                        <div className="flex flex-grow items-center justify-between px-3">
                            <h1 className="text-lg">{ScreenName}</h1>
                            <button className="text-blue-700 underline">
                                Log in
                            </button>
                        </div>
                    </header>
                    {children}
                </main>
            </div>
        </>
    );
}
