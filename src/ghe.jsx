import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Ghe = ({ ghe, indexHang }) => {
    const dispatch = useDispatch();
    // Lấy danh sách ghế đang chọn từ Redux để biết ghế nào cần đổi màu xanh
    const { danhSachGheDangDat } = useSelector(state => state.movieReducer);

    let cssGheDaDat = '';
    let disabled = false;
    // Ghế đã có người đặt (daDat: true trong json) -> Màu cam
    if (ghe.daDat) {
        cssGheDaDat = 'gheDuocChon';
        disabled = true;
    }

    // Ghế đang trong quá trình mình click chọn -> Màu xanh lá
    let cssGheDangChon = '';
    let indexGheDangChon = danhSachGheDangDat.findIndex(g => g.soGhe === ghe.soGhe);
    if (indexGheDangChon !== -1) {
        cssGheDangChon = 'gheDangChon';
    }

    // Hàng đầu tiên render số thứ tự (1, 2, 3...)
    if (indexHang === 0) {
        return <span className="rowNumber">{ghe.soGhe}</span>;
    }

    return (
        <button
            disabled={disabled}
            className={`ghe ${cssGheDaDat} ${cssGheDangChon}`}
            onClick={() => dispatch({ type: 'DAT_GHE', ghe })}
        >
            {ghe.soGhe}
        </button>
    );
};

export default Ghe;