# Hợp đồng kết nối Controller ↔ Thymeleaf cho Thành viên 3 (ĐỀ XUẤT)

Các route và tên trường dưới đây **do package UI đề xuất**; nhóm cần chốt trước khi triển khai. Đây không phải route đã tồn tại trên GitHub.

## Routes

| HTTP | URL | Trang / chức năng | Quyền |
|---|---|---|---|
| GET | `/sv` | Tổng quan TV3 | SINH_VIEN |
| GET | `/sv/nhom` | Danh sách nhóm + tìm theo keyword | SINH_VIEN |
| GET | `/sv/nhom/tao` | Form tạo nhóm | SINH_VIEN |
| POST | `/sv/nhom` | Tạo nhóm | SINH_VIEN, chưa thuộc nhóm hoạt động |
| POST | `/sv/nhom/{maNhom}/xin-tham-gia` | Gửi yêu cầu | SINH_VIEN, chưa thuộc nhóm hoạt động |
| GET | `/sv/nhom/cua-toi` | Nhóm hiện tại, active/pending | SINH_VIEN |
| POST | `/sv/nhom/{maNhom}/thanh-vien/{maSinhVien}/duyet` | Nhóm trưởng duyệt | Nhóm trưởng đúng nhóm |
| POST | `/sv/nhom/{maNhom}/thanh-vien/{maSinhVien}/tu-choi` | Nhóm trưởng từ chối | Nhóm trưởng đúng nhóm |
| GET | `/sv/dang-ky` | Chọn đề tài đã công bố | SINH_VIEN |
| POST | `/sv/dang-ky` | Gửi đăng ký đề tài | Trưởng nhóm hợp lệ, GĐ2 đang mở |
| GET | `/sv/dang-ky/trang-thai` | Theo dõi phê duyệt/từ chối | Thành viên nhóm được phép xem |
| GET | `/sv/bao-cao` | Form báo cáo + lịch sử phiên bản | Thành viên nhóm có quyền xem |
| POST | `/sv/bao-cao` | Upload PDF | Trưởng nhóm, nhóm/đăng ký hợp lệ |

Không dùng `/api/*` JSON trừ khi nhóm thực sự cần. Các URL chung **ngoài TV3** như `/de-tai`, `/dot-dang-ky`, `/ket-qua`, `/profile` là menu liên kết dự kiến đến các thành viên khác; cần thống nhất lại nếu route khác.

## Model attributes dự kiến

`GET /sv`:
- `group` (nullable): `maNhom`, `tenNhom`, `maDot`, `trangThai`
- `memberCount` int, `registrationStatusLabel` String, `reportCount` int

`GET /sv/nhom`:
- `groups` (List<GroupCardView>): `maNhom`, `tenNhom`, `maDot`, `trangThai`, `memberCount`, `leaderName`, `canRequestJoin` (boolean do Service tính theo principal)
- `keyword` String

`GET /sv/nhom/tao`:
- `createGroupForm`: fields `maNhom`, `maDot`, `tenNhom`
- `rounds`: List có `maDot`, `tenDot`

`GET /sv/nhom/cua-toi`:
- `group` nullable; `leaderName`, `memberCount`, `pendingRequestLabel`
- `activeMembers`, `pendingMembers`: list có `maSinhVien`, `hoTen`, `laNhomTruong`, `trangThai`
- `isLeader` boolean (SERVER xác nhận, không lấy từ URL hoặc form)

`GET /sv/dang-ky`:
- `group`, `memberCount`, `isLeader`, `phaseTwoOpen`, `canRegister`, `registration`
- `publishedTopics`: `maDeTai`, `tenDeTai`, `noiDung`, `tenBoMon`, `tenGiangVien`
- POST field `maDeTai` là mã nghiệp vụ String, không phải `id`

`GET /sv/dang-ky/trang-thai`:
- `registration`: nullable, nếu có gồm `maNhom`, `maDeTai`, `tenDeTai`, `trangThai`, `lyDoTuChoi`

`GET /sv/bao-cao`:
- `group`, `canUpload`, `reports`: list có `phienBan`, `tenFileGoc`, `kichThuocByte`, `maNguoiNop`, `trangThai`
- POST multipart field `file` (`MultipartFile`)

Mọi page:
- `currentUserName`, `currentUserCode` (có thể lấy từ principal ở Advice)
- `success`, `error` (flash attrs)

### DTO/view model cần tách khỏi Entity

Các view model trên là hợp đồng giao diện để TV3 xây dựng Service/Controller. **Không nhất thiết tên property của Entity trùng hoàn toàn**; nên map từ Entity ra DTO khi hiển thị. Không truyền `mat_khau_hash`, đường dẫn object file riêng tư, thông tin các nhóm khác không được phép xem.

### Thực hiện phân quyền

`@PreAuthorize` mức vai trò và quyền sở hữu theo bản ghi ở Service. Không đủ nếu chỉ ẩn nút ở Thymeleaf. POST duyệt theo `maNhom`, `maSinhVien` nhưng MSSV người thực hiện phải lấy từ `Authentication`.

### Quy tắc sau khi đăng ký bị từ chối

Ở bản đầu chỉ có trang *xem lý do từ chối*. Nếu giảng viên đồng ý cho gửi lại trong GĐ2, có thể chuyển `TU_CHOI` → `CHO_DUYET` trên cùng bản ghi `dang_ky_de_tai.ma_nhom`, không đổi sang PK `id` hay thêm bảng. Chưa làm route gửi lại trong package này.
