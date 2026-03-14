import React from 'react';
import danhSachGheData from './data.json';
import Ghe from './ghe';

const BookingMovie = () => {
    return (
        <div className="bookingMovie text-center mt-5">
            <h1 className="text-white">ĐẶT VÉ XEM PHIM</h1>
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <div className="screen mb-5 mx-auto">SCREEN</div>
                        {danhSachGheData.map((hangGhe, index) => (
                            <div key={index} className="d-flex justify-content-center align-items-center">
                                <span className="firstChar" style={{ width: '30px' }}>
                                    {hangGhe.hang}
                                </span>
                                {hangGhe.danhSachGhe.map((ghe) => (
                                    <Ghe key={ghe.soGhe} ghe={ghe} indexHang={index} />
                                ))}
                            </div>
                        ))}
                    </div>
                    
                    <div className="col-4">
                        <h3 className="text-light">DANH SÁCH GHẾ BẠN CHỌN</h3>
                        <TableVes />
                    </div>
                </div>
            </div>
        </div>
    );
};