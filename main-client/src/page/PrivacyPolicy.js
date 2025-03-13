import React, { useEffect } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <Meta title={"Chính sách bảo mật"} />
            <BreadCrumb title="Chính sách bảo mật" />
            <Container class1="policy-wrapper py-5 home-wrapper-1">
                <div className="row">
                    <div className="col-12">
                        <div className="policy">
                            <h1 className="text-center title-page-footer">Chính sách bảo mật</h1>

                            <p>Chính sách bảo mật này được cập nhật lần cuối vào ngày 25/12/2024.</p>

                            <h2>1. Thông tin chúng tôi thu thập</h2>

                            <p>Chúng tôi có thể thu thập các loại thông tin sau:</p>

                            <ul>
                                <li>Thông tin cá nhân: Tên, địa chỉ email và các thông tin nhận dạng khác mà bạn cung cấp.</li>
                                <li>Dữ liệu nhật ký: Thông tin về phần cứng và phần mềm máy tính của bạn, bao gồm địa chỉ IP, loại trình duyệt,
                                    tên miền, thời gian truy cập và địa chỉ trang web giới thiệu.</li>
                                <li>Dữ liệu sử dụng: Thông tin về cách bạn sử dụng trang web hoặc ứng dụng của chúng tôi.</li>
                            </ul>

                            <h2>2. Sử dụng thông tin</h2>

                            <p>Chúng tôi có thể sử dụng thông tin thu thập được cho các mục đích sau:</p>

                            <ul>
                                <li>Để cung cấp và duy trì các dịch vụ của chúng tôi.</li>
                                <li>Để cải thiện, cá nhân hóa và mở rộng các dịch vụ của chúng tôi.</li>
                                <li>Để liên lạc với bạn, bao gồm trả lời các bình luận hoặc thắc mắc của bạn.</li>
                                <li>Để theo dõi việc sử dụng các dịch vụ của chúng tôi.</li>
                            </ul>

                            <h2>3. Cookies</h2>

                            <p>Chúng tôi sử dụng cookies để nâng cao trải nghiệm của bạn trên trang web. Bạn có thể cài đặt trình duyệt để từ chối
                                tất cả các cookies hoặc thông báo khi một cookie được gửi. Tuy nhiên, nếu bạn không chấp nhận cookies, bạn có thể
                                không sử dụng được một số phần của trang web.</p>

                            <h2>4. Liên kết bên thứ ba</h2>

                            <p>Trang web của chúng tôi có thể chứa các liên kết đến các trang web của bên thứ ba. Chúng tôi không kiểm soát nội dung
                                và các thực tiễn của các trang web này, và khuyến khích bạn xem lại chính sách bảo mật của họ.</p>

                            <h2>5. Bảo mật</h2>

                            <p>Chúng tôi thực hiện các biện pháp phù hợp để bảo vệ thông tin cá nhân của bạn. Tuy nhiên, không có phương thức truyền
                                dữ liệu nào qua internet hoặc lưu trữ điện tử là an toàn tuyệt đối, và chúng tôi không thể đảm bảo an toàn tuyệt đối.</p>

                            <h2>6. Thay đổi chính sách bảo mật</h2>

                            <p>Chúng tôi có quyền cập nhật hoặc thay đổi chính sách bảo mật bất kỳ lúc nào. Các thay đổi sẽ có hiệu lực ngay sau khi
                                chúng tôi đăng chính sách bảo mật được cập nhật lên trang web.</p>

                            <h2>7. Liên hệ với chúng tôi</h2>

                            <p>Nếu bạn có bất kỳ câu hỏi nào về chính sách bảo mật này, vui lòng liên hệ với chúng tôi qua email tại tuankhoa2908@gmail.com.</p>

                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default PrivacyPolicy;
