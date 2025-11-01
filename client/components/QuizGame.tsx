import { useState } from "react";
import { CheckCircle, XCircle, RotateCcw, Trophy } from "lucide-react";

interface Question {
  id: number;
  level: string;
  text: string;
  options: string[];
  correct: number;
  hint?: string;
}

const quizQuestions: Question[] = [
  {
    id: 1,
    level: "Dễ",
    text: "Lợi ích kinh tế là gì?",
    options: [
      "Lợi ích tinh thần của con người",
      "Lợi ích vật chất đạt được qua hoạt động kinh tế",
      "Lợi ích chính trị",
      "Lợi ích văn hóa",
    ],
    correct: 1,
  },
  {
    id: 2,
    level: "Dễ",
    text: "Lợi ích kinh tế là động lực trực tiếp của...",
    options: ["Văn hóa xã hội", "Phát triển kinh tế – xã hội", "Chính trị – quốc phòng", "Toàn cầu hóa"],
    correct: 1,
  },
  {
    id: 3,
    level: "Dễ",
    text: "Chủ thể của quan hệ lợi ích kinh tế gồm:",
    options: [
      "Nhà nước – doanh nghiệp – người lao động",
      "Doanh nghiệp – ngân hàng – người dân",
      "Nhà nước – công an – quân đội",
      "Người tiêu dùng – thương nhân – nhà đầu tư nước ngoài",
    ],
    correct: 0,
  },
  {
    id: 4,
    level: "Dễ",
    text: "Nguyên nhân nào không gây ra mâu thuẫn lợi ích?",
    options: [
      "Khác biệt về mục tiêu và địa vị",
      "Chính sách phân phối thu nhập công bằng",
      "Hội nhập quốc tế",
      "Cạnh tranh thị trường",
    ],
    correct: 1,
  },
  {
    id: 5,
    level: "Dễ",
    text: "Mối quan hệ giữa các lợi ích trong xã hội có tính chất:",
    options: ["Độc lập, tách biệt", "Thống nhất và mâu thuẫn", "Chỉ thống nhất", "Chỉ mâu thuẫn"],
    correct: 1,
  },
  {
    id: 6,
    level: "Trung bình",
    text: "Nhà nước điều hòa lợi ích thông qua chính sách nào?",
    options: [
      "Chính sách dân số",
      "Chính sách ngoại giao",
      "Chính sách thuế, tiền lương, phúc lợi",
      "Chính sách môi trường",
    ],
    correct: 2,
  },
  {
    id: 7,
    level: "Trung bình",
    text: "Lợi ích cá nhân là gì?",
    options: [
      "Lợi ích của toàn xã hội",
      "Lợi ích của từng người trong quá trình sản xuất, kinh doanh",
      "Lợi ích của doanh nghiệp",
      "Lợi ích của cộng đồng",
    ],
    correct: 1,
  },
  {
    id: 8,
    level: "Trung bình",
    text: "Vai trò của Nhà nước trong việc đảm bảo hài hòa lợi ích là:",
    options: [
      "Trung gian điều tiết và định hướng",
      "Tham gia cạnh tranh thị trường",
      "Giữ lợi ích riêng cho khu vực công",
      "Không can thiệp",
    ],
    correct: 0,
  },
  {
    id: 9,
    level: "Trung bình",
    text: "Chính sách nào thể hiện vai trò Nhà nước trong bảo vệ lợi ích hợp pháp?",
    options: [
      "Xây dựng pháp luật và môi trường kinh doanh ổn định",
      "Ưu tiên cho nhóm lợi ích",
      "Giảm thuế cho doanh nghiệp lớn",
      "Giảm lương người lao động",
    ],
    correct: 0,
  },
  {
    id: 10,
    level: "Khó",
    text: "Vì sao nói 'lợi ích kinh tế vừa là động lực, vừa là nguồn gốc của mâu thuẫn'?",
    options: [
      "Luôn gây mâu thuẫn cho xã hội",
      "Khi phân bổ công bằng → phát triển; khi bất bình đẳng → mâu thuẫn",
      "Không có liên quan gì",
      "Chỉ là động lực, không phải mâu thuẫn",
    ],
    correct: 1,
    hint: "Xem xét hai trường hợp: phân bổ công bằng vs bất bình đẳng",
  },
  {
    id: 11,
    level: "Khó",
    text: "Trong nền kinh tế thị trường định hướng XHCN, lợi ích nào đóng vai trò định hướng bao trùm nhất?",
    options: ["Lợi ích cá nhân", "Lợi ích tập thể", "Lợi ích xã hội", "Lợi ích doanh nghiệp"],
    correct: 2,
  },
  {
    id: 12,
    level: "Khó",
    text: "Nếu lợi ích cá nhân vượt quá giới hạn lợi ích chung, hậu quả là gì?",
    options: [
      "Xã hội phát triển nhanh hơn",
      "Nảy sinh bất công, mâu thuẫn, lợi ích nhóm",
      "Giảm thu nhập cá nhân",
      "Không ảnh hưởng gì",
    ],
    correct: 1,
  },
  {
    id: 13,
    level: "Khó",
    text: "Câu nào thể hiện đúng bản chất của lợi ích tập thể?",
    options: [
      "Cầu nối giữa cá nhân và xã hội",
      "Mục tiêu riêng của tổ chức",
      "Chỉ mang lợi ích vật chất",
      "Không liên quan đến phát triển",
    ],
    correct: 0,
  },
  {
    id: 14,
    level: "Khó",
    text: "Nhà nước cần làm gì để ngăn ngừa quan hệ lợi ích tiêu cực?",
    options: [
      "Khoán trắng cho doanh nghiệp",
      "Kiểm soát tham nhũng và lợi ích nhóm",
      "Giảm vai trò quản lý",
      "Bỏ chính sách phúc lợi",
    ],
    correct: 1,
  },
  {
    id: 15,
    level: "Khó",
    text: "Lợi ích nào là tổng hợp của các lợi ích khác trong xã hội?",
    options: ["Lợi ích cá nhân", "Lợi ích tập thể", "Lợi ích xã hội", "Lợi ích tài chính"],
    correct: 2,
  },
];

