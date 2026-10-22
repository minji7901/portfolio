"use client";

import { useState } from "react";
import { RotateCw } from "lucide-react";
import { usePointerParallax } from "@/hooks/usePointerParallax";

export default function HeroArtwork() {
  const [isRemixed, setIsRemixed] = useState(false);
  const pointer = usePointerParallax<HTMLDivElement>();

  return (
    <div className={`hero-art ${isRemixed ? "is-remixed" : ""}`} {...pointer}>
      <div className="art-scene" aria-hidden="true">
        <div className="art-grid" />
        <span className="art-coordinate">FIG. 01 — ALWAYS IN PROGRESS</span>
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="asterisk">✳</div>
        <span className="floating-tag tag-html">
          &lt;div class=&quot;possibility&quot;&gt;
        </span>
        <span className="floating-tag tag-css">
          .detail &#123; matters: true; &#125;
        </span>
        <div className="art-sticker">
          PIXEL
          <br />
          BY PIXEL <span>↗</span>
        </div>
        <span className="art-caption">
          a little code.
          <br />a lot of care.
        </span>
      </div>
      <button
        className="art-remix"
        aria-label="그래픽 색상과 배치 바꾸기"
        aria-pressed={isRemixed}
        onClick={() => setIsRemixed(!isRemixed)}
      >
        <RotateCw size={13} />
        <span>{isRemixed ? "ONCE MORE?" : "GIVE IT A TWIST"}</span>
      </button>
    </div>
  );
}
