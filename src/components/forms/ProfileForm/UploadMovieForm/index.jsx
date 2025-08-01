"use client"
import Image from "next/image";
import styles from "../../form.module.scss";
import { UPLOAD_ICON } from "@/utils/icons";
import { DatePicker } from "@heroui/react";
import { DOWN_ARROW_ICON } from "@/utils/icons";
import { useMemo } from "react";
import Select from 'react-select';

const UplaodMovieForm = ({ allGenres, allQualities, allCrews, allCasts, allLanguages }) => {
    console.log("All Genres=========>", allGenres);
    console.log("All Languages========>", allLanguages);
    console.log("All Qualities=========>", allQualities);
    console.log("All Crews============>", allCrews);
    console.log("All Casts========>", allCasts);

    const genreOptions = useMemo(() =>
        allGenres?.map((genre) => ({
            value: genre.id,
            label: genre.genre
        })) || [],
        [allGenres]);

    const languageOptions = useMemo(() =>
        allLanguages?.map((language) => ({
            value: language.id,
            label: language.name
        })) || [],
        [allLanguages]);

    const qualityOptions = useMemo(() =>
        allQualities?.map((quality) => ({
            value: quality.id,
            label: quality.name
        })) || [],
        [allQualities]);

    const crewOptions = useMemo(() =>
        allCrews?.map((crew) => ({
            value: crew.id,
            label: crew.name
        })) || [],
        [allCrews]);

    const castOptions = useMemo(() =>
        allCasts?.map((cast) => ({
            value: cast.id,
            label: cast.name
        })) || [],
        [allCasts]);

        console.log("Genre Options======>",genreOptions);

    return (
        <>
            <div class={styles.upload_movie_form_container}>
                <div class={styles.movie_upload_box}>
                    <Image src={UPLOAD_ICON?.src} height={20} width={20} quality={75} />
                    <p>Upload Poster (270 x 400)</p>
                    <span>Drag & Drop or Browse</span>
                </div>
                <div class={styles.movie_upload_box}>
                    <Image src={UPLOAD_ICON?.src} height={20} width={20} quality={75} />
                    <p>Upload Thumbnail (270 x 400)</p>
                    <p className="text-white font-semibold">Drag & Drop or <span className="text-[#9875F6] underline">Browse</span></p>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-2">
                <div className="col-span-9 w-full relative">
                    <label className={styles.label}>Movie Title</label>
                    <input
                        type="text"
                        placeholder="Enter Movie Title"
                        className={styles.input}
                    // {...register("name", { required: "Movie Title is required" })}
                    />
                    {/* {errors.name && <p className={styles.error}>{errors.name.message}</p>} */}
                </div>
                <div className="col-span-3 w-full relative">
                    <label className={styles.label}>Movie Title</label>
                    <DatePicker
                        classNames={{
                            // popoverContent: "!bg-[#1d1d26] !text-white !border !border-gray-700",
                        }}
                    />
                </div>
            </div>
            <div className="grid grid-cols-1 mt-3">
                <label className={styles.label}>Movie Description</label>
                <input
                    type="text"
                    placeholder="Enter Description"
                    className={styles.input}
                // {...register("address")}
                />
            </div>
            <div className="grid grid-cols-3 gap-2 mt-3">
                <div className="w-full relative">
                    <label className={styles.label}>Choose Quality</label>
                    <div className="relative">
                        {/* <select
                            className={`${styles.select} appearance-none w-full pr-10`}
                        {...register("country")}
                        >
                            <option value="">Select Country</option>
                            {countryLists.map((country) => (
                                <option key={country.id} value={country.id}>
                                    {country.name}
                                </option>
                            ))}
                        </select>
                        <span className="absolute inset-y-0 right-3 flex items-center">
                            <Image src={DOWN_ARROW_ICON.src} height={15} width={15} alt="Arrow" />
                        </span> */}
                        <Select
                            isMulti
                            options={genreOptions}
                            // value={selectedGenres}
                            // onChange={setSelectedGenres}
                            placeholder="Select Genres"
                            className={styles.reactSelect}
                            classNamePrefix="rs"
                        />

                    </div>
                    {/* {errors.country && <p className={styles.error}>{errors.country.message}</p>} */}
                </div>

                <div className="w-full relative">
                    <label className={styles.label}>Choose Genres</label>
                    <div className="relative">
                        <select
                            className={`${styles.select} appearance-none w-full pr-10`}
                        // {...register("state")}
                        // disabled={stateLoading || !states.length}
                        >
                            <option value="">Select Genres</option>
                            {/* {states.map((state) => (
                                <option key={state.id} value={state.id}>
                                    {state.name}
                                </option>
                            ))} */}
                        </select>

                        <span className="absolute inset-y-0 right-3 flex items-center">
                            <Image src={DOWN_ARROW_ICON.src} height={15} width={15} alt="Arrow" />
                        </span>
                    </div>
                    {/* {errors.state && <p className={styles.error}>{errors.state.message}</p>} */}
                </div>

                <div className="w-full relative">
                    <label className={styles.label}>Choose Languages</label>
                    <div className="relative">
                        <select
                            className={`${styles.select} appearance-none w-full pr-10`}
                        // {...register("city")}
                        // disabled={cityLoading || !cities.length}
                        >
                            <option value="">Select Language</option>
                            {
                                allLanguages.map((language) => (<option key={language.id} value={language.id}>
                                    {language?.name}
                                </option>))
                            }
                            {/* {cities.map((city) => (
                                <option key={city.id} value={city.id}>
                                    {city.name}
                                </option>
                            ))} */}
                        </select>
                        <span className="absolute inset-y-0 right-3 flex items-center">
                            {/* {cityLoading ? "Loading..." : (
                                <Image src={DOWN_ARROW_ICON.src} height={15} width={15} alt="Arrow" />
                            )} */}
                        </span>
                    </div>
                    {/* {errors.city && <p className={styles.error}>{errors.city.message}</p>} */}
                </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
                <div className="w-full relative">

                </div>
                <div className="w-full relative">

                </div>
            </div>
            <div className="grid grid-cols-4 gap-2 mt-3">

            </div>
        </>
    )
}

export default UplaodMovieForm;