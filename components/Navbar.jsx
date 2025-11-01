"use client";
import {
  Menu as MenuIcon,
  X,
  Search,
  CalendarCheck,
  User,
  Settings,
  Home,
  BookOpen,
  Info,
  Phone,
  LogOut,
  Stethoscope,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import useAuth from "@/lib/hook/useAuth";

const Navbar = () => {
  const { auth, logout } = useAuth();
  const router = useRouter();

  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const appointmentCount = useSelector((state) => state.appointments?.total || 0);
  const isAuthenticated = !!auth;

  // 🔍 Search handler
  const handleSearch = (e) => {
    e.preventDefault();
    if (!search.trim()) return;
    router.push(`/blog?search=${encodeURIComponent(search.trim())}`);
    setSearch("");
  };

  // 🚪 Secure logout using backend + AuthContext
  const handleLogout = async () => {
    try {
      await logout();
      setProfileOpen(false);
      router.push("/login");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  const navLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "Consultations", href: "/consultations", icon: Stethoscope },
    { name: "Courses", href: "/courses", icon: BookOpen },
    { name: "Blog", href: "/blog", icon: Info },
    { name: "About", href: "/about", icon: Info },
    { name: "Contact", href: "/contact", icon: Phone },
  ];

  return (
    <nav className="sticky top-0 bg-white border-b border-slate-200 shadow-sm z-50">
      <div className="mx-4 sm:mx-6">
        <div className="flex items-center justify-between max-w-7xl mx-auto py-3">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-extrabold text-slate-800 flex items-center"
          >
            <span className="text-green-600">Dr.</span>Iwula
            <span className="text-green-600 text-2xl">.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 text-slate-700">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center gap-2 text-sm font-medium hover:text-green-600 transition"
              >
                <link.icon size={18} /> {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Search Bar */}
            <form
              onSubmit={handleSearch}
              className="flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-full focus-within:ring-2 focus-within:ring-green-500"
            >
              <Search size={16} className="text-slate-500" />
              <input
                type="text"
                placeholder="Search articles, tips..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-transparent outline-none text-sm w-44"
              />
            </form>

            {/* Appointments */}
            <Link
              href="/appointments"
              className="relative text-slate-600 hover:text-green-600"
            >
              <CalendarCheck size={22} />
              {appointmentCount > 0 && (
                <span className="absolute -top-1 left-3 text-[10px] text-white bg-green-600 w-4 h-4 rounded-full flex items-center justify-center">
                  {appointmentCount}
                </span>
              )}
            </Link>

            {/* User Profile or Login */}
            {isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={() => setProfileOpen((prev) => !prev)}
                  className="w-9 h-9 rounded-full bg-green-600 text-white flex items-center justify-center font-semibold hover:ring-2 hover:ring-green-400 transition"
                >
                  {auth?.name?.[0]?.toUpperCase() || "U"}
                </button>

                <AnimatePresence>
                  {profileOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-3 bg-white rounded-lg shadow-xl w-56 border border-slate-100"
                    >
                      <div className="px-4 py-3 border-b text-sm">
                        <p className="font-semibold text-slate-800">
                          {auth?.name || "User"}
                        </p>
                        <p className="text-xs text-slate-500">
                          Balance: ₦{auth?.wallet_balance ?? 0}
                        </p>
                      </div>

                      <div className="flex flex-col text-sm">
                        <Link
                          href="/profile"
                          onClick={() => setProfileOpen(false)}
                          className="flex items-center gap-2 px-4 py-2 hover:bg-slate-50"
                        >
                          <User size={14} /> Profile
                        </Link>
                        <Link
                          href="/settings"
                          onClick={() => setProfileOpen(false)}
                          className="flex items-center gap-2 px-4 py-2 hover:bg-slate-50"
                        >
                          <Settings size={14} /> Settings
                        </Link>
                        <button
                          onClick={handleLogout}
                          className="flex items-center gap-2 px-4 py-2 hover:bg-red-50 hover:text-red-600 transition"
                        >
                          <LogOut size={14} /> Logout
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                href="/login"
                className="text-sm font-medium text-green-600 border border-green-600 px-4 py-1.5 rounded-full hover:bg-green-50 transition"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden flex items-center gap-4">
            <Link href="/appointments" className="relative text-slate-600">
              <CalendarCheck size={22} />
              {appointmentCount > 0 && (
                <span className="absolute -top-1 left-3 text-[9px] text-white bg-green-600 w-4 h-4 rounded-full flex items-center justify-center">
                  {appointmentCount}
                </span>
              )}
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-slate-700"
            >
              {menuOpen ? <X size={28} /> : <MenuIcon size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden border-t border-slate-200 bg-white shadow-md"
          >
            <div className="flex flex-col px-6 py-4 space-y-3 text-slate-700">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2 text-sm font-medium hover:text-green-600"
                >
                  <link.icon size={18} /> {link.name}
                </Link>
              ))}
              {isAuthenticated ? (
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 text-sm text-red-600 hover:bg-red-50 py-2 px-2 rounded"
                >
                  <LogOut size={16} /> Logout
                </button>
              ) : (
                <Link
                  href="/login"
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-medium text-green-600 border border-green-600 px-4 py-1.5 rounded-full hover:bg-green-50 transition text-center"
                >
                  Login
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
