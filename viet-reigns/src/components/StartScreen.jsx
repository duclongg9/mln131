export default function StartScreen({ onStart, highScore }) {
  return (
    <div className="screen-container flex-col-center">
      <h1 className="game-title" style={{ fontSize: '2.8rem' }}>VIỆT NAM<br />Hành Trình Quá Độ</h1>
      <p className="game-subtitle" style={{ color: '#00d2ff' }}>Đoàn kết là sức mạnh. Đứt gãy là thất bại.</p>

      {/* Hiển thị kỷ lục nếu lớn hơn 0 */}
      {highScore > 0 && (
        <div className="high-score-badge" style={{ marginBottom: '20px', color: 'var(--fpt-orange)', fontWeight: 'bold', fontSize: '1.2rem' }}>
          👑 Kỷ lục chèo lái: {highScore} tháng
        </div>
      )}

      <div className="instructions">
        <p>Giữ cán cân lợi ích giữa 4 khối liên minh:</p>
        <p style={{ marginTop: '10px', fontSize: '1.1rem' }}><strong>CÔNG NHÂN | NÔNG DÂN<br />TRÍ THỨC | DOANH NHÂN</strong></p>
        <p style={{ marginTop: '10px', color: '#ffd700', fontStyle: 'italic' }}>* Không để ai bị bỏ lại phía sau (0), cũng không để đặc quyền phân hóa (100).</p>
      </div>

      <button className="btn btn-primary" onClick={onStart}>BẮT ĐẦU ĐIỀU HÀNH</button>
    </div>
  );
}
