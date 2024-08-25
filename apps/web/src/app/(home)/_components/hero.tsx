import { arch, play, spce } from '@/types/font';

export default function Hero() {
  return (
    <div className='bg-transparent w-full relative h-[500px]'>
      <video
        src="/Merge1.mp4"
        className="w-full absolute z-10 object-cover h-[500px]"
        autoPlay
        muted
        loop
      ></video>
      <div className="bg-black h-[500px] w-full z-20 absolute opacity-50"></div>
      <div className={spce.className}>
        <div className='absolute z-20 w-full'>
          <h1 className=" text-white text-4xl text-center py-[220px]">Lorem ipsum dolor sit amet.</h1>
        </div>
      </div>
    </div>
  );
}
