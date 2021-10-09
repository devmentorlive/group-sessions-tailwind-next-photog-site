import { SolidButton } from "@/ui";

export default function BookYourSession({}) {
  return (
    <div className="bg-brown-100 p-20 text-2xl font-thin text-center">
      <div className="w-3/5 mx-auto leading-loose font-sans font-light">
        <p>
          Enjoy an intimate portrait experience that's crafted to celebrate you.
          Whether a personal tale of love, motherhood, or simply a moment in
          time, your story deserves to be told.
        </p>
      </div>
      <SolidButton>Book your session</SolidButton>
    </div>
  );
}