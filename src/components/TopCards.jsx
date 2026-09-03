import React, { useState } from 'react'
import { Box, Button, IconButton, Popover, Typography } from '@mui/material'
import { CurrencyRuble, Favorite, FavoriteBorder, Close } from '@mui/icons-material'
import { useNavigate } from 'react-router'
import { useTranslation } from 'react-i18next'
import ButtonMain from './ButtonMain'
import { useCart } from '../context/CartContext'
import { useFavorites } from '../context/FavoritesContext'
import img1 from '../assets/Коляска.svg'
import img2 from '../assets/Одежда.svg'
export default function TopCards() {
    const {t} = useTranslation()
    const navigate = useNavigate()
    const {addToCart,cartItems,increaseQuantity,decreaseQuantity} = useCart()
    const {toggleFavorite,isFavorite} = useFavorites()
    const [anchorEl,setAnchorEl] = useState(null)
    const [selectedProduct,setSelectedProduct] = useState(null)
    const topProducts = [
        {id:101,title:'Коляска CYBEX PRIAM LUX JEREMY SCOTT SPECIAL EDITION 2 В 1 на раме TREKKING',price:152000,image:img1},
        {id:102,title:'Папитто Комплект вязаный на подкладке джемпер с капюшоном и брюки 2 предмета',price:1600,image:img2}
    ]
    const handleAddToCart = (event,product) => {
        addToCart(product)
        setSelectedProduct(product)
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
        setSelectedProduct(null)
    }
    const selectedCartItem = selectedProduct ? cartItems.find((item) => item.id === selectedProduct.id) : null
    const open = Boolean(anchorEl)
    return (
        <>
            <Box sx={{width:'100%',maxWidth:'1500px',px:{xs:'15px',md:'25px'},margin:'auto',mt:{xs:'50px',md:'100px'},display:'grid',gridTemplateColumns:{xs:'1fr',md:'1fr 1fr'},gap:{xs:'20px',md:'30px'}}}>
                {topProducts.map((product,i) => {
                    const favorite = isFavorite(product.id)
                    return (
                        <Box key={product.id} sx={{width:'100%',minHeight:{xs:'auto',md:'360px'},p:{xs:'20px',md:'40px'},position:'relative',borderRadius:'12px',boxShadow:'0px 0px 40px #0000000A',display:'flex',flexDirection:{xs:'column',sm:'row'},justifyContent:'space-between',alignItems:{xs:'center',sm:'stretch'},gap:{xs:'25px',sm:'15px'},overflow:'hidden'}}>
                            <Box sx={{display:'flex',flexDirection:'column',gap:{xs:'20px',md:'30px'},alignItems:{xs:'center',sm:'start'},textAlign:{xs:'center',sm:'start'},zIndex:1}}>
                                <Typography sx={{maxWidth:{xs:'300px',md:'270px'},fontFamily:'"Balsamiq Sans", sans-serif',fontSize:{xs:'17px',md:'18px'},color:'#446B80'}}>
                                    {product.title}
                                </Typography>
                                <Box sx={{display:'flex',alignItems:'center',gap:'2px',color:'#7FC9F0',fontSize:{xs:'21px',md:'24px'},fontWeight:'600'}}>
                                    {product.price.toLocaleString('ru-RU')} <CurrencyRuble sx={{fontSize:{xs:'20px',md:'24px'}}} />
                                </Box>
                                <Box sx={{display:'flex',flexDirection:{xs:'column',sm:'row'},alignItems:'center',gap:'4px',width:{xs:'100%',sm:'auto'}}}>
                                    <ButtonMain onClick={(event) => handleAddToCart(event,product)}>
                                        {t('topCards.addToCart')}
                                    </ButtonMain>
                                    <Button onClick={() => navigate('/payment')} sx={{color:'#446B80',textTransform:'none',fontSize:'16px',borderRadius:'12px',height:'48px'}}>
                                        {t('topCards.buyNow')}
                                    </Button>
                                </Box>
                            </Box>
                            <Box sx={{display:'flex',alignItems:'center',justifyContent:'center',width:{xs:'100%',sm:'45%'},maxHeight:{xs:'220px',md:'280px'}}}>
                                <img src={product.image} alt={product.title} style={{maxWidth:'100%',maxHeight:'260px',objectFit:'contain'}} />
                            </Box>
                            <IconButton onClick={() => toggleFavorite(product)} aria-label={favorite ? t('topCards.removeFromFavorites') : t('topCards.addToFavorites')} sx={{position:'absolute',top:'15px',right:'15px',color:'#7FC9F0'}}>
                                {favorite ? <Favorite /> : <FavoriteBorder />}
                            </IconButton>
                        </Box>
                    )
                })}
            </Box>
            <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{vertical:'center',horizontal:'right'}}
                transformOrigin={{vertical:'center',horizontal:'left'}}
                slotProps={{paper:{sx:{width:{xs:'calc(100vw - 30px)',sm:'390px'},maxWidth:'390px',p:'20px',ml:{xs:0,sm:'15px'},borderRadius:'16px',boxShadow:'0px 10px 40px #00000018'}}}}
            >
                {selectedProduct && (
                    <Box sx={{display:'flex',flexDirection:'column',gap:'18px'}}>
                        <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                            <Typography sx={{fontFamily:'"Balsamiq Sans", sans-serif',fontSize:'20px',fontWeight:'600',color:'#446B80'}}>
                                {t('topCards.addedToCart')}
                            </Typography>
                            <IconButton onClick={handleClose} aria-label={t('topCards.close')} sx={{p:'4px',color:'#446B80'}}>
                                <Close sx={{fontSize:'20px'}} />
                            </IconButton>
                        </Box>
                        <Box sx={{display:'flex',alignItems:'center',gap:'15px'}}>
                            <Box sx={{width:'85px',height:'85px',flexShrink:0,display:'flex',alignItems:'center',justifyContent:'center',bgcolor:'#F8FBFD',borderRadius:'12px'}}>
                                <img src={selectedProduct.image} alt={selectedProduct.title} style={{width:'75px',height:'75px',objectFit:'contain'}} />
                            </Box>
                            <Box sx={{display:'flex',flexDirection:'column',alignItems:'flex-start',gap:'6px',minWidth:0}}>
                                <Typography sx={{fontFamily:'"Balsamiq Sans", sans-serif',fontSize:'15px',lineHeight:'1.3',color:'#446B80',fontWeight:'500'}}>
                                    {selectedProduct.title}
                                </Typography>
                                <Box sx={{display:'flex',alignItems:'center',gap:'4px',color:'#7FC9F0',fontSize:'18px',fontWeight:'600'}}>
                                    {selectedProduct.price.toLocaleString('ru-RU')} <CurrencyRuble sx={{fontSize:'18px'}} />
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                            <Typography sx={{fontFamily:'"Balsamiq Sans", sans-serif',fontSize:'16px',color:'#446B80'}}>
                                {t('topCards.quantity')}
                            </Typography>
                            <Box sx={{display:'flex',alignItems:'center',border:'1px solid #DCEAF1',borderRadius:'10px',overflow:'hidden'}}>
                                <IconButton onClick={() => selectedCartItem && decreaseQuantity(selectedCartItem.id)} disabled={!selectedCartItem} sx={{width:'38px',height:'38px',borderRadius:0,color:'#446B80'}}>
                                    −
                                </IconButton>
                                <Typography sx={{width:'35px',textAlign:'center',fontSize:'16px',fontWeight:'600',color:'#446B80'}}>
                                    {selectedCartItem?.quantity || 0}
                                </Typography>
                                <IconButton onClick={() => selectedCartItem && increaseQuantity(selectedCartItem.id)} disabled={!selectedCartItem} sx={{width:'38px',height:'38px',borderRadius:0,color:'#446B80'}}>
                                    +
                                </IconButton>
                            </Box>
                        </Box>
                        <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between',pt:'5px',borderTop:'1px solid #EDF3F6'}}>
                            <Typography sx={{fontFamily:'"Balsamiq Sans", sans-serif',fontSize:'16px',fontWeight:'600',color:'#446B80'}}>
                                {t('topCards.total')}
                            </Typography>
                            <Box sx={{display:'flex',alignItems:'center',gap:'4px',fontSize:'18px',fontWeight:'600',color:'#7FC9F0'}}>
                                {((selectedCartItem?.price || selectedProduct.price) * (selectedCartItem?.quantity || 1)).toLocaleString('ru-RU')} <CurrencyRuble sx={{fontSize:'18px'}} />
                            </Box>
                        </Box>
                        <Button onClick={() => {handleClose();navigate('/cart')}} fullWidth sx={{height:'48px',borderRadius:'12px',textTransform:'none',bgcolor:'#7FC9F0',color:'#FFFFFF',fontFamily:'"Balsamiq Sans", sans-serif',fontSize:'16px','&:hover':{bgcolor:'#62B7E3'}}}>
                            {t('topCards.goToCart')}
                        </Button>
                    </Box>
                )}
            </Popover>
        </>
    )
}