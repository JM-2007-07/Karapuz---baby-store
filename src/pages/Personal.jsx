
import React, { useEffect, useState } from 'react'
import { Box, Typography, TextField, Avatar } from '@mui/material'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import { PersonOutlined } from '@mui/icons-material'
import ButtonMain from '../components/ButtonMain'
import { useAuth } from '../context/AuthContext'

export default function Personal() {
    const { user } = useAuth()

    const [userData, setUserData] = useState({
        name: '',
        email: '',
        phone: '',
        address: 'Москва, ул. Московская 25-45'
    })

    const [passwords, setPasswords] = useState({
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
    })

    const [isEditingName, setIsEditingName] = useState(false)
    const [isEditingPhone, setIsEditingPhone] = useState(false)
    const [phoneInput, setPhoneInput] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    useEffect(() => {
        if (!user) return

        const savedData = localStorage.getItem(`personalData_${user.email}`)

        if (savedData) {
            try {
                const parsedData = JSON.parse(savedData)

                setUserData({
                    name:user.name,
                    email:user.email,
                    phone:parsedData.phone || '',
                    address:parsedData.address || 'Душанбе, пр. Сино 42'
                })
            } catch {
                setUserData({
                    name:user.name,
                    email:user.email,
                    phone:'',
                    address:'Душанбе, пр. Сино 42'
                })
            }
        } else {
            setUserData({
                name:user.name,
                email:user.email,
                phone:'',
                address:'Душанбе, пр. Сино 42'
            })
        }
    }, [user])

    const handlePasswordChange = (field) => (e) => {
        setPasswords(prev => ({...prev,[field]:e.target.value}))
        if (error) setError('')
        if (success) setSuccess('')
    }

    const handleSavePersonalData = () => {
        if (!user) return

        const savedData = {
            phone:userData.phone,
            address:userData.address
        }

        localStorage.setItem(`personalData_${user.email}`, JSON.stringify(savedData))
        setSuccess('Данные успешно сохранены')

        setTimeout(() => {
            setSuccess('')
        }, 3000)
    }

    const handleNameBlur = () => {
        setIsEditingName(false)

        if (!userData.name.trim()) {
            setUserData(prev => ({...prev,name:user?.name || ''}))
            return
        }

        handleSavePersonalData()
    }

    const handlePhoneSave = () => {
        setUserData(prev => ({...prev,phone:phoneInput.trim()}))
        setIsEditingPhone(false)

        if (user) {
            const savedData = {
                phone:phoneInput.trim(),
                address:userData.address
            }

            localStorage.setItem(`personalData_${user.email}`, JSON.stringify(savedData))
            setSuccess('Телефон успешно сохранён')

            setTimeout(() => {
                setSuccess('')
            }, 3000)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setError('')
        setSuccess('')

        if (!passwords.oldPassword && !passwords.newPassword && !passwords.confirmPassword) {
            setError('Введите данные для смены пароля')
            return
        }

        if (!passwords.oldPassword) {
            setError('Введите старый пароль')
            return
        }

        if (!passwords.newPassword) {
            setError('Введите новый пароль')
            return
        }

        if (passwords.newPassword.length < 6) {
            setError('Новый пароль должен содержать минимум 6 символов')
            return
        }

        if (passwords.newPassword !== passwords.confirmPassword) {
            setError('Новые пароли не совпадают')
            return
        }

        const registeredUser = localStorage.getItem('registeredUser')

        if (!registeredUser) {
            setError('Пользователь не найден')
            return
        }

        try {
            const parsedUser = JSON.parse(registeredUser)

            if (parsedUser.email !== user?.email) {
                setError('Ошибка пользователя')
                return
            }

            if (parsedUser.password !== passwords.oldPassword) {
                setError('Неверный старый пароль')
                return
            }

            const updatedUser = {
                ...parsedUser,
                password:passwords.newPassword
            }

            localStorage.setItem('registeredUser', JSON.stringify(updatedUser))

            setPasswords({
                oldPassword:'',
                newPassword:'',
                confirmPassword:''
            })

            setSuccess('Пароль успешно изменён')

            setTimeout(() => {
                setSuccess('')
            }, 3000)
        } catch {
            setError('Не удалось изменить пароль')
        }
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
            fontSize:'14px',
            color:'#446B80',
            py:'12px'
        }
    }

    if (!user) {
        return (
            <Box sx={{width:'100%',maxWidth:'1500px',margin:'auto',px:{xs:'15px',md:'25px'},pt:{xs:'110px',md:'180px'},pb:'80px'}}>
                <Typography sx={{fontFamily:'"Balsamiq Sans", sans-serif',color:'#446B80',fontSize:{xs:'30px',md:'44px'},fontWeight:700}}>
                    Вы не авторизованы
                </Typography>
            </Box>
        )
    }

    return (
        <Box sx={{width:'100%',maxWidth:'1500px',margin:'auto',px:{xs:'15px',md:'25px'},pt:{xs:'90px',md:'180px'},pb:{xs:'40px',md:'80px'}}}>
            <Typography data-aos="fade-up" component="h1" sx={{fontFamily:'"Balsamiq Sans", sans-serif',color:'#446B80',fontSize:{xs:'32px',md:'44px'},fontWeight:700,mb:{xs:'30px',md:'40px'}}}>
                Личные данные
            </Typography>

            <Box data-aos="fade-up" data-aos-delay="50" sx={{maxWidth:'450px',display:'flex',flexDirection:'column',gap:'30px'}}>
                <Box sx={{display:'flex',alignItems:'center',gap:'20px'}}>
                    <Avatar sx={{width:'64px',height:'64px',bgcolor:'rgba(127,201,240,0.15)',color:'#7FC9F0'}}>
                        <PersonOutlined sx={{fontSize:'36px'}} />
                    </Avatar>

                    <Typography sx={{color:'#446B80',fontSize:'16px',fontWeight:500}}>
                        {userData.email}
                    </Typography>
                </Box>

                <Box sx={{display:'flex',flexDirection:'column',gap:'16px'}}>
                    <Box sx={{display:'flex',alignItems:'center',gap:'15px',minHeight:'24px'}}>
                        <Typography sx={{color:'rgba(68,107,128,0.6)',fontSize:'14px',width:'70px'}}>
                            Имя
                        </Typography>

                        {isEditingName ? (
                            <TextField
                                value={userData.name}
                                onChange={(e) => setUserData(prev => ({...prev,name:e.target.value}))}
                                onBlur={handleNameBlur}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        e.preventDefault()
                                        handleNameBlur()
                                    }
                                }}
                                autoFocus
                                size="small"
                                sx={{width:'180px','& .MuiInputBase-input':{fontSize:'14px',py:'4px',px:'8px'}}}
                            />
                        ) : (
                            <Box sx={{display:'flex',alignItems:'center',gap:'8px'}}>
                                <Typography sx={{color:'#446B80',fontSize:'14px',fontWeight:500}}>
                                    {userData.name}
                                </Typography>

                                <EditOutlinedIcon
                                    onClick={() => setIsEditingName(true)}
                                    sx={{color:'#7FC9F0',fontSize:'18px',cursor:'pointer'}}
                                />
                            </Box>
                        )}
                    </Box>

                    <Box sx={{display:'flex',alignItems:'center',gap:'15px',minHeight:'24px'}}>
                        <Typography sx={{color:'rgba(68,107,128,0.6)',fontSize:'14px',width:'70px'}}>
                            Телефон
                        </Typography>

                        {isEditingPhone ? (
                            <Box sx={{display:'flex',alignItems:'center',gap:'8px'}}>
                                <TextField
                                    value={phoneInput}
                                    onChange={(e) => setPhoneInput(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            e.preventDefault()
                                            handlePhoneSave()
                                        }
                                    }}
                                    autoFocus
                                    size="small"
                                    placeholder="+992..."
                                    sx={{width:'170px','& .MuiInputBase-input':{fontSize:'14px',py:'4px',px:'8px'}}}
                                />

                                <Typography
                                    onClick={handlePhoneSave}
                                    sx={{color:'#7FC9F0',fontSize:'13px',cursor:'pointer'}}
                                >
                                    Сохранить
                                </Typography>
                            </Box>
                        ) : (
                            <Box sx={{display:'flex',alignItems:'center',gap:'8px'}}>
                                {userData.phone ? (
                                    <Typography sx={{color:'#446B80',fontSize:'14px',fontWeight:500}}>
                                        {userData.phone}
                                    </Typography>
                                ) : (
                                    <Typography
                                        onClick={() => {
                                            setPhoneInput('')
                                            setIsEditingPhone(true)
                                        }}
                                        sx={{color:'#7FC9F0',fontSize:'14px',cursor:'pointer'}}
                                    >
                                        Добавить
                                    </Typography>
                                )}

                                {userData.phone && (
                                    <EditOutlinedIcon
                                        onClick={() => {
                                            setPhoneInput(userData.phone)
                                            setIsEditingPhone(true)
                                        }}
                                        sx={{color:'#7FC9F0',fontSize:'18px',cursor:'pointer'}}
                                    />
                                )}
                            </Box>
                        )}
                    </Box>
                </Box>

                <Box sx={{pt:'15px',borderTop:'1px solid rgba(127,201,240,0.2)'}}>
                    <Typography sx={{color:'rgba(68,107,128,0.6)',fontSize:'14px',mb:'10px'}}>
                        Адреса доставки
                    </Typography>

                    <Typography sx={{color:'#446B80',fontSize:'14px',fontWeight:500}}>
                        {userData.address}
                    </Typography>
                </Box>

                <Box component="form" onSubmit={handleSubmit} sx={{pt:'15px',borderTop:'1px solid rgba(127,201,240,0.2)',display:'flex',flexDirection:'column',gap:'16px'}}>
                    <Typography sx={{color:'rgba(68,107,128,0.6)',fontSize:'14px',mb:'4px'}}>
                        Пароль
                    </Typography>

                    <Box sx={{maxWidth:'320px',display:'flex',flexDirection:'column',gap:'12px'}}>
                        <TextField
                            placeholder="Старый пароль"
                            type="password"
                            value={passwords.oldPassword}
                            onChange={handlePasswordChange('oldPassword')}
                            fullWidth
                            sx={inputStyles}
                        />

                        <TextField
                            placeholder="Новый пароль"
                            type="password"
                            value={passwords.newPassword}
                            onChange={handlePasswordChange('newPassword')}
                            fullWidth
                            sx={inputStyles}
                        />

                        <TextField
                            placeholder="Повторите новый пароль"
                            type="password"
                            value={passwords.confirmPassword}
                            onChange={handlePasswordChange('confirmPassword')}
                            error={!!error}
                            helperText={error}
                            fullWidth
                            sx={inputStyles}
                        />

                        {success && (
                            <Typography sx={{color:'#46A358',fontSize:'13px'}}>
                                {success}
                            </Typography>
                        )}

                        <Box sx={{mt:'10px'}}>
                            <ButtonMain type="submit" sx={{width:'110px',height:'42px',fontSize:'14px'}}>
                                Сохранить
                            </ButtonMain>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
