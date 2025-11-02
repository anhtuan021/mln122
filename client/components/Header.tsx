import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white/97 backdrop-blur-xl supports-[backdrop-filter]:bg-white/90 border-b-2 border-primary/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 hover:opacity-85 transition-opacity">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-base">📚</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">Lợi Ích Kinh Tế</h1>
              <p className="text-xs text-muted-foreground hidden sm:block">Nền kinh tế XHCN</p>
            </div>
          </Link>
          <nav className="hidden sm:flex items-center gap-2">
            <Link
              to="/"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                isActive("/")
                  ? "bg-primary text-white shadow-md"
                  : "text-muted-foreground hover:text-foreground hover:bg-primary/5"
              }`}
            >
              Mở Đầu
            </Link>
            <Link
              to="/content"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                isActive("/content")
                  ? "bg-primary text-white shadow-md"
                  : "text-muted-foreground hover:text-foreground hover:bg-primary/5"
              }`}
            >
              Nội Dung
            </Link>
            <Link
              to="/game"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                isActive("/game")
                  ? "bg-primary text-white shadow-md"
                  : "text-muted-foreground hover:text-foreground hover:bg-primary/5"
              }`}
            >
              Trò Chơi
            </Link>
            <Link
              to="/about"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                isActive("/about")
                  ? "bg-primary text-white shadow-md"
                  : "text-muted-foreground hover:text-foreground hover:bg-primary/5"
              }`}
            >
              Giới Thiệu
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
