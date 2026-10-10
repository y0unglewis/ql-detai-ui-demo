# Bộ giao diện TV3 — Quản lý nhóm sinh viên, đăng ký đề tài, nộp báo cáo

Project: Hệ thống quản lý đề tài sinh viên Khoa CNTT — Nhóm 12 — WEPR330479.

**Đây là frontend / mẫu tích hợp, KHÔNG PHẢI backend đã triển khai.** Không có thay đổi SQL, Entity, Repository, Service, Controller hoặc Spring Security. Dữ liệu ở `preview/` hoàn toàn giả lập.

## 1. Xem trước ngay (không cần Java, MySQL)

Mở `preview/index.html` trên Chrome/Edge (có thể mở bằng cách bấm đúp). Sau đó dùng sidebar chọn từng trang. Nếu trình duyệt hạn chế JavaScript từ file local, mở VSCode với extension Live Server và chọn `preview/index.html` → Open with Live Server.

Trong preview, hộp màu vàng cho phép đổi tài khoản mẫu:

- SV2201001: trưởng nhóm N12-A (3 thành viên chính thức và 1 đơn xin gia nhập chờ duyệt)
- SV2201004: sinh viên đang xin gia nhập N12-A
- SV2201006: sinh viên chưa thuộc nhóm

Thử: duyệt thành viên → đăng ký đề tài → trong trang trạng thái bấm “Mô phỏng: duyệt” → trở về trang nộp báo cáo. Các thay đổi chỉ ở `localStorage` trên máy đang xem. **Bấm đặt lại dữ liệu nếu muốn bắt đầu từ đầu.**

Lưu ý: thao tác “nộp PDF” trong preview **không tải file lên server, không lưu nội dung file**, chỉ kiểm tra sơ bộ và mô phỏng một hàng metadata. Preview cũng **không có phân quyền an toàn**; không được dùng cách kiểm tra này làm logic bảo mật trên hệ thống thật.

## 2. Các trang thuộc phạm vi TV3

| Trang preview | Template Spring | Nghiệp vụ |
|---|---|---|
| `index.html` | `tv3/index.html` | Dashboard cho SV |
| `nhom-danh-sach.html` | `tv3/nhom-danh-sach.html` | Xem/tìm nhóm, xin gia nhập |
| `nhom-tao.html` | `tv3/nhom-tao.html` | Tạo nhóm, người tạo là nhóm trưởng |
| `nhom-cua-toi.html` | `tv3/nhom-cua-toi.html` | Xem thành viên, nhóm trưởng duyệt/từ chối |
| `dang-ky-de-tai.html` | `tv3/dang-ky-de-tai.html` | Chọn đề tài đã công bố, đăng ký GĐ2 |
| `trang-thai-dang-ky.html` | `tv3/trang-thai-dang-ky.html` | Xem trạng thái/lý do từ chối |
| `nop-bao-cao.html` | `tv3/nop-bao-cao.html` | Nộp PDF, xem danh sách phiên bản |
| `lien-ket.html` | Không có (chỉ preview) | Placeholder cho các module TV1/TV2/TV4 |

## 3. Ghép với project GitHub hiện tại

1. Không giải nén chồng lên `main` khi chưa review. Dùng branch `feat/tv3-group-ui`.
2. Copy **bên trong** thư mục `spring/src/main/resources/templates/tv3/` vào `src/main/resources/templates/tv3/` của repo.
3. Copy `spring/src/main/resources/static/css/tv3.css` vào `src/main/resources/static/css/`.
4. Copy `spring/src/main/resources/static/js/tv3.js` vào `src/main/resources/static/js/`.
5. Controller của bạn trả đúng tên view như `return "tv3/nhom-cua-toi";`. Xem hợp đồng route và model ở `docs/ROUTES_MODELS.md`.
6. Bổ sung backend (Entity/Repository/Service/Controller/Validation/Security), kiểm thử thật rồi mới đánh dấu hoàn thành.

**Không chỉnh source GitHub ngay ở file ZIP này.** Đây là package frontend để bạn chọn lọc đưa vào branch TV3. Thiết kế lấy CSDL 17 bảng khóa nghiệp vụ làm chuẩn. Nhưng SQL ở ZIP GitHub `src/main/resources/db/V3_create_registration_tables.sql` vẫn dùng `id BIGINT AUTO_INCREMENT` của bản CSDL cũ; nhóm cần thống nhất migration theo tài liệu 17 bảng trước khi cùng triển khai backend. Không sửa V3 cũ trực tiếp trên hệ thống đã chạy migration.

## 4. Quy tắc đang chốt / chưa chốt

- Nhóm **3–5 sinh viên** khi gửi đăng ký, **đúng 1 trưởng nhóm**.
- Một SV không được tham gia **2 nhóm đang hoạt động cùng lúc**.
- Nhóm trưởng duyệt/từ chối người xin vào nhóm.
- Chỉ nhóm trưởng được đăng ký đề tài và upload báo cáo.
- GĐ2 chỉ đăng ký **đề tài đã công bố**; đợt của nhóm và đề tài phải trùng.
- Một nhóm có tối đa **một bản ghi** `dang_ky_de_tai` (PK `ma_nhom`), không tạo log đăng ký mới.
- Báo cáo là PDF, tối đa **20 MiB**, lưu theo khóa `(ma_nhom, phien_ban)`.
- *Chưa triển khai tính năng gửi lại đăng ký bị từ chối trong MVP*; chờ hỏi giảng viên và chốt nghiệp vụ.
- *Chưa chốt quyền SV đề xuất đề tài ở GĐ1*; không có màn hình đề xuất đề tài trong module này.

## 5. Hướng phối hợp giao diện

Các thành viên TV1, TV2, TV4 có thể tham khảo `preview/assets/tv3.css`, **không bắt buộc** dùng từng chi tiết. Nếu muốn đồng nhất cả website, thống nhất một file CSS/fragment chung ở nhánh tích hợp rồi di chuyển các style cần thiết. Hiện CSS đều có tiền tố `tv3-` nhằm tránh làm hỏng giao diện các thành viên khác.

## 6. Điểm cần tự kiểm tra khi làm backend

- Không lấy quyền nhóm trưởng từ input form: lấy MSSV từ Spring Security principal và truy vấn thành viên nhóm.
- Chặn URL/POST khi SV không có quyền, kể cả nếu người dùng sửa HTML hoặc gọi cURL.
- Khóa nhóm trước khi duyệt để chặn hai yêu cầu đồng thời vượt 5 thành viên; DB UNIQUE chống ở 2 nhóm.
- Nếu đã đủ 5 người thì xử lý lỗi Service và hiển thị thông báo, không chỉ tắt nút.
- Gửi đăng ký chỉ khi GĐ2 đang mở và nhóm có 3–5 thành viên hợp lệ.
- Chỉ cho upload khi đăng ký đã được duyệt và chính nhóm trưởng thực hiện. Kiểm tra PDF thật bằng magic bytes (không chỉ phần mở rộng/MIME), giới hạn kích thước ở server, tạo phiên bản trong transaction, SHA-256 và nơi lưu file an toàn.
- Khi dùng form POST: phải có CSRF token, các template đã dự kiến `th:name`, `th:value` lấy từ `_csrf`.

Các tệp trong ZIP này chỉ là phần TV3, không sửa CSDL 17 bảng và không tự nhận là backend đã hoàn chỉnh.
