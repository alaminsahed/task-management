import { Medal } from "lucide-react";
import Link from "next/link";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";

import { Button } from "@/components/ui/button";
import { cn } from "../../lib/utils";

const headingFont = localFont({
  src: "../../public/font.woff2",
});

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "700"],
});

export default function MarketingPage() {
  return (
    <div className="flex items-center justify-center flex-col h-screen">
      <div
        className={cn(
          "flex items-center justify-center flex-col",
          headingFont.className
        )}
      >
        <div className="mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
          <Medal className="h-6 w-6 mr-2" />
          No 1 task managment
        </div>
        <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
          Testify helps team move
        </h1>
        <div className="text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white p-4 rounded-md">
          work forword
        </div>
      </div>
      <div
        className={cn(
          "text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto",
          textFont.className
        )}
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque amet
        minima soluta voluptas eum eligendi sunt debitis inventore obcaecati.
        Explicabo, ex veritatis inventore natus vel, totam et possimus harum
        fugit maxime, dolore unde qui illum laborum voluptatem aperiam debitis
        libero! Consequatur, molestiae. Fugit corporis quasi excepturi
        laudantium earum quos beatae.
      </div>
      <Button className="mt-6" size="lg" asChild>
        <Link href="/singUp">Get testify for free</Link>
      </Button>
    </div>
  );
}
