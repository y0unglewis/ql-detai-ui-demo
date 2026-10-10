# UI chung Nhóm 12 — quy ước tích hợp

## Phạm vi

- Một header, một sidebar, một bộ CSS dùng chung; **không tạo 4 dashboard độc lập**.
- Đây là **giao diện khung**, không bao gồm nghiệp vụ CRUD, nộp PDF, chấm điểm hay đăng nhập thực tế.
- **Màu phẳng**: header `#2B5778`, sidebar `#F1F5F9`, active `#DEEBF7`, nền `#F6F8FB`, card trắng; không gradient.
- **Font:** Be Vietnam Pro (fallback Segoe UI/Arial). Chữ thường ~16px; nhãn nhỏ không quá mờ.
- Các thành viên tạo trang Thymeleaf riêng, dùng lại các fragments `head`, `header`, `sidebar`, `footer`.
- Menu active bằng `th:replace="~{fragments/common :: sidebar('register')}"` (xem bảng dưới).
- Phân quyền menu chỉ là hỗ trợ UX; Controller/Service vẫn bắt buộc thực thi quyền thực tế.

## Tên `active` và route dự kiến (chưa phải route đã chạy)

| Phần | active | Route | Thành viên |
| --- | --- | --- | --- |
| Tổng quan | `dashboard` | `/dashboard` | Chung |
| Đợt đăng ký | `rounds` | `/dot-dang-ky` | TV2 |
| Danh sách đề tài | `topics` | `/de-tai` | TV2 |
| Tìm & tham gia nhóm | `browse` | `/sv/nhom` | TV3 |
| Nhóm của tôi | `mygroup` | `/sv/nhom/cua-toi` | TV3 |
| Đăng ký đề tài | `register` | `/sv/dang-ky` | TV3 |
| Trạng thái đăng ký | `status` | `/sv/dang-ky/trang-thai` | TV3 |
| Nộp báo cáo | `reports` | `/sv/bao-cao` | TV3 |
| Kết quả học tập | `results` | `/ket-qua` | TV4 |
| Quản lý tài khoản | `users` | `/admin/users` | TV1 |
| Hội đồng và chấm điểm | `assessment` | `/hoi-dong` | TV4 |

**Cần chốt đường dẫn cuối cùng với các thành viên trước khi code Controller.** Chức năng trưởng bộ môn, trưởng khoa được kiểm soát bằng quyền, không tự thêm bảng/role khác ngoài 5 role đã chốt.

## Phân biệt 2 môi trường

- `docs/demo/dashboard-chung.html`: trang tĩnh dùng kiểm tra giao diện trên GitHub Pages, các link TV3 trỏ về trang demo đang có, các mục còn lại chỉ là placeholder.
- `src/main/resources/templates/shared/dashboard.html`: trang Thymeleaf sẽ cần Controller thực tế trả về template và cấu hình Spring Security để hiện menu theo quyền.
- `src/main/resources/static/js/app.js`: chỉ bật/tắt sidebar và xử lý ảnh logo thiếu; **không chứa localStorage giả quyền/nghiệp vụ**.
- CSS `app.css` dành cho khung chung; không bắt buộc chép JS mô phỏng `tv3.js` vào bản Spring Boot thật.

## Logo trường

Đặt chính xác `hcmute_logo.png` vào:
- `src/main/resources/static/images/hcmute_logo.png` (Spring Boot).
- `docs/demo/assets/hcmute_logo.png` (GitHub Pages).

Không có logo trong gói này vì nhóm chưa cung cấp file gốc. Khi ảnh chưa có, logo sẽ hiển thị **QL** dự phòng.

## Tích hợp cần thiết

1. TV1/nhóm cấu hình đăng nhập, `ROLE_...` và `/logout` theo Spring Security.
2. TV phụ trách route viết Controller `GET` trả template tương ứng. `GET /dashboard` là route dự kiến, **chưa được triển khai trong gói UI**.
3. Thống nhất quyền truy cập thực tế cho trưởng khoa/trưởng bộ môn/GV trước khi phát hành menu chính thức.
4. Không merge nguyên demo localStorage vào backend như cơ chế xác thực.
5. Khi sử dụng trong Spring Boot, giữ CSS/JS toàn hệ thống dưới `src/main/resources/static/`.
