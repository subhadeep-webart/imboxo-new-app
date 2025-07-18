import Styles from "./auth.module.scss";
const AuthLayout=({children})=>{
    return(
        <div className={Styles.auth_page_wrapper}>
            {children}
        </div>
    )
}

export default AuthLayout