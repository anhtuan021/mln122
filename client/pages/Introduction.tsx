import Header from "@/components/Header";
import { Link } from "react-router-dom";

const BulletPoint = ({ children }: { children: React.ReactNode }) => (
  <div className="flex gap-3 mb-4">
    <div className="flex-shrink-0 mt-1.5">
      <div className="w-2 h-2 rounded-full bg-secondary" />
    </div>
    <div className="text-sm sm:text-base text-foreground/80 leading-relaxed">{children}</div>
  </div>
);

export default function Introduction() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-white to-background">
      <Header />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        {/* Hero Section */}
        <section className="mb-16 sm:mb-24 text-center animate-fade-in">
          <div className="inline-block mb-6">
            <div className="px-5 py-2.5 rounded-full bg-accent/20 text-accent text-sm font-bold tracking-wide">
              🎓 NỘI DUNG THUYẾT TRÌNH
            </div>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary mb-6 leading-tight">
            Lợi Ích Kinh Tế
          </h1>
          <p className="text-lg sm:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed mb-8">
            Và Vai Trò của Nhà Nước
          </p>
          <p className="text-base sm:text-lg text-foreground/60 max-w-2xl mx-auto leading-relaxed">
            Khám phá cách lợi ích kinh tế trở thành động lực phát triển chung của xã hội, chứ không là động lực riêng của một nhóm lợi ích
          </p>
        </section>

        {/* Section I - Introduction */}
        <section className="mb-16 sm:mb-24 scroll-mt-20">
          <div className="p-8 sm:p-12">
            <div className="animate-fade-up">
              <div className="mb-6 flex items-start gap-4">
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-secondary to-secondary/80 text-white text-2xl flex-shrink-0 shadow-md">
                  ⚖️
                </div>
                <div>
                  <p className="text-sm font-bold text-secondary uppercase tracking-wide">Phần I</p>
                  <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-1">Mở Đầu – Đặt Vấn Đề</h2>
                </div>
              </div>
              <div className="pl-0 sm:pl-18 space-y-4">
                <p className="text-foreground/75 text-base leading-relaxed">
                  Trong nền kinh tế thị trường, <strong className="text-primary">lợi ích kinh tế</strong> là yếu tố chi phối hầu hết các hoạt động của con người.
                </p>
                <BulletPoint>
                  <strong>Khi được phân bổ công bằng và hợp lý,</strong> lợi ích là động lực phát triển, thúc đẩy sáng tạo và tăng trưởng.
                </BulletPoint>
                <BulletPoint>
                  <strong>Nhưng khi bất bình đẳng hoặc bị chiếm dụng,</strong> lợi ích trở thành nguồn gốc của bất công, tham nhũng và mâu thuẫn xã hội.
                </BulletPoint>

                <div className="mt-8 p-6 bg-gradient-to-br from-secondary/5 to-accent/5 border-l-4 border-secondary rounded-xl">
                  <p className="font-bold text-secondary mb-3 text-lg">Câu Hỏi Đặt Ra</p>
                  <p className="text-foreground leading-relaxed">
                    Làm sao để lợi ích kinh tế trở thành <strong>động lực phát triển chung</strong>, chứ không biến thành động lực riêng của một nhóm lợi ích?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Button */}
        <section className="mb-20 flex justify-center">
          <Link
            to="/content"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-xl bg-gradient-to-r from-primary to-primary/90 text-white font-bold hover:shadow-2xl transition-all transform hover:scale-105 duration-200 text-lg shadow-lg"
          >
            Khám Phá Nội Dung
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </section>
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
