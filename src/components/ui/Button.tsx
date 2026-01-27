"use client";

type ButtonProps = {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

const Button = ({
  text,
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) => {
  return (
    <div className="inline-block relative bg-primary pb-0.5 rounded-lg border-2 border-base-primary">
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`
          w-[calc(100%+4px)] px-4 py-2
          border-2 border-base-primary
          -translate-x-[2px] -translate-y-[2px]
          rounded-lg bg-white
          text-md font-bold text-base-primary
          disabled:opacity-50 disabled:cursor-not-allowed
        `}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
