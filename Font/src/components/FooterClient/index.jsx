import React from 'react';
import './FooterClient.scss';

function FooterClient() {
  return (
    <div className="container-fluid footer">
      <div className="container-lg">
        <div className="row">
          <div className="col-lg-4 footer__first">
            <h3 className="footer__title">Mọi thắc mắc vui lòng liên hệ</h3>
            <ul className="footer__links">
              <li>
                <i className="fa fa-map-marker" />
                Hồ Chí Minh
              </li>
              <li>
                <i className="fa fa-phone" />
                0394003434
              </li>
              <li>
                <i className="far fa-envelope" />
                nhomX@hcmut.edu.vn
              </li>
            </ul>
          </div>
          <div className="col-lg-4">
            <h3 className="footer__title">Các kiểu thức ăn</h3>
            <ul className="footer__links">
              <li>Món khai vị</li>
              <li>Món ăn chính</li>
              <li>Món tráng miệng</li>
              <li>Các loại thức uống </li>
            </ul>
          </div>
          <div className="col-lg-4">
            <h3 className="footer__title">Các loại dịch vụ</h3>
            <ul className="footer__links">
              <li>Thanh toán online, tiết kiệm thời gian</li>
              <li>Đặt món online, thỏa sức lựa chọn</li>
              <li>Tri ân khách hàng thành viên</li>
              <li>Đặt bàn trước mà không cần tới nơi</li>
              <li>Hỗ trợ giải đáp mọi thắc mắc</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterClient;
