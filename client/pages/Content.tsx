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

const SectionCard = ({
  number,
  title,
  icon,
  children,
}: {
  number: string;
  title: string;
  icon: string;
  children: React.ReactNode;
}) => (
  <div className="animate-fade-up">
    <div className="mb-4 flex items-center gap-3">
      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary text-xl">
        {icon}
      </div>
      <div>
        <p className="text-sm font-semibold text-primary">Phần {number}</p>
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground">{title}</h2>
      </div>
    </div>
    <div className="pl-0 sm:pl-15">{children}</div>
  </div>
);

const SubsectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-lg sm:text-xl font-semibold text-foreground mt-6 mb-4 flex items-center gap-2">
    {children}
  </h3>
);

export default function Content() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Nội Dung</h1>
          <p className="text-lg text-muted-foreground">Tìm hiểu chi tiết về lợi ích kinh tế và vai trò của Nhà nước</p>
        </div>

        {/* Section II - Theory */}
        <section className="mb-16 sm:mb-24 scroll-mt-20">
          <div className="bg-white rounded-xl border border-border p-6 sm:p-10 shadow-sm hover:shadow-md transition-shadow">
            <SectionCard
              number="II"
              title="Lý Thuyết Về Các Quan Hệ Lợi Ích Kinh Tế Ở Việt Nam"
              icon="📚"
            >
              <SubsectionTitle>
                <span>1. Khái Niệm Lợi Ích Kinh Tế</span>
              </SubsectionTitle>
              <BulletPoint>
                <strong>Là lợi ích vật chất</strong> mà các chủ thể (cá nhân, doanh nghiệp, Nhà nước) đạt được thông qua hoạt động kinh tế.
              </BulletPoint>
              <BulletPoint>
                <strong>Phản ánh mục tiêu và động cơ hành động</strong> của mỗi người trong nền sản xuất xã hội.
              </BulletPoint>
              <div className="mt-4 p-4 bg-slate-50 border-l-4 border-primary rounded">
                <p className="text-foreground font-semibold">→ Lợi ích kinh tế là động lực trực tiếp của phát triển kinh tế – xã hội.</p>
              </div>

              <SubsectionTitle>
                <span>2. Quan Hệ Lợi Ích Kinh Tế</span>
              </SubsectionTitle>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
                Là mối quan hệ giữa các chủ thể trong việc tạo ra, phân phối và sử dụng lợi ích. Quan hệ này vừa thống nhất, vừa mâu thuẫn:
              </p>
              <BulletPoint>
                <strong>Thống nhất:</strong> vì cùng hướng đến phát triển xã hội.
              </BulletPoint>
              <BulletPoint>
                <strong>Mâu thuẫn:</strong> vì lợi ích, vị trí và mục tiêu của các chủ thể khác nhau.
              </BulletPoint>

              <SubsectionTitle>
                <span>Nguyên Nhân Mâu Thuẫn Lợi Ích</span>
              </SubsectionTitle>
              <div className="space-y-2 mb-6">
                <BulletPoint>Khác biệt về nhu cầu, mục tiêu và địa vị xã hội.</BulletPoint>
                <BulletPoint>Chính sách phân phối thu nhập chưa công bằng.</BulletPoint>
                <BulletPoint>Ảnh hưởng của cạnh tranh và hội nhập quốc tế.</BulletPoint>
              </div>

              <SubsectionTitle>
                <span>Phương Thức Thực Hiện Lợi Ích</span>
              </SubsectionTitle>
              <BulletPoint>
                <strong>Theo nguyên tắc thị trường:</strong> cạnh tranh, hiệu quả, bình đẳng.
              </BulletPoint>
              <BulletPoint>
                <strong>Theo chính sách của Nhà nước:</strong> điều tiết, phân phối lại thu nhập, hỗ trợ phúc lợi xã hội.
              </BulletPoint>
            </SectionCard>
          </div>
        </section>

        {/* Section III - State Role */}
        <section className="mb-16 sm:mb-24 scroll-mt-20">
          <div className="bg-white rounded-xl border border-border p-6 sm:p-10 shadow-sm hover:shadow-md transition-shadow">
            <SectionCard
              number="III"
              title="Vai Trò Của Nhà Nước Trong Điều Tiết Và Hài Hòa Lợi Ích"
              icon="🏛️"
            >
              <div className="space-y-8">
                <div className="pb-6 border-b border-border last:border-b-0">
                  <h3 className="text-lg font-semibold text-foreground mb-3">1. Bảo Vệ Lợi Ích Hợp Pháp Của Các Chủ Thể</h3>
                  <BulletPoint>
                    Xây dựng pháp luật rõ ràng, tạo môi trường kinh doanh ổn định.
                  </BulletPoint>
                  <BulletPoint>
                    Khuyến khích làm giàu chính đáng, chống chiếm dụng lợi ích bất hợp pháp.
                  </BulletPoint>
                </div>

                <div className="pb-6 border-b border-border last:border-b-0">
                  <h3 className="text-lg font-semibold text-foreground mb-3">2. Điều Hòa Lợi Ích Cá Nhân – Doanh Nghiệp – Xã Hội</h3>
                  <BulletPoint>
                    Thực hiện qua chính sách thuế, tiền lương, phúc lợi, phân phối thu nhập.
                  </BulletPoint>
                  <BulletPoint>
                    Mục tiêu: giảm bất bình đẳng, đảm bảo công bằng và phát triển bền vững.
                  </BulletPoint>
                </div>

                <div className="pb-6 border-b border-border last:border-b-0">
                  <h3 className="text-lg font-semibold text-foreground mb-3">3. Kiểm Soát Và Ngăn Ngừa Quan Hệ Lợi Ích Tiêu Cực</h3>
                  <BulletPoint>
                    Ngăn chặn tham nhũng, lợi ích nhóm, cạnh tranh không lành mạnh.
                  </BulletPoint>
                  <BulletPoint>
                    Tuyên truyền, giáo dục nâng cao ý thức tôn trọng lợi ích chung.
                  </BulletPoint>
                </div>

                <div className="pb-0">
                  <h3 className="text-lg font-semibold text-foreground mb-3">4. Giải Quyết Mâu Thuẫn Lợi Ích</h3>
                  <BulletPoint>
                    Phát hiện và xử lý sớm các xung đột.
                  </BulletPoint>
                  <BulletPoint>
                    Đảm bảo ổn định xã hội và củng cố niềm tin của người dân vào Nhà nước.
                  </BulletPoint>
                </div>
              </div>

              <div className="mt-8 p-4 sm:p-6 bg-primary/5 border border-primary/20 rounded-lg">
                <p className="font-semibold text-foreground">👉 Kết Luận:</p>
                <p className="text-foreground leading-relaxed mt-2">
                  Nhà nước giữ vai trò <strong>trung tâm</strong> trong việc định hướng, điều tiết và đảm bảo hài hòa các lợi ích kinh tế.
                </p>
              </div>
            </SectionCard>
          </div>
        </section>

        {/* Section IV - Relationships */}
        <section className="mb-16 sm:mb-24 scroll-mt-20">
          <div className="bg-white rounded-xl border border-border p-6 sm:p-10 shadow-sm hover:shadow-md transition-shadow">
            <SectionCard
              number="IV"
              title="Mối Quan Hệ Biện Chứng Giữa Lợi Ích Cá Nhân – Tập Thể – Xã Hội"
              icon="🔗"
            >
              <div className="space-y-8">
                <div className="pb-6 border-b border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                    <span className="text-xl">👤</span> Lợi Ích Cá Nhân
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
                    Là lợi ích của mỗi người lao động, nhà đầu tư hay người sản xuất.
                  </p>
                  <div className="bg-slate-50 p-4 rounded-lg mb-4">
                    <p className="text-foreground">→ Đây là <strong>động lực trực tiếp</strong> của sáng tạo, nâng cao năng suất và hiệu quả.</p>
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Tuy nhiên, nó phải <strong>gắn với lợi ích tập thể và xã hội</strong>, không thể tách rời hay đối lập.
                  </p>
                </div>

                <div className="pb-6 border-b border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                    <span className="text-xl">👥</span> Lợi Ích Tập Thể
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
                    Là lợi ích của các tổ chức, doanh nghiệp, cộng đồng.
                  </p>
                  <div className="bg-slate-50 p-4 rounded-lg mb-4">
                    <p className="text-foreground">→ <strong>Giữ vai trò gắn kết</strong> các cá nhân, tạo sức mạnh hợp tác để cùng phát triển.</p>
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Đồng thời, đây là <strong>cầu nối trung gian</strong> giữa lợi ích cá nhân và lợi ích xã hội.
                  </p>
                </div>

                <div className="pb-0">
                  <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                    <span className="text-xl">🌍</span> Lợi Ích Xã Hội
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
                    Là lợi ích của quốc gia, dân tộc và toàn thể nhân dân.
                  </p>
                  <div className="bg-slate-50 p-4 rounded-lg mb-4">
                    <p className="text-foreground">→ <strong>Giữ vai trò định hướng và bao trùm</strong>, hướng sự phát triển kinh tế theo mục tiêu công bằng, văn minh và bền vững.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <div className="p-4 sm:p-6 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-foreground leading-relaxed">
                    Ba loại lợi ích này <strong>thống nhất</strong> trong mục tiêu phát triển xã hội, nhưng có thể <strong>mâu thuẫn</strong> nếu lợi ích cá nhân hoặc nhóm vượt quá giới hạn chung.
                  </p>
                </div>
                <div className="p-4 sm:p-6 bg-amber-50 border border-amber-200 rounded-lg">
                  <p className="text-foreground leading-relaxed">
                    → Do đó, <strong>Nhà nước cần điều tiết hài hòa</strong>, đảm bảo công bằng, ổn định và phát triển bền vững.
                  </p>
                </div>
              </div>
            </SectionCard>
          </div>
        </section>

        {/* Section V - Conclusion */}
        <section className="mb-20 scroll-mt-20">
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl border border-primary/30 p-6 sm:p-10 shadow-sm">
            <SectionCard
              number="V"
              title="Kết Luận"
              icon="✨"
            >
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="text-2xl">•</div>
                  <p className="text-base sm:text-lg text-foreground leading-relaxed">
                    Lợi ích kinh tế là <strong>động lực phát triển mạnh mẽ</strong>, nhưng nếu không được quản lý tốt, nó sẽ trở thành <strong>nguồn gốc mâu thuẫn xã hội</strong>.
                  </p>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="text-2xl">•</div>
                  <p className="text-base sm:text-lg text-foreground leading-relaxed">
                    Nhà nước XHCN Việt Nam có <strong>vai trò then chốt</strong> trong việc điều tiết, phân phối, kiểm soát và định hướng lợi ích theo nguyên tắc công bằng xã hội.
                  </p>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="text-2xl">•</div>
                  <p className="text-base sm:text-lg text-foreground leading-relaxed">
                    <strong>Hài hòa lợi ích cá nhân – tập thể – xã hội</strong> chính là nền tảng để xây dựng nền <strong>kinh tế thị trường định hướng xã hội chủ nghĩa ổn định và bền vững</strong>.
                  </p>
                </div>
              </div>
            </SectionCard>
          </div>
        </section>

        {/* Navigation Button */}
        <section className="mb-20 flex justify-center">
          <Link
            to="/game"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 duration-200"
          >
            Đến Trò Chơi
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
