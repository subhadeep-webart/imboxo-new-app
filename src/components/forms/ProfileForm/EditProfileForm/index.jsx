"use client";

import { useForm } from "react-hook-form";
import { useStates } from "@/hooks/useStates";
import { useCities } from "@/hooks/useCities";;
import { DOWN_ARROW_ICON, UPLOAD_ICON } from "@/utils/icons";
import styles from "../../form.module.scss";
import Image from "next/image";
import useUserDetailsUpdate from "@/hooks/useUserDetailsUpdate";
import Loader from "@/components/ui/Loader";

const EditProfileForm = ({ countryLists, userDetails }) => {
    const { handleUpdateUserDetails, isLoading } = useUserDetailsUpdate();

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: userDetails?.name || "",
            email: userDetails?.email || "",
            phone: userDetails?.phone || "",
            country: userDetails?.country || "",
            state: userDetails?.state || "",
            city: userDetails?.city || "",
            address: userDetails?.address || "",
            bio: userDetails?.bio || "",
        },
    });

    const selectedCountry = watch("country");
    const selectedState = watch("state");

    const { states, loading: stateLoading } = useStates(selectedCountry);
    const { cities, loading: cityLoading } = useCities(selectedState);

    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append("user_id", userDetails.id);
        Object.keys(data).forEach((key) => {
            if (key === "profile_img" || key === "banner_img") {
                if (data[key]?.[0]) formData.append(key, data[key][0]);
            } else {
                formData.append(key, data[key]);
            }
        });
        // if (data.profile_img?.[0]) formData.append('profile_img', data.profile_img[0]);
        // if (data.banner_img?.[0]) formData.append('banner_img', data.banner_img[0]);
        await handleUpdateUserDetails(formData, reset);
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
            {/* Name, Email, Phone */}
            <div className="grid grid-cols-3 gap-2">
                <div className="w-full relative">
                    <label className={styles.label}>Name</label>
                    <input
                        type="text"
                        placeholder="Enter Name"
                        className={styles.input}
                        {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && <p className={styles.error}>{errors.name.message}</p>}
                </div>

                <div className="w-full relative">
                    <label className={styles.label}>Email</label>
                    <input
                        type="email"
                        placeholder="Enter Email"
                        className={styles.input}
                        readOnly
                        {...register("email", { required: "Email is required" })}
                    />
                    {errors.email && <p className={styles.error}>{errors.email.message}</p>}
                </div>

                <div className="w-full relative">
                    <label className={styles.label}>Phone Number</label>
                    <input
                        type="text"
                        placeholder="Enter Phone Number"
                        className={styles.input}
                        {...register("phone")}
                    />
                    {errors.phone && <p className={styles.error}>{errors.phone.message}</p>}
                </div>
            </div>

            {/* Uploads */}
            <div className="grid grid-cols-2 gap-2 mt-3">
                <div className="w-full relative">
                    <label className={styles.label}>Upload Profile Image</label>
                    <div className={styles.passwordWrapper}>
                        <input type="file" className={styles.input} {...register("profile_img")} />
                        <span className={styles.toggle}>
                            <Image src={UPLOAD_ICON.src} alt="Upload" width={16} height={16} />
                        </span>
                    </div>
                </div>

                <div className="w-full relative">
                    <label className={styles.label}>Upload Cover Image</label>
                    <div className={styles.passwordWrapper}>
                        <input type="file" className={styles.input} {...register("banner_img")} />
                        <span className={styles.toggle}>
                            <Image src={UPLOAD_ICON.src} alt="Upload" width={16} height={16} />
                        </span>
                    </div>
                </div>
            </div>

            {/* Country, State, City */}
            <div className="grid grid-cols-3 gap-2 mt-3">
                <div className="w-full relative">
                    <label className={styles.label}>Country</label>
                    <div className="relative">
                        <select
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
                        </span>
                    </div>
                    {errors.country && <p className={styles.error}>{errors.country.message}</p>}
                </div>

                <div className="w-full relative">
                    <label className={styles.label}>State</label>
                    <div className="relative">
                        <select
                            className={`${styles.select} appearance-none w-full pr-10`}
                            {...register("state")}
                            disabled={stateLoading || !states.length}
                        >
                            <option value="">Select State</option>
                            {states.map((state) => (
                                <option key={state.id} value={state.id}>
                                    {state.name}
                                </option>
                            ))}
                        </select>
                        <span className="absolute inset-y-0 right-3 flex items-center">
                            <Image src={DOWN_ARROW_ICON.src} height={15} width={15} alt="Arrow" />
                        </span>
                    </div>
                    {errors.state && <p className={styles.error}>{errors.state.message}</p>}
                </div>

                <div className="w-full relative">
                    <label className={styles.label}>City</label>
                    <div className="relative">
                        <select
                            className={`${styles.select} appearance-none w-full pr-10`}
                            {...register("city")}
                            disabled={cityLoading || !cities.length}
                        >
                            <option value="">Select City</option>
                            {cities.map((city) => (
                                <option key={city.id} value={city.id}>
                                    {city.name}
                                </option>
                            ))}
                        </select>
                        <span className="absolute inset-y-0 right-3 flex items-center">
                            <Image src={DOWN_ARROW_ICON.src} height={15} width={15} alt="Arrow" />
                        </span>
                    </div>
                    {errors.city && <p className={styles.error}>{errors.city.message}</p>}
                </div>
            </div>

            {/* Address */}
            <div className="grid grid-cols-1 mt-3">
                <label className={styles.label}>Address</label>
                <input
                    type="text"
                    placeholder="Enter Address"
                    className={styles.input}
                    {...register("address")}
                />
            </div>

            {/* Bio */}
            <div className="grid grid-cols-1 mt-3">
                <label className={styles.label}>Bio</label>
                <textarea
                    placeholder="Write something about yourself..."
                    rows="4"
                    className={`${styles.textarea} resize-none`}
                    {...register("bio")}
                />
            </div>

            {/* Submit */}
            <div className="mt-5 w-full flex justify-end">
                <div className="w-1/5">
                    <button type="submit" className={styles.submitButton}>
                        {isLoading ? <Loader /> : "Submit Details"}
                    </button>
                </div>
            </div>
        </form>
    );
};

export default EditProfileForm
