import Image from "next/image";
import VerifyOtpForm from "@/components/forms/AuthForm/VerifyOtpForm";
import Styles from "../auth.module.scss";
import { EMAIL_ICON } from "@/utils/icons";
const VerifyOtp = () => {
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
            <VerifyOtpForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtp;
