"use client";
type ButtonProps = {
  text: string;
  onClick: () => void;
};

const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <div className="inline-block relative bg-primary pb-0.5 rounded-lg border-2 border-base-primary">
      <button
        className="w-[calc(100%+4px)] px-4 py-2 border-2 border-base-primary -translate-x-[2px] -translate-y-[2px]
    rounded-lg bg-white
    text-md font-bold
    text-base-primary"
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
