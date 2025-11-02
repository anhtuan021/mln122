import Header from "../components/Header";
import QuizGame from "../components/QuizGame";

export default function Game() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-white to-background">
      <Header />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="mb-12 flex flex-col items-center text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-primary mb-4">🎮 Trò Chơi Kiểm Tra</h1>
          <p className="text-lg text-foreground/60">
            Kiểm tra lại kiến thức của bạn về lợi ích kinh tế thông qua các câu hỏi ở ba mức độ khác nhau
          </p>
        </div>

        <QuizGame />
      </main>

      {/* Footer */}
      <footer className="border-t-2 border-primary/10 bg-primary/2 mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <p className="text-foreground/60 text-sm font-medium">
            © 2024 Lợi Ích Kinh Tế • Một nền kinh tế thị trường định hướng xã hội chủ nghĩa
          </p>
        </div>
      </footer>
    </div>
  );
}
