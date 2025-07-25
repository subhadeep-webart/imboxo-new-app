import Styles from "@/app/(main)/(auth)/auth.module.scss"
import MovieSlider from "@/components/authpage/MovieSlider";
import LoginForm from "@/components/forms/AuthForm/LoginForm";
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
                        <LoginForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;