import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-white font-bold text-sm">LI</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Lợi Ích Kinh Tế</h1>
              <p className="text-xs text-muted-foreground hidden sm:block">Economic Interests in Vietnam</p>
            </div>
          </Link>
          <nav className="hidden sm:flex items-center gap-12">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                isActive("/")
                  ? "text-primary font-semibold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Mở Đầu
            </Link>
            <Link
              to="/content"
              className={`text-sm font-medium transition-colors ${
                isActive("/content")
                  ? "text-primary font-semibold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Nội Dung
            </Link>
            <Link
              to="/game"
              className={`text-sm font-medium transition-colors ${
                isActive("/game")
                  ? "text-primary font-semibold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Trò Chơi
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
