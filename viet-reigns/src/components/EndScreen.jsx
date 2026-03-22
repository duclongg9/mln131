export default function EndScreen({ isVictory, endMessage, score, highScore, onReset }) {
  const isNewRecord = score > 0 && score === highScore;

  // Xác định Thụy Hiệu (Title) dựa trên lý do thất bại và số điểm
  let title = "ĐỨT GÃY LIÊN MINH";
  if (isVictory) {
    title = "KỶ NGUYÊN ĐỒNG THUẬN";
  } else if (score > 30) {
    title = "LÃNH ĐẠO BẢN LĨNH";
  } else if (score < 5) {
    title = "CHỆCH HƯỚNG TỪ SỚM";
  } else if (endMessage.includes("phân hóa") || endMessage.includes("đặc quyền")) {
    title = "BẤT BÌNH ĐẲNG SÂU SẮC"; // 100 limit
  } else if (endMessage.includes("bỏ lại") || endMessage.includes("kiệt quệ")) {
    title = "BẦN CÙNG HÓA"; // 0 limit
  }

  return (
    <div className={`end-screen-bg ${isVictory ? 'victory' : ''}`}>
      <div className="screen-container flex-col-center" style={{ zIndex: 10 }}>
        
        {/* Phong Hiệu Sau Cùng */}
        <h2 className="end-title-badge">{title}</h2>

        <h1 className={isVictory ? "text-victory" : "text-defeat"} style={{ marginBottom: "30px", fontSize: "2.2rem" }}>
          {isVictory ? "BƯỚC VÀO KỶ NGUYÊN MỚI" : "MẤT ĐỊNH HƯỚNG XHCN"}
        </h1>
        
        <div className="end-card">
          <p className="end-message">{endMessage}</p>
          
          <div className="score-board">
            <p className="score">
              Thời gian tại vị: <strong>{score} tháng</strong>
            </p>
            
            {isNewRecord ? (
              <p className="new-record-anim">
                🌟 Kỷ lục mới! 🌟
              </p>
            ) : (
              <p style={{ color: '#5c3a21', fontSize: '1rem', fontWeight: 'bold', marginTop: '10px' }}>
                Kỷ lục cao nhất: {highScore} tháng
              </p>
            )}
          </div>
        </div>
        
        {score >= 12 && (
          <div style={{ background: 'rgba(0,0,0,0.5)', padding: '15px', borderRadius: '8px', border: '1px solid #ffd700', margin: '0 20px 20px 20px', fontSize: '0.9rem', color: '#fff', textAlign: 'left' }}>
            <p style={{ color: '#ffd700', fontWeight: 'bold', marginBottom: '5px' }}>💡 Bạn có biết?</p>
            <p>Giai cấp công nhân Việt Nam hiện nay tùy chỉ chiếm tỉ lệ nhỏ dân số nhưng lại đóng góp hơn 60% tổng sản phẩm xã hội và 70% ngân sách nhà nước!</p>
          </div>
        )}

        <button className="btn btn-primary" onClick={onReset} style={{ padding: '15px 40px', fontSize: '1.2rem', marginBottom: '15px' }}>
          ĐIỀU HÀNH LẠI
        </button>

        <div style={{ fontSize: '0.8rem', fontStyle: 'italic', color: 'rgba(255,255,255,0.6)', maxWidth: '400px', textAlign: 'center', padding: '0 20px', marginTop: '10px' }}>
          "Đại đoàn kết toàn dân tộc là đường lối chiến lược của cách mạng Việt Nam, là động lực và nguồn lực to lớn trong xây dựng và bảo vệ Tổ quốc." - (Văn kiện Đại hội XIII)
        </div>
      </div>
    </div>
  );
}
