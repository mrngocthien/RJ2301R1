import * as Yup from 'yup'

Yup.setLocale({
    mixed: {
        required: 'Truong nay khong duoc bo trong'
    },
    string: {
        email: 'Truong nay bat buoc la email',
    }
})

const MailFormDTO = Yup.object().shape({
    email: Yup.string().required().email(),
    title: Yup.string().required().min(4).max(12),
    file: Yup.string().required()
});

export default MailFormDTO;