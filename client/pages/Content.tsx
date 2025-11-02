import Header from "@/components/Header";
import { Link } from "react-router-dom";

const BulletPoint = ({ children, className }: { children?: React.ReactNode, className?: string }) => (
  <div className="flex gap-3 mb-4">
    <div className="flex-shrink-0 mt-1.5">
      <div className={`w-2 h-2 rounded-full bg-secondary ${className || ''}`} />
    </div>
    <div className="text-sm sm:text-base text-foreground/80 leading-relaxed">
      {children}
    </div>
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
    <div className="mb-6 flex items-start gap-4">
      <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-secondary to-secondary/80 text-white text-2xl flex-shrink-0 shadow-md">
        {icon}
      </div>
      <div>
        <p className="text-sm font-bold text-secondary uppercase tracking-wide">
          Phần {number}
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-1">
          {title}
        </h2>
      </div>
    </div>
    <div className="pl-0 sm:pl-18 space-y-4">{children}</div>
  </div>
);

const SubsectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-xl sm:text-2xl font-bold text-primary mt-8 mb-4 flex items-center gap-2">
    {children}
  </h3>
);

export default function Content() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-white to-background">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="mb-16 flex flex-col items-center text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-primary mb-4">
            Nội Dung
          </h1>
          <p className="text-lg text-foreground/60 max-w-3xl">
            Khám phá chi tiết về lợi ích kinh tế và vai trò quan trọng của Nhà
            nước
          </p>
        </div>

        {/* Section II - Theory */}
        <section className="mb-16 sm:mb-24 scroll-mt-20">
          <div className="rounded-2xl p-8 sm:p-12">
            <SectionCard
              number="II"
              title="Lý Thuyết Về Các Quan Hệ Lợi Ích Kinh Tế Ở Việt Nam"
              icon="📚"
            >
              <SubsectionTitle>
                <span>1. Khái Niệm Lợi Ích Kinh Tế</span>
              </SubsectionTitle>
              <BulletPoint>
                <strong>Là lợi ích vật chất</strong> mà các chủ thể (cá nhân,
                doanh nghiệp, Nhà nước) đạt được thông qua hoạt động kinh tế.
              </BulletPoint>
              <BulletPoint>
                <strong>Phản ánh mục tiêu và động cơ hành động</strong> của mỗi
                người trong nền sản xuất xã hội.
              </BulletPoint>
              <div className="mt-6 p-5 bg-gradient-to-r from-primary/10 to-accent/10 border-l-4 border-secondary rounded-lg">
                <p className="text-foreground font-semibold text-primary">
                  → Lợi ích kinh tế là động lực trực tiếp của phát triển kinh tế
                  – xã hội.
                </p>
              </div>

              <SubsectionTitle>
                <span>2. Quan Hệ Lợi Ích Kinh Tế</span>
              </SubsectionTitle>
              <p className="text-sm sm:text-base text-foreground/75 mb-4 leading-relaxed">
                Là mối quan hệ giữa các chủ thể trong việc tạo ra, phân phối và
                sử dụng lợi ích. Quan hệ này vừa thống nhất, vừa mâu thuẫn:
              </p>
              <BulletPoint>
                <strong>Thống nhất:</strong> vì cùng hướng đến phát triển xã
                hội.
              </BulletPoint>
              <BulletPoint>
                <strong>Mâu thuẫn:</strong> vì lợi ích, vị trí và mục tiêu của
                các chủ thể khác nhau.
              </BulletPoint>

              <SubsectionTitle>
                <span>Nguyên Nhân Mâu Thuẫn Lợi Ích</span>
              </SubsectionTitle>
              <div className="space-y-2 mb-6">
                <BulletPoint>
                  Khác biệt về nhu cầu, mục tiêu và địa vị xã hội.
                </BulletPoint>
                <BulletPoint>
                  Chính sách phân phối thu nhập chưa công bằng.
                </BulletPoint>
                <BulletPoint>
                  Ảnh hưởng của cạnh tranh và hội nhập quốc tế.
                </BulletPoint>
              </div>

              <SubsectionTitle>
                <span>Phương Thức Thực Hiện Lợi Ích</span>
              </SubsectionTitle>
              <BulletPoint>
                <strong>Theo nguyên tắc thị trường:</strong> cạnh tranh, hiệu
                quả, bình đẳng.
              </BulletPoint>
              <BulletPoint>
                <strong>Theo chính sách của Nhà nước:</strong> điều tiết, phân
                phối lại thu nhập, hỗ trợ phúc lợi xã hội.
              </BulletPoint>
            </SectionCard>
          </div>
        </section>

        {/* Section III - State Role */}
        <section className="mb-16 sm:mb-24 scroll-mt-20">
          <div className="rounded-2xl p-8 sm:p-12">
            <SectionCard
              number="III"
              title="Vai Trò Của Nhà Nước Trong Điều Tiết Và Hài Hòa Lợi Ích"
              icon="🏛️"
            >
              <div className="space-y-8">
                <div className="pb-6 border-b border-border/50 last:border-b-0">
                  <h3 className="text-lg font-bold text-primary mb-3">
                    1. Bảo Vệ Lợi Ích Hợp Pháp Của Các Chủ Thể
                  </h3>
                  <BulletPoint>
                    Xây dựng pháp luật rõ ràng, tạo môi trường kinh doanh ổn
                    định.
                  </BulletPoint>
                  <BulletPoint>
                    Khuyến khích làm giàu chính đáng, chống chiếm dụng lợi ích
                    bất hợp pháp.
                  </BulletPoint>
                </div>

                <div className="pb-6 border-b border-border/50 last:border-b-0">
                  <h3 className="text-lg font-bold text-primary mb-3">
                    2. Điều Hòa Lợi Ích Cá Nhân – Doanh Nghiệp – Xã Hội
                  </h3>
                  <BulletPoint>
                    Thực hiện qua chính sách thuế, tiền lương, phúc lợi, phân
                    phối thu nhập.
                  </BulletPoint>
                  <BulletPoint>
                    Mục tiêu: giảm bất bình đẳng, đảm bảo công bằng và phát
                    triển bền vững.
                  </BulletPoint>
                </div>

                <div className="pb-6 border-b border-border/50 last:border-b-0">
                  <h3 className="text-lg font-bold text-primary mb-3">
                    3. Kiểm Soát Và Ngăn Ngừa Quan Hệ Lợi Ích Tiêu Cực
                  </h3>
                  <BulletPoint>
                    Ngăn chặn tham nhũng, lợi ích nhóm, cạnh tranh không lành
                    mạnh.
                  </BulletPoint>
                  <BulletPoint>
                    Tuyên truyền, giáo dục nâng cao ý thức tôn trọng lợi ích
                    chung.
                  </BulletPoint>
                </div>

                <div className="pb-0">
                  <h3 className="text-lg font-bold text-primary mb-3">
                    4. Giải Quyết Mâu Thuẫn Lợi Ích
                  </h3>
                  <BulletPoint>
                    Phát hiện và xử lý sớm các xung đột.
                  </BulletPoint>
                  <BulletPoint>
                    Đảm bảo ổn định xã hội và củng cố niềm tin của người dân vào
                    Nhà nước.
                  </BulletPoint>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-secondary/5 to-accent/5 border-l-4 border-secondary rounded-xl">
                <p className="font-bold text-secondary mb-2 text-lg">
                  Kết Luận
                </p>
                <p className="text-foreground leading-relaxed">
                  Nhà nước giữ vai trò{" "}
                  <strong className="text-primary">trung tâm</strong> trong việc
                  định hướng, điều tiết và đảm bảo hài hòa các lợi ích kinh tế.
                </p>
              </div>
            </SectionCard>
          </div>
        </section>

        {/* Section IV - Relationships */}
        <section className="mb-16 sm:mb-24 scroll-mt-20">
          <div className="rounded-2xl p-8 sm:p-12">
            <SectionCard
              number="IV"
              title="Mối Quan Hệ Biện Chứng Giữa Lợi Ích Cá Nhân – Tập Thể – Xã Hội"
              icon="🔗"
            >
              <div className="space-y-8">
                <div className="pb-6 border-b border-border/50">
                  <h3 className="text-lg font-bold text-primary mb-3 flex items-center gap-2">
                    <BulletPoint className="text-xl"></BulletPoint>Lợi Ích Cá Nhân
                  </h3>
                  <p className="text-sm sm:text-base text-foreground/75 mb-4 leading-relaxed">
                    Là lợi ích của mỗi người lao động, nhà đầu tư hay người sản
                    xuất.
                  </p>
                  <div className="bg-gradient-to-r from-accent/20 to-accent/10 p-5 rounded-lg mb-4 border border-accent/30">
                    <p className="text-foreground">
                      → Đây là{" "}
                      <strong className="text-primary">
                        động lực trực tiếp
                      </strong>{" "}
                      của sáng tạo, nâng cao năng suất và hiệu quả.
                    </p>
                  </div>
                  <p className="text-sm sm:text-base text-foreground/75">
                    Tuy nhiên, nó phải{" "}
                    <strong>gắn với lợi ích tập thể và xã hội</strong>, không
                    thể tách rời hay đối lập.
                  </p>
                </div>

                <div className="pb-6 border-b border-border/50">
                  <h3 className="text-lg font-bold text-primary mb-3 flex items-center gap-2">
                    <BulletPoint className="text-xl"></BulletPoint>Lợi Ích Tập Thể
                  </h3>
                  <p className="text-sm sm:text-base text-foreground/75 mb-4 leading-relaxed">
                    Là lợi ích của các tổ chức, doanh nghiệp, cộng đồng.
                  </p>
                  <div className="bg-gradient-to-r from-accent/20 to-accent/10 p-5 rounded-lg mb-4 border border-accent/30">
                    <p className="text-foreground">
                      →{" "}
                      <strong className="text-primary">
                        Giữ vai trò gắn kết
                      </strong>{" "}
                      các cá nhân, tạo sức mạnh hợp tác để cùng phát triển.
                    </p>
                  </div>
                  <p className="text-sm sm:text-base text-foreground/75">
                    Đồng thời, đây là <strong>cầu nối trung gian</strong> giữa
                    lợi ích cá nhân và lợi ích xã hội.
                  </p>
                </div>

                <div className="pb-0">
                  <h3 className="text-lg font-bold text-primary mb-3 flex items-center gap-2">
                    <BulletPoint className="text-xl"></BulletPoint>Lợi Ích Xã Hội
                  </h3>
                  <p className="text-sm sm:text-base text-foreground/75 mb-4 leading-relaxed">
                    Là lợi ích của quốc gia, dân tộc và toàn thể nhân dân.
                  </p>
                  <div className="bg-gradient-to-r from-accent/20 to-accent/10 p-5 rounded-lg mb-4 border border-accent/30">
                    <p className="text-foreground">
                      →{" "}
                      <strong className="text-primary">
                        Giữ vai trò định hướng và bao trùm
                      </strong>
                      , hướng sự phát triển kinh tế theo mục tiêu công bằng, văn
                      minh và bền vững.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <div className="p-6 bg-gradient-to-r from-primary/10 to-accent/10 border-l-4 border-primary rounded-lg">
                  <p className="text-foreground leading-relaxed">
                    Ba loại lợi ích này{" "}
                    <strong className="text-primary">thống nhất</strong> trong
                    mục tiêu phát triển xã hội, nhưng có thể{" "}
                    <strong className="text-secondary">mâu thuẫn</strong> nếu
                    lợi ích cá nhân hoặc nhóm vượt quá giới hạn chung.
                  </p>
                </div>
                <div className="p-6 bg-gradient-to-r from-secondary/5 to-accent/10 border-l-4 border-secondary rounded-lg">
                  <p className="text-foreground leading-relaxed">
                    → Do đó,{" "}
                    <strong className="text-primary">
                      Nhà nước cần điều tiết hài hòa
                    </strong>
                    , đảm bảo công bằng, ổn định và phát triển bền vững.
                  </p>
                </div>
              </div>
            </SectionCard>
          </div>
        </section>

        {/* Section V - Conclusion */}
        <section className="mb-20 scroll-mt-20">
          <div className="p-8 sm:p-12">
            <SectionCard number="V" title="Kết Luận" icon="✨">
              <div className="space-y-5">
                <div className="flex gap-4 items-start">
                  <div className="text-2xl text-secondary"></div>
                  <BulletPoint className="text-base sm:text-lg text-foreground leading-relaxed">
                    Lợi ích kinh tế là{" "}
                    <strong className="text-primary">
                      động lực phát triển mạnh mẽ
                    </strong>
                    , nhưng nếu không được quản lý tốt, nó sẽ trở thành{" "}
                    <strong className="text-secondary">
                      nguồn gốc mâu thuẫn xã hội
                    </strong>
                    .
                  </BulletPoint>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="text-2xl text-secondary"></div>
                  <BulletPoint className="text-base sm:text-lg text-foreground leading-relaxed">
                    Nhà nước XHCN Việt Nam có{" "}
                    <strong className="text-primary">vai trò then chốt</strong>{" "}
                    trong việc điều tiết, phân phối, kiểm soát và định hướng lợi
                    ích theo nguyên tắc công bằng xã hội.
                  </BulletPoint>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="text-2xl text-secondary"></div>
                  <BulletPoint className="text-base sm:text-lg text-foreground leading-relaxed">
                    <strong className="text-primary">
                      Hài hòa lợi ích cá nhân – tập thể – xã hội
                    </strong>{" "}
                    chính là nền tảng để xây dựng nền{" "}
                    <strong className="text-primary">
                      kinh tế thị trường định hướng xã hội chủ nghĩa ổn định và
                      bền vững
                    </strong>
                    .
                  </BulletPoint>
                </div>
              </div>
            </SectionCard>
          </div>
        </section>

        {/* Navigation Button */}
        <section className="mb-20 flex justify-center">
          <Link
            to="/game"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-xl bg-gradient-to-r from-secondary to-secondary/90 text-white font-bold hover:shadow-2xl transition-all transform hover:scale-105 duration-200 text-lg shadow-lg"
          >
            Kiểm Tra Kiến Thức
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t-2 border-primary/10 bg-primary/2 mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <p className="text-foreground/60 text-sm font-medium">
            © 2024 Lợi Ích Kinh Tế • Một nền kinh tế thị trường định hướng xã
            hội chủ nghĩa
          </p>
        </div>
      </footer>
    </div>
  );
}
