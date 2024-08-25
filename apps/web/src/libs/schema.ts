import * as Yup from 'yup';

export const registerSchema = Yup.object({
  email: Yup.string().email('invalid format').required('Email is required'),
  username: Yup.string().required('username is required'),
  password: Yup.string().required('Password is required'),
  phone: Yup.string().required('Phone number is required'),
  codeUsed: Yup.string().notRequired(),
});

export const loginSchema = Yup.object({
  data: Yup.string().required('please use correct username or email'),
  password: Yup.string().required('password is required'),
});

export const eventDataSchema = Yup.object({
  eventname: Yup.string().required('Please fill in the event name'),
  type: Yup.string().required('Please choose the type'),
  price: Yup.number().required('Please put in the price'),
  date: Yup.string().required('Please put in the date'),
  venue: Yup.string().required(
    'Please insert the location where the event will be held',
  ),
  quota: Yup.number().required('Please fill in the amount of available quota'),
  description: Yup.string().required('Please enter the description'),
  category: Yup.string().required('Please enter the category'),
});

export const eventSchema = Yup.object({
  eventname: Yup.string().required('please insert the name of the event'),
  type: Yup.string().required('insert the type'),
  price: Yup.number().required('please insert the price'),
  date: Yup.string().required('please insert when the event is gonna be held'),
  venue: Yup.string().required('please insert where the event is gonna be held'),
  quota: Yup.number().required('please insert how many people can attend the event'),
  category: Yup.string().required('please insert the category of the event'),
  description: Yup.string().required('please insert the description of the event'),
})
