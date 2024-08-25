import { ErrorMessage, Field } from 'formik';
import React from 'react';

interface InputProps {
  name: string;
  type: React.HTMLInputTypeAttribute;
  placeholder?: string;
}

export const Input: React.FC<InputProps> = ({ name, type, placeholder }) => {
  return (
    <div className=''>
      <label className="input input-bordered gap-2 flex items-center">
        <Field
          type={type}
          placeholder={placeholder}
          name={name}
          autoComplete="off"
          className="grow"
        />
      </label>
        <ErrorMessage
          name={name}
          component="div"
          className="text-red-400 text-sm mt-1"
        />
    </div>
  );
};
