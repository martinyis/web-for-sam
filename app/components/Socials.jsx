import React from "react";
import Image from "next/image";
import Link from "next/link";
function Socials() {
  return (
    <div className="flex items-center gap-[10px]">
      <Link
        href="https://www.facebook.com/profile.php?id=61554389065537"
        target="_blank"
      >
        <Image src="/facebookk.png" alt="facebook" width={26} height={26} />
      </Link>
      <Link href="https://x.com/SamFarringtonNH" target="_blank">
        <Image src="/twitterr.png" alt="twitter" width={28} height={28} />
      </Link>
    </div>
  );
}

export default Socials;
