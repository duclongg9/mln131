// Game Data: V-ALLIANCE (Hành Trình Quá Độ)

// Sĩ - Nông - Công - Thương -> Trí Thức - Nông Dân - Công Nhân - Doanh Nhân (kinhTe)
export const cardsData = [
  // --- NHÓM CÔNG NHÂN ---
  {
    id: 1,
    nhanVat: "GIAI CẤP CÔNG NHÂN",
    cauHoi: "Công nhân kiến nghị xây dựng thêm hệ thống an sinh xã hội và nhà ở xã hội tại khu công nghiệp. Bạn đồng ý không?",
    quetTrai: { text: "Từ Chối (-Công, +Doanh)", effect: { congNhan: -15, nongDan: 0, triThuc: 0, kinhTe: 10 } },
    quetPhai: { text: "Chấp Nhận (+Công, -Doanh, -Ngân)", effect: { congNhan: 20, nongDan: 0, triThuc: 0, kinhTe: -15, khatVong: 3 } },
    trietLy: "Giai cấp công nhân là lực lượng đi đầu, giải phóng công nhân là giải phóng xã hội."
  },
  {
    id: 2,
    nhanVat: "BỘ XÂY DỰNG",
    cauHoi: "Quy hoạch quỹ đất 20% tại các khu công nghiệp để xây Nhà Ở Xã Hội. Cần chi ngân sách lớn, nhưng sẽ giải quyết an sinh.",
    quetTrai: { text: "Từ Chối (-Công, +Doanh)", effect: { congNhan: -20, nongDan: 0, triThuc: 0, kinhTe: 10 } },
    quetPhai: { text: "Đồng Ý (+Công, -Doanh)", effect: { congNhan: 25, nongDan: 0, triThuc: 0, kinhTe: -15 } },
    trietLy: "An cư mới lạc nghiệp. Không thể phát triển công nghiệp dựa trên sự bấp bênh của người thợ."
  },
  {
    id: 3,
    nhanVat: "TỔNG LIÊN ĐOÀN",
    cauHoi: "Lạm phát tăng cao, đề xuất tăng lương cơ sở 15% ngay trong quý này để đảm bảo đời sống người lao động.",
    quetTrai: { text: "Từ Chối (-Công, +Doanh)", effect: { congNhan: -25, nongDan: 0, triThuc: 0, kinhTe: 15 } },
    quetPhai: { text: "Đồng Ý (+Công, -Doanh)", effect: { congNhan: 20, nongDan: 0, triThuc: 0, kinhTe: -20 } },
    trietLy: "Tiền lương không chỉ là chi phí, nó là sự tái đầu tư cho sức lao động xã hội."
  },
  {
    id: 4,
    nhanVat: "HIỆP HỘI DOANH NGHIỆP",
    cauHoi: "Xin phép sa thải 10,000 công nhân dệt may để thay thế bằng dây chuyền tự động hóa 100%.",
    quetTrai: { text: "Từ Chối (+Công, -Doanh)", effect: { congNhan: 15, nongDan: 0, triThuc: 0, kinhTe: -20 } },
    quetPhai: { text: "Đồng Ý (-Công, +Doanh, +Trí)", effect: { congNhan: -25, nongDan: 0, triThuc: 10, kinhTe: 25 } },
    trietLy: "Tiến bộ kỹ thuật không được xây trên nỗi đau thất nghiệp của số đông."
  },

  // --- NHÓM NÔNG DÂN ---
  {
    id: 5,
    nhanVat: "GIAI CẤP NÔNG DÂN",
    cauHoi: "Giá phân bón tăng phi mã. Nông dân xin được bình ổn giá và trợ giá vật tư nông nghiệp khẩn cấp.",
    quetTrai: { text: "Từ Chối (-Nông, +Doanh)", effect: { congNhan: 0, nongDan: -20, triThuc: 0, kinhTe: 10 } },
    quetPhai: { text: "Đồng Ý (+Nông, -Doanh)", effect: { congNhan: 0, nongDan: 20, triThuc: 0, kinhTe: -15 } },
    trietLy: "Nông nghiệp là trụ đỡ của nền kinh tế. Nông dân ấm no thì đất nước mới yên bình."
  },
  {
    id: 6,
    nhanVat: "BỘ NÔNG NGHIỆP",
    cauHoi: "Nhóm nông dân muốn thành lập Hợp tác xã kiểu mới để ứng dụng Drone và IoT vào sản xuất. Hỗ trợ họ chứ?",
    quetTrai: { text: "Từ Chối (-Nông)", effect: { congNhan: 0, nongDan: -15, triThuc: 0, kinhTe: 0 } },
    quetPhai: { text: "Chấp Nhận (+Nông, +Trí, +Doanh)", effect: { congNhan: 0, nongDan: 15, triThuc: 10, kinhTe: 10, khatVong: 4 } },
    trietLy: "Đưa tri thức về đồng ruộng là con đường ngắn nhất để thu hẹp khoảng cách thành thị và nông thôn."
  },
  {
    id: 7,
    nhanVat: "TẬP ĐOÀN ĐỊA ỐC",
    cauHoi: "Xin chuyển đổi 500 ha đất trồng lúa bờ xôi ruộng mật để xây dựng khu đô thị sinh thái cao cấp.",
    quetTrai: { text: "Từ Chối (+Nông, -Doanh)", effect: { congNhan: 0, nongDan: 20, triThuc: 0, kinhTe: -20 } },
    quetPhai: { text: "Đồng Ý (-Nông, +Doanh)", effect: { congNhan: 10, nongDan: -25, triThuc: 0, kinhTe: 25 } },
    trietLy: "An ninh lương thực là vấn đề sống còn, không thể đổi lấy lợi ích bất động sản ngắn hạn."
  },
  {
    id: 8,
    nhanVat: "HỢP TÁC XÃ",
    cauHoi: "Nông dân muốn liên kết lập siêu hợp tác xã, xin ngân hàng nhà nước khoanh nợ và cho vay vốn ưu đãi 0%.",
    quetTrai: { text: "Từ Chối (-Nông, +Doanh)", effect: { congNhan: 0, nongDan: -20, triThuc: 0, kinhTe: 15 } },
    quetPhai: { text: "Đồng Ý (+Nông, -Doanh)", effect: { congNhan: 0, nongDan: 20, triThuc: 0, kinhTe: -20 } },
    trietLy: "Sản xuất nhỏ lẻ không thể vươn ra biển lớn. Liên kết là con đường tất yếu của kinh tế hợp tác."
  },

  // --- NHÓM TRÍ THỨC ---
  {
    id: 9,
    nhanVat: "BỘ CẤP BẰNG SÁNG CHẾ",
    cauHoi: "Có một công nghệ AI lõi vừa được phát minh. Chúng ta nên chia sẻ mã nguồn mở cho toàn dân, hay cấp bằng sáng chế độc quyền cho doanh nghiệp?",
    quetTrai: { text: "Mã Nguồn Mở (+Trí, -Doanh)", effect: { congNhan: 10, nongDan: 10, triThuc: 20, kinhTe: -25 } },
    quetPhai: { text: "Độc Quyền (-Trí, +Doanh)", effect: { congNhan: -5, nongDan: -5, triThuc: -20, kinhTe: 30 } },
    trietLy: "Tri thức nếu bị độc quyền sẽ tạo ra hố sâu bất bình đẳng mới trong kỷ nguyên số."
  },
  {
    id: 10,
    nhanVat: "VIỆN HÀN LÂM",
    cauHoi: "Các nhà khoa học đề xuất cơ chế tự do sáng tạo và bảo vệ quyền sở hữu trí tuệ để chống 'chảy máu chất xám'. Bạn phê duyệt?",
    quetTrai: { text: "Từ Chối (-Trí, -Khát vọng)", effect: { congNhan: 0, nongDan: 0, triThuc: -25, kinhTe: 0 } },
    quetPhai: { text: "Chấp Nhận (+Trí, +Công, +Nông)", effect: { congNhan: 10, nongDan: 10, triThuc: 25, kinhTe: -5, khatVong: 5 } },
    trietLy: "Không bảo vệ trí tuệ và chất xám, hạt giống của quốc gia sẽ nảy mầm trên mảnh đất của nước khác."
  },
  {
    id: 11,
    nhanVat: "LIÊN ĐOÀN GIÁO VIÊN",
    cauHoi: "Kiến nghị miễn phí hoàn toàn giáo dục từ mầm non đến cấp 3 để xóa bỏ rào cản bất bình đẳng.",
    quetTrai: { text: "Từ Chối (-Trí, -Công)", effect: { congNhan: -15, nongDan: -15, triThuc: -20, kinhTe: 20 } },
    quetPhai: { text: "Đồng Ý (+Trí, +Công, -Doanh)", effect: { congNhan: 15, nongDan: 15, triThuc: 20, kinhTe: -25 } },
    trietLy: "Giáo dục không phải là dịch vụ thương mại, nó là quyền lợi cơ bản của con người."
  },

  // --- NHÓM DOANH NHÂN ---
  {
    id: 12,
    nhanVat: "TẬP ĐOÀN NƯỚC NGOÀI (FDI)",
    cauHoi: "Chúng tôi sẽ đầu tư 5 tỷ USD nếu Chính phủ miễn thuế thu nhập vòng 10 năm và cho phép đưa công nhân nước bạn sang làm việc.",
    quetTrai: { text: "Từ Chối (+Công, -Doanh)", effect: { congNhan: 20, nongDan: 0, triThuc: 0, kinhTe: -25 } },
    quetPhai: { text: "Đồng Ý (-Công, +Doanh)", effect: { congNhan: -25, nongDan: 0, triThuc: -5, kinhTe: 30 } },
    trietLy: "Độc lập kinh tế là cốt lõi. Thu hút vốn không có nghĩa là buông xuôi quyền lợi người lao động bản địa."
  },
  {
    id: 13,
    nhanVat: "BỘ TÀI CHÍNH",
    cauHoi: "Giới siêu giàu đang tăng nhanh. Đề xuất áp dụng 'Thuế Tài Sản Cao' đối với những người sở hữu nhiều bất động sản bỏ hoang.",
    quetTrai: { text: "Từ Chối (-Công, +Doanh)", effect: { congNhan: -15, nongDan: -10, triThuc: 0, kinhTe: 25 } },
    quetPhai: { text: "Đồng Ý (+Công, -Doanh)", effect: { congNhan: 20, nongDan: 15, triThuc: 5, kinhTe: -30 } },
    trietLy: "Công bằng xã hội đòi hỏi sự điều tiết. Không thể để của cải tụt hết vào tay một thiểu số."
  },
  {
    id: 14,
    nhanVat: "STARTUP CÔNG NGHỆ",
    cauHoi: "Chúng tôi cần vay vốn mạo hiểm từ nhà nước để phát triển xe điện quốc gia cạnh tranh với thế giới.",
    quetTrai: { text: "Từ Chối (-Doanh, -Trí)", effect: { congNhan: 0, nongDan: 0, triThuc: -15, kinhTe: -15 } },
    quetPhai: { text: "Đồng Ý (+Doanh, +Trí)", effect: { congNhan: 10, nongDan: 0, triThuc: 15, kinhTe: 20 } },
    trietLy: "Doanh nghiệp là lực lượng xung kích. Không đầu tư vào công nghệ lõi, chúng ta sẽ mãi đi làm thuê."
  },

  // --- CÁC TÌNH HUỐNG HỖN HỢP & NÂNG CAO ---
  {
    id: 15,
    nhanVat: "QUỸ BẢO VỆ MÔI TRƯỜNG",
    cauHoi: "Nhà máy thép ven biển vi phạm xả thải, làm chết hàng loạt tôm cá của ngư dân. Đóng cửa nộp phạt hay cho qua để giữ việc làm?",
    quetTrai: { text: "Cho Qua (+Công, +Doanh, -Nông)", effect: { congNhan: 15, nongDan: -30, triThuc: -10, kinhTe: 20 } },
    quetPhai: { text: "Đóng Cửa (-Công, -Doanh, +Nông)", effect: { congNhan: -25, nongDan: 25, triThuc: 10, kinhTe: -25 } },
    trietLy: "Không đánh đổi môi trường lấy tăng trưởng kinh tế đơn thuần."
  },
  {
    id: 16,
    nhanVat: "BỘ Y TẾ",
    cauHoi: "Các bệnh viện tư nhân đang bùng nổ, kéo theo bác sĩ giỏi rời bệnh viện công. Cần áp trần giá viện phí hay thả nổi cho thị trường?",
    quetTrai: { text: "Thả Nổi (+Doanh, -Công)", effect: { congNhan: -20, nongDan: -20, triThuc: 10, kinhTe: 25 } },
    quetPhai: { text: "Áp Trần Giá (+Công, -Doanh)", effect: { congNhan: 20, nongDan: 20, triThuc: -15, kinhTe: -20 } },
    trietLy: "Sức khỏe nhân dân là vốn quý nhất, không phải món hàng siêu lợi nhuận."
  },
  {
    id: 17,
    nhanVat: "ĐẠI BIỂU NÔNG DÂN",
    cauHoi: "Đất nông nghiệp cằn cỗi đi do lạm dụng hóa chất. Chúng tôi cần ngân sách hỗ trợ chuyển đổi sang nông nghiệp hữu cơ toàn diện.",
    quetTrai: { text: "Từ Chối (-Nông, +Doanh)", effect: { congNhan: 0, nongDan: -20, triThuc: 0, kinhTe: 15 } },
    quetPhai: { text: "Đồng Ý (+Nông, +Trí, -Doanh)", effect: { congNhan: 0, nongDan: 25, triThuc: 10, kinhTe: -20 } },
    trietLy: "Phát triển bền vững là trách nhiệm với thế hệ tương lai, bắt đầu từ từng tấc đất."
  },
  {
    id: 18,
    nhanVat: "CÔNG TÁC PHÂN BỔ NGÂN SÁCH",
    cauHoi: "Có một số vốn dôi dư cuối năm. Dùng để xây Quảng trường trung tâm, hay rót xuống nâng cấp hạ tầng mạng lưới điện nông thôn?",
    quetTrai: { text: "Quảng Trường (+Trí, +Doanh, -Nông)", effect: { congNhan: 10, nongDan: -20, triThuc: 15, kinhTe: 15 } },
    quetPhai: { text: "Hạ Tầng Điện (+Nông, +Công, -Doanh)", effect: { congNhan: 15, nongDan: 25, triThuc: 0, kinhTe: -25 } },
    trietLy: "Xóa mờ khoảng cách thành thị và nông thôn là minh chứng sống của tính ưu việt chế độ."
  },
  {
    id: 19,
    nhanVat: "HIỆP HỘI THƯƠNG MẠI ĐIỆN TỬ",
    cauHoi: "Xin phép độc quyền thu thập và bán dữ liệu người dùng để tối ưu hóa AI giao hàng. Đổi lại, họ đóng thuế rất cao.",
    quetTrai: { text: "Từ Chối (+Trí, -Doanh)", effect: { congNhan: 0, nongDan: 0, triThuc: 25, kinhTe: -25 } },
    quetPhai: { text: "Đồng Ý (-Trí, +Doanh)", effect: { congNhan: -15, nongDan: -10, triThuc: -20, kinhTe: 35 } },
    trietLy: "Quyền riêng tư của nhân dân quan trọng hơn mọi sự đánh đổi mang mác hiện đại hóa."
  },
  {
    id: 20,
    nhanVat: "NHÀ XUẤT BẢN",
    cauHoi: "Thị trường sách đang tràn ngập nội dung giật gân, độc hại. Dùng màng lọc kiểm duyệt mạnh tay, hay để thị trường tự đào thải?",
    quetTrai: { text: "Tự Đào Thải (+Doanh, -Trí)", effect: { congNhan: -10, nongDan: -10, triThuc: -25, kinhTe: 20 } },
    quetPhai: { text: "Kiểm Duyệt Mạnh (+Trí, -Doanh)", effect: { congNhan: 5, nongDan: 5, triThuc: 25, kinhTe: -20 } },
    trietLy: "Mặt trận văn hóa tư tưởng nếu bỏ ngỏ sẽ là sự mục ruỗng từ bên trong."
  },

  // 10 CARDS THÊM
  {
    id: 21,
    nhanVat: "BỘ LAO ĐỘNG",
    cauHoi: "Đề xuất thắt chặt luật an toàn lao động tại các hầm mỏ, đóng cửa ngay lập tức xí nghiệp vi phạm dù ảnh hưởng sản lượng.",
    quetTrai: { text: "Từ Chối (-Công, +Doanh)", effect: { congNhan: -25, nongDan: 0, triThuc: 0, kinhTe: 20 } },
    quetPhai: { text: "Đồng Ý (+Công, -Doanh)", effect: { congNhan: 25, nongDan: 0, triThuc: 0, kinhTe: -25 } },
    trietLy: "Sự phát triển không thể đánh đổi bằng sinh mệnh của những người tạo ra nó."
  },
  {
    id: 22,
    nhanVat: "ĐẠI BIỂU MIỀN NÚI",
    cauHoi: "Chính sách bao cấp cây giống không hiệu quả. Xin cấp vốn để bà con tự thành lập Hợp tác xã chủ động lai tạo giống.",
    quetTrai: { text: "Từ Chối (-Nông, +Doanh)", effect: { congNhan: 0, nongDan: -20, triThuc: -10, kinhTe: 15 } },
    quetPhai: { text: "Đồng Ý (+Nông, +Trí)", effect: { congNhan: 0, nongDan: 25, triThuc: 15, kinhTe: -15 } },
    trietLy: "Trao cần câu thay vì con cá, giải phóng sức mạnh tự chủ của người nông dân."
  },
  {
    id: 23,
    nhanVat: "SINH VIÊN ĐẠI HỌC",
    cauHoi: "Mức học phí đại học tăng chóng mặt. Yêu cầu phong tỏa việc tăng học phí để con em lao động nghèo có cơ hội học tập.",
    quetTrai: { text: "Từ Chối (-Công, -Nông, +Doanh)", effect: { congNhan: -20, nongDan: -20, triThuc: 10, kinhTe: 20 } },
    quetPhai: { text: "Phong Tỏa (+Công, +Nông, -Doanh)", effect: { congNhan: 20, nongDan: 15, triThuc: -10, kinhTe: -25 } },
    trietLy: "Tri thức nếu bị rào cản tài chính sẽ chỉ là đặc quyền của tinh hoa, làm méo mó cấu trúc giai cấp."
  },
  {
    id: 24,
    nhanVat: "QUỸ ĐẦU TƯ TƯ NHÂN",
    cauHoi: "Đề nghị cổ phần hóa hoàn toàn Tập đoàn Điện lực và Giao thông thiết yếu. Cam kết sẽ hiệu quả hơn nhà nước quản lý.",
    quetTrai: { text: "Từ Chối (+Công, -Doanh)", effect: { congNhan: 15, nongDan: 10, triThuc: 0, kinhTe: -25 } },
    quetPhai: { text: "Cổ Phần Hóa (-Công, +Doanh)", effect: { congNhan: -25, nongDan: -15, triThuc: 5, kinhTe: 35 } },
    trietLy: "Một số huyết mạch quốc gia phải nằm trong tay nhà nước để đảm bảo tính định hướng XHCN."
  },
  {
    id: 25,
    nhanVat: "HỘI KỸ SƯ CNTT",
    cauHoi: "Xin phép triển khai mạng 6G tự chủ do người Việt hoàn toàn làm chủ công nghệ, cần ngân sách vô cùng khổng lồ.",
    quetTrai: { text: "Hoãn Tạm (-Trí, +Doanh)", effect: { congNhan: 0, nongDan: 0, triThuc: -20, kinhTe: 20 } },
    quetPhai: { text: "Đầu Tư Cấp (+Trí, -Doanh)", effect: { congNhan: 10, nongDan: 10, triThuc: 30, kinhTe: -30 } },
    trietLy: "Độc lập công nghệ là nền tảng tối cao của an ninh và phát triển quốc gia thời hiện đại."
  },
  {
    id: 26,
    nhanVat: "CHỦ ĐIỀN TRANG LỚN",
    cauHoi: "Yêu cầu bãi bỏ hạn điền, cho phép tích tụ ruộng đất không giới hạn để làm đại công nghiệp nông nghiệp.",
    quetTrai: { text: "Giữ Hạn Điền (+Nông, -Doanh)", effect: { congNhan: 0, nongDan: 25, triThuc: -5, kinhTe: -20 } },
    quetPhai: { text: "Thả Nổi Hạn Điền (-Nông, +Doanh)", effect: { congNhan: -10, nongDan: -30, triThuc: 10, kinhTe: 30 } },
    trietLy: "Tích tụ ruộng đất sai hướng sẽ tái sinh giai cấp địa chủ, đẩy nông dân mất đất đi làm thuê."
  },
  {
    id: 27,
    nhanVat: "LIÊN ĐOÀN VẬN TẢI",
    cauHoi: "Giá xăng dầu thế giới bất ngờ chạm đáy, có nên trích lập quỹ bình ổn mạnh tay để đề phòng tương lai?",
    quetTrai: { text: "Thả Theo Thị Trường (+Doanh, -Công)", effect: { congNhan: 15, nongDan: 10, triThuc: 0, kinhTe: 20 } },
    quetPhai: { text: "Trích Quỹ Khủng (-Doanh, +Công)", effect: { congNhan: -15, nongDan: -10, triThuc: 0, kinhTe: -20 } },
    trietLy: "Kinh tế thị trường định hướng XHCN là sự kết hợp nhịp nhàng giữa bàn tay vô hình và hữu hình."
  },
  {
    id: 28,
    nhanVat: "BỘ KẾ HOẠCH ĐẦU TƯ",
    cauHoi: "Đề xuất mở đặc khu kinh tế, cho phép cờ bạc trực tuyến và ưu đãi ngập tràn để hút vốn ngoại.",
    quetTrai: { text: "Từ Chối (+Công, +Trí, -Doanh)", effect: { congNhan: 15, nongDan: 10, triThuc: 20, kinhTe: -30 } },
    quetPhai: { text: "Mở Đặc Khu (-Công, -Trí, +Doanh)", effect: { congNhan: -20, nongDan: -10, triThuc: -25, kinhTe: 40 } },
    trietLy: "Lợi ích kinh tế phải đặt trong sự phát triển bền vững của đạo đức và bản sắc văn hóa dân tộc."
  },
  {
    id: 29,
    nhanVat: "TẬP ĐOÀN CÔNG NGHIỆP",
    cauHoi: "Robot AI đang làm thay công việc của hàng triệu lao động phổ thông. Cần đánh 'Thuế Robot' để hỗ trợ người thất nghiệp?",
    quetTrai: { text: "Không Đánh Thuế (-Công, +Doanh)", effect: { congNhan: -30, nongDan: -10, triThuc: 15, kinhTe: 25 } },
    quetPhai: { text: "Đánh Thuế Robot (+Công, -Doanh)", effect: { congNhan: 30, nongDan: 10, triThuc: -15, kinhTe: -25 } },
    trietLy: "Khi máy móc cướp đi sinh kế, xã hội phải có cơ chế tái phân phối lợi nhuận từ tự động hóa."
  },
  {
    id: 30,
    nhanVat: "TRUNG TÂM KHỞI NGHIỆP",
    cauHoi: "Thanh niên nông thôn ồ ạt bỏ lên thành phố làm công nhân. Có nên cấp quỹ tỷ đô hỗ trợ thanh niên khởi nghiệp tại quê hương?",
    quetTrai: { text: "Từ Chối (-Nông, +Doanh)", effect: { congNhan: 10, nongDan: -25, triThuc: 0, kinhTe: 15 } },
    quetPhai: { text: "Cấp Quỹ (+Nông, -Công, -Doanh)", effect: { congNhan: -10, nongDan: 30, triThuc: 20, kinhTe: -20 } },
    trietLy: "Ly nông bất ly hương. Đưa sức vóc tuổi trẻ về kiến thiết quê hương là giữ vững nền móng đại đoàn kết."
  }
];

