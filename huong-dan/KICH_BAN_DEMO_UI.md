# Thử nhanh giao diện demo (KHÔNG PHẢI integration test)

1. Mở `preview/index.html` bằng trình duyệt.
2. Trên thanh vàng, giữ `SV2201001 · Nhóm trưởng`.
3. Vào `Nhóm của tôi`: thấy 3 thành viên chính thức (đúng tối thiểu) và 1 yêu cầu chờ duyệt.
4. Bấm Duyệt SV2201004: nhóm lên 4/5. Duyệt quá 5 người sẽ bị chặn trong demo (ràng buộc thật phải do Service/DB).
5. Chọn `Đăng ký đề tài`, chọn một đề tài đã công bố, bấm gửi.
6. Vào `Trạng thái đăng ký`: thấy CHO_DUYET. Bấm `Mô phỏng: duyệt` để mô phỏng chức năng thuộc Trưởng khoa / TV2.
7. Vào `Nộp báo cáo`: chọn file PDF nhỏ dưới 20 MiB, mô phỏng nộp: lịch sử tăng lên v1; nộp lần nữa thành v2. Nội dung PDF **không được upload hoặc lưu**.
8. Đổi danh tính thành `SV2201004`: không được đăng ký/nộp thay nhóm trưởng.
9. Đổi thành `SV2201006`: có thể xin gia nhập nhóm còn chỗ; nếu đã thuộc một nhóm sẽ không được xin nhóm thứ hai.
10. Bấm `Đặt lại dữ liệu` để bắt đầu từ đầu.

### Test thật phải làm sau khi có backend

- Tạo nhóm 1 người → không được đăng ký, bổ sung 3 người → được đăng ký.
- Duyệt người thứ 6 → bị chặn khi hai request đồng thời.
- SV đang THAM_GIA nhóm A → không được duyệt vào B.
- Tài khoản không phải nhóm trưởng gọi POST đăng ký hoặc upload bằng cURL → HTTP 403/điều kiện nghiệp vụ từ chối.
- GĐ1 không có đăng ký của SV; GĐ2 mới mở đăng ký đề tài đã công bố.
- File đổi đuôi `.pdf` giả, file rỗng, file >20 MiB → backend chặn.
- File lưu bền vững sau restart, SHA-256 đúng, phiên bản không trùng.
- Mỗi nhóm chỉ có 1 đăng ký và file báo cáo có PK (ma_nhom, phien_ban).
