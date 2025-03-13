import React, { useEffect } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";

const RefundPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <Meta title={"Chính sách hoàn tiền"} />
            <BreadCrumb title="Chính sách hoàn tiền" />
            <Container class1="policy-wrapper py-5 home-wrapper-1">
                <div className="row">
                    <div className="col-12">
                        <div className="policy">
                            <h1 className="text-center title-page-footer">Chính sách hoàn tiền</h1>

                            <p>Chính sách hoàn tiền này được cập nhật lần cuối vào ngày 25/12/2024.</p>

                            <h2>1. Điều kiện hoàn tiền</h2>

                            <p>Chúng tôi cung cấp hoàn tiền trong các trường hợp sau:</p>

                            <ul>
                                <li>Yêu cầu hoàn tiền được gửi trước ít nhất 24 giờ so với thời gian đặt sân.</li>
                                <li>Sân không thể sử dụng được do lỗi từ phía chúng tôi, bao gồm việc bảo trì sân hoặc các lý do kỹ thuật khác.</li>
                                <li>Hệ thống thanh toán gặp lỗi và khách hàng bị trừ tiền nhiều lần cho cùng một giao dịch.</li>
                            </ul>

                            <h2>2. Trường hợp không được hoàn tiền</h2>

                            <p>Chúng tôi không hoàn tiền trong các trường hợp sau:</p>

                            <ul>
                                <li>Yêu cầu hoàn tiền được gửi sau khi thời gian đặt sân đã bắt đầu hoặc kết thúc.</li>
                                <li>Khách hàng không đến sử dụng sân mà không thông báo trước.</li>
                                <li>Thay đổi quyết định cá nhân mà không có lý do hợp lý (ví dụ: không muốn sử dụng sân nữa).</li>
                            </ul>

                            <h2>3. Quy trình hoàn tiền</h2>

                            <p>Để yêu cầu hoàn tiền, vui lòng liên hệ với chúng tôi qua email tại tuankhoa2908@gmail.com hoặc qua số hotline của
                                chúng tôi. Vui lòng cung cấp các thông tin sau trong yêu cầu của bạn:</p>

                            <ul>
                                <li>Họ tên và thông tin liên hệ của bạn.</li>
                                <li>Mã đặt sân hoặc thông tin giao dịch.</li>
                                <li>Lý do cụ thể cho việc yêu cầu hoàn tiền.</li>
                            </ul>

                            <h2>4. Thời gian xử lý</h2>

                            <p>Sau khi nhận được yêu cầu hoàn tiền và xác minh thông tin, chúng tôi sẽ xử lý yêu cầu trong vòng 7 ngày làm việc. Số tiền
                                hoàn sẽ được chuyển về phương thức thanh toán ban đầu của bạn. Thời gian nhận tiền có thể khác nhau tùy thuộc vào chính
                                sách của nhà cung cấp thanh toán.</p>

                            <h2>5. Liên hệ với chúng tôi</h2>

                            <p>Nếu bạn có bất kỳ câu hỏi nào về chính sách hoàn tiền, vui lòng liên hệ với chúng tôi qua email tại tuankhoa2908@gmail.com
                                hoặc qua hotline để được hỗ trợ.</p>

                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default RefundPolicy;
