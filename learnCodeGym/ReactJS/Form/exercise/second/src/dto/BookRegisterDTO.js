import * as Yup from 'yup'

Yup.setLocale({
    mixed: {
        required: 'Truong nay khong duoc bo trong'
    },
    number: {
        number: 'Truong nay la 1 so'
    }
})

const BookRegisterDTO = Yup.object().shape({
    title: Yup.string().required(),
    number: Yup.number().required()
});

export default BookRegisterDTO;