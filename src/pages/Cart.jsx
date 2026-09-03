import React, { useState } from 'react'
import { Box, Typography, TextField, Button, IconButton } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import CloseIcon from '@mui/icons-material/Close'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined'
import { DeleteOutlined } from '@mui/icons-material'
import { useNavigate } from 'react-router'
import { useCart } from '../context/CartContext'

export default function Cart() {
    const navigate = useNavigate()
    const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart, subtotal } = useCart()

    const [promoCode, setPromoCode] = useState('')
    const [discount, setDiscount] = useState(0)
    const [deletedItems, setDeletedItems] = useState([])
    const [favorites, setFavorites] = useState([])

    const activeItems = cartItems.filter(item => !deletedItems.includes(item.id))

    const totalCount = activeItems.reduce((acc, item) => acc + item.quantity, 0)

    const rawTotalPrice = activeItems.reduce((acc, item) => {
        return acc + Number(item.price || 0) * Number(item.quantity || 1)
    }, 0)

    const shippingPrice = activeItems.length > 0 ? 154 : 0

    const discountAmount = Math.round(rawTotalPrice * discount)

    const finalPrice = rawTotalPrice - discountAmount + shippingPrice

    const formatPrice = (price) => {
        return Number(price || 0).toLocaleString('ru-RU') + ' ₽'
    }

    const handleSoftDelete = (id) => {
        setDeletedItems(prev => [...prev, id])
    }

    const handleRestore = (id) => {
        setDeletedItems(prev => prev.filter(itemId => itemId !== id))
    }

    const handleHardDelete = (id) => {
        removeFromCart(id)
        setDeletedItems(prev => prev.filter(itemId => itemId !== id))
    }

    const toggleFavorite = (id) => {
        setFavorites(prev => prev.includes(id) ? prev.filter(itemId => itemId !== id) : [...prev, id])
    }

    const handleApplyPromo = () => {
        if (promoCode.trim().toUpperCase() === 'SKIDKA10') {
            setDiscount(0.1)
        } else {
            setDiscount(0)
        }
    }

    return (
        <Box sx={{width:'100%', maxWidth:'1500px', margin:'auto', px:{xs:'15px', md:'25px'}, pt:{xs:'100px', md:'180px'}, pb:{xs:'40px', md:'70px'}}}>

            <Typography data-aos="fade-up" component="h1" sx={{fontFamily:'"Balsamiq Sans", sans-serif', color:'#446B80', fontSize:{xs:'30px', md:'42px'}, fontWeight:700, mb:{xs:'25px', md:'40px'}}}>
                В корзине {totalCount} {totalCount === 1 ? 'товар' : totalCount > 1 && totalCount < 5 ? 'товара' : 'товаров'}
            </Typography>

            {cartItems.length === 0 ? (
                <Box data-aos="fade-up" sx={{minHeight:'350px', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:'20px', textAlign:'center', borderRadius:'20px', bgcolor:'#F8FCFE'}}>
                    <Typography sx={{fontFamily:'"Balsamiq Sans", sans-serif', color:'#446B80', fontSize:{xs:'24px', md:'32px'}}}>
                        Ваша корзина пуста
                    </Typography>

                    <Typography sx={{color:'rgba(68,107,128,0.65)', fontSize:'15px'}}>
                        Добавьте товары, чтобы оформить заказ
                    </Typography>

                    <Button onClick={() => navigate('/catalog')} sx={{height:'48px', px:'30px', borderRadius:'12px', bgcolor:'#7FC9F0', color:'#FFFFFF', textTransform:'none', fontSize:'15px', '&:hover':{bgcolor:'#6CBBE4'}}}>
                        Перейти в каталог
                    </Button>
                </Box>
            ) : (
                <Box sx={{display:'grid', gridTemplateColumns:{xs:'1fr', lg:activeItems.length > 0 ? '1fr 360px' : '1fr'}, gap:{xs:'30px', lg:'50px'}, alignItems:'start'}}>

                    <Box sx={{display:'flex', flexDirection:'column'}}>

                        {cartItems.map((item, index) => {
                            const isDeleted = deletedItems.includes(item.id)
                            const isFavorite = favorites.includes(item.id)

                            return (
                                <Box key={item.id} data-aos="fade-up" data-aos-delay={index * 60} sx={{borderTop:'1px solid rgba(127,201,240,0.2)', py:'20px', borderBottom:index === cartItems.length - 1 ? '1px solid rgba(127,201,240,0.2)' : 'none'}}>

                                    {!isDeleted ? (
                                        <Box sx={{display:'grid', gridTemplateColumns:{xs:'80px 1fr', sm:'100px minmax(180px,1.5fr) auto auto auto'}, gap:{xs:'15px', sm:'20px'}, alignItems:'center'}}>

                                            <Box sx={{width:{xs:'80px', sm:'100px'}, height:{xs:'80px', sm:'100px'}, display:'flex', alignItems:'center', justifyContent:'center'}}>
                                                <Box component="img" src={item.image} alt={item.title || item.name} sx={{maxWidth:'100%', maxHeight:'100%', objectFit:'contain'}} />
                                            </Box>

                                            <Box sx={{gridColumn:{xs:'2 / -1', sm:'auto'}}}>
                                                <Typography sx={{color:'#446B80', fontSize:{xs:'13px', md:'14px'}, fontWeight:500, lineHeight:1.35, mb:'8px'}}>
                                                    {item.title || item.name}
                                                </Typography>

                                                <Typography sx={{color:'#7FC9F0', fontSize:'12px'}}>
                                                    В наличии
                                                </Typography>
                                            </Box>

                                            <Box sx={{display:'flex', alignItems:'center', border:'1px solid rgba(127,201,240,0.5)', borderRadius:'10px', height:'36px', px:'6px', justifySelf:{xs:'start', sm:'center'}}}>
                                                <Button onClick={() => decreaseQuantity(item.id)} sx={{minWidth:'28px', p:0, color:'#446B80', fontSize:'18px'}}>
                                                    −
                                                </Button>

                                                <Typography sx={{px:'10px', color:'#446B80', fontSize:'14px', fontWeight:500}}>
                                                    {item.quantity}
                                                </Typography>

                                                <Button onClick={() => increaseQuantity(item.id)} sx={{minWidth:'28px', p:0, color:'#446B80', fontSize:'18px'}}>
                                                    +
                                                </Button>
                                            </Box>

                                            <Typography sx={{fontFamily:'"Balsamiq Sans", sans-serif', color:'#7FC9F0', fontSize:{xs:'16px', md:'18px'}, fontWeight:700, whiteSpace:'nowrap'}}>
                                                {formatPrice(Number(item.price || 0) * Number(item.quantity || 1))}
                                            </Typography>

                                            <Box sx={{display:'flex', flexDirection:'column', gap:'4px', alignItems:'center'}}>
                                                <IconButton onClick={() => toggleFavorite(item.id)} sx={{p:'4px', color:isFavorite ? '#7FC9F0' : 'rgba(68,107,128,0.4)'}}>
                                                    {isFavorite ? <FavoriteIcon sx={{fontSize:'20px'}} /> : <FavoriteBorderIcon sx={{fontSize:'20px'}} />}
                                                </IconButton>

                                                <IconButton onClick={() => handleSoftDelete(item.id)} sx={{p:'4px', color:'rgba(68,107,128,0.4)', '&:hover':{color:'#446B80'}}}>
                                                    <DeleteOutlined sx={{fontSize:'20px'}} />
                                                </IconButton>
                                            </Box>

                                        </Box>
                                    ) : (
                                        <Box sx={{display:'flex', alignItems:{xs:'flex-start', sm:'center'}, justifyContent:'space-between', gap:'15px', py:'10px', px:{xs:'0px', sm:'10px'}, flexDirection:{xs:'column', sm:'row'}}}>

                                            <Typography sx={{color:'rgba(68,107,128,0.7)', fontSize:{xs:'13px', md:'14px'}, lineHeight:1.4}}>
                                                Вы удалили «{item.title || item.name}»
                                            </Typography>

                                            <Box sx={{display:'flex', alignItems:'center', gap:'15px', flexShrink:0}}>
                                                <Button onClick={() => handleRestore(item.id)} sx={{minWidth:0, p:0, color:'#7FC9F0', textTransform:'none', fontSize:'14px', fontWeight:600, '&:hover':{background:'transparent', textDecoration:'underline'}}}>
                                                    Восстановить
                                                </Button>

                                                <IconButton onClick={() => handleHardDelete(item.id)} sx={{p:'3px', color:'rgba(68,107,128,0.5)'}}>
                                                    <CloseIcon sx={{fontSize:'18px'}} />
                                                </IconButton>
                                            </Box>

                                        </Box>
                                    )}

                                </Box>
                            )
                        })}

                    </Box>

                    {activeItems.length > 0 && (
                        <Box data-aos="fade-left" sx={{border:'1px solid rgba(127,201,240,0.3)', borderRadius:'16px', p:{xs:'20px', md:'24px'}, bgcolor:'#FFFFFF', display:'flex', flexDirection:'column', gap:'20px'}}>

                            <Box sx={{display:'flex', alignItems:'center', gap:'10px', color:'rgba(68,107,128,0.8)'}}>
                                <LocalShippingOutlinedIcon sx={{color:'#7FC9F0', fontSize:'22px'}} />

                                <Typography sx={{fontSize:'14px', fontWeight:500}}>
                                    {formatPrice(shippingPrice)} Доставка
                                </Typography>
                            </Box>

                            <Box sx={{display:'flex', gap:'8px'}}>
                                <TextField placeholder="Промокод" value={promoCode} onChange={(e) => setPromoCode(e.target.value)} size="small" fullWidth sx={{'& .MuiOutlinedInput-root':{borderRadius:'10px', fontSize:'14px', '& fieldset':{borderColor:'rgba(127,201,240,0.4)'}, '&:hover fieldset':{borderColor:'#7FC9F0'}, '&.Mui-focused fieldset':{borderColor:'#7FC9F0'}}}} />

                                <Button onClick={handleApplyPromo} sx={{bgcolor:'#7FC9F0', color:'#FFFFFF', borderRadius:'10px', px:'18px', textTransform:'none', fontSize:'14px', fontWeight:500, whiteSpace:'nowrap', '&:hover':{bgcolor:'#6CBBE4'}}}>
                                    OK
                                </Button>
                            </Box>

                            <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                                <Typography sx={{color:'rgba(68,107,128,0.7)', fontSize:'14px'}}>
                                    Товары ({totalCount})
                                </Typography>

                                <Typography sx={{color:'#446B80', fontSize:'15px', fontWeight:700}}>
                                    {formatPrice(rawTotalPrice)}
                                </Typography>
                            </Box>

                            <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                                <Typography sx={{color:'rgba(68,107,128,0.7)', fontSize:'14px'}}>
                                    Скидка
                                </Typography>

                                <Typography sx={{color:'#446B80', fontSize:'15px', fontWeight:700}}>
                                    − {formatPrice(discountAmount)}
                                </Typography>
                            </Box>

                            <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                                <Typography sx={{color:'rgba(68,107,128,0.7)', fontSize:'14px'}}>
                                    Доставка
                                </Typography>

                                <Typography sx={{color:'#446B80', fontSize:'15px', fontWeight:700}}>
                                    {formatPrice(shippingPrice)}
                                </Typography>
                            </Box>

                            <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center', pt:'15px', borderTop:'1px solid rgba(127,201,240,0.2)'}}>
                                <Typography sx={{color:'#446B80', fontSize:'18px', fontWeight:700}}>
                                    Итого
                                </Typography>

                                <Typography sx={{fontFamily:'"Balsamiq Sans", sans-serif', color:'#446B80', fontSize:'22px', fontWeight:700}}>
                                    {formatPrice(finalPrice)}
                                </Typography>
                            </Box>

                            <Button onClick={() => navigate('/checkout')} sx={{width:'100%', height:'50px', bgcolor:'#7FC9F0', color:'#FFFFFF', borderRadius:'12px', textTransform:'none', fontSize:'15px', fontWeight:600, '&:hover':{bgcolor:'#6CBBE4'}}}>
                                Перейти к оформлению
                            </Button>

                        </Box>
                    )}

                </Box>
            )}
        </Box>
    )
}