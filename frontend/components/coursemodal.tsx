"use client";
import Link from "next/link";
import { useState, useRef } from "react";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

export default function CourseModal({ children }: { children: React.ReactNode }) {
  const [hovered, setHovered] = useState(false);
  const leaveTimer = useRef<number | null>(null);

  const open = () => {
    if (leaveTimer.current) window.clearTimeout(leaveTimer.current);
    setHovered(true);
  };

  const close = () => {
    if (leaveTimer.current) window.clearTimeout(leaveTimer.current);

    leaveTimer.current = window.setTimeout(() => setHovered(false), 120);
  };

  return (
    <>
      <Popover className="relaive" onMouseEnter={open} onMouseLeave={close}>
        <PopoverButton className="focus:outline-none hover:text-amber-50">
          {children}
        </PopoverButton>
        <PopoverPanel
          static
          anchor="bottom"
          className={[
            "absolute left-0 top-full mt-2 w-max rounded-xl bg-white/30 text-black shadow-md backdrop-blur",
            "transition duration-150 ease-out ",
            hovered ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1 pointer-events-none",
          ].join(" ")}
        >
          <div className="flex flex-col space-y-2 p-3">
            <Link href="/dachdecker-mastery" className="hover:text-amber-50">Dachdecker Mastery</Link>
            <Link href="/rinnen-masterclass" className="hover:text-amber-50">Rinnen Masterclass</Link>
            <Link href="/dacheinteilung" className="hover:text-amber-50">Dacheinteilung</Link>
          </div>
        </PopoverPanel>
      </Popover>
    </>
  );
}
