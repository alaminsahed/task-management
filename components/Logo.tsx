import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";

import { cn } from "@/lib/utils";

const headingFont = localFont({
  src: "../public/font.woff2",
});

function Logo() {
  return (
    <Link href="/">
      <div className="hidden md:flex hover:opacity-75 gap-x-2 transition">
        <Image src="/logo.svg" alt="logo" height={30} width={30} />
        <p
          className={cn("text-lg pb-1 text-neutral-700", headingFont.className)}
        >
          Tastity
        </p>
      </div>
    </Link>
  );
}

export default Logo;
