import { PiLineVerticalThin } from 'react-icons/pi';

export interface IData {
  email: string;
  username: string;
  phone: string;
}

export default function EvorgProfileTemplate({
  email,
  username,
  phone,
}: IData) {
  return (
    <div>
      <div className="avatar flex justify-center pt-24">
        <div className="w-60 h-60 rounded-full">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <div className="flex justify-center gap-28 py-28 items-center">
        <div className="text-white text-xl">
          <h1 className="pt-5 tracking-wider">USERNAME</h1>
          <h1 className="pt-5 tracking-wider">EMAIL ADDRESS</h1>
          <h1 className="pt-5 tracking-wider">PHONE NUMBER</h1>
        </div>
        <div className="flex-col">
          <PiLineVerticalThin size={60} className="text-white" />
          <PiLineVerticalThin size={60} className="text-white" />
          <PiLineVerticalThin size={60} className="text-white" />
          <PiLineVerticalThin size={60} className="text-white" />
          <PiLineVerticalThin size={60} className="text-white" />
          <PiLineVerticalThin size={60} className="text-white" />
          {/* <PiLineVerticalThin size={60} className="text-white" /> */}
        </div>
        <div className="text-white text-xl">
          <h1 className="pt-5 tracking-wide">{username}</h1>
          <h1 className="pt-5 tracking-wide">{email}</h1>
          <h1 className="pt-5 tracking-wide">{phone}</h1>
        </div>
      </div>
    </div>
  );
}
