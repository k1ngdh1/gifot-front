import Chip from "./Chip";

export default function HeroSection() {
  return (
    <section
      aria-label="GIFPT Hero"
      className="flex flex-col items-center text-center gap-8 py-20 bg-[#F7F8FF]"
    >
      {/* 라벨(칩) */}
      <Chip />

      {/* 타이틀: 그라데이션 강조 */}
      <h1 className="max-w-[900px] text-[56px] md:text-[64px] font-extrabold leading-[120%] text-[#2D2D2D]">
        Transform Complex Concepts into{" "}
        <span className="bg-gradient-to-r from-[#9B4DFF] to-[#00AEEF] bg-clip-text text-transparent">
          Engaging GIFs and Videos
        </span>
      </h1>

      {/* 서브 카피 */}
      <p className="max-w-[720px] text-[18px] text-[#6B7280] leading-relaxed">
        Upload your research papers, study materials, or documents, and let our AI create
        stunning visuals that make complex ideas easy to understand and remember.
      </p>

      {/* CTA 버튼: 라운드+그라데이션 */}
      <button
        type="button"
        className="
          mt-2 inline-flex items-center justify-center
          w-[220px] h-[56px] rounded-xl
          text-white text-[18px] font-semibold shadow-md
          bg-gradient-to-r from-[#6B4CF6] to-[#4D9FFF]
          hover:opacity-95
        "
      >
        Start Creating
      </button>
    </section>
  );
}
