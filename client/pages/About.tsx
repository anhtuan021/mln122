import Header from "../components/Header";

const FeatureCard = ({ icon, title, description }: { icon: string; title: string; description: string }) => (
  <div className="p-8">
    <div className="text-5xl mb-4">{icon}</div>
    <h3 className="text-2xl font-bold text-primary mb-3">{title}</h3>
    <p className="text-foreground/70 leading-relaxed">{description}</p>
  </div>
);

const DiagramBox = ({ label, content, color }: { label: string; content: string; color: string }) => (
  <div className={`flex-1 rounded-xl p-6 text-white text-center font-bold text-lg shadow-lg ${color}`}>
    <div className="text-sm opacity-90 mb-2">{label}</div>
    <div className="text-2xl">{content}</div>
  </div>
);

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-white to-background">
      <Header />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        {/* Hero Section */}
        <section className="mb-20 text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary mb-6">Về Chúng tôi</h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Khám phá tầm nhìn, giá trị và công cụ đằng sau website "Lợi ích kinh tế"
          </p>
        </section>

        {/* Mission Section */}
        <section className="mb-20 p-10 sm:p-14">
          <h2 className="text-4xl font-bold text-primary mb-8 flex items-center gap-3">
            🎯 Sứ Mệnh
          </h2>
          <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
            <p>
              Nhóm chúng em thực hiện website <strong className="text-primary">"Lợi ích kinh tế – Động lực phát triển hay nguồn gốc của mâu thuẫn xã hội?"</strong> nhằm giúp người xem hiểu rõ hơn về <strong className="text-primary">bản chất của lợi ích kinh tế</strong> trong nền kinh tế thị trường định hướng xã hội chủ nghĩa Việt Nam.
            </p>
            <p>
              Website không chỉ trình bày lý thuyết một cách trực quan mà còn <strong className="text-primary">minh họa các mối quan hệ lợi ích bằng sơ đồ, biểu đồ và mô hình tương tác</strong>, giúp người xem dễ dàng hình dung vai trò của Nhà nước trong điều tiết và hài hòa các lợi ích.
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
              description="Trình bày kiến thức qua giao diện web tương tác, cuộn mượt và trực quan, dễ tiếp cận với mọi người"
            />
            <FeatureCard
              icon="📚"
              title="Kiến thức chính xác"
              description="Các kiến thức được tổng hợp từ các nguồn uy tín, đảm bảo tính chính xác và cập nhật về kinh tế XHCN"
            />
            <FeatureCard
              icon="🎮"
              title="Quiz Trắc Nghiệm"
              description="Tích hợp quiz trắc nghiệm với 3 mức độ khác nhau để củng cố kiến thức một cách vui vẻ"
            />
          </div>
        </section>

       

        {/* Tools & Support Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-primary mb-10 flex items-center gap-3">
            🛠️ Công Cụ AI Hỗ Trợ
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-10  ">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-5xl">🤖</div>
                <div>
                  <h3 className="text-2xl font-bold text-primary">ChatGPT</h3>
                </div>
              </div>
              <p className="text-foreground/80 leading-relaxed">
                Hỗ trợ <strong>tạo code</strong> và <strong>xử lý bug</strong> trong code
              </p>
            </div>

            <div className="p-10  ">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-5xl">⚡</div>
                <div>
                  <h3 className="text-2xl font-bold text-secondary">Builder.io</h3>
                </div>
              </div>
              <p className="text-foreground/80 leading-relaxed">
                Hỗ trợ <strong>tạo UI</strong> và <strong>layout</strong> cho website
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-20 p-10 sm:p-14">
          <h2 className="text-4xl font-bold text-primary mb-10 flex items-center gap-3">
            💎 Giá Trị
          </h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="text-5xl flex-shrink-0"></div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-3">Thông Điệp Chính</h3>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  <strong className="text-primary">Lợi ích kinh tế chỉ thật sự trở thành động lực phát triển</strong> khi được <strong className="text-primary">phân phối công bằng</strong> và được <strong className="text-primary">Nhà nước điều tiết hài hòa</strong>, đảm bảo <strong className="text-primary">sự phát triển bền vững cho toàn xã hội</strong>.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 text-center">
                <div className="text-4xl mb-3">⚖️</div>
                <h4 className="font-bold text-primary mb-2">Công Bằng</h4>
                <p className="text-foreground/70">Phân phối lợi ích một cách công bằng</p>
              </div>
              <div className="p-6 text-center">
                <div className="text-4xl mb-3">🤝</div>
                <h4 className="font-bold text-primary mb-2">Hài Hòa</h4>
                <p className="text-foreground/70">Cân bằng lợi ích cá nhân, tập thể, xã hội</p>
              </div>
              <div className="p-6 text-center">
                <div className="text-4xl mb-3">🌱</div>
                <h4 className="font-bold text-primary mb-2">Bền Vững</h4>
                <p className="text-foreground/70">Phát triển lâu dài cho toàn xã hội</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t-2 border-primary/10 bg-primary/2 mt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <p className="text-foreground/60 text-sm font-medium">
            © 2024 Lợi Ích Kinh Tế • Một nền kinh tế thị trường định hướng xã hội chủ nghĩa
          </p>
        </div>
      </footer>
    </div>
  );
}