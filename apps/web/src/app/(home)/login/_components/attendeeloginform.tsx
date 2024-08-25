'use client';

import { Input } from '@/components/inputformik';
import { createCookie, navigate } from '@/libs/action/server';
import { loginUser } from '@/libs/action/user';
import { loginSchema } from '@/libs/schema';
import { UserLogin } from '@/types/user';
import { Form, Formik, FormikHelpers } from 'formik';
import { toast } from 'react-toastify';

export default function ATTLoginForm() {
  const initialValues: UserLogin = {
    data: '',
    password: '',
  };

  const onLogin = async (data: UserLogin, action: FormikHelpers<UserLogin>) => {
    try {
      const { result, ok } = await loginUser(data);
      if (!ok) throw result.msg;
      console.log(result);
      createCookie('token', result.token);
      toast.info(result.msg);
      action.resetForm();
      navigate('/');
    } catch (err) {
      toast.error(err as string);
      console.log(err);
    }
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={(values, action) => {
          onLogin(values, action);
        }}
      >
        {() => {
          return (
            <Form>
              <div className="text-white">
                <div className="w-[500px] mx-auto pt-52 px-7">
                  <p className="py-5">Email Address</p>
                  <Input name="data" type="string" />
                  <p className="py-5">Password</p>
                  <Input name="password" type="password" />
                </div>
                <div className="pt-6 pb-20 flex justify-center items-center">
                  <button type="submit" className="btn btn-outline btn-primary">
                    Login
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
