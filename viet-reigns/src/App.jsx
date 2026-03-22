import { useState, useEffect, useRef } from 'react';
import { cardsData, deathReasons } from './data/gameData';
import StartScreen from './components/StartScreen';
import GameScreen from './components/GameScreen';
import EndScreen from './components/EndScreen';
import './App.css';
import BackgroundLayer from './components/BackgroundLayer';

// Hàm xáo trộn mảng (Fisher-Yates Shuffle)
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Chuẩn bị âm thanh (Nạp sẵn từ thư mục public/sounds/)
// Các file này cần được người dùng thêm vào thư mục public/sounds/
const swipeAudio = new Audio('/sounds/swipe.mp3');
const successAudio = new Audio('/sounds/success.mp3');

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('start');
  const [stats, setStats] = useState({ congNhan: 50, nongDan: 50, triThuc: 50, kinhTe: 50 });
  const [cardIndex, setCardIndex] = useState(0);

  // State MỚI: Quản lý sức mạnh Liên Minh 6 nhà và Khát Vọng 2045
  const [allianceTurns, setAllianceTurns] = useState(0);
  const [khatVong, setKhatVong] = useState(0);

  const [currentDeck, setCurrentDeck] = useState([]);

  const [isVictory, setIsVictory] = useState(false);
  const [endMessage, setEndMessage] = useState('');
  const [score, setScore] = useState(0);

  // useRef để quản lý nhạc nền không bị re-render
  const bgmRef = useRef(new Audio('/sounds/bgm.mp3'));

  const [highScore, setHighScore] = useState(() => {
    const savedScore = localStorage.getItem('vietReignsHighScore');
    return savedScore ? parseInt(savedScore, 10) : 0;
  });

  // Cấu hình âm thanh
  useEffect(() => {
    bgmRef.current.loop = true;
    bgmRef.current.volume = 1; // Tăng từ 0.3 -> 0.6

    // Tăng âm thanh hiệu ứng
    swipeAudio.volume = 0.8;
    successAudio.volume = 0.9;

    // Cleanup khi đóng app
    return () => {
      bgmRef.current.pause();
    };
  }, []);

  const startGame = () => {
    setStats({ congNhan: 50, nongDan: 50, triThuc: 50, kinhTe: 50 });
    setScore(0);
    setCardIndex(0);
    setAllianceTurns(0);
    setKhatVong(0);

    // Xào bài và đưa vào State
    const newShuffledDeck = shuffleArray(cardsData);
    setCurrentDeck(newShuffledDeck);

    setCurrentScreen('playing');

    // Bật nhạc nền (trình duyệt có thể chặn nếu chưa có tương tác người dùng)
    bgmRef.current.play().catch(e => console.log("Autoplay blocked or audio missing:", e));
  };

  const checkAndUpdateHighScore = (finalScore) => {
    if (finalScore > highScore) {
      setHighScore(finalScore);
      localStorage.setItem('vietReignsHighScore', finalScore.toString());

      // Phát tiếng Ting! chúc mừng phá kỷ lục
      successAudio.currentTime = 0;
      successAudio.play().catch(() => { });
      return true;
    }
    return false;
  };

  const handleChoice = (effect) => {
    // Phát tiếng vuốt thẻ bài
    swipeAudio.currentTime = 0;
    swipeAudio.play().catch(() => { });

    // Xử lý Buff Liên Minh: Chặn toàn bộ điểm trừ
    const appliedEffect = { ...effect };
    if (allianceTurns > 0) {
      for (let key in appliedEffect) {
        if (appliedEffect[key] < 0) appliedEffect[key] = 0; // Negative points are absorbed by the Alliance
      }
      setAllianceTurns(prev => prev - 1); // Giảm dần số lượt Buff
    }

    const newStats = {
      congNhan: stats.congNhan + (appliedEffect.congNhan || 0),
      nongDan: stats.nongDan + (appliedEffect.nongDan || 0),
      triThuc: stats.triThuc + (appliedEffect.triThuc || 0),
      kinhTe: stats.kinhTe + (appliedEffect.kinhTe || 0)
    };

    setStats(newStats);
    const currentScore = score + 1;
    setScore(currentScore);

    // Xử lý Khát Vọng 2045
    const addedKhatVong = appliedEffect.khatVong || 0;
    const newKhatVong = Math.min(100, khatVong + 1 + addedKhatVong);
    setKhatVong(newKhatVong);

    if (newKhatVong >= 100) {
      setIsVictory(true);
      setEndMessage("Bạn đã xuất sắc đưa quốc gia hoàn thành mục tiêu trở thành nước phát triển, có thu nhập cao theo định hướng XHCN!");
      checkAndUpdateHighScore(currentScore);
      bgmRef.current.pause(); // Dừng nhạc nền khi thắng
      setCurrentScreen('end');
      return;
    }

    let gameOverReason = '';
    for (const [key, value] of Object.entries(newStats)) {
      if (value <= 0) gameOverReason = deathReasons[key].low;
      if (value >= 100) gameOverReason = deathReasons[key].high;
    }

    if (gameOverReason) {
      setIsVictory(false);
      setEndMessage(gameOverReason);
      checkAndUpdateHighScore(currentScore);
      bgmRef.current.pause(); // Dừng nhạc nền khi thua
      setCurrentScreen('end');
      return;
    }

    let nextCardIndex = cardIndex + 1;
    let nextDeck = [...currentDeck];

    // Xào lại bài nếu hết
    if (nextCardIndex >= nextDeck.length) {
      nextDeck = shuffleArray(cardsData);
      nextCardIndex = 0;
    }

    // Cơ Chế Mới: Sự trợ giúp mỗi 5 vòng (tháng)
    if (currentScore > 0 && currentScore % 5 === 0) {
      const helperCard = {
        id: `help-${currentScore}`,
        nhanVat: "✨ QUỐC SƯ CỐ VẤN",
        cauHoi: `Bệ hạ đã ráng trụ được ${currentScore} tháng. Lão phu có hai quốc sách đặc biệt để vực dậy triều đình. Ngài muốn tập trung an dân hay củng cố triều chính?`,
        quetTrai: { text: "An Dân (+Công, Nông)", effect: { congNhan: 20, nongDan: 20, triThuc: -5, kinhTe: -5 } },
        quetPhai: { text: "Triều Chính (+Sĩ, Thương)", effect: { congNhan: -5, nongDan: -5, triThuc: 20, kinhTe: 20 } },
        trietLy: "Minh quân không tự mình làm gánh vác tất cả, mà biết mượn sức hiền tài đúng lúc gian nan."
      };
      // Chèn thẻ trợ giúp vào ngay lá bài tiếp theo
      nextDeck.splice(nextCardIndex, 0, helperCard);
    }

    setCurrentDeck(nextDeck);
    setCardIndex(nextCardIndex);
  };

  const stopGame = () => {
    bgmRef.current.pause();
    bgmRef.current.currentTime = 0;
    setCurrentScreen('start');
  };

  const activateAlliance = () => {
    // Chỉ kích hoạt khi đang ở vùng xanh (xử lý logic enable trong GameScreen)
    setAllianceTurns(5); // Buff 5 lượt

    // Tạo 2 thẻ NPC Liên Minh
    const npc1 = {
      id: `npc-nganhang-${score}`,
      nhanVat: "🏦 NHÀ NGÂN HÀNG",
      cauHoi: "Đại đoàn kết là mỏ vàng khởi thủy. Bơm tín dụng cứu trợ thế lực nào đây thưa ngài?",
      quetTrai: { text: "Giới Cần Lao (+Công, Nông)", effect: { congNhan: 25, nongDan: 25, triThuc: 0, kinhTe: 0 } },
      quetPhai: { text: "Giới Tinh Hoa (+Trí, Doanh)", effect: { congNhan: 0, nongDan: 0, triThuc: 25, kinhTe: 25 } },
      trietLy: "Ngân hàng không chỉ là nơi giữ tiền, mà là huyết mạch khơi thông nguồn lực cốt lõi quốc gia."
    };

    const npc2 = {
      id: `npc-phanphoi-${score}`,
      nhanVat: "🚢 NHÀ PHÂN PHỐI",
      cauHoi: "Ký kết Hiệp định Tự do Thương mại (FTA) để hàng hóa nông nghiệp và công nghệ vươn ra biển lớn?",
      quetTrai: { text: "Ký Kết Toàn Diện (Tất Cả +15)", effect: { congNhan: 15, nongDan: 15, triThuc: 15, kinhTe: 15, khatVong: 5 } },
      quetPhai: { text: "Ký Kết Toàn Diện (Tất Cả +15)", effect: { congNhan: 15, nongDan: 15, triThuc: 15, kinhTe: 15, khatVong: 5 } },
      trietLy: "Độc lập tự chủ không đồng nghĩa khép kín. Vươn ra biển lớn là cách tốt nhất bảo vệ nền độc lập."
    };

    const nextDeck = [...currentDeck];
    nextDeck.splice(cardIndex + 1, 0, npc1, npc2);
    setCurrentDeck(nextDeck);

    successAudio.currentTime = 0;
    successAudio.play().catch(() => { });
  };

  return (
    <div className="app-background">
      <BackgroundLayer />
      {currentScreen === 'start' && (
        <StartScreen onStart={startGame} highScore={highScore} />
      )}

      {currentScreen === 'playing' && currentDeck.length > 0 && (
        <GameScreen
          stats={stats}
          currentCard={currentDeck[cardIndex]}
          onMakeChoice={handleChoice}
          score={score}
          allianceTurns={allianceTurns}
          onActivateAlliance={activateAlliance}
          khatVong={khatVong}
        />
      )}

      {currentScreen === 'end' && (
        <EndScreen
          isVictory={isVictory}
          endMessage={endMessage}
          score={score}
          highScore={highScore}
          onReset={stopGame}
        />
      )}
    </div>
  );
}
