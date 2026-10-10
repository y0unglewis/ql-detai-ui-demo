# UI Demo – Thành viên 3 (Nhóm 12)

Đây là **bản xem thử UI bằng HTML/CSS/JavaScript**, không phải ứng dụng Spring Boot đã triển khai. Mọi thao tác trên trang đang dùng dữ liệu giả lập trong trình duyệt, **không kết nối MySQL, không thực sự gửi đăng ký hoặc upload PDF**.

## Xem demo

Mở `index.html`, hoặc nếu GitHub Pages được bật từ `/docs` của nhánh đang chọn, truy cập:

`https://TEN_TAI_KHOAN.github.io/TEN_REPO/demo/`

Cần đổi TEN_TAI_KHOAN, TEN_REPO cho đúng.

## Tổ chức thư mục

- `*.html`: trang mô phỏng của TV3 và các trang giữ chỗ cho nghiệp vụ liên quan.
- `assets/tv3.css`, `assets/tv3.js`: giao diện và tương tác mô phỏng dùng chung.
- `huong-dan/`: hướng dẫn, quy tắc UI và hợp đồng route/model đề xuất.
- `tham-khao-thymeleaf/`: template Thymeleaf để **tham khảo khi tích hợp**, không tự động chạy trên GitHub Pages.

## Hướng dẫn cho cả nhóm

1. Thống nhất giao diện (màu phẳng, sidebar/header, bảng/form/nút), lấy bộ `assets/` và trang mẫu làm chuẩn.
2. Chia công việc backend/frontend theo vai trò. Không coi những màn hình này là bằng chứng chức năng đã hoạt động.
3. Khi phát triển thật, đưa template phù hợp vào `src/main/resources/templates/` và CSS/JS vào `src/main/resources/static/`.
4. Không sửa schema 17 bảng hoặc quy tắc nhóm 3–5 SV chỉ vì giao diện demo.

**GitHub Pages lưu ý:** trong Settings → Pages → Build and deployment → Deploy from a branch, chọn nhánh chứa code và folder `/docs`; không có tùy chọn trực tiếp `/docs/demo`. Trang demo sẽ ở đường dẫn con `/demo/`.
