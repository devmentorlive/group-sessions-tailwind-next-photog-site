import { OutlineButton } from "@/ui";

export default function HowItWorks({}) {
  return (
    <div className="bg-brown-100 md:p-16 md:my-8 md:relative">
      <div className="flex items-center flex-col-reverse md:flex-row-reverse">
        <div className="md:w-1/2 md:p-0 p-8 z-50 bg-brown-100 w-5/6 mx-auto -mt-8 md:mt-0  md:mx-8">
          <div className="text-center text-3xl md:text-5xl font-light">
            From start to finish, it's all about you.
          </div>
          <p className="text-center my-8 tracking-normal leading-normal text-base md:text-3xl font-light">
            We're here to connect with and capture your most radiant self, so
            your comfort will always come first. You'll be guided from start to
            finish for a fun, worry-free session with stunning results.
          </p>
          <div className="flex justify-center z-40 md:relative ">
            <OutlineButton>How it works</OutlineButton>
          </div>
        </div>

        <div className="md:w-1/2 w-full flex justify-center">
          <img src="/photos/ALX00876.png" />
        </div>
      </div>
    </div>
  );
}
