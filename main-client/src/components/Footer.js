import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";

const Footer = () => {
    return (
        <>
            <footer className="py-4 background-footer">
                <div className="container-xxl">
                    <div className="row align-items-center">
                        <div className="col-5">
                            <div className="footer-top-data d-flex gap-30 align-items-center">
                                <img src="images/newsletter.png" alt="newsletter"></img>
                                <h2 className="mb-0 text-white">Nhận thông tin mới nhất từ chúng tôi</h2>
                            </div>
                        </div>
                        <div className="col-7">
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control py-1"
                                    placeholder="Your Email Address..."
                                    aria-label="Your Email Address..."
                                    aria-describedby="basic-addon2" />
                                <button className="input-group-text p-2" id="basic-addon2">
                                    Subcrible
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="py-4 background-footer">
                <div className="container-xxl">
                    <div className="row back">
                        <div className="col-4">
                            <h4 className="text-white">Contact Us</h4>
                            <div>
                                <address className="text-white fs-6">Address: 25A 278 Kim Giang Street,<br />
                                    Dai Kim, Hoang Mai, Ha Noi, Viet Nam</address>
                            </div>
                            <a className="mt-3 d-block mb-1 text-white" href="tel:+84 339923069">
                                Tel: +84 339923069
                            </a>
                            <a className="mt-2 d-block mb-0 text-white" href="mailto: tuankhoa2908@gmail.com">
                                Email: tuankhoa2908@gmail.com
                            </a>
                            <div className="social-icons d-flex align-items-center gap-30 mt-4">
                                <a href="/">
                                    <BsLinkedin className="fs-4 text-white" />
                                </a>
                                <a href="/">
                                    <BsGithub className="fs-4 text-white" />
                                </a>
                                <a href="/">
                                    <BsYoutube className="fs-4 text-white" />
                                </a>
                                <a href="/">
                                    <BsInstagram className="fs-4 text-white" />
                                </a>
                            </div>
                        </div>
                        <div className="col-3">
                            <h4 className="text-white">Thông tin pháp lý</h4>
                            <div className="footer-links d-flex flex-column">
                                <Link to="/privacy-policy" className="text-white py-2 mb-1">Chính sách bảo mật</Link>
                                <Link to="/refund-policy" className="text-white py-2 mb-1">Chính sách hoàn tiền</Link>
                                <Link to="/term-service" className="text-white py-2 mb-1">Điều khoản sử dụng</Link>
                            </div>
                        </div>
                        <div className="col-3">
                            <h4 className="text-white">Tài khoản</h4>
                            <div className="footer-links d-flex flex-column">
                                <Link className="text-white py-2 mb-1">Về chúng tôi</Link>
                                <Link className="text-white py-2 mb-1">Câu hỏi thường gặp</Link>
                                <Link className="text-white py-2 mb-1">Liên hệ</Link>
                            </div>
                        </div>
                        <div className="col-2">
                            <h4 className="text-white">Quick Links</h4>
                            <div className="footer-links d-flex flex-column">
                                <Link className="text-white py-2 mb-1">Bóng đá</Link>
                                <Link className="text-white py-2 mb-1">Cầu lông</Link>
                                <Link className="text-white py-2 mb-1">Tennis</Link>
                                <Link className="text-white py-2 mb-1">Bóng bàn</Link>
                                <Link className="text-white py-2 mb-1">Pickle ball</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="py-4 background-footer">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <p className="text-center text-white mb-0">
                                &copy; {new Date().getFullYear()}; Designed by NTK</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;