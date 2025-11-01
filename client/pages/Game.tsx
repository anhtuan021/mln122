import Header from "@/components/Header";
import QuizGame from "@/components/QuizGame";

export default function Game() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <Header />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Trò Chơi Kiểm Tra Kiến Thức</h1>
          <p className="text-lg text-muted-foreground">
            Kiểm tra lại kiến thức của bạn về lợi ích kinh tế thông qua các câu hỏi ở ba mức độ khác nhau
          </p>
        </div>

        <QuizGame />
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-slate-50 mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Lợi Ích Kinh Tế - Một nền kinh tế thị trường định hướng xã hội chủ nghĩa
          </p>
        </div>
      </footer>
    </div>
  );
}
