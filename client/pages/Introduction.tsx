import Header from "@/components/Header";
import { Link } from "react-router-dom";

const BulletPoint = ({ children }: { children: React.ReactNode }) => (
  <div className="flex gap-3 mb-4">
    <div className="flex-shrink-0 mt-1.5">
      <div className="w-2 h-2 rounded-full bg-primary/60" />
    </div>
    <div className="text-sm sm:text-base text-muted-foreground leading-relaxed">{children}</div>
  </div>
);

export default function Introduction() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Hero Section */}
        <section className="mb-16 sm:mb-24 text-center animate-fade-in">
          <div className="inline-block mb-4">
            <div className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
              Nội Dung Thuyết Trình
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Lợi Ích Kinh Tế và Vai Trò của Nhà Nước
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Tìm hiểu cách lợi ích kinh tế trở thành động lực phát triển chung của xã hội, chứ không là động lực riêng của một nhóm lợi ích
          </p>
        </section>

        {/* Section I - Introduction */}
        <section className="mb-16 sm:mb-24 scroll-mt-20">
          <div className="bg-white rounded-xl border border-border p-6 sm:p-10 shadow-sm hover:shadow-md transition-shadow">
            <div className="animate-fade-up">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary text-xl">
                  🎯
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary">Phần I</p>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Mở Đầu – Đặt Vấn Đề</h2>
                </div>
              </div>
              <div className="pl-0 sm:pl-15">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Trong nền kinh tế thị trường, lợi ích kinh tế là yếu tố chi phối hầu hết các hoạt động của con người.
                </p>
                <BulletPoint>
                  <strong>Khi được phân bổ công bằng và hợp lý,</strong> lợi ích là động lực phát triển, thúc đẩy sáng tạo và tăng trưởng.
                </BulletPoint>
                <BulletPoint>
                  <strong>Nhưng khi bất bình đẳng hoặc bị chiếm dụng,</strong> lợi ích trở thành nguồn gốc của bất công, tham nhũng và mâu thuẫn xã hội.
                </BulletPoint>

                <div className="mt-8 p-4 sm:p-6 bg-primary/5 border border-primary/20 rounded-lg">
                  <p className="font-semibold text-foreground mb-2">👉 Câu hỏi đặt ra:</p>
                  <p className="text-foreground leading-relaxed">
                    Làm sao để lợi ích kinh tế trở thành động lực phát triển chung, chứ không biến thành động lực riêng của một nhóm lợi ích?
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
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 duration-200"
          >
            Xem Nội Dung
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Lợi Ích Kinh Tế - Một nền kinh tế thị trường định hướng xã hội chủ nghĩa
          </p>
        </div>
      </footer>
    </div>
  );
}