interface Answer {
  questionId: number;
  selectedOption: number | null;
}

export default function QuizGame() {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);

  const filteredQuestions = selectedDifficulty
    ? quizQuestions.filter((q) => q.level === selectedDifficulty)
    : [];

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = {
      questionId: currentQuestion,
      selectedOption: optionIndex,
    };
    setAnswers(newAnswers);
    setShowResult(true);
  };

  const handleNext = () => {
    if (currentQuestion < filteredQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowResult(false);
    } else {
      setQuizFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
    setQuizFinished(false);
  };

  const handleSelectDifficulty = (difficulty: string) => {
    setSelectedDifficulty(difficulty);
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
    setQuizFinished(false);
  };

  const calculateScore = () => {
    let correct = 0;
    answers.forEach((answer) => {
      if (answer.selectedOption === filteredQuestions[answer.questionId]?.correct) {
        correct++;
      }
    });
    return correct;
  };

  const getPoints = (level: string) => {
    switch (level) {
      case "Dễ":
        return 5;
      case "Trung bình":
        return 10;
      case "Khó":
        return 15;
      default:
        return 0;
    }
  };

  const calculateTotalPoints = () => {
    let points = 0;
    answers.forEach((answer) => {
      const question = filteredQuestions[answer.questionId];
      if (question && answer.selectedOption === question.correct) {
        points += getPoints(question.level);
      }
    });
    return points;
  };

  const getDifficultyColor = (level: string) => {
    switch (level) {
      case "Dễ":
        return "bg-green-100 dark:bg-green-950 text-green-800 dark:text-green-100";
      case "Trung bình":
        return "bg-yellow-100 dark:bg-yellow-950 text-yellow-800 dark:text-yellow-100";
      case "Khó":
        return "bg-red-100 dark:bg-red-950 text-red-800 dark:text-red-100";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  if (!selectedDifficulty) {
    return (
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="p-10 border-2 border-primary text-center rounded-2xl bg-white shadow-xl">
          <div className="mb-10">
            <h2 className="text-5xl font-bold text-primary mb-4">Chọn Mức Độ Thử Thách</h2>
            <p className="text-xl text-foreground/70 mb-2">Bạn muốn thử thách mức độ nào?</p>
            <p className="text-sm text-foreground/50">Mỗi mức độ có 5 câu hỏi với số điểm khác nhau</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <button
              onClick={() => handleSelectDifficulty("Dễ")}
              className="p-10 rounded-2xl border-3 border-green-400 bg-gradient-to-br from-green-50 to-green-100 hover:shadow-2xl transition-all transform hover:scale-105 hover:border-green-500"
            >
              <div className="text-6xl mb-6">🟢</div>
              <h3 className="text-3xl font-bold text-green-800 mb-3">Dễ</h3>
              <p className="text-green-700 mb-4 font-semibold">5 câu hỏi</p>
              <p className="text-sm text-green-600 font-bold">⭐ 5 điểm/câu</p>
              <p className="text-xs text-green-600 mt-2">Tối đa: 25 điểm</p>
            </button>

            <button
              onClick={() => handleSelectDifficulty("Trung bình")}
              className="p-10 rounded-2xl border-3 border-amber-400 bg-gradient-to-br from-amber-50 to-amber-100 hover:shadow-2xl transition-all transform hover:scale-105 hover:border-amber-500"
            >
              <div className="text-6xl mb-6">🟡</div>
              <h3 className="text-3xl font-bold text-amber-800 mb-3">Trung Bình</h3>
              <p className="text-amber-700 mb-4 font-semibold">5 câu hỏi</p>
              <p className="text-sm text-amber-600 font-bold">⭐⭐ 10 điểm/câu</p>
              <p className="text-xs text-amber-600 mt-2">Tối đa: 50 điểm</p>
            </button>

            <button
              onClick={() => handleSelectDifficulty("Khó")}
              className="p-10 rounded-2xl border-3 border-red-400 bg-gradient-to-br from-red-50 to-red-100 hover:shadow-2xl transition-all transform hover:scale-105 hover:border-red-500"
            >
              <div className="text-6xl mb-6">🔴</div>
              <h3 className="text-3xl font-bold text-red-800 mb-3">Khó</h3>
              <p className="text-red-700 mb-4 font-semibold">5 câu hỏi</p>
              <p className="text-sm text-red-600 font-bold">⭐⭐⭐ 15 điểm/câu</p>
              <p className="text-xs text-red-600 mt-2">Tối đa: 75 điểm</p>
            </button>
          </div>

          <p className="text-sm text-foreground/50 mt-10">💡 Gợi ý: Bắt đầu từ mức Dễ để hiểu rõ kiến thức cơ bản!</p>
        </div>
      </div>
    );
  }

  if (quizFinished) {
    const score = calculateScore();
    const totalPoints = calculateTotalPoints();
    const percentage = Math.round((score / filteredQuestions.length) * 100);

    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="p-10 text-center border-2 border-primary rounded-2xl bg-gradient-to-br from-white to-primary/5 shadow-xl">
          <div className="flex justify-center mb-8">
            <Trophy className="w-20 h-20 text-accent animate-bounce" />
          </div>
          <h2 className="text-5xl font-bold mb-10 text-primary">Kết Quả</h2>
          <div className="space-y-6 mb-10">
            <div className="text-8xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{percentage}%</div>
            <div className="text-2xl text-foreground font-bold">
              Bạn trả lời đúng{" "}
              <span className="text-secondary font-extrabold">
                {score}/{filteredQuestions.length}
              </span>{" "}
              câu
            </div>
            <div className="text-2xl font-bold">
              Tổng điểm: <span className="text-primary text-3xl">{totalPoints}</span> điểm 🎯
            </div>
            <div className="text-lg font-semibold text-foreground/60">Mức độ: <span className="text-primary font-bold">{selectedDifficulty}</span></div>
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border-2 border-primary/30 p-8 rounded-xl mb-10">
            {percentage >= 80 && (
              <p className="text-xl font-bold text-primary">🌟 Xuất sắc! Bạn hiểu rõ về lợi ích kinh tế!</p>
            )}
            {percentage >= 60 && percentage < 80 && (
              <p className="text-xl font-bold text-secondary">✓ Rất tốt! Bạn nắm vững kiến thức cơ bản.</p>
            )}
            {percentage >= 40 && percentage < 60 && (
              <p className="text-xl font-bold text-accent">💪 Khá tốt! Hãy ôn lại các phần chưa rõ.</p>
            )}
            {percentage < 40 && (
              <p className="text-xl font-bold text-secondary">
                📚 Cần ôn lại nội dung. Quay lại &quot;Nội Dung&quot; để học thêm!
              </p>
            )}
          </div>

          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={handleRestart}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-primary/90 text-white font-bold hover:shadow-lg transition-all transform hover:scale-105"
            >
              <RotateCcw className="w-5 h-5" />
              Làm Lại
            </button>
            <button
              onClick={() => {
                setSelectedDifficulty(null);
                setCurrentQuestion(0);
                setAnswers([]);
                setShowResult(false);
                setQuizFinished(false);
              }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-primary text-primary font-bold hover:bg-primary/5 transition-all"
            >
              Chọn Mức Độ Khác
            </button>
          </div>
        </div>
      </div>
    );
  }

  const question = filteredQuestions[currentQuestion];
  const currentAnswer = answers[currentQuestion];
  const isAnswered = currentAnswer !== undefined;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-10">
        <div className="flex justify-between items-center mb-6">
          <span className="text-sm font-bold text-primary">
            Câu {currentQuestion + 1}/{filteredQuestions.length}
          </span>
          <span className={`text-sm font-bold px-5 py-2 rounded-full ${getDifficultyColor(selectedDifficulty)}`}>
            {selectedDifficulty === "Dễ" && "🟢"} {selectedDifficulty === "Trung bình" && "🟡"}
            {selectedDifficulty === "Khó" && "🔴"} {selectedDifficulty} ({getPoints(selectedDifficulty)} điểm)
          </span>
        </div>
        <div className="w-full bg-primary/15 rounded-full h-4 overflow-hidden">
          <div
            className="bg-gradient-to-r from-primary to-secondary h-4 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / filteredQuestions.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="p-10 border-2 border-primary/15 rounded-2xl bg-white shadow-lg">
        <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-primary leading-relaxed">{question.text}</h2>

        <div className="space-y-4 mb-10">
          {question.options.map((option, index) => {
            const isCorrect = index === question.correct;
            const isSelected = currentAnswer?.selectedOption === index;
            const showCorrect = showResult && isCorrect;
            const showIncorrect = showResult && isSelected && !isCorrect;

            return (
              <button
                key={index}
                onClick={() => !isAnswered && handleAnswer(index)}
                disabled={isAnswered}
                className={`w-full p-5 text-left rounded-xl border-2 transition-all font-medium text-lg ${
                  showCorrect
                    ? "border-green-500 bg-green-100 text-green-900"
                    : showIncorrect
                      ? "border-red-500 bg-red-100 text-red-900"
                      : isSelected
                        ? "border-primary bg-primary/15 text-foreground"
                        : "border-primary/20 bg-white text-foreground hover:border-primary hover:bg-primary/5"
                } ${isAnswered ? "cursor-default" : "cursor-pointer"}`}
              >
                <div className="flex items-center justify-between">
                  <span>{option}</span>
                  {showCorrect && <CheckCircle className="w-6 h-6 text-green-600" />}
                  {showIncorrect && <XCircle className="w-6 h-6 text-red-600" />}
                </div>
              </button>
            );
          })}
        </div>

        {showResult && (
          <div
            className={`p-6 rounded-xl mb-10 border-l-4 ${
              isAnswered && currentAnswer?.selectedOption === question.correct
                ? "bg-green-100 border-l-green-500"
                : "bg-red-100 border-l-red-500"
            }`}
          >
            {currentAnswer?.selectedOption === question.correct ? (
              <p className="text-green-900 font-bold text-lg">✓ Chính xác! Rất tốt!</p>
            ) : (
              <div className="space-y-3">
                <p className="text-red-900 font-bold text-lg">✗ Sai rồi!</p>
                <p className="text-red-800 text-base">
                  Đáp án đúng là: <span className="font-bold">{question.options[question.correct]}</span>
                </p>
                {question.hint && (
                  <p className="text-red-800 text-base">💡 Gợi ý: {question.hint}</p>
                )}
              </div>
            )}
          </div>
        )}

        {isAnswered && (
          <button
            onClick={handleNext}
            className="w-full px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-primary/90 text-white font-bold text-lg hover:shadow-lg transition-all"
          >
            {currentQuestion === filteredQuestions.length - 1 ? "🏆 Xem Kết Quả" : "Câu Tiếp Theo →"}
          </button>
        )}
      </div>
    </div>
  );
}
