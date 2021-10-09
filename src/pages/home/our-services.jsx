import { OutlineButton } from "@/ui";

export default function OurServices({}) {
  return (
    <div className="flex items-center flex-col md:flex-row-reverse">
      <div className="md:w-1/2 w-full  flex justify-center">
        <img src="/photos/ALX03306.png" />
      </div>

      <div className="md:w-1/2 md:p-0 p-8 z-50 bg-brown-100 w-5/6 mx-auto -mt-8 md:mt-0 md:mx-8">
        <div className="text-center text-3xl md:text-5xl font-light">
          An experience like no other.
        </div>
        <p className="text-center my-8 tracking-normal leading-normal text-base md:text-3xl font-light">
          We offer three unique ways to make magic together. Each includes
          Tati's signature smile and an unforgettable session that will result
          in your favorite photos—ever.
        </p>
        <div className="flex justify-center z-40 md:relative ">
          <OutlineButton>Our Services</OutlineButton>
        </div>
      </div>
    </div>
  );
}
