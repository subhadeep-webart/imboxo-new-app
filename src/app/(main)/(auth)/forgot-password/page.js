import Image from "next/image";
import Styles from "../auth.module.scss";
import { EMAIL_ICON } from "@/utils/icons";
import ForgotPasswordForm from "@/components/forms/AuthForm/ForgotPasswordForm";
const ForgotPassword = () => {
  return (
    <div className="container">
      <div className={Styles.otp_form_wrapper}>
        {/* <div className={Styles.border_gradient}> */}
        <div className={Styles.otp_background}>
          <div className={Styles.otp_wrapper}>
            <div className={Styles.icon_wrapper}>
              <Image
                src={EMAIL_ICON.src}
                alt="Email Icon"
                height={27}
                width={21}
              />
            </div>
            <ForgotPasswordForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
