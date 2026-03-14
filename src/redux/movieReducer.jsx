const initialState = {
    danhSachGheDangDat: []
};

export const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DAT_GHE': {
            let danhSachGheUpdate = [...state.danhSachGheDangDat];
            let index = danhSachGheUpdate.findIndex(ghe => ghe.soGhe === action.ghe.soGhe);
            
            if (index !== -1) {
                // Nếu click lại ghế đang chọn -> Xóa khỏi danh sách (nhả ghế)
                danhSachGheUpdate.splice(index, 1);
            } else {
                // Nếu chưa có -> Thêm vào danh sách chọn
                danhSachGheUpdate.push(action.ghe);
            }
            return { ...state, danhSachGheDangDat: danhSachGheUpdate };
        }
        default:
            return state;
    }
};