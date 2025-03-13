import React from "react";
// import { Link } from "react-router-dom";
import Container from "../components/Container";
import { service } from "../utils/serviceData"
import { useNavigate } from "react-router-dom";
import Meta from "../components/Meta";

const Home = () => {
    const navigate = useNavigate();
    return (
        <>
            <Meta title={"Rent Sport"}></Meta>
            <Container class1="home-wrapper-1 py-5">
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <p className="title-1 text-center">
                        Chào mừng đến với RentSport
                        <br />
                        Nơi kết nối đam mê thể thao tại Hà Nội!
                    </p>
                    <p className="content-1 text-center">
                        Chúng tôi cung cấp dịch vụ cho thuê sân thể thao chất lượng cao, phục vụ cho tất cả các môn thể thao từ bóng đá, bóng rổ, cầu lông, tennis cho đến các hoạt động thể dục thể thao khác.
                        Với mạng lưới kết nối các chủ sân cho thuê rộng rãi, bạn có thể dễ dàng tìm thấy sân thể thao phù hợp ngay tại trung tâm Hà Nội.
                        <br />
                        <br />
                        Chỉ với vài thao tác đơn giản, bạn có thể dễ dàng đặt sân thể thao theo giờ, từ đó thoải mái luyện tập, thi đấu cùng bạn bè hoặc đồng nghiệp mà không phải lo lắng về việc thiếu sân hay quá tải.
                        Khám phá ngay các lựa chọn sân thể thao của chúng tôi và lên lịch cho buổi tập luyện tiếp theo của bạn!</p>
                </div>
            </Container>
            <Container class1="home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="services d-flex align-items-center justify-content-between">
                            {
                                service?.map((i, j) => {
                                    return (
                                        <div className="d-flex align-items-center gap-15">
                                            <img src={i.image} alt="services" className="service-png"></img>
                                            <div>
                                                <h6>{i.tagline}</h6>
                                                <p className="mb-0">{i.title}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>

            </Container >
            <Container class1="home-wrapper-3 py-5">
                <div>
                    <h2 className="title-2 text-center mb-5">Tìm sân cùng Rent Sport ngay nào !!!</h2>
                    <div className="d-flex flex-wrap justify-content-start align-items-center">
                        <div className="d-flex gap-10 justify-content-between align-items-center w-25 m-5">
                            <div className="wrap-content-2 ">
                                <img
                                    src='images/soccer-homepage.jpg'
                                    className="img-fluid rounded-3"
                                    alt='soccer-homepage'></img>
                                <div>
                                    <p className="sub-title-2">Tìm sân bóng đá</p>
                                    <p className="content-2">Môn thể thao vua luôn có rất nhiều người chơi hàng ngày, với RentSport bạn có thể dễ dàng tìm cho mình 1 sân bóng ưng ý để có thể vui chơi, luyện tập cùng bạn bè và đồng nghiệp.</p>
                                    <button className="button-web" onClick={() => navigate('/all-field')}>
                                        Tìm kiếm
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex gap-10 justify-content-between align-items-center w-25 m-5">
                            <div className="wrap-content-2 ">
                                <img
                                    src='images/badminton-homepage.jpg'
                                    className="img-fluid rounded-3"
                                    alt='badminton-homepage'></img>
                                <div>
                                    <p className="sub-title-2">Tìm sân cầu lông</p>
                                    <p className="content-2">Môn thể thao vua luôn có rất nhiều người chơi hàng ngày, với RentSport bạn có thể dễ dàng tìm cho mình 1 sân bóng ưng ý để có thể vui chơi, luyện tập cùng bạn bè và đồng nghiệp.</p>
                                    <button className="button-web" onClick={() => navigate('/all-field')}>
                                        Tìm kiếm
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex gap-10 justify-content-between align-items-center w-25 m-5">
                            <div className="wrap-content-2 ">
                                <img
                                    src='images/pickleball-homepage.jpg'
                                    className="img-fluid rounded-3"
                                    alt='pickleball-homepage'></img>
                                <div>
                                    <p className="sub-title-2">Tìm sân Pickle Ball</p>
                                    <p className="content-2">Môn thể thao vua luôn có rất nhiều người chơi hàng ngày, với RentSport bạn có thể dễ dàng tìm cho mình 1 sân bóng ưng ý để có thể vui chơi, luyện tập cùng bạn bè và đồng nghiệp.</p>
                                    <button className="button-web" onClick={() => navigate('/all-field')}>
                                        Tìm kiếm
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex gap-10 justify-content-between align-items-center w-25 m-5">
                            <div className="wrap-content-2 ">
                                <img
                                    src='images/tennis-homepage.jpg'
                                    className="img-fluid rounded-3"
                                    alt='tennis-homepage'></img>
                                <div>
                                    <p className="sub-title-2">Tìm sân Tennis</p>
                                    <p className="content-2">Môn thể thao vua luôn có rất nhiều người chơi hàng ngày, với RentSport bạn có thể dễ dàng tìm cho mình 1 sân bóng ưng ý để có thể vui chơi, luyện tập cùng bạn bè và đồng nghiệp.</p>
                                    <button className="button-web" onClick={() => navigate('/all-field')}>
                                        Tìm kiếm
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex gap-10 justify-content-between align-items-center w-25 m-5">
                            <div className="wrap-content-2 ">
                                <img
                                    src='images/pingpong-homepage.jpg'
                                    className="img-fluid rounded-3"

                                    alt='pingpong-homepage'></img>
                                <div>
                                    <p className="sub-title-2">Tìm sân bóng bàn</p>
                                    <p className="content-2">Môn thể thao vua luôn có rất nhiều người chơi hàng ngày, với RentSport bạn có thể dễ dàng tìm cho mình 1 sân bóng ưng ý để có thể vui chơi, luyện tập cùng bạn bè và đồng nghiệp.</p>
                                    <button className="button-web" onClick={() => navigate('/all-field')}>
                                        Tìm kiếm
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1='home-wrapper-2 py-5'>
                <div >
                    <h1 className="title-2 text-center mb-5">Bạn muốn trở thành đối tác của chúng tôi ?</h1>
                    <div className="d-flex flex-column align-items-center justify-content-center text-center">
                        <p className="content-2 fs-2">
                            Chúng tôi luôn chào đón những đối tác mới.
                        </p>
                        <p className="content-1 fs-4">
                            Vui lòng liên hệ trực tiếp hoặc để lại thông tin của bạn tại đây, các nhân viên sẽ liên lạc với bạn sau ít phút.
                        </p>
                        <button className="button-web" onClick={() => navigate('/contact')}>
                            Liên hệ với chúng tôi
                        </button>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Home;