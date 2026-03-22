import { motion } from 'framer-motion';

const BackgroundLayer = () => {
  return (
    <div className="historical-bg-container">
      {/* Lớp nền đỏ cung đình */}
      <div className="imperial-red-gradient"></div>

      {/* Rồng Thời Lý - Bên trái (Bay lên xuống nhẹ) */}
      <motion.div 
        className="floating-dragon dragon-left"
        animate={{ 
          y: [0, -20, 0],
          rotate: [-2, 2, -2]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <svg viewBox="0 0 200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Stylized Ly Dragon Path - Simplified for Performance/Art */}
          <path d="M100 50C120 70 80 100 100 130C120 160 80 190 100 220C120 250 80 280 100 310" stroke="rgba(255, 215, 0, 0.15)" strokeWidth="4" strokeLinecap="round"/>
          <circle cx="100" cy="50" r="10" fill="rgba(255, 215, 0, 0.2)"/>
        </svg>
      </motion.div>

      {/* Rồng Thời Lý - Bên phải */}
      <motion.div 
        className="floating-dragon dragon-right"
        animate={{ 
          y: [0, 20, 0],
          rotate: [2, -2, 2]
        }}
        transition={{ 
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <svg viewBox="0 0 200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50C80 70 120 100 100 130C80 160 120 190 100 220C80 250 120 280 100 310" stroke="rgba(255, 215, 0, 0.15)" strokeWidth="4" strokeLinecap="round"/>
          <circle cx="100" cy="50" r="10" fill="rgba(255, 215, 0, 0.2)"/>
        </svg>
      </motion.div>

      {/* Ngôi sao Trống Đồng Đông Sơn - Trung tâm (Xoay rất chậm) */}
      <motion.div 
        className="dong-son-star"
        animate={{ rotate: 360 }}
        transition={{ 
          duration: 180,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="250" cy="250" r="240" stroke="rgba(212, 175, 55, 0.1)" strokeWidth="1"/>
          {/* Central Star Motif */}
          {[...Array(12)].map((_, i) => (
            <path 
              key={i}
              d="M250 100 L260 240 L250 250 L240 240 Z" 
              fill="rgba(212, 175, 55, 0.1)"
              transform={`rotate(${i * 30} 250 250)`}
            />
          ))}
          <circle cx="250" cy="250" r="40" fill="rgba(212, 175, 55, 0.05)" stroke="rgba(212, 175, 55, 0.1)" strokeWidth="2"/>
        </svg>
      </motion.div>

      {/* Họa tiết mây trời/sóng nước mờ ảo */}
      <div className="ancient-pattern-overlay"></div>
    </div>
  );
};

export default BackgroundLayer;
