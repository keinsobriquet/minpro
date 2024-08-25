'use client'

import Link from "next/link";
import { BiBold, BiSolidDiscount } from "react-icons/bi";
import { BsTicketPerforated } from "react-icons/bs";
import { CiLogin, CiLogout } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { Field, Form, Formik } from "formik";
import * as yup from 'yup'
import Image from "next/image";
import { MdPersonAddAlt } from "react-icons/md";

interface ISearch {
  search: string;
}

export default function VisitorNavbar() {

  const initialValue = {
    search: ''
  }

  const validationSchema = yup.object().shape({
    search: yup.string().required()
  })

  return (
    <div className="fixed z-50">
      <div className="flex justify-between items-center navbar fixed  text-white  backdrop-blur-sm bg-white/5 px-5">
        <Link href={"/"} className="w-[291px]"><Image src={"/lecalicusicon.svg"} width={50} height={100} alt=""/></Link>
        <div className="flex gap-10">
          <Link href={"/eventlist"}>EVENTS</Link>
          <Link href={"/documentation"}>DOCUMENTATION</Link>
          <Link href={"/eventA"}>REVIEWS</Link>
        </div>
        <div className="flex gap-8">


          <div className="form-control">
            <Formik
              initialValues={initialValue}
              onSubmit={(values, action) => {
                alert(JSON.stringify(values))
                action.resetForm()
              }}
            >
              <Form>
                <Field type="text" name="search" placeholder="Search..." className="input input-bordered w-24 md:w-auto bg-white/5" />
              </Form>
            </Formik>
          </div>



          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <GoPerson size={27}/>
            </div>
            <ul tabIndex={0} className=" menu menu-sm dropdown-content bg-white/5 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-1">
              <Link href={"/register"} className="flex items-center gap-2 hover:text-teal-500 duration-150">
                <MdPersonAddAlt />
                <p className="justify-between hover text-lg">REGISTER</p>
              </Link>
              <Link href={"/login"} className="flex items-center gap-2 hover:text-teal-500 duration-150">
                <CiLogin />
                <p className="justify-between hover text-lg">LOGIN</p>
              </Link>
              <Link href={"/"} className="flex items-center gap-2 hover:text-teal-500 duration-150">
                <CiLogout />
                <p className="justify-between hover text-lg">LOGOUT</p>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
