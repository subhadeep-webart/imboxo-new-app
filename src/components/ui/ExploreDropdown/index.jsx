"use client"

import { useState } from "react";
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    DropdownSection,
} from "@heroui/react";

import { ChevronUp,ChevronDown } from "lucide-react";

import Link from "next/link";

const ExploreDropdown = ({ genreLists }) => {
    const [isExploreDropdownOpen, setIsExploreDropdownOpen] = useState(false);
    return (
        <div onMouseEnter={() => setIsExploreDropdownOpen(true)}
            onMouseLeave={() => setIsExploreDropdownOpen(false)} className="!p-0 !m-0">
            <Dropdown
                isOpen={isExploreDropdownOpen}
                onOpenChange={setIsExploreDropdownOpen}
                className="!p-0"
            >
                <DropdownTrigger>
                    {/* <Link className="" href="/movies">
                        Explore
                    </Link> */}
                    <button className="flex items-center gap-1">
                        <Link href="/movies">Explore</Link>
                        {isExploreDropdownOpen ? (
                            <ChevronUp className="w-4 h-4 text-[#9875F6] transition-transform duration-200" />
                        ) : (
                            <ChevronDown className="w-4 h-4 text-white transition-transform duration-200" />
                        )}
                    </button>
                </DropdownTrigger>

                <DropdownMenu
                    aria-label="Explore Movies"
                    className="bg-[#201C28] !px-4 !py-2 !rounded-lg w-2xl max-h-[596px]"
                    classNames={{ list: "grid grid-cols-3 gap-4" }}
                    itemClasses={{
                        base: "!bg-transparent hover:!bg-transparent !text-[#9D9D9D] hover:!text-[#9875F6] !font-semibold hover:!font-bold !py-1 !px-2 whitespace-nowrap !transition-all"
                    }}
                >
                    <DropdownSection
                        title="All Genres"
                        className="col-span-3 !my-2 !px-2"
                        classNames={{
                            base: "px-4 py-4",
                            heading: "text-xl font-bold text-white",
                            group: "space-y-1",
                            divider: "my-2 border-t border-gray-200"
                        }}
                    />

                    {genreLists.map((genre) => (
                        <DropdownItem key={genre.id} className="group">
                            <Link
                                href={`/movies/${encodeURIComponent(genre.genre)}/${genre.id}`}
                                className="block w-full"
                            >
                                {genre?.genre}
                            </Link>
                        </DropdownItem>
                    ))}
                </DropdownMenu>
            </Dropdown>
        </div>
    )
}

export default ExploreDropdown;