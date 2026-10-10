# Gói cập nhật README + khung Dashboard Nhóm 12

Gói này **không ghi đè code backend hoặc migration SQL**. Bản Thymeleaf mới là các file cấu trúc cần tích hợp khi repo chuẩn bị xong Controller/Security.

## Nếu cập nhật repo chính `ql-detai-sinhvien`

1. Copy `README.md` mới vào gốc repo **sau khi tự so sánh diff với README trên GitHub hiện tại**, vì bản nền dùng README từ ZIP đã gửi trong chat.
2. Copy `docs/demo/dashboard-chung.html`, `docs/demo/assets/app.css`, `docs/demo/assets/app.js` vào `docs/demo/` đang có. **Không xóa các trang demo TV3.**
3. Copy `docs/ui/QUY_UOC_GIAO_DIEN.md`.
4. Copy `src/main/resources/templates/fragments/common.html`, `templates/shared/dashboard.html`, `static/css/app.css`, `static/js/app.js` vào thư mục tương ứng nếu nhóm đã sẵn sàng tích hợp khung chung. Nếu chưa, đưa riêng vào Pull Request và không coi là hoàn thành nghiệp vụ.
5. Đặt logo `hcmute_logo.png` tại `src/main/resources/static/images/` và `docs/demo/assets/` khi có file logo trường.
6. Chưa cần sửa `pom.xml`, Flyway hay Java.

## Nếu cập nhật repo UI riêng `ql-detai-ui-demo`

Chỉ copy **nội dung** của `docs/demo/` mới vào gốc repo UI đang deploy (đặc biệt `dashboard-chung.html` và `assets/app.css`, `assets/app.js`), không copy `README.md` của repo chính và không làm hỏng các trang TV3 đã có. Mở `/dashboard-chung.html` để xem layout.

## Giới hạn

- Bản xem trước **không chạy backend, không đăng nhập thật, không ghi MySQL**.
- Các số liệu đợt/nhóm chưa được đưa vào mẫu chung, tránh khẳng định số liệu giả là thật.
- Bản Spring Boot cần Controller route `/dashboard`, quản lý quyền Spring Security và các route của thành viên khác; bản này không tự tạo chúng.
- Giao diện ngoài phạm vi TV3 chỉ là menu/đường dẫn tạm, không được hiểu là đã hoàn thành.
