// src/pages/DashboardPage.jsx
import { useState } from "react";
import Navbar from "../components/Navbar";
import { MOCK_SESSIONS, MOCK_MESSAGES } from "../mock/chatHistory";

export default function DashboardPage() {
  const [selectedId, setSelectedId] = useState(MOCK_SESSIONS[0]?.id ?? null);

  const currentMessages = selectedId ? MOCK_MESSAGES[selectedId] ?? [] : [];

  return (
    <div className="min-h-screen bg-[#F5F5FF]">
      <Navbar />

      <main className="max-w-6xl mx-auto py-10 flex gap-6">
        {/* 왼쪽: 과거 채팅방 리스트 */}
        <section className="w-1/3 bg-white rounded-2xl shadow-sm p-4">
          <h2 className="text-lg font-semibold mb-4">Past Sessions</h2>
          <div className="space-y-2">
            {MOCK_SESSIONS.map((s) => {
              const active = s.id === selectedId;
              return (
                <button
                  key={s.id}
                  onClick={() => setSelectedId(s.id)}
                  className={`w-full text-left px-3 py-2 rounded-xl border
                    ${active ? "border-[#8B5CF6] bg-[#F5F3FF]" : "border-gray-200 bg-white"}
                    hover:bg-[#F5F3FF] transition`}
                >
                  <div className="font-medium truncate">{s.title}</div>
                  <div className="text-xs text-gray-500 truncate">
                    {s.lastMessage}
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* 오른쪽: 선택된 채팅방의 더미 채팅 내용 */}
        <section className="flex-1 bg-white rounded-2xl shadow-sm p-4 flex flex-col">
          <h2 className="text-lg font-semibold mb-4">Chat History</h2>
          <div className="flex-1 border border-gray-100 rounded-xl p-4 space-y-2 overflow-y-auto">
            {currentMessages.length === 0 ? (
              <div className="text-gray-400 text-sm">선택된 채팅 내역이 없습니다.</div>
            ) : (
              currentMessages.map((m, idx) => (
                <div
                  key={idx}
                  className={`max-w-[80%] px-3 py-2 rounded-2xl text-sm ${
                    m.from === "user"
                      ? "ml-auto bg-[#4B3DF6] text-white"
                      : "mr-auto bg-gray-100 text-gray-800"
                  }`}
                >
                  {m.text}
                </div>
              ))
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
