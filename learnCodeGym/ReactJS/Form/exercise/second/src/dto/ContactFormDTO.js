import * as Yup from 'yup'

Yup.setLocale({
    mixed: {
        required: 'Truong nay khong duoc bo trong'
    },
    string: {
        email: 'Truong nay bat buoc la email'
    },
    number: {
        phone: 'Truong nay bat buoc la so'
    }
})

const ContactFormDTO = Yup.object().shape({
    name: Yup.string().required().min(4).max(12),
    email: Yup.string().required().email(),
    phone: Yup.number().required()
});

export default ContactFormDTO;