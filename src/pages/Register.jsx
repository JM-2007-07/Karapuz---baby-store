import React, { useState } from 'react'
import { Box, Typography, TextField, Checkbox } from '@mui/material'
import { useNavigate } from 'react-router'
import ButtonMain from '../components/ButtonMain'
import { useAuth } from '../context/AuthContext'

export default function Register() {
    const [formData, setFormData] = useState({name:'Анна',email:'',password:'',confirmPassword:'',agreement:false})
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const { register } = useAuth()

    const handleChange = (field) => (e) => {
        setFormData(prev => ({...prev,[field]:e.target.value}))
        if (error) setError('')
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!formData.name.trim()) {
            setError('Введите имя')
            return
        }

        if (!formData.email.trim()) {
            setError('Введите электронный адрес')
            return
        }

        if (formData.password.length < 6) {
            setError('Пароль должен содержать минимум 6 символов')
            return
        }

        if (formData.password !== formData.confirmPassword) {
            setError('Пароли не совпадают')
            return
        }

        if (!formData.agreement) {
            setError('Необходимо принять пользовательское соглашение')
            return
        }

        register({
            name:formData.name.trim(),
            email:formData.email.trim(),
            password:formData.password
        })

        navigate('/')
    }

    const inputStyles = {
        '& .MuiOutlinedInput-root':{
            borderRadius:'12px',
            bgcolor:'#FFFFFF',
            '& fieldset':{borderColor:'rgba(127,201,240,0.3)'},
            '&:hover fieldset':{borderColor:'#7FC9F0'},
            '&.Mui-focused fieldset':{borderColor:'#7FC9F0'}
        },
        '& .MuiInputBase-input':{
            fontSize:'15px',
            color:'#446B80',
            py:'14px'
        }
    }

    return (
        <Box sx={{width:'100%',maxWidth:'1500px',margin:'auto',px:{xs:'15px',md:'25px'},pt:{xs:'110px',md:'180px'},pb:'60px',textAlign:'start'}}>
            <Typography data-aos="fade-up" component="h1" sx={{fontFamily:'"Balsamiq Sans", sans-serif',color:'#446B80',fontSize:{xs:'32px',md:'44px'},fontWeight:700,mb:{xs:'25px',md:'35px'}}}>
                Регистрация
            </Typography>

            <Box data-aos="fade-up" data-aos-delay="50" component="form" onSubmit={handleSubmit} sx={{maxWidth:'360px',display:'flex',flexDirection:'column',gap:'16px'}}>
                <TextField placeholder="Имя" value={formData.name} onChange={handleChange('name')} required fullWidth sx={inputStyles} />

                <TextField placeholder="Электронный адрес" type="email" value={formData.email} onChange={handleChange('email')} required fullWidth sx={inputStyles} />

                <TextField placeholder="Пароль" type="password" value={formData.password} onChange={handleChange('password')} required fullWidth sx={inputStyles} />

                <TextField placeholder="Повторите пароль" type="password" value={formData.confirmPassword} onChange={handleChange('confirmPassword')} error={!!error} helperText={error} required fullWidth sx={inputStyles} />

                <Box sx={{width:'140px',height:'46px',border:'1px solid rgba(127,201,240,0.3)',borderRadius:'10px',display:'flex',alignItems:'center',justifyContent:'center',bgcolor:'#FFFFFF'}}>
                    <Typography sx={{color:'rgba(68,107,128,0.5)',fontSize:'13px'}}>
                        Вставить каптчу
                    </Typography>
                </Box>

                <Box sx={{display:'flex',alignItems:'flex-start',gap:'10px',mt:'4px'}}>
                    <Checkbox checked={formData.agreement} onChange={(e) => setFormData(prev => ({...prev,agreement:e.target.checked}))} sx={{color:'rgba(127,201,240,0.5)','&.Mui-checked':{color:'#7FC9F0'},p:0,mt:'2px'}} />

                    <Typography sx={{color:'rgba(68,107,128,0.8)',fontSize:'12px',lineHeight:1.4}}>
                        Согласие с{' '}
                        <Box component="a" href="#" sx={{color:'#7FC9F0',textDecoration:'none'}}>
                            пользовательским соглашением
                        </Box>
                        {' '}и{' '}
                        <Box component="a" href="#" sx={{color:'#7FC9F0',textDecoration:'none'}}>
                            политикой конфиденциальности
                        </Box>
                    </Typography>
                </Box>

                <Box sx={{mt:'8px'}}>
                    <ButtonMain onClick={handleSubmit} disabled={!formData.agreement} sx={{width:'170px',height:'44px',fontSize:'14px'}}>
                        Зарегистрироваться
                    </ButtonMain>
                </Box>
            </Box>
        </Box>
    )
}