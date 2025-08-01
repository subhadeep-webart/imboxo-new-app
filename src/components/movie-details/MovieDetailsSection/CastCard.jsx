import styles from "./moviedetails.module.scss";
import Image from "next/image";
const CastCard = ({ imageUrl, name }) => {
    return (
        <div className={styles.each_cast}>
            <div className={styles.cast_thumb}>
                <Image src={imageUrl ? imageUrl : '/assets/images/fallback.png'} alt={`${name}-image`} fill />
            </div>
            <h4 className={styles.cast_name}>{name}</h4>
        </div>
    )
}

export default CastCard;