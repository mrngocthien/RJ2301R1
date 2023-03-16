import { useFormik } from 'formik';
import ContactFormDTO from '../dto/ContactFormDTO';

function ContactForm() {
  const {errors, values, handleSubmit, handleChange} = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: ''
    },
    validationSchema: ContactFormDTO,
    onSubmit: (values) => {
      console.log(values)
    },
    validateOnChange: false,
  });

  return (
        <div className="container">
          <h1>contact form</h1>
          <form onSubmit={handleSubmit}>
            <label>
            Name:
            <input type="text" name="name" value={values.name} onChange={handleChange} />
            {errors.name && <span className="error">{errors.name}</span>}
            </label>
            <label>
            Email:
            <input type="email" name="email" value={values.email} onChange={handleChange} />
            {errors.email && <span className="error">{errors.email}</span>}
            </label>
            <label>
            Phone:
            <input type="tel" name="phone" value={values.phone} onChange={handleChange} />
            {errors.phone && <span className="error">{errors.phone}</span>}
            </label>
            <label>
            Message:<br/>
            <textarea type="text" cols={49} rows={4} name="message" value={values.message} onChange={handleChange} />
            {errors.message && <span className="error">{errors.message}</span>}
            </label>
            <button type="submit" onClick={handleSubmit}>
            Submit
            </button>
          </form>
        </div>
      );
}

export {ContactForm}

// export default function ContactForm() {
//   const [form, setForm] = useState({});
//   const [errors, setErrors] = useState({});

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setForm((prevForm) => ({ ...prevForm, [name]: value }));
//   };

//   const handleValidate = (values) => {
//     const newErrors = {};

//     if (!values.name) {
//       newErrors.name = 'Required';
//     }

//     if (!values.email) {
//       newErrors.email = 'Required';
//     } else if (!REGEX.email.test(values.email)) {
//       newErrors.email = 'Invalid email address';
//     }

//     if (!values.phone) {
//       newErrors.phone = 'Required';
//     } else if (!REGEX.phone.test(values.phone)) {
//         newErrors.phone = 'Invalid phone number';
//     }

//     if (!values.message) {
//         newErrors.message = 'Required';
//     }

//     setErrors(newErrors);
//     return newErrors;
//   };

//   const handleSubmit = () => {
//     alert('Contact added successfully!');
//   };

//   return (
//     <div className="container">
//         <h1>contact form</h1>
//         <Formik
//             enableReinitialize={true}
//             initialValues={form}
//             validate={handleValidate}
//             onSubmit={handleSubmit}
//         >
//             {({ values, handleSubmit, isSubmitting }) => (
                
//             <form onSubmit={handleSubmit}>
//                 <label>
//                 Name:
//                 <input type="text" name="name" value={values.name || ''} onChange={handleChange} />
//                 {errors.name && <span className="error">{errors.name}</span>}
//                 </label>
//                 <label>
//                 Email:
//                 <input type="email" name="email" value={values.email || ''} onChange={handleChange} />
//                 {errors.email && <span className="error">{errors.email}</span>}
//                 </label>
//                 <label>
//                 Phone:
//                 <input type="tel" name="phone" value={values.phone || ''} onChange={handleChange} />
//                 {errors.phone && <span className="error">{errors.phone}</span>}
//                 </label>
//                 <label>
//                 Message:<br/>
//                 <textarea type="text" cols={49} rows={4} name="message" value={values.message || ''} onChange={handleChange} />
//                 {errors.message && <span className="error">{errors.message}</span>}
//                 </label>
//                 <button type="submit" disabled={isSubmitting}>
//                 Submit
//                 </button>
//             </form>
//             )}
//         </Formik>
//     </div>
//   );
// }

