"use client"
import { useState } from "react";
import styles from "../movies.module.scss";
import Link from "next/link";
import { useParams } from "next/navigation";
const GenreDropdown = ({ allGenres }) => {
    const params = useParams();
    const { slug } = params;
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={styles.dropdownContainer}>
            <button
                className={`${styles.dropdownButton} line-clamp-1`}
                onClick={() => setIsOpen((prevOpen) => !prevOpen)}
            >
                {decodeURIComponent(slug) || "Select Genre"}
            </button>

            {isOpen && (
                <ul className={styles.dropdownList}>
                    {allGenres.map((genre) => (
                        <li key={genre.id}>
                            <Link href={`/movies/${encodeURIComponent(genre.genre)}/${genre.id}`} onClick={() => setIsOpen(false)}>
                                {genre?.genre}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default GenreDropdown;