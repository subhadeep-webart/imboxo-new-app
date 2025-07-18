import Styles from "@/app/(auth)/auth.module.scss";
import MovieSlider from "@/components/authpage/MovieSlider";
import { Input } from "@heroui/input";
const Login = () => {
    return (
        <div className="container">
            <div className={Styles.auth_page_form_wrapper}>
                {/* <div className={Styles.border_gradient}> */}
                <div className={Styles.form_background}>
                    <div className={Styles.form_slider}>
                        <MovieSlider />
                    </div>
                    <div className={Styles.form_wrapper}>
                        <div className={Styles.form_container}>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;