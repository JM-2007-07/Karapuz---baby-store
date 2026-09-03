import React, { useState, useEffect } from 'react'
import { Box, Typography, TextField, Checkbox, Button, Dialog, DialogContent } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { useLocation, useNavigate } from 'react-router'
import { useCart } from '../context/CartContext'
import { Check } from '@mui/icons-material'
import checkIcon from '../assets/CheckIcon.svg'

export default function CheckPayment() {
    const location = useLocation()
    const navigate = useNavigate()
    const { clearCart } = useCart()

    const totalPrice = location.state?.totalPrice || 0

    const [cardNumber, setCardNumber] = useState('')
    const [expiry, setExpiry] = useState('')
    const [cvc, setCvc] = useState('')
    const [saveCard, setSaveCard] = useState(false)
    const [timeLeft, setTimeLeft] = useState(1195)
    const [successOpen, setSuccessOpen] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        if (timeLeft <= 0) return

        const timer = setInterval(() => {
            setTimeLeft(prev => prev - 1)
        }, 1000)

        return () => clearInterval(timer)
    }, [timeLeft])

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60)
        const secs = seconds % 60

        return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
    }

    const formatPrice = (price) => {
        return Number(price || 0).toLocaleString('ru-RU') + ' ₽'
    }

    const handleCardNumberChange = (e) => {
        const value = e.target.value.replace(/\D/g, '').slice(0, 16)
        const formatted = value.replace(/(.{4})/g, '$1 ').trim()

        setCardNumber(formatted)
    }

    const handleExpiryChange = (e) => {
        let value = e.target.value.replace(/\D/g, '').slice(0, 4)

        if (value.length >= 3) {
            value = value.slice(0, 2) + ' / ' + value.slice(2)
        }

        setExpiry(value)
    }

    const handleCvcChange = (e) => {
        const value = e.target.value.replace(/\D/g, '').slice(0, 3)
        setCvc(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (totalPrice <= 0) {
            setError('Сумма заказа не найдена')
            return
        }

        if (cardNumber.replace(/\s/g, '').length !== 16) {
            setError('Введите корректный номер карты')
            return
        }

        if (expiry.replace(/\D/g, '').length !== 4) {
            setError('Введите срок действия карты')
            return
        }

        if (cvc.length !== 3) {
            setError('Введите корректный CVC код')
            return
        }

        setError('')
        setSuccessOpen(true)
    }

    const handleSuccessClose = () => {
        clearCart()
        setSuccessOpen(false)
        navigate('/')
    }

    return (
        <Box sx={{width:'100%',maxWidth:'1500px',margin:'auto',px:{xs:'15px',md:'25px'},pt:{xs:'110px',md:'180px'},pb:{xs:'50px',md:'80px'},'@keyframes successBird':{'0%,100%':{transform:'translateY(0) rotate(-5deg)'},'50%':{transform:'translateY(-12px) rotate(5deg)'}},'@keyframes successPulse':{'0%':{transform:'scale(0.8)',opacity:0.7},'70%':{transform:'scale(1.4)',opacity:0},'100%':{transform:'scale(0.8)',opacity:0}},'@keyframes successAppear':{'0%':{transform:'scale(0.5)',opacity:0},'100%':{transform:'scale(1)',opacity:1}}}}>
            <Box data-aos="fade-right" sx={{display:'flex',alignItems:'center',gap:'8px',mb:'15px',flexWrap:'wrap'}}>
                <Typography component="button" onClick={() => navigate('/cart')} sx={{border:'none',bg:'transparent',cursor:'pointer',p:0,color:'rgba(68,107,128,0.6)',fontSize:'13px'}}>
                    Корзина
                </Typography>

                <Typography sx={{color:'rgba(68,107,128,0.6)',fontSize:'13px'}}>
                    •
                </Typography>

                <Typography component="button" onClick={() => navigate('/checkout')} sx={{border:'none',bg:'transparent',cursor:'pointer',p:0,color:'rgba(68,107,128,0.6)',fontSize:'13px'}}>
                    Оформление заказа
                </Typography>

                <Typography sx={{color:'rgba(68,107,128,0.6)',fontSize:'13px'}}>
                    •
                </Typography>

                <Typography sx={{color:'#446B80',fontSize:'13px',fontWeight:500}}>
                    Оплата
                </Typography>
            </Box>

            <Typography data-aos="fade-up" sx={{color:'rgba(68,107,128,0.6)',fontSize:'13px',fontWeight:500,mb:'8px'}}>
                Заказ №123214155AAS
            </Typography>

            <Typography data-aos="fade-up" component="h1" sx={{fontFamily:'"Balsamiq Sans", sans-serif',color:'#446B80',fontSize:{xs:'28px',md:'38px'},fontWeight:700,mb:'4px'}}>
                Итого к оплате
            </Typography>

            <Typography data-aos="fade-up" sx={{fontFamily:'"Balsamiq Sans", sans-serif',color:'#7FC9F0',fontSize:{xs:'24px',md:'30px'},fontWeight:700,mb:'30px'}}>
                {formatPrice(totalPrice)}
            </Typography>

            <Box component="form" onSubmit={handleSubmit} sx={{maxWidth:'780px'}}>
                <Box data-aos="fade-up" sx={{display:'flex',alignItems:'center',gap:'10px',mb:'20px'}}>
                    <Box sx={{width:'18px',height:'18px',borderRadius:'50%',border:'5px solid #7FC9F0',bgcolor:'#FFFFFF'}} />

                    <Typography sx={{color:'#446B80',fontSize:'15px',fontWeight:500}}>
                        Новая карта
                    </Typography>
                </Box>

                <Box sx={{display:'grid',gridTemplateColumns:{xs:'1fr',md:'360px 1fr'},gap:{xs:'25px',md:'40px'},alignItems:'start'}}>
                    <Box data-aos="fade-up" sx={{position:'relative',width:'100%',height:{xs:'230px',sm:'210px'}}}>
                        <Box sx={{position:'absolute',top:0,left:0,width:{xs:'260px',sm:'280px'},height:'180px',bgcolor:'#EFEFEF',borderRadius:'14px',p:'16px',zIndex:2,boxShadow:'0 4px 15px rgba(0,0,0,0.05)',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
                            <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                                <Typography sx={{color:'rgba(68,107,128,0.7)',fontSize:'11px',fontWeight:600}}>
                                    Номер карты
                                </Typography>

                                <Box sx={{display:'flex',alignItems:'center'}}>
                                    <Box sx={{width:'20px',height:'20px',borderRadius:'50%',bgcolor:'#EB001B',opacity:0.8}} />
                                    <Box sx={{width:'20px',height:'20px',borderRadius:'50%',bgcolor:'#F79E1B',opacity:0.8,ml:'-8px'}} />
                                </Box>
                            </Box>

                            <TextField placeholder="0000 0000 0000 0000" value={cardNumber} onChange={handleCardNumberChange} size="small" fullWidth sx={{'& .MuiOutlinedInput-root':{bgcolor:'#FFFFFF',borderRadius:'6px',fontSize:'13px','& fieldset':{borderColor:'transparent'}}}} />

                            <Box sx={{display:'flex',alignItems:'center',justifyContent:'flex-end',gap:'10px'}}>
                                <Typography sx={{color:'rgba(68,107,128,0.6)',fontSize:'9px',textAlign:'right',lineHeight:1.1}}>
                                    СРОК<br />ДЕЙСТВИЯ
                                </Typography>

                                <TextField placeholder="MM / YY" value={expiry} onChange={handleExpiryChange} size="small" sx={{width:'90px','& .MuiOutlinedInput-root':{bgcolor:'#FFFFFF',borderRadius:'6px',fontSize:'12px','& fieldset':{borderColor:'transparent'}}}} />
                            </Box>
                        </Box>

                        <Box sx={{position:'absolute',top:'25px',right:{xs:'0',sm:'0'},width:{xs:'235px',sm:'260px'},height:'180px',bgcolor:'#DFDFDF',borderRadius:'14px',pt:'20px',zIndex:1,display:'flex',flexDirection:'column',alignItems:'flex-end'}}>
                            <Box sx={{width:'100%',height:'36px',bgcolor:'#2B2B2B',mb:'20px'}} />

                            <Box sx={{pr:'16px',display:'flex',flexDirection:'column',alignItems:'center'}}>
                                <Typography sx={{color:'rgba(68,107,128,0.7)',fontSize:'10px',mb:'4px'}}>
                                    CVC/CVV
                                </Typography>

                                <TextField type="password" value={cvc} onChange={handleCvcChange} inputProps={{maxLength:3}} size="small" sx={{width:'60px','& .MuiOutlinedInput-root':{bgcolor:'#FFFFFF',borderRadius:'6px',fontSize:'13px','& fieldset':{borderColor:'#7FC9F0'}}}} />
                            </Box>
                        </Box>
                    </Box>

                    <Box data-aos="fade-left" sx={{display:'flex',flexDirection:'column',gap:'15px',pt:{xs:0,md:'10px'}}}>
                        <Typography sx={{color:'#446B80',fontSize:'14px',fontWeight:700}}>
                            <Box component="span" sx={{color:'#7FC9F0'}}>
                                {formatTime(timeLeft)}
                            </Box> на оплату заказа
                        </Typography>

                        <Box sx={{display:'flex',gap:'8px',alignItems:'flex-start'}}>
                            <LockOutlinedIcon sx={{color:'rgba(68,107,128,0.4)',fontSize:'18px',mt:'2px'}} />

                            <Box sx={{display:'flex',flexDirection:'column',gap:'8px'}}>
                                <Typography sx={{color:'rgba(68,107,128,0.7)',fontSize:'12px',lineHeight:1.3}}>
                                    Интернет-платежи защищены сертификатом TLS и протоколом 3D Secure.
                                </Typography>

                                <Typography sx={{color:'rgba(68,107,128,0.6)',fontSize:'11px',lineHeight:1.3}}>
                                    Платёжные данные защищены и не передаются сторонним лицам.
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                {error && (
                    <Typography sx={{color:'#E57373',fontSize:'13px',mt:'15px'}}>
                        {error}
                    </Typography>
                )}

                <Box data-aos="fade-up" sx={{display:'flex',flexDirection:'column',gap:'20px',mt:'30px'}}>
                    <Box sx={{display:'flex',alignItems:'center',gap:'8px'}}>
                        <Checkbox checked={saveCard} onChange={(e) => setSaveCard(e.target.checked)} sx={{color:'rgba(127,201,240,0.5)','&.Mui-checked':{color:'#7FC9F0'},p:0}} />

                        <Typography sx={{color:'rgba(68,107,128,0.8)',fontSize:'13px'}}>
                            Сохранить карту для будущих покупок
                        </Typography>
                    </Box>

                    <Button type="submit" sx={{width:{xs:'100%',sm:'320px'},height:'46px',bgcolor:'#7FC9F0',color:'#FFFFFF',borderRadius:'10px',textTransform:'none',fontSize:'15px',fontWeight:500,'&:hover':{bgcolor:'#6CBBE4'}}}>
                        Оплатить {formatPrice(totalPrice)}
                    </Button>
                </Box>
            </Box>

            <Dialog open={successOpen} PaperProps={{sx:{borderRadius:'24px',maxWidth:'430px',width:'calc(100% - 30px)',overflow:'hidden',boxShadow:'0 20px 60px rgba(68,107,128,0.18)'}}}>
                <DialogContent sx={{p:{xs:'35px 20px',md:'45px 35px'},textAlign:'center',display:'flex',flexDirection:'column',alignItems:'center',gap:'18px'}}>
                    <Box sx={{position:'relative',width:'130px',height:'130px',display:'flex',alignItems:'center',justifyContent:'center',animation:'successAppear 0.5s ease'}}>
                        <Box sx={{position:'absolute',width:'105px',height:'105px',borderRadius:'50%',bgcolor:'rgba(127,201,240,0.15)',animation:'successPulse 1.8s infinite'}} />

                        <Box sx={{position:'relative',zIndex:2,width:'85px',height:'85px',borderRadius:'50%',bgcolor:'white',display:'flex',alignItems:'center',justifyContent:'center',boxShadow:'0 12px 30px rgba(127,201,240,0.35)',animation:'successBird 1.5s ease-in-out infinite'}}>
                            <img src={checkIcon} alt="" />
                        </Box>
                    </Box>

                    <Typography sx={{fontFamily:'"Balsamiq Sans", sans-serif',fontSize:{xs:'25px',md:'30px'},color:'#446B80',fontWeight:700}}>
                        Оплата прошла успешно!
                    </Typography>

                    <Typography sx={{color:'rgba(68,107,128,0.7)',fontSize:'14px',lineHeight:1.5,maxWidth:'310px'}}>
                        Спасибо за покупку! Ваш заказ успешно оплачен и принят в обработку.
                    </Typography>

                    <Typography sx={{fontFamily:'"Balsamiq Sans", sans-serif',color:'#7FC9F0',fontSize:'22px',fontWeight:700}}>
                        {formatPrice(totalPrice)}
                    </Typography>

                    <Button onClick={handleSuccessClose} sx={{width:'100%',height:'48px',bgcolor:'#7FC9F0',color:'#FFFFFF',borderRadius:'12px',textTransform:'none',fontSize:'15px',fontWeight:500,mt:'8px','&:hover':{bgcolor:'#6CBBE4'}}}>
                        Вернуться на главную
                    </Button>
                </DialogContent>
            </Dialog>
        </Box>
    )
}