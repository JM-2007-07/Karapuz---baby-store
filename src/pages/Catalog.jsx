import React, { useState } from 'react'
import { Box, Typography, Button, Select, MenuItem, IconButton } from '@mui/material'
import { CurrencyRuble, Favorite, FavoriteBorder } from '@mui/icons-material'
import { useNavigate, useParams } from 'react-router'
import ButtonMain from '../components/ButtonMain'
import { useCart } from '../context/CartContext'
import { useFavorites } from '../context/FavoritesContext'
import { catalogs } from '../data/productsData'

export default function Catalog({showOldPrice = false,showNew = false}) {
    const navigate = useNavigate()
    const { id } = useParams()
    const { addToCart } = useCart()
    const { toggleFavorite, isFavorite } = useFavorites()

    const categories = [
        {name:'Кроватки',id:'cribs'},
        {name:'Коляски',id:'strollers'},
        {name:'Автокресла',id:'car-seats'},
        {name:'Одежда',id:'clothes'},
        {name:'Кормление',id:'feeding'},
        {name:'Гигиена и уход',id:'hygiene'},
        {name:'Умные игрушки',id:'smart-toys'}
    ]

    const category = catalogs.find((item) => item.id === id)

    const offers = category || catalogs[0]

    const [visibleCount, setVisibleCount] = useState(6)
    const [sort, setSort] = useState('popular')

    const handleShowMore = () => {
        setVisibleCount((prev) => prev + 6)
    }

    const sortedProducts = [...offers.data].sort((a,b) => {
        if (sort === 'price_asc') return a.price - b.price
        if (sort === 'price_desc') return b.price - a.price
        return 0
    })

    return (
        <Box sx={{width:'100%',maxWidth:'1440px',margin:'auto',px:{xs:'15px',md:'30px'},pt:{xs:'100px',md:'180px'},pb:'60px'}}>
            
            <Box sx={{display:'flex',gap:'8px',mb:'15px'}}>
                <Typography onClick={() => navigate('/')} sx={{color:'rgba(68,107,128,0.6)',fontSize:'13px',textDecoration:'none',cursor:'pointer'}}>
                    Главная
                </Typography>

                <Typography sx={{color:'rgba(68,107,128,0.6)',fontSize:'13px'}}>
                    •
                </Typography>

                <Typography sx={{color:'rgba(68,107,128,0.6)',fontSize:'13px'}}>
                    Каталог
                </Typography>

                <Typography sx={{color:'rgba(68,107,128,0.6)',fontSize:'13px'}}>
                    •
                </Typography>

                <Typography sx={{color:'#446B80',fontSize:'13px',fontWeight:500}}>
                    {offers.title}
                </Typography>
            </Box>

            <Typography component="h1" sx={{fontFamily:'"Balsamiq Sans", sans-serif',color:'#446B80',fontSize:{xs:'28px',md:'36px'},fontWeight:700,mb:'30px'}}>
                {offers.title}
            </Typography>

            <Box sx={{display:'grid',gridTemplateColumns:{xs:'1fr',md:'240px 1fr'},gap:'40px',alignItems:'start'}}>
                
                <Box sx={{display:'flex',flexDirection:'column',gap:'16px'}}>
                    {categories.map((cat) => {
                        const active = cat.id === offers.id

                        return (
                            <Typography
                                onClick={() => {
                                    setVisibleCount(6)
                                    navigate(`/catalog/${cat.id}`)
                                }}
                                key={cat.id}
                                sx={{
                                    color:active ? '#7FC9F0' : '#446B80',
                                    fontSize:'16px',
                                    fontWeight:active ? 700 : 500,
                                    cursor:'pointer',
                                    transition:'0.2s',
                                    '&:hover':{color:'#7FC9F0'}
                                }}
                            >
                                {cat.name}
                            </Typography>
                        )
                    })}
                </Box>

                <Box>
                    
                    <Box sx={{display:'flex',alignItems:'center',gap:'10px',mb:'30px'}}>
                        <Typography sx={{color:'rgba(68,107,128,0.7)',fontSize:'14px'}}>
                            Сортировать по:
                        </Typography>

                        <Select
                            value={sort}
                            onChange={(e) => setSort(e.target.value)}
                            variant="standard"
                            disableUnderline
                            sx={{
                                color:'#446B80',
                                fontSize:'14px',
                                fontWeight:600,
                                '& .MuiSelect-select':{p:0}
                            }}
                        >
                            <MenuItem value="popular">популярности</MenuItem>
                            <MenuItem value="price_asc">сначала дешевле</MenuItem>
                            <MenuItem value="price_desc">сначала дороже</MenuItem>
                        </Select>
                    </Box>

                    <Box sx={{display:'grid',gridTemplateColumns:{xs:'1fr',sm:'repeat(2,1fr)',lg:'repeat(3,1fr)'},gap:'20px',mb:'40px'}}>
                        
                        {sortedProducts.slice(0,visibleCount).map((item) => (
                            <Box key={item.id} sx={{height:{xs:'500px',md:'520px'},p:'20px',boxShadow:'0px 0px 40px #0000000A',borderRadius:'12px',position:'relative',display:'flex',flexDirection:'column',justifyContent:'space-between',alignItems:'center',textAlign:'center',bgcolor:'#FFFFFF',transition:'transform 0.3s ease, box-shadow 0.3s ease','&:hover':{transform:'translateY(-5px)',boxShadow:'0px 10px 45px #00000014'}}}>

                                <Box onClick={() => navigate(`/product/${item.id}`)} sx={{height:{xs:'210px',md:'240px'},width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                                    <img src={item.image} alt={item.title} style={{maxWidth:'100%',maxHeight:'100%',objectFit:'contain'}} />
                                </Box>

                                <Typography sx={{fontFamily:'"Balsamiq Sans", sans-serif',fontSize:'18px',color:'#446B80',maxWidth:'230px'}}>
                                    {item.title}
                                </Typography>

                                <Box sx={{display:'flex',flexDirection:'column',gap:'4px',alignItems:'center'}}>
                                    <Box sx={{display:'flex',gap:'4px',alignItems:'center',fontSize:{xs:'21px',md:'24px'},fontWeight:'600',color:'#7FC9F0'}}>
                                        {item.price.toLocaleString('ru-RU')}
                                        <CurrencyRuble sx={{fontSize:{xs:'20px',md:'24px'}}} />
                                    </Box>

                                    {showOldPrice && item.oldPrice && (
                                        <Box sx={{display:'flex',gap:'4px',alignItems:'center',textDecoration:'line-through',fontSize:'16px',fontWeight:'500',color:'#446B80'}}>
                                            {item.oldPrice.toLocaleString('ru-RU')}
                                            <CurrencyRuble sx={{fontSize:'16px'}} />
                                        </Box>
                                    )}
                                </Box>

                                <ButtonMain onClick={() => addToCart(item)}>
                                    В корзину
                                </ButtonMain>

                                <Button sx={{textTransform:'none',borderRadius:'12px',height:'48px',color:'#7FC9F0',fontSize:'16px'}}>
                                    Купить в один клик
                                </Button>

                                <IconButton
                                    onClick={() => toggleFavorite(item)}
                                    sx={{position:'absolute',top:'15px',right:'15px',color:'#7FC9F0'}}
                                >
                                    {isFavorite(item.id) ? <Favorite /> : <FavoriteBorder />}
                                </IconButton>

                                {showNew && (
                                    <Box sx={{width:'52px',height:'24px',position:'absolute',top:'15px',left:'15px',bgcolor:'#E5F4FC',borderRadius:'8px',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:'600',color:'#446B80',fontSize:'12px'}}>
                                        NEW
                                    </Box>
                                )}

                            </Box>
                        ))}

                    </Box>

                    {visibleCount < sortedProducts.length && (
                        <Button
                            onClick={handleShowMore}
                            fullWidth
                            sx={{border:'1px solid #7FC9F0',borderRadius:'25px',color:'#446B80',textTransform:'none',py:'12px',fontSize:'14px',fontWeight:500,bgcolor:'#FFFFFF',transition:'all 0.3s ease','&:hover':{bgcolor:'#7FC9F0',color:'#FFFFFF'}}}
                        >
                            Показать еще
                        </Button>
                    )}

                </Box>
            </Box>
        </Box>
    )
}