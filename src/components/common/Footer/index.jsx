import Image from "next/image"
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer__top">
                        <div className="footer__column">
                            <div className="footer_menu_header_wrapper">
                                <p>Support</p>
                                <div className="footer_menu_header_line">
                                </div>
                            </div>
                            <ul>
                                <li>FAQ</li>
                                <li>Help Center</li>
                                <li>Contact Support</li>
                                <li>Accessibility</li>
                            </ul>
                        </div>
                        <div className="footer__column">
                            <div className="footer_menu_header_wrapper">
                                <p>Legal</p>
                                <div className="footer_menu_header_line">
                                </div>
                            </div>
                            <ul>
                                <li>Privacy Policy</li>
                                <li>Terms of Service</li>
                                <li>Legal Notices</li>
                                <li>Do Not Sell My Personal Information</li>
                            </ul>
                        </div>
                        <div className="footer__column">
                            <div className="footer_menu_header_wrapper">
                                <p>Engage with us</p>
                                <div className="footer_menu_header_line">
                                </div>
                            </div>
                            <ul>
                                <li>Feedback</li>
                                <li>Become a Sponso</li>
                                <li>Advertise with Us</li>
                                <li>Blog</li>
                            </ul>
                        </div>
                        <div className="footer__column">
                            <div className="footer_menu_header_wrapper">
                                <p>Get involved</p>
                                <div className="footer_menu_header_line">
                                </div>
                            </div>
                            <ul>
                                <li>Become a Judge</li>
                                <li>Help Center</li>
                                <li>Contact Support</li>
                                <li>Accessibility</li>
                            </ul>
                        </div>
                        <div className="footer__column">
                            <div className="footer_menu_header_wrapper">
                                <p>About IMBOXO</p>
                                <div className="footer_menu_header_line">
                                </div>
                            </div>
                            <ul>
                                <li>About Us</li>
                                <li>Press Releases</li>
                                <li>Subscriptions</li>
                                <li>Donation</li>
                                <li>Press Releases</li>
                            </ul>
                        </div>
                        <div className="footer__newsletter">
                            <h4>Newsletter</h4>
                            <input type="email" placeholder="Enter Email" />
                            <button>Submit</button>
                        </div>
                    </div>

                    <div className="footer__bottom">
                        <p>
                            Copyright 2024 © IMBOXO. Powered by
                            <a href="#">WebArt Technology</a> All Rights Reserved.
                        </p>
                        <div className="footer__social">
                            <a href="#">
                                <Image
                                    src="/assets/icons/facebook.svg"
                                    alt="Facebook"
                                    width={24}
                                    height={24}
                                />
                            </a>
                            <a href="#">
                                <Image
                                    src="/assets/icons/twitter.svg"
                                    alt="Twitter"
                                    width={24}
                                    height={24}
                                />
                            </a>
                            <a href="#">
                                <Image
                                    src="/assets/icons/instagram.svg"
                                    alt="Instagram"
                                    width={24}
                                    height={24}
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer