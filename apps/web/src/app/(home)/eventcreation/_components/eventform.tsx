'use client';

import { Input } from '@/components/inputformik';
import { eventCreate } from '@/libs/action/eventdata';
import { eventDataSchema } from '@/libs/schema';
import { CreateEvent } from '@/types/event';
import { Form, Formik } from 'formik';

export default function EventForm() {
  const initialValues: CreateEvent = {
    eventname: '',
    type: '',
    price:0,
    date: '',
    venue: '',
    quota:0,
    category: '',
    description: '',
  };

  const eventDetail = async (data: CreateEvent) => {
    try {
      const res = await eventCreate(data);  
      if ((res.ok = false)) throw res.result;
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={eventDataSchema}
        onSubmit={(values, action) => {
          eventDetail(values), action.resetForm();
          console.log(values);
          
        }}
      >
        {() => {
          return (
            <Form>
              <div className="w-[500px] mx-auto pt-20 px-7">
                <p className="py-5">Event Name</p>
                <Input name="eventname" type="text" />
                <p className="py-5">Type</p>
                <Input name="type" type="text" />
                <p className="py-5">Price</p>
                <Input name="price" type="number" />
                <p className="py-5">Venue</p>
                <Input name="venue" type="text" />
                <p className="py-5">Date</p>
                <Input name="date" type="text" />
                <p className="py-5">Quota</p>
                <Input name="quota" type="number" />
                <p className="py-5">Category</p>
                <Input name="category" type="text" />
                <p className="py-5">Description</p>
                <Input name="description" type="text" />
              </div>
              <div className="pt-6 pb-20 flex justify-center items-center">
                <button type="submit" className="btn btn-outline btn-primary">
                  Create
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
