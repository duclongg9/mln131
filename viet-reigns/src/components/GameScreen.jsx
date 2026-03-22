import { useState, useEffect } from 'react';
import { motion, useAnimation, useMotionValue, useTransform, useMotionValueEvent } from 'framer-motion';

export default function GameScreen({ stats, currentCard, onMakeChoice, score, allianceTurns, onActivateAlliance, khatVong }) {
  const x = useMotionValue(0);
  const controls = useAnimation();
  const [swipeDirection, setSwipeDirection] = useState(null);
  
  // Biến chặn tương tác khi thẻ đang bay ra khỏi màn hình
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  // Hiệu ứng vật lý thẻ bài
  const rotate = useTransform(x, [-200, 200], [-15, 15]);
  const cardOpacity = useTransform(x, [-200, -100, 0, 100, 200], [0, 1, 1, 1, 0]);
  
  // Trạng thái mờ dần của Overlay chữ (BÁC BỎ / PHÊ DUYỆT)
  const leftOverlayOpacity = useTransform(x, [0, -100], [0, 1]);
  const rightOverlayOpacity = useTransform(x, [0, 100], [0, 1]);

  // Lắng nghe sự thay đổi của x để dự báo
  useMotionValueEvent(x, "change", (latest) => {
    if (isAnimatingOut) return; // Khóa dự báo khi đang bay
    if (latest < -20) setSwipeDirection('left');
    else if (latest > 20) setSwipeDirection('right');
    else setSwipeDirection(null);
  });

  // Reset và hiển thị thẻ mới (Tốc độ NHANH HƠN)
  useEffect(() => {
    controls.set({ x: 0, y: 50, scale: 0.9, opacity: 0, rotate: 0 });
    controls.start({ y: 0, scale: 1, opacity: 1, transition: { type: "spring", bounce: 0.3, duration: 0.25 } });
    setIsAnimatingOut(false);
  }, [currentCard, controls]);

  const handleDragEnd = async (event, info) => {
    if (isAnimatingOut) return;
    
    const swipeThreshold = 100;
    
    if (info.offset.x < -swipeThreshold) {
      setIsAnimatingOut(true);
      setSwipeDirection(null);
      // Thời gian bay ra cực nhanh (0.15s)
      await controls.start({ x: -500, opacity: 0, rotate: -30, transition: { duration: 0.15 } });
      onMakeChoice(currentCard.quetTrai.effect);
    } else if (info.offset.x > swipeThreshold) {
      setIsAnimatingOut(true);
      setSwipeDirection(null);
      await controls.start({ x: 500, opacity: 0, rotate: 30, transition: { duration: 0.15 } });
      onMakeChoice(currentCard.quetPhai.effect);
    } else {
      setSwipeDirection(null);
      // Kéo không đủ lực, dragSnapToOrigin tự động đưa thẻ về giữa
    }
  };

  const getPredictiveDotSize = (statKey) => {
    if (!swipeDirection) return 0;
    const effectConfig = swipeDirection === 'left' ? currentCard.quetTrai.effect : currentCard.quetPhai.effect;
    const effectValue = effectConfig[statKey] || 0;
    
    if (effectValue === 0) return 0;
    return Math.abs(effectValue) > 15 ? 12 : 6; 
  };

  const renderStat = (emoji, label, value, statKey) => {
    const isDanger = value <= 15 || value >= 85;
    const dotSize = getPredictiveDotSize(statKey);
    
    return (
      <div className={`stat-item-wrapper ${isDanger ? 'stat-danger' : ''}`} key={statKey}>
        {/* Nhãn cảnh báo khi chỉ số quá cao hoặc quá thấp */}
        {value >= 85 && <div className="stat-warning-label">Quá Mạnh!</div>}
        {value <= 15 && <div className="stat-warning-label">Nguy Cấp!</div>}

        <div 
          className="predictive-dot" 
          style={{ 
            opacity: dotSize > 0 ? 1 : 0, 
            width: `${dotSize}px`, 
            height: `${dotSize}px`,
          }}
        ></div>
        <span className="stat-emoji">{emoji}</span>
        <span className="stat-label" style={{ fontSize: '0.65rem', fontWeight: 'bold', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', marginBottom: '8px' }}>{label}</span>
        <div className="stat-bar-container">
          <div className="stat-bar-fill" style={{ height: `${value}%` }}></div>
        </div>
      </div>
    );
  };

  const isSuperDanger = Object.values(stats).some(v => v <= 15 || v >= 85);
  const currentYear = Math.floor(score / 12) + 1;
  
  // Logic hiển thị Liên Minh
  const isAllianceAvailable = Object.values(stats).every(v => v >= 40 && v <= 60) && allianceTurns === 0;

  return (
    <div className="screen-container">
      {/* Hiệu ứng chớp đỏ khi chỉ số ở mức nguy hiểm */}
      {isSuperDanger && <div className="danger-vignette"></div>}
      
      {/* Cột mốc Niên hiệu (Nằm trong luồng, không đè icon) */}
      <div className="era-badge">Năm thứ {currentYear}</div>

      {/* Thanh Khát Vọng 2045 */}
      <div className="khatvong-container">
        <div className="khatvong-header">
          <span className="khatvong-label">KHÁT VỌNG 2045</span>
          <span className="khatvong-percent">{khatVong}%</span>
        </div>
        <div className="khatvong-bar-bg">
          <div className="khatvong-bar-fill" style={{ width: `${khatVong}%` }}></div>
        </div>
      </div>

      {/* Thông báo trạng thái Liên Minh */}
      {allianceTurns > 0 && (
        <div className="alliance-status">Kỷ Nguyên Tiên Phong: Còn {allianceTurns} Hành động</div>
      )}

      {/* Khung chỉ số */}
      <div className="stats-board">
        {renderStat('🛠️', 'Công Nhân', stats.congNhan, 'congNhan')}
        {renderStat('🌾', 'Nông Dân', stats.nongDan, 'nongDan')}
        {renderStat('🖋️', 'Trí Thức', stats.triThuc, 'triThuc')}
        {renderStat('💼', 'Doanh Nhân', stats.kinhTe, 'kinhTe')}
      </div>

      <div className="card-wrapper">
        {currentCard && (
          <motion.div 
            className="game-card"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.8}
            style={{ x, rotate, opacity: cardOpacity }}
            dragSnapToOrigin={true} // Tự động kéo về
            animate={controls}
            onDragEnd={handleDragEnd}
          >
            <motion.div 
              className="card-overlay overlay-left"
              style={{ opacity: leftOverlayOpacity }}
            >
              Từ Chối
            </motion.div>

            <motion.div 
              className="card-overlay overlay-right"
              style={{ opacity: rightOverlayOpacity }}
            >
              Đồng Ý
            </motion.div>

            <h3 className="character-name">{currentCard.nhanVat}</h3>
            <p className="card-question">{currentCard.cauHoi}</p>
          </motion.div>
        )}
      </div>

      {/* Triết lý mờ ảo hiện dưới thẻ bài */}
      <motion.div 
        className="philosophical-quote"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        key={`quote-${currentCard?.id}`} // Đổi quote sẽ kích hoạt lại animation
      >
        "{currentCard?.trietLy}"
      </motion.div>

      {/* Nút Siêu Liên Minh */}
      {isAllianceAvailable && (
        <button className="btn-alliance" onClick={onActivateAlliance}>
          KÍCH HOẠT LIÊN MINH
        </button>
      )}
    </div>
  );
}
