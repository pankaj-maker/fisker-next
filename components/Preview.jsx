import Image from "next/image";
import config from "@/app/assets/configs.json";

function Preview({
  color = "Sea Grass",
  interior="white",
  wheel = "AeroStealth",
}) {

  return (
    <>
      {/* Exterior Image */}
      <Image
        src={config[color].wheels[wheel]}
        width="0"
        height="0"
        sizes="100vw"
        className="w-full h-auto rounded-lg"
        alt="Aerostealth"
      />
      {/* Description */}
      <div className="py-3">
        <h3 className="font-bold text-xl text-blue-950">Metallic Gloss</h3>
        <p>{config[color].description}</p>
      </div>

      {/* Interior Image */}
      <Image
        src={`/images/interior/${interior}.jpeg`}
        width="0"
        height="0"
        sizes="100vw"
        className="w-full h-auto rounded-lg"
        alt="Aerostealth"
      />
      <p className="uppercase font-semibold text-stone-900 py-3">
        Interior Image
      </p>
    </>
  );
}

export default Preview;
