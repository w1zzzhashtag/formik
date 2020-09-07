import React from 'react';
import { Formik, Form, useField } from 'formik'
import * as Yup from 'yup'

// function App() {
//   return (
//     <Formik 
//       initialValues= {{
//         name: '',
//         age: '',
//         email: '',
//         job: '',
//         acceptedTerms: false,
//       }}
//       validationSchema = {Yup.object({
//         name: Yup.string()
//           .max(15, 'Must be 15 characters or less')
//           .required('Required'),
//         age: Yup.string()
//           .max(3, 'Must be 3 characters or less')
//           .required('Required'),
//         email: Yup.string()
//           .email('Invalid email address')
//           .required('Required'),
//         job: Yup.string()
//           .oneOf(
//             ['designer', 'development', 'product', 'other'],
//             'Invalid Job Type'
//           )
//           .required('Required'),
//         acceptedTerms: Yup.bool()
//           .required('Required')
//           .oneOf([true], 'You must accept the terms and conditions.'),
//       })}
//       onSubmit = {
//         (values, {setSubmitting }) => {
//           alert(JSON.stringify(values, null, 2));
//           setSubmitting(false);
//       }}
//     >
//       {formik => (
//         <div className="container">
//           <form onSubmit={formik.handleSubmit}>
//             <div className="input_wrapper">
//               <Field type="text" name="name" id="name" />
//               <label htmlFor="name" className="active">Name</label>
//               <div className="error"><ErrorMessage name="name" /></div>
//             </div>
//             <div className="input_wrapper">
//               <Field type="text" name="age" id="age" />
//               <label htmlFor="age" className="active">Age</label>
//               <div className="error"><ErrorMessage name="age" /></div>
//             </div>
//             <div className="input_wrapper">
//               <Field type="text" name="email" id="email" />
//               <label htmlFor="email" className="active">Email</label>
//               <div className="error"><ErrorMessage name="email" /></div>
//             </div>
//             <div className="input_wrapper">
//               <Field as="select" name="job">
//                 <option value="">Select a job type</option>
//                 <option value="designer">designer</option>
//                 <option value="development">development</option>
//                 <option value="product">product</option>
//                 <option value="other">other</option>
//               </Field>
//               <div className="error"><ErrorMessage name="job" /></div>
//             </div>
//             <div className="input_wrapper input_wrapper_checkbox">
//               <Field name="acceptedTerms" type="checkbox" id="acceptedTerms" />
//               <label htmlFor="acceptedTerms">I accept the terms and conditions</label>
//               <div className="error"><ErrorMessage name="acceptedTerms" /></div>
//             </div>
//             <button type="submit" className="btn">Send</button>
//           </form>
//         </div>
//       )}
//     </Formik>
//   );
// }


const MyTextInput = ({label, ...props}) => {
  const [field, meta] = useField(props)
  return (
    <div className="input_wrapper">
      <input {...field} {...props} />
      <label htmlFor={props.id || props.name}>{label}</label>
      {meta.touched && meta.error ? (<div className="error">{meta.error}</div>): null}
    </div>
  )
}

const MySelectInput = ({children, label, ...props}) => {
  const [field, meta] = useField(props)
  return (
    <div className="input_wrapper">
      <select {...field} {...props} >
        {children.map((item, i) => (
          <option key={i} value={item.props.value}>{item.props.children}</option>
        ))}
      </select>
      <label htmlFor={props.id || props.name}>{label}</label>
      {meta.touched && meta.error ? (<div className="error">{meta.error}</div>): null}
    </div>
  )
}

const MyCheckboxInput = ({label, ...props}) => {
  const [field, meta] = useField(props)
  
  return (
    <div className="input_wrapper input_wrapper_checkbox">
        <input {...props} {...field}/>
        <label htmlFor={props.id || props.name}>{label}</label>
        {meta.touched && meta.error ? (<div className="error">{meta.error}</div>) : null}
    </div>
  )
}

const App = () => {
  return (
    <div className="container">
      <Formik
        initialValues={{
          name: '',
          age: '',
          email: '',
          job: '',
          acceptedTerms: false
        }}
        validationSchema = {Yup.object({
          name: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          age: Yup.string()
            .max(3, 'Must be 3 characters or less')
            .required('Required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          job: Yup.string()
            .oneOf(
              ['designer', 'development', 'product', 'other'],
              'Invalid Job Type'
            )
            .required('Required'),
          acceptedTerms: Yup.bool()
            .required('Required')
            .oneOf([true], 'You must accept the terms and conditions.'),
        })}
        onSubmit = {
          (values, {setSubmitting }) => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }}
      >
        <Form>
          <MyTextInput label="Name" name="name" type="text" placeholder="Vlad" />
          <MyTextInput label="Age" name="age" type="text" placeholder="22" />
          <MyTextInput label="Email" name="email" type="text" placeholder="example@gmail.com" />
          <MySelectInput label="Job Type" name="job">
            <option value="">Select a job type</option>
            <option value="designer">designer</option>
            <option value="development">development</option>
            <option value="product">product</option>
            <option value="other">other</option>
          </MySelectInput>
          <MyCheckboxInput label="I accept the terms and conditions" type="checkbox" name="acceptedTerms" id="acceptedTerms" />
          <button type="submit" className="btn">Send</button>
        </Form>
      </Formik>
    </div>
    
  )
}

export default App;
