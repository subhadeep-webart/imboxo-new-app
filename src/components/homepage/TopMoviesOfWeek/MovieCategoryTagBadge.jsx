import { motion } from "framer-motion";
const MovieCategoryTagBadge = ({ categoryType, index }) => {
    return (
        <motion.li className="each-tag"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.3, duration: 0.6 }}>{categoryType}</motion.li>
    )
}

export default MovieCategoryTagBadge