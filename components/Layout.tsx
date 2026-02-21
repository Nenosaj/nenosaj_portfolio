import React from "react";
import { Navigation } from "./Navigation";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 relative overflow-hidden">
      {/* Creative background blobs */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500 opacity-20 blur-[150px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500 opacity-15 blur-[150px] rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500 opacity-10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-5" style={{
        backgroundImage: 'radial-gradient(circle, #0080ff 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>
      
      <Navigation />
      
      <main className="relative z-10">
        {children}
      </main>
    </div>
  );
}
