import React from 'react'
import { Button, Box, Typography, Modal, TextField, Alert } from '@mui/material'
import { useForm, Controller, SubmitHandler } from "react-hook-form"
import InputMask from 'react-input-mask';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 4,
};

type ContactUsData = {
    phoneNumber: string,
    name: string,
    message: string
}

export const ContactUs: React.FC<{}> = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    let [success, setSuccess] = React.useState<boolean | null>(null)

    const {
        control,
        formState: {
            errors,
        },
        handleSubmit,
    } = useForm<ContactUsData>({
        defaultValues: {
            phoneNumber: '',
            message: '',
            name: ''
        },

    });

    const onSubmit: SubmitHandler<ContactUsData> = (data) => {

        let phone = data.phoneNumber.replace(/\D/g, "")
        data.phoneNumber = `+${phone}`
        // data готова к отправке, следующий  код нужен для выполнения условия тестового задания
        // 7. Результат работы формы: вывод файла anyName.json клиенту(пользователю отправившему форму)
        let blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
        let url = URL.createObjectURL(blob)
        const a = document.createElement('a');
        a.href = url;
        a.download = 'anyName.json';
        a.type = 'application/json';
        a.addEventListener('click', () => {
            setTimeout(() => window.URL.revokeObjectURL(url), 10000);
        })
        a.click()
        console.log(data)
        setSuccess(true)
    }


    return (
        <div>
            <Button variant='contained' onClick={handleOpen}>Open modal</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Свяжитесь с нами
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
                        <Controller
                            name="name"
                            control={control}
                            rules={{ required: 'Введите имя', }}
                            render={({ field }) => <TextField {...field}
                                error={!!errors.name}
                                focused
                                color={!errors.name ? 'success' : 'error'}
                                helperText={errors.name ? errors.name?.message : ''}
                                label="Имя" variant="filled"
                                fullWidth margin='dense' />}
                        />
                        <Controller
                            name="message"
                            control={control}
                            rules={{ required: 'Введите сообщение' }}
                            render={({ field }) => <TextField {...field}
                                error={!!errors.message}
                                color={!errors.message ? 'success' : 'error'}
                                focused
                                helperText={errors.message ? errors.message?.message : ''}
                                label="Сообщение" variant="filled"
                                multiline rows={4}
                                fullWidth margin='dense' />}
                        />
                        <Controller
                            name="phoneNumber"
                            control={control}
                            rules={{
                                required: 'Введите телефон',
                                pattern: {
                                    value: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){11,14}(\s*)?$/,
                                    message: 'Введите коррекный номер телефона',
                                },
                            }}
                            render={({ field }) => <InputMask {...field} mask='+7 (999) 999-99-99'>
                                <TextField
                                    fullWidth
                                    focused
                                    color={!errors.phoneNumber ? 'success' : 'error'}
                                    margin='normal'
                                    error={!!errors.phoneNumber}
                                    helperText={errors.phoneNumber ? errors.phoneNumber?.message : ''}
                                    label="Ваш номер телефона"
                                    variant="filled" />
                            </InputMask>}
                        />
                        {success === true && <Alert variant="outlined" severity="success">
                            Информация успешно передана!
                        </Alert>}
                        {success === false && <Alert variant="outlined" severity="error">
                            Ошибка, попробуйте ещё раз
                        </Alert>}

                        <Button type='submit' variant='contained' sx={{ mt: 2 }}>Отправить</Button>
                        <Button onClick={() => setSuccess(false)} variant='contained' sx={{ mt: 2 }}>Посмотреть сообщение об ошибке при передаче данных</Button>
                    </Box>
                </Box>
            </Modal>
        </div>
    )
}