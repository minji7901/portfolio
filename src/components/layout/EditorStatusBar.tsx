import { Check, Code2, GitBranch } from "lucide-react";
export default function EditorStatusBar({
  isLightTheme,
}: {
  isLightTheme: boolean;
}) {
  return (
    <div className="studio-status">
      <span>
        <GitBranch size={13} /> main*{" "}
        <span className="status-check">
          <Check size={13} /> Ready to explore
        </span>
      </span>
      <span>
        HTML · CSS · A LITTLE MAGIC{" "}
        <span className="status-encoding">
          UTF-8 &nbsp; {isLightTheme ? "Daylight" : "Midnight"}
        </span>
        <Code2 size={13} />
      </span>
    </div>
  );
}
