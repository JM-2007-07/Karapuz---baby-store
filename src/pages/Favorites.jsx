import React from 'react'
import { Box, Button, IconButton, Typography } from '@mui/material'
import { CurrencyRuble, Favorite } from '@mui/icons-material'
import ButtonMain from '../components/ButtonMain'
import { useCart } from '../context/CartContext'
import { useFavorites } from '../context/FavoritesContext'
import { useTranslation } from 'react-i18next'
export default function Favorites() {
    const { t } = useTranslation()
    const { addToCart } = useCart()
    const { favorites, removeFromFavorites } = useFavorites()
    return (
        <Box sx={{width:'100%',maxWidth:'1500px',px:{xs:'15px',md:'25px'},margin:'auto',pt:{xs:'110px',md:'180px'},pb:{xs:'60px',md:'100px'}}}>
            <Typography data-aos="fade-up" data-aos-duration="600" sx={{fontFamily:'"Balsamiq Sans", sans-serif',fontSize:{xs:'24px',sm:'36px',md:'48px'},lineHeight:'1.15',color:'#446B80',textAlign:'start',mb:{xs:'40px',md:'60px'}}}>
                {t('favorites.title')}
            </Typography>
            {favorites.length === 0 ? (
                <Box data-aos="fade-up" sx={{minHeight:'300px',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',gap:'15px'}}>
                    <Favorite sx={{fontSize:'60px',color:'rgba(127,201,240,0.35)'}} />
                    <Typography sx={{fontFamily:'"Balsamiq Sans", sans-serif',fontSize:'22px',color:'#446B80'}}>
                        {t('favorites.empty.title')}
                    </Typography>
                    <Typography sx={{fontSize:'14px',color:'rgba(68,107,128,0.6)'}}>
                        {t('favorites.empty.description')}
                    </Typography>
                </Box>
            ) : (
                <Box data-aos="fade-up" data-aos-duration="700" sx={{display:'grid',gridTemplateColumns:{xs:'1fr',sm:'repeat(2,1fr)',md:'repeat(3,1fr)',lg:'repeat(4,1fr)'},gap:{xs:'20px',md:'25px'}}}>
                    {favorites.map((offer) => (
                        <Box key={offer.id} sx={{height:{xs:'500px',md:'520px'},p:'20px',boxShadow:'0px 0px 40px #0000000A',borderRadius:'12px',position:'relative',display:'flex',flexDirection:'column',justifyContent:'space-between',alignItems:'center',textAlign:'center',bgcolor:'#FFFFFF',transition:'transform 0.3s ease, box-shadow 0.3s ease','&:hover':{transform:'translateY(-5px)',boxShadow:'0px 10px 45px #00000014'}}}>
                            <Box sx={{height:{xs:'210px',md:'240px'},width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                                <img src={offer.image} alt={offer.title} style={{maxWidth:'100%',maxHeight:'100%',objectFit:'contain'}} />
                            </Box>
                            <Typography sx={{fontFamily:'"Balsamiq Sans", sans-serif',fontSize:'18px',color:'#446B80',maxWidth:'230px'}}>
                                {offer.title}
                            </Typography>
                            <Box sx={{display:'flex',flexDirection:'column',gap:'4px',alignItems:'center'}}>
                                <Box sx={{display:'flex',gap:'4px',alignItems:'center',fontSize:{xs:'21px',md:'24px'},fontWeight:'600',color:'#7FC9F0'}}>
                                    {offer.price} <CurrencyRuble sx={{fontSize:{xs:'20px',md:'24px'}}} />
                                </Box>
                            </Box>
                            <ButtonMain onClick={() => addToCart(offer)}>
                                {t('favorites.addToCart')}
                            </ButtonMain>
                            <Button sx={{textTransform:'none',borderRadius:'12px',height:'48px',color:'#7FC9F0',fontSize:'16px'}}>
                                {t('favorites.buyNow')}
                            </Button>
                            <IconButton onClick={() => removeFromFavorites(offer.id)} sx={{position:'absolute',top:'15px',right:'15px',color:'#7FC9F0'}}>
                                <Favorite />
                            </IconButton>
                        </Box>
                    ))}
                </Box>
            )}
        </Box>
    )
}