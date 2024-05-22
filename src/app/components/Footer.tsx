import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div className="bg-gray-200 py-8 mt-24 border-t-2 border-pinkLight">
      {/* TOP */}
      <div className="grid xl:grid-cols-10 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 ">
        {/* LEFT */}
        <div className="col-span-3 flex flex-col gap-8">
          <Link href="/" className="text-2xl tracking-wider font-semibold">
            MY STORE
          </Link>
          <p>
            3252 Winding Way, Central Plaza, Willowbrook, CA 90210, United
            States
          </p>
          <span className="font-semibold text-sm">nminhdung112@gmail.com</span>
          <span className="font-semibold text-xs">+84 909351644</span>
          <div className="flex items-center gap-4">
            <Image
              src="/facebook.png"
              alt=""
              width={16}
              height={16}
              className="object-cover"
            />
            <Image
              src="/x.png"
              alt=""
              width={16}
              height={16}
              className="object-cover"
            />
            <Image
              src="/youtube.png"
              alt=""
              width={16}
              height={16}
              className="object-cover"
            />
            <Image
              src="/instagram.png"
              alt=""
              width={16}
              height={16}
              className="object-cover"
            />
            <Image
              src="/pinterest.png"
              alt=""
              width={16}
              height={16}
              className="object-cover"
            />
          </div>
        </div>
        {/* CENTER */}
        <div className="col-span-4 mt-12 xl:mt-0 grid grid-cols-3 gap-8 ">
          <div className="flex flex-col gap-12">
            <h1 className="uppercase font-semibold">Company</h1>
            <div className="flex flex-col gap-4">
              <h2>About Us</h2>
              <h2>Careers</h2>
              <h2>Affiliates</h2>
              <h2>Blog</h2>
              <h2>Contact Us</h2>
            </div>
          </div>
          <div className="flex flex-col gap-12">
            <h1 className="uppercase font-semibold">Shop</h1>
            <div className="flex flex-col gap-4">
              <h2>New Arrivals</h2>
              <h2>Accessories</h2>
              <h2>Men</h2>
              <h2>Women</h2>
              <h2>All Products</h2>
            </div>
          </div>
          <div className="flex flex-col gap-12">
            <h1 className="uppercase font-semibold">Help</h1>
            <div className="flex flex-col gap-4">
              <h2>About Us</h2>
              <h2>Careers</h2>
              <h2>Affiliates</h2>
              <h2>Blog</h2>
              <h2>Contact Us</h2>
            </div>
          </div>
        </div>
        {/* RIGHT */}
        <div className="col-span-3 mt-12 xl:mt-0 flex flex-col gap-8 ">
          <h1 className="uppercase font-semibold ">SUBSCRIE</h1>
          <p>
            Be first to get the latest news about trends promotions and much
            more
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Email"
              className="px-2 py-4 outline-none"
            />
            <button className="px-2 py-4 uppercase bg-pinkLight text-white font-light">
              Join
            </button>
         
          </div>
          <span className="font-semibold">Secure Payments</span>
          <div className="flex items-center gap-4">
              <Image
                src="/discover.png"
                alt=""
                width={40}
                height={40}
                className="object-cover"
              />
              <Image
                src="/skrill.png"
                alt=""
                width={40}
                height={40}
                className="object-cover"
              />
              <Image
                src="/paypal.png"
                alt=""
                width={40}
                height={40}
                className="object-cover"
              />
              <Image
                src="/visa.png"
                alt=""
                width={40}
                height={40}
                className="object-cover"
              />
              <Image
                src="/mastercard.png"
                alt=""
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
