import Image from "next/image";
import styles from "./creator.module.scss";
import { UPLOAD_ICON } from "@/utils/icons";
const UplaodMovieForm = () => {
    return (
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
    )
}

export default UplaodMovieForm;