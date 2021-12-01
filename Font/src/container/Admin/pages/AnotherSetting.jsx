import React from 'react'

const AnotherSettings = () => {
    return (
        <div>
            <h2 className="page-header1">
               Khu Ẩm Thực L06 Nhóm X
            </h2>
            <h2 className="page-header2">
                Trang web hỗ trợ quản lý cho khu ẩm thực của trường đại học X
            </h2>
            <div className="row">
                <div className="col-4">
                    <h2 className="line0">Các chức năng trang web</h2>
                    <div>
                        <ul>
                            <li className="line"> Khách hàng:</li>
                            <ul className="col-md-12 line1">
                                <li>Đăng nhập/Đăng xuất</li>
                                <li>Đăng kí</li>
                                <li>Đặt món</li>
                                <li>Thanh toán</li>
                                <li>Xem lịch sử thanh toán</li>
                            </ul>                          
                            <li className="line">Admin:</li>
                            <ul className="col-md-12 line1">
                                <li>Quản lí doanh thu</li>
                                <li>Quản lí món</li>
                                <li>Quản lí danh mục</li>
                                <li>Quản lí tài khoản</li>
                                <li>Thay đổi thông tin tài khoản</li>
                            </ul>
                        </ul> 
                    </div>                                                                                                                                                                                                                                              
                </div>
                <div className="col-4">
                    <h3 className="line0">Công nghệ sử dụng </h3>
                    <div>
                        <ul>
                            <li className="line"> Frontend:</li>
                            <ul className="col-md-12 line1">
                                <li>Html, Css, Javascripts</li>
                                <li>Bootstrap</li>
                                <li>Reactjs</li>
                                <li>Font Awesome Icons</li>
                                <li>Chart</li>
                            </ul>                          
                            <li className="line">Backend:</li>
                            <ul className="col-md-12 line1">
                                <li>Database: SQL Server</li>
                                <li>ExpressJs</li>
                                <li>Sequelize</li>
                            </ul>
                        </ul> 
                    </div>                                                                                                                                                                                                                                                                                                                          
                </div>
                <div className="col-4">
                    <h3 className="line0">Tài liệu tham khảo</h3>
                     <div>
                         <ul>
                             <li className="line"> ReactJS | by F8</li>
                             <li className="line">Youtube: Xây dựng NodeJS web server sử dụng Express-CodersX</li>
                         </ul>
                     </div>          
                </div>
            </div>
        </div>
    )
}

export default AnotherSettings
