export default function Chip() {
    return (
      <div
        className="
          inline-flex items-center justify-center gap-2
          w-[373px] h-[64px] rounded-full
          bg-[#F3E8FF] px-5
        "
        aria-label="AI-Powered Visual Learning"
      >
        {/* 아이콘: /public/Vector.svg (32x29, fill #9333EA) */}
        <img
          src="/Vector.svg"
          alt=""
          width={32}
          height={29}
          className="block"
        />
  
        {/* 텍스트: Poppins 20px, 700, color #9333EA */}
        <span
          className="
            text-[20px] font-bold leading-[80px]  /* Figma line-height 80px */
            text-[#9333EA] text-center
          "
          style={{ fontFamily: "Poppins, ui-sans-serif, system-ui" }}
        >
          AI-Powered Visual Learning
        </span>
      </div>
    );
  }
  