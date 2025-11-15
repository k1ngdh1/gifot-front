// src/mock/chatHistory.js

export const MOCK_SESSIONS = [
  {
    id: "s1",
    title: "OS 중간고사 정리",
    lastMessage: "이 부분 핵심만 다시 정리해줘.",
    updatedAt: "2025-11-10T12:34:00Z",
  },
  {
    id: "s2",
    title: "논문: Attention is All You Need",
    lastMessage: "Figure 1 구조 설명 다시 해줘.",
    updatedAt: "2025-11-12T09:20:00Z",
  },
  {
    id: "s3",
    title: "DB 쿼리 튜닝",
    lastMessage: "실행 계획에서 Index Scan 부분만 설명해줘.",
    updatedAt: "2025-11-14T21:05:00Z",
  },
];

// 세션별 더미 채팅 내용 (선택 시 오른쪽 패널에 뿌릴 용도)
export const MOCK_MESSAGES = {
  s1: [
    { from: "user", text: "2강, 3강 내용 요약해줘." },
    { from: "ai",   text: "2강은 프로세스 개요, 3강은 스케줄링 기초입니다..." },
    { from: "user", text: "라운드 로빈이랑 SJF만 비교해줘." },
    { from: "ai",   text: "라운드 로빈은 time slice 기반이고..." },
  ],
  s2: [
    { from: "user", text: "Transformer 전체 구조 간단히 설명해줘." },
    { from: "ai",   text: "Encoder-Decoder 구조로 되어 있고..." },
  ],
  s3: [
    { from: "user", text: "이 쿼리 실행 계획 분석해줘." },
    { from: "ai",   text: "Seq Scan 대신 Index Scan을 사용할 수 있습니다..." },
  ],
};
