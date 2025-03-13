import React, { useEffect } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";

const TermsOfService = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <Meta title={"Điều khoản sử dụng"} />
            <BreadCrumb title="Điều khoản sử dụng" />
            <Container class1="policy-wrapper py-5 home-wrapper-1">
                <div className="row">
                    <div className="col-12">
                        <div className="policy">
                            <h1 className="text-center title-page-footer">Điều khoản sử dụng</h1>

                            <p>Điều khoản sử dụng này được cập nhật lần cuối vào ngày 25/12 /2024.</p>

                            <h2>1. Chấp nhận điều khoản</h2>
                            <p>Bằng cách truy cập và sử dụng website của chúng tôi, bạn đồng ý tuân thủ tất cả các điều khoản được nêu ra
                                dưới đây. Nếu bạn không đồng ý với bất kỳ điều khoản nào, vui lòng ngừng sử dụng website.</p>

                            <h2>2. Dịch vụ của chúng tôi</h2>
                            <p>Chúng tôi cung cấp nền tảng để đặt sân thể thao trực tuyến. Các dịch vụ bao gồm:</p>
                            <ul>
                                <li>Hiển thị thông tin sân, giá cả và thời gian trống.</li>
                                <li>Đặt chỗ trực tuyến và thanh toán thuận tiện.</li>
                                <li>Hỗ trợ khách hàng trong quá trình sử dụng dịch vụ.</li>
                            </ul>

                            <h2>3. Trách nhiệm của người dùng</h2>
                            <p>Khi sử dụng dịch vụ, bạn đồng ý:</p>
                            <ul>
                                <li>Cung cấp thông tin cá nhân chính xác và đầy đủ trong quá trình đăng ký hoặc đặt sân.</li>
                                <li>Không sử dụng website cho bất kỳ mục đích trái pháp luật nào.</li>
                                <li>Chịu trách nhiệm về việc tuân thủ nội quy sử dụng sân và thanh toán đầy đủ chi phí dịch vụ.</li>
                            </ul>

                            <h2>4. Quyền và trách nhiệm của chúng tôi</h2>
                            <ul>
                                <li>Đảm bảo thông tin hiển thị trên website là chính xác và cập nhật.</li>
                                <li>Cung cấp hỗ trợ khách hàng khi có vấn đề phát sinh liên quan đến đặt sân.</li>
                                <li>Có quyền tạm ngừng hoặc chấm dứt tài khoản người dùng nếu vi phạm điều khoản sử dụng.</li>
                            </ul>

                            <h2>5. Giới hạn trách nhiệm</h2>
                            <p>Chúng tôi không chịu trách nhiệm về các vấn đề phát sinh ngoài phạm vi kiểm soát, bao gồm nhưng không giới hạn:</p>
                            <ul>
                                <li>Thời tiết xấu ảnh hưởng đến việc sử dụng sân.</li>
                                <li>Hành vi gây rối hoặc không tuân thủ quy định của khách hàng.</li>
                                <li>Sự cố từ bên thứ ba, bao gồm lỗi thanh toán hoặc hạ tầng mạng.</li>
                            </ul>

                            <h2>6. Sửa đổi điều khoản</h2>
                            <p>Chúng tôi có quyền sửa đổi các điều khoản sử dụng bất kỳ lúc nào. Các thay đổi sẽ được cập nhật trên website và
                                có hiệu lực ngay khi đăng tải. Bạn có trách nhiệm kiểm tra các điều khoản sử dụng thường xuyên.</p>

                            <h2>7. Liên hệ với chúng tôi</h2>
                            <p>Nếu bạn có bất kỳ câu hỏi nào về điều khoản sử dụng, vui lòng liên hệ với chúng tôi qua email tại
                                tuankhoa2908@gmail.com hoặc qua hotline của chúng tôi.</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default TermsOfService;
