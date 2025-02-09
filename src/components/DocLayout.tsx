
import { useState } from 'react';
import { ScrollArea } from "./ui/scroll-area";
import { cn } from "@/lib/utils";

interface DocLayoutProps {
  children: React.ReactNode;
}

const DocLayout = ({ children }: DocLayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <aside
        className={cn(
          "w-64 border-r border-doc-border bg-doc-sidebar transition-all duration-300",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="sticky top-0 z-10 bg-doc-sidebar p-4 border-b border-doc-border">
          <h1 className="text-xl font-semibold">API Documentation</h1>
        </div>
        <ScrollArea className="h-[calc(100vh-4rem)]">
          <nav className="p-4 space-y-4">
            <div className="space-y-2">
              <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Getting Started</h2>
              <div className="space-y-1">
                <a href="#introduction" className="block px-2 py-1 text-sm rounded-md hover:bg-white transition-colors">
                  Introduction
                </a>
                <a href="#authentication" className="block px-2 py-1 text-sm rounded-md hover:bg-white transition-colors">
                  Authentication
                </a>
              </div>
            </div>
            <div className="space-y-2">
              <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Endpoints</h2>
              <div className="space-y-1">
                <a href="#users" className="block px-2 py-1 text-sm rounded-md hover:bg-white transition-colors">
                  Users
                </a>
                <a href="#posts" className="block px-2 py-1 text-sm rounded-md hover:bg-white transition-colors">
                  Posts
                </a>
              </div>
            </div>
          </nav>
        </ScrollArea>
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-w-0">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="fixed top-4 left-4 z-20 p-2 rounded-md hover:bg-gray-100 lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
          >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
        <div className="max-w-4xl mx-auto px-4 py-8 animate-fade-in">
          {children}
        </div>
      </main>
    </div>
  );
};

export default DocLayout;
