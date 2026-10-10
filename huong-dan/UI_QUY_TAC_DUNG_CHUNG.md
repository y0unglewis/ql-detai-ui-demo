# Quy tắc UI ngắn để chia cho 3 bạn còn lại

- Kiểu: dashboard trái + header trên + vùng nội dung rõ, chỉ màu phẳng, không gradient.
- Màu: navy `#18334e`, xanh thao tác `#27628d`, nền `#f4f6f9`, viền `#dce4ed`, card trắng.
- Font: `Segoe UI`, fallback Arial/sans-serif.
- Kích thước: tiêu đề trang 27px, phần nội dung 15px; khoảng cách giữa card 18px, bo góc khoảng 12px.
- Trạng thái: xanh lá = hoàn thành/đã duyệt; vàng = chờ; đỏ = từ chối/lỗi; xanh dương = đang xử lý.
- Nút: hành động chính chỉ một nút primary trên một form, nút phụ trung tính, nút hủy màu đỏ khi cần.
- Form: label trên input, chỉ rõ trường bắt buộc; nhận lỗi server và phản hồi flash.
- Không tự sáng tạo thêm các trạng thái ngoài enum thống nhất trong CSDL.
- Cách đặt class ở TV3 có tiền tố `tv3-` để tránh conflict trong lúc làm việc theo branch; khi tích hợp có thể trích phần chung ra `app.css`.
- Header/Sidebar thật có phân quyền theo Spring Security; chỉ hiển thị menu không phải kiểm tra quyền.
- Tránh copy nguyên code từ AI mà không nắm luồng. Mỗi thành viên phải giải thích được Controller → Service → Repository → DB.
