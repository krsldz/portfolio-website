import Link from "next/link";
import Image from "next/image";

import { smLinks } from "@/constants/socialMedia";

export default function Footer() {
  return (
    <footer className="flex flex-row justify-between items-center text-primary">
      <div className="flex flex-row justify-center items-center ml-20">
        {smLinks.map((link) => (
          <Link href={link.path} key={link.name} target="_blank">
            <Image
              className="ml-6"
              width={30}
              height={30}
              src={link.icon}
              priority
              alt={link.name}
            />
          </Link>
        ))}
      </div>
      <div className="w-1/3 p-10 mr-20 text-sm">
        This website was built using Next.js, TypeScript and Tailwind CSS, then
        carefully deployed with Vercel.
      </div>
    </footer>
  );
}
