import Image from "next/image";
function Header() {
  return (
    <div className="flex flex-col  h-screen">
    <p className="text-1xl text-center font-semibold py-2">
      All electric • Dynamic • Driver Range
    </p>
    <header className="flex justify-between py-3 px-">
      <Image
        src="fisker.svg"
        height={80}
        width={80}
        alt="fisker"
        className="w-12 sm:w-16 h-auto cursor-pointer hover:scale-110
        transition-transform duration-100"
      />
      <span className="flex gap-2 items-center">
      <Image src="globe.svg" height={20} width={20} alt="globe"  />
      <p className="text-sm sm:text-base"></p>
      </span>
    </header>
  </div>
  );
}
export default Header;