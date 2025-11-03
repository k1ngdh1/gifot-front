// src/components/Button.jsx
import React from "react";

// 간단한 class 병합 유틸
function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

/**
 * Button
 * props:
 * - variant: "text" | "primary" | "outline" (기본 text)
 * - size: "sm" | "md" | "lg" (기본 md)
 * - fullWidth: boolean
 * - loading: boolean
 * - disabled: boolean
 * - className: 추가 클래스
 * - leftIcon / rightIcon: <svg/> 등 리액트 노드
 * - onClick: 함수
 */
export default function Button({
  children,
  variant = "text",
  size = "md",
  fullWidth = false,
  loading = false,
  disabled = false,
  className,
  leftIcon,
  rightIcon,
  onClick,
  ...rest
}) {
  const isDisabled = disabled || loading;

  const base =
    "inline-flex items-center justify-center rounded-md font-semibold transition select-none whitespace-nowrap";

  // Figma: 높이≈36px, padding 12 → md 기준
  const sizeMap = {
    sm: "text-[14px] px-3 py-1.5",
    md: "text-[16px] px-4 py-2",
    lg: "text-[18px] px-5 py-3",
  };

  // Figma 색상 적용
  const variants = {
    // Log In: 텍스트 버튼
    text:
      "bg-transparent text-[#333333] hover:text-[#4B3DF6] focus-visible:outline-none",
    // Sign Up: 그라데이션 버튼
    primary:
      "text-white bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] hover:opacity-90",
    // 선택: 외곽선 버튼(필요 시 사용)
    outline:
      "border border-[#D1D5DB] text-[#333333] hover:border-[#8B5CF6] hover:text-[#4B3DF6]",
  };

  const width = fullWidth ? "w-full" : "";

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={isDisabled}
      className={cx(
        base,
        sizeMap[size],
        variants[variant],
        width,
        isDisabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer",
        className
      )}
      {...rest}
    >
      {/* 로딩 스피너 (심플) */}
      {loading && (
        <svg
          className="mr-2 h-4 w-4 animate-spin"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          />
        </svg>
      )}

      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
}
