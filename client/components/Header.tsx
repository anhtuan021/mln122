export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-white font-bold text-sm">LI</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Lợi Ích Kinh Tế</h1>
              <p className="text-xs text-muted-foreground hidden sm:block">Economic Interests in Vietnam</p>
            </div>
          </div>
          <nav className="hidden sm:flex items-center gap-8">
            <a href="#introduction" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Mở Đầu
            </a>
            <a href="#theory" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Lý Thuyết
            </a>
            <a href="#state-role" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Vai Trò Nhà Nước
            </a>
            <a href="#relationships" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Quan Hệ
            </a>
            <a href="#conclusion" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Kết Luận
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
