'use client';

import { navigate } from '@/libs/action/server';
import { verificationProcess } from '@/libs/action/user';
import { toast } from 'react-toastify';

export default function Verification({
  params,
}: {
  params: { token: string };
}) {
  const onVerification = async (token: string) => {
    try {
      const { result, ok } = await verificationProcess(token);
      if (!ok) throw result.msg;
      toast.info(result.msg);
      navigate('/');
    } catch (error) {
      toast.error(error as string);
    }
  };

  return (
    <div>
      <button
        onClick={() => onVerification(params.token)}
        className="bg-blue-500 p-2 rounded-sm w-[100px] pt-96"
      >
        Verify
      </button>
    </div>
  );
}
