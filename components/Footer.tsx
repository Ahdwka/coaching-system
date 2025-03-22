import { Instagram } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="bottom-0 left-0 right-0 z-50">
        <div className="bg-black left-0 p-15">
          <button dir="ltr" className="relative p-6">
            <Link
              className="underline fixed left-20 text-white/65 hover:text-white flex"
              href={"/https://www.instagram.com/ali.kahwahjii/#"}
            >
              <Instagram className="h-6 w-6" />
              <div className="mx-2">@ali.kahwahjii</div>
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}
