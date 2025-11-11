"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";


export function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href}
      aria-current={isActive ? "page" : undefined}
      scroll
      className={["px-3 py-2 rounded-md transition",
        isActive ? "text-yellow-600 font-medium" : "text-black",
        "hover:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-300",
      ].join(" ")}>
      {children}
    </Link>
  );
}