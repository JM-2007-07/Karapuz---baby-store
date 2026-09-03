import React, { useState } from 'react'
import { Box, Typography, TextField, Checkbox } from '@mui/material'
import ButtonMain from '../components/ButtonMain'

export default function WholesaleClients() {
    const [formData, setFormData] = useState({
        name: 'Арсен',
        phone: '',
        email: '',
        city: '',
        agreement: false
    })

    const handleChange = (field) => (e) => {
        setFormData(prev => ({ ...prev, [field]: e.target.value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (formData.agreement) {
            console.log('Отправка формы оптовым клиентам:', formData)
        }
    }

    const inputStyles = {
        '& .MuiOutlinedInput-root': {
            borderRadius: '12px',
            bgcolor: '#FFFFFF',
            '& fieldset': { borderColor: 'rgba(127,201,240,0.3)' },
            '&:hover fieldset': { borderColor: '#7FC9F0' },
            '&.Mui-focused fieldset': { borderColor: '#7FC9F0' }
        },
        '& .MuiInputBase-input': {
            fontSize: '15px',
            color: '#446B80',
            py: '14px'
        }
    }

    return (
        <Box sx={{ width: '100%', maxWidth: '1500px', margin: 'auto', px: { xs: '15px', md: '25px' }, pt:{xs:'120px', md:'180px'}, pb:{xs:'20px', md:'40px'}}}>
            {/* Хлебные крошки */}
            <Box data-aos="fade-right" sx={{ display: 'flex', alignItems: 'center', gap: '8px', mb: '15px' }}>
                <Typography component="a" href="#" sx={{ textDecoration: 'none', color: 'rgba(68,107,128,0.6)', fontSize: '14px' }}>
                    Корзина
                </Typography>
                <Typography sx={{ color: 'rgba(68,107,128,0.6)', fontSize: '14px' }}>›</Typography>
                <Typography sx={{ color: '#446B80', fontSize: '14px', fontWeight: 500 }}>
                    Оптовым клиентам
                </Typography>
            </Box>

            {/* Заголовок */}
            <Typography data-aos="fade-up" component="h1" sx={{ fontFamily: '"Balsamiq Sans", sans-serif', color: '#446B80', fontSize: { xs: '32px', md: '48px' }, fontWeight: 700, mb: { xs: '20px', md: '30px' } }}>
                Оптовым клиентам
            </Typography>

            <Typography data-aos="fade-up" data-aos-delay="50" sx={{ color: '#446B80', fontSize: { xs: '16px', md: '18px' }, fontWeight: 700, mb: { xs: '25px', md: '35px' } }}>
                Заполните форму и мы отправим Вам выгодные условия партнерства
            </Typography>

            {/* Форма */}
            <Box data-aos="fade-up" data-aos-delay="100" component="form" onSubmit={handleSubmit} sx={{ maxWidth: '360px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <TextField
                    placeholder="Имя*"
                    value={formData.name}
                    onChange={handleChange('name')}
                    required
                    fullWidth
                    sx={inputStyles}
                />

                <TextField
                    placeholder="Телефон*"
                    value={formData.phone}
                    onChange={handleChange('phone')}
                    required
                    fullWidth
                    sx={inputStyles}
                />

                <TextField
                    placeholder="Электронный адрес*"
                    type="email"
                    value={formData.email}
                    onChange={handleChange('email')}
                    required
                    fullWidth
                    sx={inputStyles}
                />

                <TextField
                    placeholder="Город*"
                    value={formData.city}
                    onChange={handleChange('city')}
                    required
                    fullWidth
                    sx={inputStyles}
                />

                {/* Заглушка под каптчу */}
                <Box sx={{
                    width: '100%',
                    height: '52px',
                    border: '1px solid rgba(127,201,240,0.3)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    px: '14px',
                    bgcolor: '#FFFFFF'
                }}>
                    <Typography sx={{ color: 'rgba(68,107,128,0.4)', fontSize: '15px' }}>
                        Вставить каптчу
                    </Typography>
                </Box>

                {/* Чекбокс */}
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: '10px', mt: '4px' }}>
                    <Checkbox
                        checked={formData.agreement}
                        onChange={(e) => setFormData(prev => ({ ...prev, agreement: e.target.checked }))}
                        sx={{ color: 'rgba(127,201,240,0.5)', '&.Mui-checked': { color: '#7FC9F0' }, p: 0, mt: '2px' }}
                    />
                    <Typography sx={{ color: 'rgba(68,107,128,0.8)', fontSize: '13px', lineHeight: 1.4 }}>
                        Соглашение на обработку данных и пользовательское соглашение
                    </Typography>
                </Box>

                {/* Кнопка отправки */}
                <Box sx={{ mt: '8px' }}>
                    <ButtonMain type="submit" disabled={!formData.agreement} sx={{ width: '100%', height: '48px' }}>
                        Отправить
                    </ButtonMain>
                </Box>
            </Box>
        </Box>
    )
}