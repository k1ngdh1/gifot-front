import React, { useState } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AuthModal from "../components/AuthModal";

export default function HomePage() {
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState("login"); // "login" | "signup"

  const openLogin  = () => { setAuthMode("login");  setAuthOpen(true); };
  const openSignup = () => { setAuthMode("signup"); setAuthOpen(true); };
  const closeAuth  = () => setAuthOpen(false);

  return (
    <div className="min-h-screen bg-[#F7F7FD]">
      <Navbar onLoginClick={openLogin} onSignupClick={openSignup} />
      <HeroSection />

      {/* 모달 */}
      <AuthModal open={authOpen} mode={authMode} onClose={closeAuth} />
    </div>
  );
}
