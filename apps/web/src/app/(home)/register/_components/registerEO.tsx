"use client"

import { Input } from '@/components/inputformik';
import { registerEO } from '@/libs/action/eo';
import { registerSchema } from '@/libs/schema';
import { EORegister, UserRegister } from '@/types/user';
import { Form, Formik } from 'formik';

export default function RegisterEO() {
  const initialValues: EORegister = {
    email: '',
    username: '',
    password: '',
    phone: ''
  }

  const onRegister = async (data: EORegister) => {
    try {
      const res = await registerEO(data);
      if (res.status == 'Error') throw res.msg;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="text-white">
      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={(values, action) => {
          onRegister(values), action.resetForm();
        }}
      >
        {() => {
          return (
            <Form>
              <div className="w-[500px] mx-auto pt-20 px-7">
                <p className="py-5">Email Address</p>
                <Input name="email" type="email" />
                <p className="py-5">User Name</p>
                <Input name="username" type="text" />
                <p className="py-5">Password</p>
                <Input name="password" type="password" />
                <p className="py-5">Phone Number</p>
                <Input
                  name="phone"
                  type="text"
                  placeholder="Example: 081234563456"
                />
                <div className="pt-6 pb-20 flex justify-center items-center">
                  <button type="submit" className="btn btn-outline btn-primary">
                    Register
                  </button>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
