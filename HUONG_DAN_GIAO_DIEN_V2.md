# Giao diện TV3 – phiên bản V2 (theo mẫu giao diện 2)

- Giữ nguyên 8 trang HTML hiện có; không bổ sung nghiệp vụ hoặc mục menu.
- Header xanh ngang; sidebar màu sáng; mục đang chọn xanh nhạt; vùng nội dung trắng/xám.
- Giữ nguyên tên file, link, id form, script `assets/tv3.js`, dữ liệu giả và logic mô phỏng.
- File `tham-khao-thymeleaf/` chỉ là **mẫu giao diện tham khảo**, chưa có Controller/Service hoặc bảo mật backend.
- Phần `index.html` trên Pages là trang Tổng quan TV3, không phải dashboard hoàn chỉnh của toàn bộ vai trò.

## Xem trước

Mở `index.html` trong trình duyệt hoặc deploy nguyên **nội dung của thư mục demo** lên repo Pages.

## Cập nhật repo GitHub Pages riêng

Giữ nguyên cấu trúc file. Ghi đè 8 file HTML và `assets/tv3.css` từ ZIP này lên repo UI riêng, hoặc upload cả thư mục để đồng bộ tài liệu. Không thay `assets/tv3.js` nếu không có thay đổi tính năng.

## Phạm vi không thay đổi

Quy tắc 3–5 SV, một nhóm trưởng, không thuộc hai nhóm đồng thời, GĐ2 mới đăng ký, chỉ trưởng nhóm nộp PDF và giới hạn 20 MiB đều giữ nguyên trong bản mô phỏng. Gửi lại đăng ký sau từ chối vẫn chưa triển khai.

## Lưu ý

Repo GitHub Pages chỉ chạy HTML/CSS/JS. Các chức năng kiểm tra an toàn/bảo mật phải được xây dựng và test ở backend Spring Boot sau này.

Ghi chú bố cục: Logo/brand được đặt trong header, tránh biến mất khi sidebar đóng trên màn hình nhỏ.
