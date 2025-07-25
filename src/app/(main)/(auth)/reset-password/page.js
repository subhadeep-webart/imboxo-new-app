import Image from "next/image";
import Styles from "../auth.module.scss";
import { PASSWORD_KEY_ICON } from "@/utils/icons";
import ResetPasswordForm from "@/components/forms/AuthForm/ResetPasswordForm";

const ResetPassword = () => {
    return (
        <div className="container">
            <div className={Styles.otp_form_wrapper}>
                {/* <div className={Styles.border_gradient}> */}
                <div className={Styles.otp_background}>
                    <div className={Styles.otp_wrapper}>
                        <div className={Styles.icon_wrapper}>
                            <Image src={PASSWORD_KEY_ICON.src} alt="Email Icon" height={27} width={21}/>
                        </div>
                        {/* <ForgotPasswordForm/> */}
                        <ResetPasswordForm/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResetPassword;