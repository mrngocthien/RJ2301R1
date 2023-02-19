import React, { useState } from 'react';
import { Formik } from 'formik';

const SEX_LIST = [
  { label: 'Nam', value: 'male' },
  { label: 'Nữ', value: 'female' },
];

const REGEX = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    phone: /^(\+84|0)(3[2-9]|5[689]|7[0|6-9]|8[1-5])+([0-9]{7})$/,
    passport: /^VN\d{7}$/,
    birthYear: /[0-9]{4}/
};

export default function HealthDeclaration() {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const value = event.target.type === 'checkbox' ? !form[event.target.name] : event.target.value;
    setForm((prevForm) => ({ ...prevForm, [event.target.name]: value }));
  };

  const handleValidate = (values) => {
    const newErrors = {};

    //name
    if (!values.name) {
        newErrors.name = ' Required';
    }

    //passport
    if (!values.passport) {
        newErrors.passport = ' Required';
    } else if (!REGEX.passport.test(values.passport)) {
          newErrors.passport = 'Invalid passport number';
    }

    //birth year
    if (!values.birthYear) {
        newErrors.birthYear = ' Required';
    } else if (!REGEX.birthYear.test(values.birthYear)) {
        newErrors.birthYear = ' Invalid birth year';
    } else if (values.birthYear <= 1900) {
        newErrors.birthYear = ' Birth year must larger than 1900';
    }

    //sex
    if (!values.sex) {
        newErrors.sex = ' Required';
    }

    //national
    if (!values.national) {
        newErrors.national = ' Required';
    }

    //province
    if (!values.province) {
        newErrors.province = ' Required';
    }

    //district
    if (!values.district) {
        newErrors.district = ' Required';
    }

    //ward
    if (!values.ward) {
        newErrors.ward = ' Required';
    }
    //village
    if (!values.village) {
        newErrors.village = ' Required';
    }

    //phone
    if (!values.phone) {
        newErrors.phone = ' Required';
    } else if (!REGEX.phone.test(values.phone)) {
          newErrors.phone = 'Invalid phone number';
    }

    //email
    if (!values.email) {
        newErrors.email = ' Required';
    } else if (!REGEX.email.test(values.email)) {
        newErrors.email = 'Invalid email address';
    }
    setErrors(newErrors);
    return newErrors;
  };

  const handleSubmit = () => {
    alert('Created successfully!');
    setForm({});
  };

  return (
    <div className="container">
      <h1>tờ khai y tế</h1>
        <Formik
            enableReinitialize={true}
            initialValues={form}
            validate={handleValidate}
            onSubmit={handleSubmit}
        >
            {({ values, handleSubmit, isSubmitting }) => (
            <form onSubmit={handleSubmit}>
                <label>
                Họ tên:
                    {errors.name && <span className="error">{errors.name}</span>}
                    <input type="text" name="name" value={values.name || ''} onChange={handleChange} />
                
                </label>
                <label>
                Số CCCD / Hộ chiếu:
                    {errors.passport && <span className="error">{errors.passport}</span>}
                    <input type="text" name="passport" value={values.passport || ''} onChange={handleChange} />
                </label>
                <label>
                Năm sinh:
                    {errors.birthYear && <span className="error">{errors.birthYear}</span>}
                    <input type="number" name="birthYear" value={values.birthYear || ''} onChange={handleChange} />
                </label>
                <label>
                Sex:
                    <select name="sex" value={values.sex || ''} onChange={handleChange}>
                        <option value="..."></option>
                        {SEX_LIST.map((item) => (
                        <option key={item.value} value={item.value}>
                            {item.label}
                        </option>
                        ))}
                    </select>
                    {errors.sex && <span className="error">{errors.sex}</span>}
                </label>
                <label>
                Quốc tịch:
                    {errors.national && <span className="error">{errors.national}</span>}
                    <input type="text" name="national" value={values.national || ''} onChange={handleChange} />
                </label>
                <label>
                Công ty:
                    <input type="text" name="company" value={values.company || ''} onChange={handleChange} />
                </label>
                <label>
                Bộ phận:
                    <input type="text" name="department" value={values.department || ''} onChange={handleChange} />
                </label>
                <label>
                Có thẻ bảo hiểm y tế:
                    <input type="checkbox" name="medicalId" checked={values.medicalId || false} onChange={handleChange} />
                </label>
                
                <h2>Địa chỉ liên lạc tại việt nam</h2>
                <label>
                Tỉnh thành:
                    {errors.province && <span className="error">{errors.province}</span>}
                    <input type="text" name="province" value={values.province || ''} onChange={handleChange} />
                </label>
                <label>
                Quận / huyện:
                    {errors.district && <span className="error">{errors.district}</span>}
                    <input type="text" name="district" value={values.district || ''} onChange={handleChange} />
                </label>
                <label>
                Phường / Xã:
                    {errors.ward && <span className="error">{errors.ward}</span>}
                    <input type="text" name="ward" value={values.ward || ''} onChange={handleChange} />
                </label>
                <label>
                Số nhà, phố, tổ dân phố / thôn / đội:
                    {errors.village && <span className="error">{errors.village}</span>}
                    <input type="text" name="village" value={values.village || ''} onChange={handleChange} />
                </label>
                <label>
                Điện thoại:
                    {errors.phone && <span className="error">{errors.phone}</span>}
                    <input type="number" name="phone" value={values.phone || ''} onChange={handleChange} />
                </label>
                <label>
                Email:
                    {errors.email && <span className="error">{errors.email}</span>}
                    <input type="email" name="email" value={values.email || ''} onChange={handleChange} />
                </label>
                <label>
                Trong vòng 14 ngày qua, Anh/Chị có đến quốc gia /vùng lãnh thỗ
                nào (Có thể đi qua nhiều quốc gia):
                </label>
                <label>
                    <textarea type="text" cols={39} rows={4} name="message" value={values.message || ''} onChange={handleChange} />
                </label><br/>
                <label>
                Trong vòng 14 ngày qua, Anh/Chị có thấy xuất hiện dấu hiệu nào
                sau đây không ?
                    <table>
                        <tr>
                            <td><input className='checkbox' type="checkbox" name="fever" checked={values.fever || false} onChange={handleChange} /></td>
                            <td colSpan={2}>Sốt</td>
                            
                        </tr>
                        <tr>
                            <td><input className='checkbox' type="checkbox" name="cough" checked={values.cough || false} onChange={handleChange} /></td>
                            <td colSpan={2}>Ho</td>
                        </tr>
                        <tr>
                            <td><input className='checkbox' type="checkbox" name="breathHeavily" checked={values.breathHeavily || false} onChange={handleChange} /></td>
                            <td colSpan={2}>Khó thở</td>
                        </tr>
                        <tr>
                            <td><input className='checkbox' type="checkbox" name="pneumonia" checked={values.pneumonia || false} onChange={handleChange} /></td>
                            <td colSpan={2}>Viêm phổi</td>
                        </tr>
                        <tr>
                            <td><input className='checkbox' type="checkbox" name="soreThroat" checked={values.soreThroat || false} onChange={handleChange} /></td>
                            <td colSpan={2}>Đau họng</td>
                        </tr>
                        <tr>
                            <td><input className='checkbox' type="checkbox" name="tired" checked={values.tired || false} onChange={handleChange} /></td>
                            <td colSpan={4}>Mệt mỏi</td>
                        </tr>
                    </table>
                </label><br/>
                <label>
                Trong vòng 14 ngày qua, Anh/Chị có tiếp xúc với ?
                    <table>
                        <tr>
                            <td><input type="checkbox" name="COVIDPatients" checked={values.COVIDPatients || false} onChange={handleChange} /></td>
                            <td>Người bệnh hoặc nghi ngờ, mắc bệnh COVID-19</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" name="fromCountryInfected" checked={values.fromCountryInfected || false} onChange={handleChange} /></td>
                            <td>Người từ nước có bệnh COVID-19</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" name="fluPerson" checked={values.fluPerson || false} onChange={handleChange} /></td>
                            <td>Người có biểu hiện (Sốt, ho, khó thở, viêm phổi)</td>
                        </tr>
                    </table>
                </label>
                <button type="submit" disabled={isSubmitting}>
                Submit
                </button>
            </form>
            )}
        </Formik>
    </div>
  );
}