// Các lý do trò chơi kết thúc (Game Over) mới
export const deathReasons = {
  congNhan: {
    low: "Mất Định Hướng: Công nhân bị bóc lột kiệt quệ, đời sống thảm hại. Các cuộc đình công làm đứt gãy hoàn toàn cuỗi cung ứng sản xuất.",
    high: "Phân Phân Hóa Đỏ: Số ít nhóm lao động tự đẩy mình lên thành đặc quyền, lấn át nhà nước, làm loạn hệ thống quản trị chung."
  },
  nongDan: {
    low: "Bần Cùng Hóa Khắc Nghiệt: Nông dân chán nản bỏ ruộng, nông thôn hoang tàn. An ninh lương thực sụp đổ, bạo loạn diễn ra khắp nơi.",
    high: "Tái Sinh Địa Chủ: Quá độ tích tụ ruộng đất sai hướng tạo ra tầng lớp địa chủ kiểu mới, bòn rút mồ hôi của chính người làm nông."
  },
  triThuc: {
    low: "Tụt Hậu Công Nghệ: Não chảy máu ra nước ngoài. Trí thức bất mãn. Đất nước rớt lại vĩnh viễn trong kỷ nguyên 4.0 vì mù quáng công nghệ.",
    high: "Độc Tài Học Thuật: Tầng lớp tinh hoa học thuật thu mình vào tháp ngà, coi thường quần chúng, thao túng chính sách trục lợi riêng."
  },
  kinhTe: {
    low: "Kiệt Quệ Vốn Liếng: Doanh nghiệp trong nước phá sản dây chuyền. Nền kinh tế khép kín đưa quốc gia trở lại thời kỳ bao cấp đói nghèo.",
    high: "Tư Bản Lũng Đoạn: Các đại tài phiệt thao túng toàn bộ hệ thống chính trị và kinh tế, phân hóa giàu nghèo sâu sắc. Chệch hướng XHCN!"
  }
};
