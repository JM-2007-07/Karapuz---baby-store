import React, { useState } from 'react'
import { Box, Typography, TextField, Checkbox } from '@mui/material'
import { useNavigate } from 'react-router'
import { useTranslation } from 'react-i18next'
import ButtonMain from '../components/ButtonMain'
import { useAuth } from '../context/AuthContext'
export default function Register() {
    const { t } = useTranslation()
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
            setError(t('register.errors.name'))
            return
        }
        if (!formData.email.trim()) {
            setError(t('register.errors.email'))
            return
        }
        if (formData.password.length < 6) {
            setError(t('register.errors.passwordLength'))
            return
        }
        if (formData.password !== formData.confirmPassword) {
            setError(t('register.errors.passwordMismatch'))
            return
        }
        if (!formData.agreement) {
            setError(t('register.errors.agreement'))
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
                {t('register.title')}
            </Typography>
            <Box data-aos="fade-up" data-aos-delay="50" component="form" onSubmit={handleSubmit} sx={{maxWidth:'360px',display:'flex',flexDirection:'column',gap:'16px'}}>
                <TextField placeholder={t('register.fields.name')} value={formData.name} onChange={handleChange('name')} required fullWidth sx={inputStyles} />
                <TextField placeholder={t('register.fields.email')} type="email" value={formData.email} onChange={handleChange('email')} required fullWidth sx={inputStyles} />
                <TextField placeholder={t('register.fields.password')} type="password" value={formData.password} onChange={handleChange('password')} required fullWidth sx={inputStyles} />
                <TextField placeholder={t('register.fields.confirmPassword')} type="password" value={formData.confirmPassword} onChange={handleChange('confirmPassword')} error={!!error} helperText={error} required fullWidth sx={inputStyles} />
                <Box sx={{width:'140px',height:'46px',border:'1px solid rgba(127,201,240,0.3)',borderRadius:'10px',display:'flex',alignItems:'center',justifyContent:'center',bgcolor:'#FFFFFF'}}>
                    <Typography sx={{color:'rgba(68,107,128,0.5)',fontSize:'13px'}}>
                        {t('register.captcha')}
                    </Typography>
                </Box>
                <Box sx={{display:'flex',alignItems:'flex-start',gap:'10px',mt:'4px'}}>
                    <Checkbox checked={formData.agreement} onChange={(e) => setFormData(prev => ({...prev,agreement:e.target.checked}))} sx={{color:'rgba(127,201,240,0.5)','&.Mui-checked':{color:'#7FC9F0'},p:0,mt:'2px'}} />
                    <Typography sx={{color:'rgba(68,107,128,0.8)',fontSize:'12px',lineHeight:1.4}}>
                        {t('register.agreement.start')}{' '}
                        <Box component="a" href="#" sx={{color:'#7FC9F0',textDecoration:'none'}}>
                            {t('register.agreement.userAgreement')}
                        </Box>
                        {' '}{t('register.agreement.and')}{' '}
                        <Box component="a" href="#" sx={{color:'#7FC9F0',textDecoration:'none'}}>
                            {t('register.agreement.privacy')}
                        </Box>
                    </Typography>
                </Box>
                <Box sx={{mt:'8px'}}>
                    <ButtonMain type="submit" disabled={!formData.agreement} sx={{width:'170px',height:'44px',fontSize:'14px'}}>
                        {t('register.button')}
                    </ButtonMain>
                </Box>
            </Box>
        </Box>
    )
}