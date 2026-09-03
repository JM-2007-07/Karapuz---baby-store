import React, { useState } from 'react'
import { Box, Typography, TextField, Button, RadioGroup, Radio, FormControlLabel, Checkbox } from '@mui/material'
import { useNavigate } from 'react-router'
import { useCart } from '../context/CartContext'

export default function Checkout() {
    const navigate = useNavigate()
    const { cartItems, cartCount, subtotal } = useCart()

    const [deliveryMethod, setDeliveryMethod] = useState('tk')
    const [transportCompany, setTransportCompany] = useState('cdek')
    const [paymentMethod, setPaymentMethod] = useState('card')
    const [promoCode, setPromoCode] = useState('')
    const [discount, setDiscount] = useState(0)
    const [promoMessage, setPromoMessage] = useState('')
    const [formData, setFormData] = useState({fullName:'', email:'', phone:'', comment:'', subscribe:false, city:'Москва'})

    const deliveryPrice = deliveryMethod === 'tk' ? 120 : 0
    const discountAmount = Math.round(subtotal * discount)
    const totalPrice = subtotal - discountAmount + deliveryPrice

    const formatPrice = (price) => Number(price || 0).toLocaleString('ru-RU') + ' ₽'

    const handleInputChange = (field) => (e) => {
        setFormData(prev => ({...prev, [field]:field === 'subscribe' ? e.target.checked : e.target.value}))
    }

    const handleApplyPromo = () => {
        if (promoCode.trim().toUpperCase() === 'SKIDKA10') {
            setDiscount(0.1)
            setPromoMessage('Промокод применён! Скидка 10%')
        } else if (!promoCode.trim()) {
            setDiscount(0)
            setPromoMessage('')
        } else {
            setDiscount(0)
            setPromoMessage('Промокод не найден')
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (cartItems.length === 0) {
            return
        }

        navigate('/checkout/payment', {
            state:{
                totalPrice,
                orderData:{
                    deliveryMethod,
                    transportCompany,
                    paymentMethod,
                    deliveryPrice,
                    discountAmount,
                    ...formData
                }
            }
        })
    }

    const inputStyles = {'& .MuiOutlinedInput-root':{borderRadius:'12px',bgcolor:'#FFFFFF','& fieldset':{borderColor:'rgba(127,201,240,0.3)'},'&:hover fieldset':{borderColor:'#7FC9F0'},'&.Mui-focused fieldset':{borderColor:'#7FC9F0'}},'& .MuiInputBase-input':{fontSize:'14px',color:'#446B80',py:'12px'}}

    if (cartItems.length === 0) {
        return (
            <Box sx={{width:'100%',maxWidth:'1500px',margin:'auto',px:{xs:'15px',md:'25px'},pt:{xs:'110px',md:'180px'},pb:'60px',textAlign:'center'}}>
                <Typography sx={{fontFamily:'"Balsamiq Sans", sans-serif',fontSize:{xs:'28px',md:'40px'},color:'#446B80',mb:'15px'}}>
                    Корзина пуста
                </Typography>

                <Typography sx={{color:'rgba(68,107,128,0.7)',fontSize:'15px',mb:'25px'}}>
                    Добавьте товары в корзину, чтобы оформить заказ
                </Typography>

                <Button onClick={() => navigate('/')} sx={{height:'48px',px:'30px',bgcolor:'#7FC9F0',color:'#FFFFFF',borderRadius:'12px',textTransform:'none','&:hover':{bgcolor:'#6CBBE4'}}}>
                    Перейти к покупкам
                </Button>
            </Box>
        )
    }

    return (
        <Box sx={{width:'100%',maxWidth:'1500px',margin:'auto',px:{xs:'15px',md:'25px'},pt:{xs:'110px',md:'180px'},pb:{xs:'50px',md:'80px'}}}>
            <Box data-aos="fade-right" sx={{display:'flex',alignItems:'center',gap:'8px',mb:'15px',flexWrap:'wrap'}}>
                <Typography component="button" onClick={() => navigate('/cart')} sx={{border:'none',bg:'transparent',cursor:'pointer',p:0,color:'rgba(68,107,128,0.6)',fontSize:'13px'}}>
                    Корзина
                </Typography>
                <Typography sx={{color:'rgba(68,107,128,0.6)',fontSize:'13px'}}>•</Typography>
                <Typography sx={{color:'#446B80',fontSize:'13px',fontWeight:500}}>
                    Оформление заказа
                </Typography>
                <Typography sx={{color:'rgba(68,107,128,0.6)',fontSize:'13px'}}>•</Typography>
                <Typography sx={{color:'rgba(68,107,128,0.6)',fontSize:'13px'}}>
                    Оплата
                </Typography>
            </Box>

            <Typography data-aos="fade-up" component="h1" sx={{fontFamily:'"Balsamiq Sans", sans-serif',color:'#446B80',fontSize:{xs:'30px',md:'40px'},fontWeight:700,mb:{xs:'25px',md:'35px'}}}>
                Оформление заказа
            </Typography>

            <Box component="form" onSubmit={handleSubmit} sx={{display:'grid',gridTemplateColumns:{xs:'1fr',lg:'1fr 340px'},gap:{xs:'30px',lg:'50px'},alignItems:'start'}}>
                <Box sx={{display:'flex',flexDirection:'column',gap:'35px'}}>
                    <Box data-aos="fade-up">
                        <Typography component="h3" sx={{color:'#446B80',fontSize:'18px',fontWeight:700,mb:'15px'}}>
                            Состав заказа
                        </Typography>

                        <Box sx={{display:'flex',flexDirection:'column',gap:'15px'}}>
                            {cartItems.map((item) => (
                                <Box key={item.id} sx={{display:'flex',alignItems:'center',gap:{xs:'12px',md:'20px'},pb:'15px',borderBottom:'1px solid rgba(127,201,240,0.15)'}}>
                                    <Box component="img" src={item.image} alt={item.title || item.name} sx={{width:{xs:'65px',md:'80px'},height:{xs:'65px',md:'80px'},objectFit:'contain',flexShrink:0}} />

                                    <Box sx={{flex:1}}>
                                        <Typography sx={{color:'#446B80',fontSize:{xs:'12px',md:'14px'},fontWeight:500,lineHeight:1.35,mb:'5px'}}>
                                            {item.title || item.name}
                                        </Typography>

                                        <Typography sx={{color:'rgba(68,107,128,0.6)',fontSize:'13px'}}>
                                            {item.quantity} шт.
                                        </Typography>
                                    </Box>

                                    <Typography sx={{color:'#7FC9F0',fontSize:{xs:'13px',md:'15px'},fontWeight:700,whiteSpace:'nowrap'}}>
                                        {formatPrice(item.price * item.quantity)}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    </Box>

                    <Box data-aos="fade-up">
                        <Typography component="h3" sx={{color:'#446B80',fontSize:'18px',fontWeight:700,mb:'15px'}}>
                            Город получателя
                        </Typography>

                        <TextField placeholder="Населенный пункт" value={formData.city} onChange={handleInputChange('city')} sx={{...inputStyles,maxWidth:'320px',width:'100%'}} />
                    </Box>

                    <Box data-aos="fade-up">
                        <Typography component="h3" sx={{color:'#446B80',fontSize:'18px',fontWeight:700,mb:'15px'}}>
                            Способ получения
                        </Typography>

                        <Box sx={{display:'grid',gridTemplateColumns:{xs:'1fr',sm:'repeat(3, 1fr)'},gap:'15px'}}>
                            {[
                                {id:'tk',title:'Транспортной компанией',desc:'СДЭК, Деловые линии, Мега Транс, TRADO',price:'120 ₽'},
                                {id:'post',title:'Почтой',desc:'В ближайшее отделение почты России',price:'Бесплатно'},
                                {id:'pickup',title:'Самовывоз',desc:'В пункте выдачи',price:'Бесплатно'}
                            ].map((item) => (
                                <Box key={item.id} onClick={() => setDeliveryMethod(item.id)} sx={{border:deliveryMethod === item.id ? '2px solid #7FC9F0' : '1px solid rgba(127,201,240,0.3)',borderRadius:'14px',p:'16px',bgcolor:'#FFFFFF',cursor:'pointer',display:'flex',flexDirection:'column',justifyContent:'space-between',minHeight:'145px',transition:'0.2s','&:hover':{borderColor:'#7FC9F0',transform:'translateY(-2px)'}}}>
                                    <Box>
                                        <Typography sx={{color:'#446B80',fontSize:'14px',fontWeight:700,mb:'6px'}}>
                                            {item.title}
                                        </Typography>

                                        <Typography sx={{color:'rgba(68,107,128,0.7)',fontSize:'12px',lineHeight:1.3,mb:'12px'}}>
                                            {item.desc}
                                        </Typography>
                                    </Box>

                                    <Typography sx={{color:'#7FC9F0',fontSize:'12px',fontWeight:500}}>
                                        {item.price}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    </Box>

                    {deliveryMethod === 'tk' && (
                        <Box data-aos="fade-up" sx={{display:'flex',flexDirection:'column',gap:'12px'}}>
                            <Typography component="h3" sx={{color:'#446B80',fontSize:'16px',fontWeight:700}}>
                                Выбор транспортной компании
                            </Typography>

                            <Box sx={{display:'flex',flexWrap:'wrap',gap:'10px'}}>
                                {[
                                    {name:'СДЭК',code:'cdek'},
                                    {name:'Деловые линии',code:'delovye'},
                                    {name:'Мега Транс',code:'mega'},
                                    {name:'TRADO',code:'trado'}
                                ].map((company) => {
                                    const active = transportCompany === company.code

                                    return (
                                        <Button key={company.code} type="button" onClick={() => setTransportCompany(company.code)} sx={{border:active ? '1px solid #7FC9F0' : '1px solid rgba(127,201,240,0.3)',bgcolor:active ? '#7FC9F0' : '#FFFFFF',color:active ? '#FFFFFF' : '#446B80',borderRadius:'10px',px:'16px',py:'6px',textTransform:'none',fontSize:'13px','&:hover':{bgcolor:active ? '#6CBBE4' : 'rgba(127,201,240,0.1)'}}}>
                                            {company.name}
                                        </Button>
                                    )
                                })}
                            </Box>

                            <Typography sx={{color:'#446B80',fontSize:'14px'}}>
                                Стоимость доставки: <strong>120 ₽</strong>
                            </Typography>

                            <Typography sx={{color:'rgba(68,107,128,0.8)',fontSize:'13px'}}>
                                СДЭК, Ул. Набережная 11-12
                            </Typography>
                        </Box>
                    )}

                    <Box data-aos="fade-up" sx={{display:'flex',flexDirection:'column',gap:'12px'}}>
                        <Typography component="h3" sx={{color:'#446B80',fontSize:'18px',fontWeight:700}}>
                            Адрес получателя
                        </Typography>

                        <Box sx={{maxWidth:'480px',display:'flex',flexDirection:'column',gap:'10px'}}>
                            <TextField placeholder="Фамилия и имя по паспорту*" value={formData.fullName} onChange={handleInputChange('fullName')} required fullWidth sx={inputStyles} />

                            <Typography sx={{color:'rgba(68,107,128,0.5)',fontSize:'11px',mt:'-6px'}}>
                                Это может потребоваться при получении заказа
                            </Typography>

                            <Box sx={{display:'grid',gridTemplateColumns:{xs:'1fr',sm:'1fr 1fr'},gap:'10px'}}>
                                <TextField placeholder="Электронная почта" type="email" value={formData.email} onChange={handleInputChange('email')} fullWidth sx={inputStyles} />

                                <TextField placeholder="Телефон*" value={formData.phone} onChange={handleInputChange('phone')} required fullWidth sx={inputStyles} />
                            </Box>

                            <Typography sx={{color:'rgba(68,107,128,0.5)',fontSize:'11px',mt:'-6px'}}>
                                На телефон отправляется оповещение о статусе заказа или о его получении
                            </Typography>
                        </Box>
                    </Box>

                    <Box data-aos="fade-up">
                        <Typography component="h3" sx={{color:'#446B80',fontSize:'18px',fontWeight:700,mb:'10px'}}>
                            Способ оплаты
                        </Typography>

                        <RadioGroup value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
                            <FormControlLabel value="card" control={<Radio sx={{color:'rgba(127,201,240,0.5)','&.Mui-checked':{color:'#7FC9F0'}}} />} label={<Typography sx={{color:'#446B80',fontSize:'14px'}}>Картой онлайн</Typography>} />

                            <FormControlLabel value="cash" control={<Radio sx={{color:'rgba(127,201,240,0.5)','&.Mui-checked':{color:'#7FC9F0'}}} />} label={<Typography sx={{color:'#446B80',fontSize:'14px'}}>Наличными курьеру</Typography>} />

                            <FormControlLabel value="paypal" control={<Radio sx={{color:'rgba(127,201,240,0.5)','&.Mui-checked':{color:'#7FC9F0'}}} />} label={<Typography sx={{color:'#446B80',fontSize:'14px'}}>Онлайн-платежем PayPal</Typography>} />
                        </RadioGroup>
                    </Box>

                    <Box data-aos="fade-up" sx={{maxWidth:'480px',display:'flex',flexDirection:'column',gap:'15px'}}>
                        <Typography component="h3" sx={{color:'#446B80',fontSize:'18px',fontWeight:700}}>
                            Дополнительно
                        </Typography>

                        <TextField placeholder="Комментарий к заказу" multiline rows={3} value={formData.comment} onChange={handleInputChange('comment')} fullWidth sx={inputStyles} />

                        <Box sx={{display:'flex',alignItems:'center',gap:'8px'}}>
                            <Checkbox checked={formData.subscribe} onChange={handleInputChange('subscribe')} sx={{color:'rgba(127,201,240,0.5)','&.Mui-checked':{color:'#7FC9F0'},p:0}} />

                            <Typography sx={{color:'rgba(68,107,128,0.8)',fontSize:'13px'}}>
                                Сообщать мне об акциях и скидках
                            </Typography>
                        </Box>
                    </Box>

                    <Box data-aos="fade-up" sx={{maxWidth:'480px'}}>
                        <Button type="submit" sx={{width:'100%',height:'48px',bgcolor:'#7FC9F0',color:'#FFFFFF',borderRadius:'12px',textTransform:'none',fontSize:'15px',fontWeight:500,mb:'10px','&:hover':{bgcolor:'#6CBBE4'}}}>
                            Перейти к оплате
                        </Button>

                        <Typography sx={{color:'rgba(68,107,128,0.6)',fontSize:'11px',textAlign:'center',lineHeight:1.3}}>
                            Нажимая кнопку «Перейти к оплате», Вы соглашаетесь с пользовательским соглашением и условиями доставки
                        </Typography>
                    </Box>
                </Box>

                <Box data-aos="fade-left" sx={{border:'1px solid rgba(127,201,240,0.3)',borderRadius:'16px',p:'20px',bgcolor:'#FFFFFF',display:'flex',flexDirection:'column',gap:'16px',position:{lg:'sticky'},top:{lg:'160px'}}}>
                    <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                        <Typography sx={{color:'#446B80',fontSize:'14px',fontWeight:700}}>
                            Ваш заказ
                        </Typography>

                        <Typography component="button" type="button" onClick={() => navigate('/cart')} sx={{border:'none',bg:'transparent',cursor:'pointer',p:0,color:'#7FC9F0',fontSize:'13px'}}>
                            Изменить
                        </Typography>
                    </Box>

                    <Box sx={{display:'flex',gap:'6px'}}>
                        <TextField placeholder="Промокод" value={promoCode} onChange={(e) => setPromoCode(e.target.value)} size="small" fullWidth sx={{'& .MuiOutlinedInput-root':{borderRadius:'8px',fontSize:'13px','& fieldset':{borderColor:'rgba(127,201,240,0.4)'}}}} />

                        <Button type="button" onClick={handleApplyPromo} sx={{bgcolor:'#7FC9F0',color:'#FFFFFF',borderRadius:'8px',px:'14px',textTransform:'none',fontSize:'13px',whiteSpace:'nowrap','&:hover':{bgcolor:'#6CBBE4'}}}>
                            Применить
                        </Button>
                    </Box>

                    {promoMessage && (
                        <Typography sx={{color:discount > 0 ? '#46A358' : '#E57373',fontSize:'11px',mt:'-8px'}}>
                            {promoMessage}
                        </Typography>
                    )}

                    <Box sx={{display:'flex',justifyContent:'space-between'}}>
                        <Typography sx={{color:'rgba(68,107,128,0.7)',fontSize:'13px'}}>
                            Количество ({cartCount})
                        </Typography>

                        <Typography sx={{color:'#446B80',fontWeight:600,fontSize:'13px'}}>
                            {formatPrice(subtotal)}
                        </Typography>
                    </Box>

                    <Box sx={{display:'flex',justifyContent:'space-between'}}>
                        <Typography sx={{color:'rgba(68,107,128,0.7)',fontSize:'13px'}}>
                            Доставка
                        </Typography>

                        <Typography sx={{color:'#446B80',fontWeight:600,fontSize:'13px'}}>
                            {deliveryPrice === 0 ? 'Бесплатно' : formatPrice(deliveryPrice)}
                        </Typography>
                    </Box>

                    <Box sx={{display:'flex',justifyContent:'space-between'}}>
                        <Typography sx={{color:'rgba(68,107,128,0.7)',fontSize:'13px'}}>
                            Скидка
                        </Typography>

                        <Typography sx={{color:'#446B80',fontWeight:600,fontSize:'13px'}}>
                            {formatPrice(discountAmount)}
                        </Typography>
                    </Box>

                    <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',pt:'10px',borderTop:'1px solid rgba(127,201,240,0.2)'}}>
                        <Typography sx={{color:'#446B80',fontSize:'16px',fontWeight:700}}>
                            Итого
                        </Typography>

                        <Typography sx={{fontFamily:'"Balsamiq Sans", sans-serif',color:'#446B80',fontSize:'20px',fontWeight:700}}>
                            {formatPrice(totalPrice)}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}