import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { FaHome } from "react-icons/fa";
import { IoMdMail, IoMdInformationCircle } from "react-icons/io";
import { MdCall } from "react-icons/md";
import Container from "../components/Container";

const Contact = () => {
    return (
        <div>
            <Meta title={"Contact Us"} />
            <BreadCrumb title="Contact Us" />
            <Container class1="contact-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <iframe
                            title="Address on Google Maps"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.345746119037!2d105.81893067476788!3d20.978773389494467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135acf118586dad%3A0xecd4aac79a9af31c!2zMjc4IMSQLiBLaW0gR2lhbmcsIMSQ4bqhaSBLaW0sIFRoYW5oIFh1w6JuLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1734695259375!5m2!1svi!2s"
                            className="w-100"
                            height="450"
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                    <div className="col-12 mt-5">
                        <div className="contact-inner-wrapper d-flex">
                            <div>
                                <h3 className="contact-title mb-4">Thông tin của bạn</h3>
                                <form action="" className="d-flex flex-column gap-15 input-contact">
                                    <div>
                                        <input type="text" className="form-control" placeholder="Your Name..."></input>
                                    </div>
                                    <div>
                                        <input type="text" className="form-control" placeholder="Your Email..."></input>
                                    </div>
                                    <div>
                                        <input type="text" className="form-control" placeholder="Your Mobile Number..."></input>
                                    </div>
                                    <div>
                                        <textarea
                                            name=""
                                            id=""
                                            className="w-100 form-control"
                                            cols="30"
                                            placeholder="Write your comments..."
                                            rows="5">
                                        </textarea>
                                    </div>
                                    <div>
                                        <button className="button-web">Xác nhận</button>
                                    </div>
                                </form>
                            </div>
                            <div>
                                <h3 className="contact-title mb-4">Liên hệ với chúng tôi</h3>
                                <div>
                                    <ul className="ps-0">
                                        <li className="mb-2 d-flex gap-10 align-items-center">
                                            <FaHome className="fs-5" />
                                            <address className="mb-0">278 Kim Giang, Hoàng Mai, Hà Nội</address>
                                        </li>
                                        <li className="mb-2 d-flex gap-10 align-items-center">
                                            <MdCall className="fs-5" />
                                            <a href="tel: +84 339923069">+84 0339923069</a>
                                        </li>
                                        <li className="mb-2 d-flex gap-10 align-items-center">
                                            <IoMdMail className="fs-5" />
                                            <a href="mailto:tuankhoa2908@gmail.com">tuankhoa2908@gmail.com</a>
                                        </li>
                                        <li className="mb-2 d-flex gap-10 align-items-center">
                                            <IoMdInformationCircle className="fs-5" />
                                            <p className="mb-0">Thời gian làm việc: 8:00 - 17:00</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Contact;