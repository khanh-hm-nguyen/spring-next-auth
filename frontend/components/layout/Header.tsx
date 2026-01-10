import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed top-6 left-0 w-full z-50 flex justify-center pointer-events-none">
      <Link 
        href="/" 
        className="pointer-events-auto flex items-center gap-3 bg-zinc-900/80 backdrop-blur-md border border-zinc-800 px-5 py-2 rounded-full shadow-2xl hover:border-green-500/50 transition-all group"
      >
        {/* Icon / Initial */}
        <div className="w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center group-hover:bg-green-600 transition-colors">
          <span className="font-bold text-white text-xs">KN</span>
        </div>

        {/* Full Name */}
        <div className="flex flex-col">
          <span className="font-bold text-zinc-100 text-sm tracking-wide group-hover:text-green-400 transition-colors">
            Khanh Nguyen
          </span>
        </div>
      </Link>
    </header>
  );
};

export default Header;