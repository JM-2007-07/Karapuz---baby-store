import React, { useEffect, useMemo, useState } from 'react'
import { Box, Typography, Button, Select, MenuItem, IconButton } from '@mui/material'
import { CurrencyRuble, Favorite, FavoriteBorder, SearchOutlined } from '@mui/icons-material'
import { useNavigate, useParams, useSearchParams } from 'react-router'
import { useTranslation } from 'react-i18next'
import ButtonMain from '../components/ButtonMain'
import { useCart } from '../context/CartContext'
import { useFavorites } from '../context/FavoritesContext'
import { catalogs } from '../data/productsData'

export default function Catalog({showOldPrice = false,showNew = false}) {
    const {t} = useTranslation()
    const navigate = useNavigate()
    const {id} = useParams()
    const [searchParams] = useSearchParams()
    const {addToCart} = useCart()
    const {toggleFavorite,isFavorite} = useFavorites()
    const categories = [
        {name:t('catalogPage.categories.cribs'),id:'cribs'},
        {name:t('catalogPage.categories.strollers'),id:'strollers'},
        {name:t('catalogPage.categories.carSeats'),id:'car-seats'},
        {name:t('catalogPage.categories.clothes'),id:'clothes'},
        {name:t('catalogPage.categories.feeding'),id:'feeding'},
        {name:t('catalogPage.categories.hygiene'),id:'hygiene'},
        {name:t('catalogPage.categories.smartToys'),id:'smart-toys'}
    ]
    const searchQuery = searchParams.get('search')?.trim().toLowerCase() || ''
    const category = catalogs.find((item) => item.id === id)
    const allProducts = useMemo(() => catalogs.flatMap((catalog) => catalog.data.map((product) => ({...product,categoryId:catalog.id,categoryTitle:catalog.title}))), [])
    const getCategoryTitle = (categoryId) => {
        const categoryKey = {
            cribs:'cribs',
            strollers:'strollers',
            'car-seats':'carSeats',
            clothes:'clothes',
            feeding:'feeding',
            hygiene:'hygiene',
            'smart-toys':'smartToys'
        }
        return categoryKey[categoryId] ? t(`catalogPage.categories.${categoryKey[categoryId]}`) : t('catalogPage.allProducts')
    }
    const offers = category || {id:'all',title:searchQuery ? `${t('catalogPage.searchResults')}: "${searchParams.get('search')}"` : t('catalogPage.allProducts'),data:allProducts}
    const displayTitle = category ? getCategoryTitle(category.id) : offers.title
    const [visibleCount,setVisibleCount] = useState(6)
    const [sort,setSort] = useState('popular')
    useEffect(() => {
        setVisibleCount(6)
    }, [id,searchQuery])
    const handleShowMore = () => {
        setVisibleCount((prev) => prev + 6)
    }
    const searchedProducts = useMemo(() => {
        if (!searchQuery) return offers.data
        return offers.data.filter((item) => {
            const title = item.title?.toLowerCase() || ''
            const categoryTitle = item.categoryTitle?.toLowerCase() || ''
            return title.includes(searchQuery) || categoryTitle.includes(searchQuery)
        })
    }, [offers.data,searchQuery])
    const sortedProducts = useMemo(() => {
        return [...searchedProducts].sort((a,b) => {
            if (sort === 'price_asc') return a.price - b.price
            if (sort === 'price_desc') return b.price - a.price
            return 0
        })
    }, [searchedProducts,sort])
    const handleCategoryClick = (categoryId) => {
        setVisibleCount(6)
        navigate(`/catalog/${categoryId}`)
    }
    return (
        <Box sx={{width:'100%',maxWidth:'1440px',margin:'auto',px:{xs:'15px',md:'30px'},pt:{xs:'100px',md:'180px'},pb:'60px'}}>
            <Box sx={{display:'flex',gap:'8px',mb:'15px',flexWrap:'wrap'}}>
                <Typography onClick={() => navigate('/')} sx={{color:'rgba(68,107,128,0.6)',fontSize:'13px',textDecoration:'none',cursor:'pointer'}}>{t('catalogPage.breadcrumbs.home')}</Typography>
                <Typography sx={{color:'rgba(68,107,128,0.6)',fontSize:'13px'}}>•</Typography>
                <Typography sx={{color:'rgba(68,107,128,0.6)',fontSize:'13px'}}>{t('catalogPage.breadcrumbs.catalog')}</Typography>
                <Typography sx={{color:'rgba(68,107,128,0.6)',fontSize:'13px'}}>•</Typography>
                <Typography sx={{color:'#446B80',fontSize:'13px',fontWeight:500}}>{displayTitle}</Typography>
            </Box>
            <Typography component="h1" sx={{fontFamily:'"Balsamiq Sans", sans-serif',color:'#446B80',fontSize:{xs:'28px',md:'36px'},fontWeight:700,mb:'30px'}}>{displayTitle}</Typography>
            <Box sx={{display:'grid',gridTemplateColumns:{xs:'1fr',md:'240px 1fr'},gap:'40px',alignItems:'start'}}>
                <Box sx={{display:'flex',flexDirection:'column',gap:'16px'}}>
                    {categories.map((cat) => {
                        const active = cat.id === id
                        return (
                            <Typography onClick={() => handleCategoryClick(cat.id)} key={cat.id} sx={{color:active ? '#7FC9F0' : '#446B80',fontSize:'16px',fontWeight:active ? 700 : 500,cursor:'pointer',transition:'0.2s','&:hover':{color:'#7FC9F0'}}}>
                                {cat.name}
                            </Typography>
                        )
                    })}
                    {id !== 'all' && (
                        <ButtonMain onClick={() => navigate(`/filters/${id}`)}>{t('catalogPage.filter')}</ButtonMain>
                    )}
                </Box>
                <Box>
                    <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:'15px',mb:'30px',flexWrap:'wrap'}}>
                        <Typography sx={{color:'rgba(68,107,128,0.7)',fontSize:'14px'}}>
                            {searchQuery ? t('catalogPage.foundProducts',{count:searchedProducts.length}) : t('catalogPage.productsCount',{count:sortedProducts.length})}
                        </Typography>
                        <Box sx={{display:'flex',alignItems:'center',gap:'10px'}}>
                            <Typography sx={{color:'rgba(68,107,128,0.7)',fontSize:'14px'}}>{t('catalogPage.sortBy')}</Typography>
                            <Select value={sort} onChange={(e) => setSort(e.target.value)} variant="standard" disableUnderline sx={{color:'#446B80',fontSize:'14px',fontWeight:600,'& .MuiSelect-select':{p:0}}}>
                                <MenuItem value="popular">{t('catalogPage.sort.popular')}</MenuItem>
                                <MenuItem value="price_asc">{t('catalogPage.sort.priceAsc')}</MenuItem>
                                <MenuItem value="price_desc">{t('catalogPage.sort.priceDesc')}</MenuItem>
                            </Select>
                        </Box>
                    </Box>
                    {sortedProducts.length > 0 ? (
                        <>
                            <Box sx={{display:'grid',gridTemplateColumns:{xs:'1fr',sm:'repeat(2,1fr)',lg:'repeat(3,1fr)'},gap:'20px',mb:'40px'}}>
                                {sortedProducts.slice(0,visibleCount).map((item) => (
                                    <Box key={item.id} sx={{height:{xs:'500px',md:'520px'},p:'20px',boxShadow:'0px 0px 40px #0000000A',borderRadius:'12px',position:'relative',display:'flex',flexDirection:'column',justifyContent:'space-between',alignItems:'center',textAlign:'center',bgcolor:'#FFFFFF',transition:'transform 0.3s ease, box-shadow 0.3s ease','&:hover':{transform:'translateY(-5px)',boxShadow:'0px 10px 45px #00000014'}}}>
                                        <Box onClick={() => navigate(`/product/${item.id}`)} sx={{height:{xs:'210px',md:'240px'},width:'100%',display:'flex',justifyContent:'center',alignItems:'center',cursor:'pointer'}}>
                                            <img src={item.image} alt={item.title} style={{maxWidth:'100%',maxHeight:'100%',objectFit:'contain'}} />
                                        </Box>
                                        <Typography sx={{fontFamily:'"Balsamiq Sans", sans-serif',fontSize:'18px',color:'#446B80',maxWidth:'230px'}}>{item.title}</Typography>
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
                                        <ButtonMain onClick={() => addToCart(item)}>{t('catalogPage.addToCart')}</ButtonMain>
                                        <Button onClick={() => navigate('/payment')} sx={{textTransform:'none',borderRadius:'12px',height:'48px',color:'#7FC9F0',fontSize:'16px'}}>{t('catalogPage.buyNow')}</Button>
                                        <IconButton onClick={() => toggleFavorite(item)} sx={{position:'absolute',top:'15px',right:'15px',color:'#7FC9F0'}}>
                                            {isFavorite(item.id) ? <Favorite /> : <FavoriteBorder />}
                                        </IconButton>
                                        {showNew && (
                                            <Box sx={{width:'52px',height:'24px',position:'absolute',top:'15px',left:'15px',bgcolor:'#E5F4FC',borderRadius:'8px',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:'600',color:'#446B80',fontSize:'12px'}}>{t('catalogPage.new')}</Box>
                                        )}
                                    </Box>
                                ))}
                            </Box>
                            {visibleCount < sortedProducts.length && (
                                <Button onClick={handleShowMore} fullWidth sx={{border:'1px solid #7FC9F0',borderRadius:'25px',color:'#446B80',textTransform:'none',py:'12px',fontSize:'14px',fontWeight:500,bgcolor:'#FFFFFF',transition:'all 0.3s ease','&:hover':{bgcolor:'#7FC9F0',color:'#FFFFFF'}}}>{t('catalogPage.showMore')}</Button>
                            )}
                        </>
                    ) : (
                        <Box sx={{minHeight:'350px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',textAlign:'center',bgcolor:'#F8FBFC',borderRadius:'16px',p:'30px'}}>
                            <SearchOutlined sx={{fontSize:'55px',color:'#7FC9F0',mb:'15px'}} />
                            <Typography sx={{fontFamily:'"Balsamiq Sans", sans-serif',fontSize:'24px',color:'#446B80',mb:'10px'}}>{t('catalogPage.notFound.title')}</Typography>
                            <Typography sx={{fontSize:'14px',color:'rgba(68,107,128,0.65)',maxWidth:'400px'}}>{t('catalogPage.notFound.description')}</Typography>
                            <Button onClick={() => navigate('/catalog/cribs')} sx={{mt:'20px',textTransform:'none',color:'#FFFFFF',bgcolor:'#7FC9F0',borderRadius:'9px',px:'25px','&:hover':{bgcolor:'#446B80'}}}>{t('catalogPage.notFound.button')}</Button>
                        </Box>
                    )}
                </Box>
            </Box>
        </Box>
    )
}