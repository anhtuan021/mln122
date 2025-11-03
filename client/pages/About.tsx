import Header from "../components/Header";

const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => (
  <div className="p-8">
    <div className="text-5xl mb-4">{icon}</div>
    <h3 className="text-2xl font-bold text-primary mb-3">{title}</h3>
    <p className="text-foreground/70 leading-relaxed">{description}</p>
  </div>
);

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-white to-background">
      <Header />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        {/* Hero Section */}
        <section className="mb-20 text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary mb-6">
            Về Chúng Tôi
          </h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Khám phá tầm nhìn, giá trị và công cụ đằng sau website{" "}
            <strong>"Lợi ích kinh tế"</strong>
          </p>
        </section>

        {/* Mission Section */}
        <section className="mb-20 p-10 sm:p-14">
          <h2 className="text-4xl font-bold text-primary mb-8 flex items-center gap-3">
            🎯 Sứ Mệnh
          </h2>
          <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
            <p>
              Nhóm chúng em thực hiện website{" "}
              <strong className="text-primary">
                "Lợi ích kinh tế – Động lực phát triển hay nguồn gốc của mâu
                thuẫn xã hội?"
              </strong>{" "}
              nhằm giúp người xem hiểu rõ hơn về{" "}
              <strong className="text-primary">
                bản chất của lợi ích kinh tế
              </strong>{" "}
              trong nền kinh tế thị trường định hướng xã hội chủ nghĩa Việt Nam.
            </p>
            <p>
              Website không chỉ trình bày lý thuyết một cách trực quan mà còn{" "}
              <strong className="text-primary">
                minh họa các mối quan hệ lợi ích bằng sơ đồ, biểu đồ và mô hình
                tương tác
              </strong>
              , giúp người xem dễ dàng hình dung vai trò của Nhà nước trong điều
              tiết và hài hòa các lợi ích.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-primary mb-10 flex items-center gap-3">
            ✨ Tính Năng
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard
              icon="🎨"
              title="Giao Diện Tương Tác"
              description="Trình bày kiến thức qua giao diện web tương tác, cuộn mượt và trực quan, dễ tiếp cận với mọi người."
            />
            <FeatureCard
              icon="📚"
              title="Kiến Thức Chính Xác"
              description="Các kiến thức được tổng hợp từ các nguồn uy tín, đảm bảo tính chính xác và cập nhật về giáo trình kinh tế chính trị Mác – Lênin."
            />
            <FeatureCard
              icon="🎮"
              title="Quiz Trắc Nghiệm"
              description="Tích hợp quiz trắc nghiệm với 3 mức độ khác nhau để củng cố kiến thức một cách vui vẻ."
            />
          </div>
        </section>

        {/* Tools & Support Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-primary mb-10 flex items-center gap-3">
            🛠️ Công Cụ AI Hỗ Trợ
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* ChatGPT Card */}
            <div className="p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-5xl">🤖</div>
                <div>
                  <h3 className="text-2xl font-bold text-primary">ChatGPT</h3>
                </div>
              </div>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Hỗ trợ <strong>tạo code</strong>, <strong>tối ưu logic</strong>,{" "}
                <strong>kiểm tra lỗi</strong>,{" "}
                <strong>viết mô tả tài liệu</strong> và{" "}
                <strong>phát triển nội dung học thuật</strong>.
              </p>

              <div className="bg-primary/5 p-6 rounded-xl border border-primary/20">
                <p className="text-sm text-foreground/70 mb-2">
                  <strong>Ví dụ — Tạo trò chơi trắc nghiệm QuizGame</strong>
                </p>
                <p className="text-sm mb-2">
                  <strong>PROMPT:</strong> Tạo React component tên{" "}
                  <code>QuizGame</code> hiển thị câu hỏi trắc nghiệm nhiều lựa
                  chọn (MCQ), có chọn mức độ (“Dễ”, “Trung bình”, “Khó”), hiển
                  thị điểm số, kết quả và lời khen.
                </p>
                <p className="text-sm mb-2">
                  <strong>KẾT QUẢ AI:</strong> Sinh mã component đầy đủ gồm danh
                  sách câu hỏi, logic tính điểm, hiệu ứng màu cho đúng/sai,
                  thanh tiến trình và phần tổng kết kết quả.
                </p>
                <p className="text-sm">
                  <strong>CHỈNH SỬA:</strong> Tinh chỉnh bố cục và tối ưu logic
                  tính điểm theo độ khó.
                </p>
              </div>
            </div>

            {/* Builder.io Card */}
            <div className="p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-5xl">⚡</div>
                <div>
                  <h3 className="text-2xl font-bold text-secondary">
                    Builder.io
                  </h3>
                </div>
              </div>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Hỗ trợ <strong>tạo UI</strong>, <strong>thiết kế layout</strong>
                , <strong>xem preview trực quan</strong> và{" "}
                <strong>xuất mã HTML/CSS/React</strong> giúp nhóm tối ưu giao
                diện nhanh hơn.
              </p>

              <div className="bg-secondary/5 p-6 rounded-xl border border-secondary/20">
                <p className="text-sm text-foreground/70 mb-2">
                  <strong>Ví dụ — Thiết kế giao diện trang Quiz</strong>
                </p>
                <p className="text-sm mb-2">
                  <strong>PROMPT:</strong> Thiết kế trang trắc nghiệm có màu
                  nhẹ, bố cục 3 phần (câu hỏi, lựa chọn, nút nộp), responsive và
                  phù hợp với nội dung giáo dục.
                </p>
                <p className="text-sm mb-2">
                  <strong>KẾT QUẢ AI:</strong> Sinh layout responsive với grid,
                  màu pastel dễ đọc, khung lựa chọn có hiệu ứng hover và shadow.
                </p>
                <p className="text-sm">
                  <strong>CHỈNH SỬA:</strong> Thêm thanh tiến trình, chỉnh
                  font-size phù hợp, đổi màu chủ đề, bổ sung biểu tượng từ{" "}
                  <code>lucide-react</code>
                  và căn giữa toàn bộ phần quiz trên các thiết bị.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-20 p-10 sm:p-14">
          <h2 className="text-4xl font-bold text-primary mb-10 flex items-center gap-3">
            💎 Giá Trị
          </h2>

          <div className="space-y-8">
            <div>
              <p className="text-lg text-foreground/80 leading-relaxed">
                AI giúp tạo code nhanh hơn, nhưng con người mới là người quyết
                định logic, tối ưu hiệu năng và biến ý tưởng thành sản phẩm thực
                tế. Mọi dòng code đều có dấu ấn teamwork.
              </p>
            </div>

            <ul className="list-disc pl-8 text-foreground/80 space-y-3">
              <li>
                <strong className="text-primary">Logic & Architecture:</strong>{" "}
                Con người thiết kế cấu trúc code, định nghĩa flow, chia module,
                chọn công nghệ phù hợp.
              </li>
              <li>
                <strong className="text-primary">Debug & Refactor:</strong> AI
                có thể gợi ý fix, nhưng chỉ dev mới hiểu vì sao bug xảy ra và
                cách tối ưu bền vững.
              </li>
              <li>
                <strong className="text-primary">UX & Flow Control:</strong>{" "}
                Quyết định trải nghiệm, xử lý edge case, đảm bảo app mượt trên
                mọi thiết bị.
              </li>
              <li>
                <strong className="text-primary">
                  Teamwork & Code Review:
                </strong>{" "}
                Mỗi commit được review, merge có chủ đích — đảm bảo chất lượng,
                clean code và maintain dễ.
              </li>
              <li>
                <strong className="text-primary">Tinh chỉnh cuối:</strong> AI hỗ
                trợ boilerplate ~40%, con người đảm nhận ~60% sáng tạo, kiểm thử
                và tinh chỉnh UI/UX.
              </li>
            </ul>
          </div>
        </section>

        {/* Academic Integrity & References */}
        <section className="mb-20 p-10 sm:p-14 bg-background/40 rounded-2xl shadow-inner">
          <h2 className="text-4xl font-bold text-primary mb-10 flex items-center gap-3">
            📘 Tài Liệu Tham Khảo, Cam Kết & Kiểm Chứng
          </h2>

          {/* 1️⃣ Tài liệu tham khảo */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-primary mb-4">
              📚 Tài Liệu Tham Khảo
            </h3>
            <p className="text-lg text-foreground/80 leading-relaxed mb-4">
              Toàn bộ nội dung học thuật trên website được tổng hợp và trình bày
              dựa trên giáo trình chính thống:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2 text-foreground/80">
              <li>
                <strong>Giáo trình Kinh tế chính trị Mác – Lênin (2021)</strong>
                , trang 196 – 214.
              </li>
              <li>
                <strong>Giáo trình Kinh tế chính trị Mác – Lênin (2021)</strong>
                , trang 214 – 220.
              </li>
            </ul>
          </div>

          {/* 2️⃣ Cam kết học thuật */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-primary mb-4">
              🧭 Cam Kết Học Thuật
            </h3>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Nhóm sinh viên cam kết rằng website được phát triển với sự hỗ trợ
              của công cụ AI (ChatGPT, Builder.io), nhưng{" "}
              <strong>
                mọi nội dung học thuật, luật chơi, cân bằng số liệu và kiểm tra
                đầu cuối
              </strong>{" "}
              đều do
              <strong>
                {" "}
                nhóm sinh viên trực tiếp thực hiện và chịu trách nhiệm
              </strong>
              .
            </p>
          </div>

          {/* 3️⃣ Quy trình kiểm chứng */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">
              🔍 Quy Trình Kiểm Chứng Thông Tin
            </h3>
            <p className="text-lg text-foreground/80 leading-relaxed mb-4">
              Để đảm bảo tính chính xác, minh bạch và học thuật của dự án, nhóm
              thực hiện quy trình kiểm chứng như sau:
            </p>
            <ol className="list-decimal list-inside space-y-3 pl-4 text-foreground/80">
              <li>
                Đối chiếu toàn bộ nội dung AI sinh ra với tài liệu gốc trong
                giáo trình.
              </li>
              <li>
                Hiệu chỉnh và xác nhận lại các khái niệm kinh tế – chính trị
                quan trọng.
              </li>
              <li>
                Kiểm tra số liệu, trích dẫn, biểu đồ và tính hợp lý của ví dụ
                minh họa.
              </li>
              <li>
                Kiểm duyệt toàn bộ nội dung và giao diện lần cuối trước khi công
                bố.
              </li>
            </ol>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t-2 border-primary/10 bg-primary/2 mt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <p className="text-foreground/60 text-sm font-medium">
            © 2024 Lợi Ích Kinh Tế • Một nền kinh tế thị trường định hướng xã
            hội chủ nghĩa
          </p>
        </div>
      </footer>
    </div>
  );
}
