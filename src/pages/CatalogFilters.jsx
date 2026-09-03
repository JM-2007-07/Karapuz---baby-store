import React, { useState, useMemo, useEffect } from 'react'
import { Box, Typography, Button, Select, MenuItem, IconButton, TextField, Checkbox, FormControlLabel, Chip } from '@mui/material'
import { CurrencyRuble, Favorite, FavoriteBorder, Close } from '@mui/icons-material'
import { useNavigate, useParams } from 'react-router'
import { useTranslation } from 'react-i18next'
import ButtonMain from '../components/ButtonMain'
import { useCart } from '../context/CartContext'
import { useFavorites } from '../context/FavoritesContext'
import { catalogs } from '../data/productsData'

export default function CatalogFilters({showOldPrice = true,showNew = true}) {
    const {t} = useTranslation()
    const navigate = useNavigate()
    const {id} = useParams()
    const {addToCart} = useCart()
    const {toggleFavorite,isFavorite} = useFavorites()
    const category = catalogs.find((item) => item.id === id)
    const offers = category || catalogs[0]
    const [priceFrom,setPriceFrom] = useState('')
    const [priceTo,setPriceTo] = useState('')
    const [onlyPromo,setOnlyPromo] = useState(false)
    const [searchBrand,setSearchBrand] = useState('')
    const [selectedFilters,setSelectedFilters] = useState({})
    const [visibleCount,setVisibleCount] = useState(6)
    const [sort,setSort] = useState('popular')
    useEffect(() => {
        setPriceFrom('')
        setPriceTo('')
        setOnlyPromo(false)
        setSearchBrand('')
        setSelectedFilters({})
        setVisibleCount(6)
        setSort('popular')
    },[id])
    const handleToggle = (filterId,value) => {
        setSelectedFilters((prev) => {
            const currentValues = prev[filterId] || []
            if (currentValues.includes(value)) {
                const updatedValues = currentValues.filter((item) => item !== value)
                if (updatedValues.length === 0) {
                    const newFilters = {...prev}
                    delete newFilters[filterId]
                    return newFilters
                }
                return {...prev,[filterId]:updatedValues}
            }
            return {...prev,[filterId]:[...currentValues,value]}
        })
        setVisibleCount(6)
    }
    const handleResetAll = () => {
        setPriceFrom('')
        setPriceTo('')
        setOnlyPromo(false)
        setSearchBrand('')
        setSelectedFilters({})
        setVisibleCount(6)
    }
    const getFilterLabel = (filter,value) => {
        if (filter.labels && filter.labels[String(value)] !== undefined) {
            return filter.labels[String(value)]
        }
        return String(value)
    }
    const filteredProducts = useMemo(() => {
        return [...offers.data].filter((item) => {
            if (priceFrom && item.price < Number(priceFrom)) return false
            if (priceTo && item.price > Number(priceTo)) return false
            if (onlyPromo && !item.oldPrice) return false
            return Object.entries(selectedFilters).every(([filterId,values]) => {
                if (!values || values.length === 0) return true
                return values.some((value) => item[filterId] === value)
            })
        }).sort((a,b) => {
            if (sort === 'price_asc') return a.price - b.price
            if (sort === 'price_desc') return b.price - a.price
            return 0
        })
    },[offers.data,priceFrom,priceTo,onlyPromo,selectedFilters,sort])
    const selectedTags = useMemo(() => {
        return Object.entries(selectedFilters).flatMap(([filterId,values]) => {
            const filter = offers.filters.find((item) => item.id === filterId)
            if (!filter) return []
            return values.map((value) => ({
                filterId,
                value,
                label:getFilterLabel(filter,value)
            }))
        })
    },[selectedFilters,offers.filters])
    const handleShowMore = () => {
        setVisibleCount((prev) => prev + 6)
    }
    return (
        <Box sx={{width:'100%',maxWidth:'1440px',margin:'auto',px:{xs:'15px',md:'30px'},pt:{xs:'100px',md:'180px'},pb:'60px'}}>
            <Box sx={{display:'flex',gap:'8px',mb:'15px',flexWrap:'wrap'}}>
                <Typography onClick={() => navigate('/')} sx={{color:'rgba(68,107,128,0.6)',fontSize:'13px',cursor:'pointer'}}>
                    {t('catalogFilters.breadcrumbs.home')}
                </Typography>
                <Typography sx={{color:'rgba(68,107,128,0.6)',fontSize:'13px'}}>•</Typography>
                <Typography onClick={() => navigate(`/catalog/${offers.id}`)} sx={{color:'rgba(68,107,128,0.6)',fontSize:'13px',cursor:'pointer'}}>
                    {t('catalogFilters.breadcrumbs.catalog')}
                </Typography>
                <Typography sx={{color:'rgba(68,107,128,0.6)',fontSize:'13px'}}>•</Typography>
                <Typography sx={{color:'#446B80',fontSize:'13px',fontWeight:500}}>
                    {offers.title}
                </Typography>
            </Box>
            <Typography component="h1" sx={{fontFamily:'"Balsamiq Sans", sans-serif',color:'#446B80',fontSize:{xs:'28px',md:'36px'},fontWeight:700,mb:'30px'}}>
                {offers.title}
            </Typography>
            <Box sx={{display:'grid',gridTemplateColumns:{xs:'1fr',md:'260px 1fr'},gap:'40px',alignItems:'start'}}>
                <Box sx={{display:'flex',flexDirection:'column',gap:'24px'}}>
                    {(selectedTags.length > 0 || priceFrom || priceTo || onlyPromo) && (
                        <Box sx={{display:'flex',flexDirection:'column',gap:'10px'}}>
                            <Typography sx={{color:'#446B80',fontSize:'13px',fontWeight:600}}>
                                {t('catalogFilters.selectedFilters')}
                            </Typography>
                            <Box sx={{display:'flex',flexWrap:'wrap',gap:'6px'}}>
                                {selectedTags.map((tag) => (
                                    <Chip key={`${tag.filterId}-${String(tag.value)}`} label={tag.label} onDelete={() => handleToggle(tag.filterId,tag.value)} deleteIcon={<Close sx={{fontSize:'14px !important',color:'rgba(68,107,128,0.6)'}} />} sx={{bgcolor:'#F0F7FB',color:'#446B80',fontSize:'12px',height:'28px',borderRadius:'6px'}} />
                                ))}
                                {onlyPromo && (
                                    <Chip label={t('catalogFilters.onlySales')} onDelete={() => setOnlyPromo(false)} deleteIcon={<Close sx={{fontSize:'14px !important',color:'rgba(68,107,128,0.6)'}} />} sx={{bgcolor:'#F0F7FB',color:'#446B80',fontSize:'12px',height:'28px',borderRadius:'6px'}} />
                                )}
                                {(priceFrom || priceTo) && (
                                    <Chip label={t('catalogFilters.priceRange',{from:priceFrom || '0',to:priceTo || '∞'})} onDelete={() => {setPriceFrom('');setPriceTo('')}} deleteIcon={<Close sx={{fontSize:'14px !important',color:'rgba(68,107,128,0.6)'}} />} sx={{bgcolor:'#F0F7FB',color:'#446B80',fontSize:'12px',height:'28px',borderRadius:'6px'}} />
                                )}
                            </Box>
                            <Typography onClick={handleResetAll} sx={{color:'#7FC9F0',fontSize:'12px',cursor:'pointer',textDecoration:'underline'}}>
                                {t('catalogFilters.resetAll')}
                            </Typography>
                        </Box>
                    )}
                    <Box>
                        <Typography sx={{color:'#446B80',fontSize:'15px',fontWeight:700,mb:'10px'}}>
                            {t('catalogFilters.price')}
                        </Typography>
                        <Box sx={{display:'flex',gap:'10px',alignItems:'center'}}>
                            <TextField placeholder={t('catalogFilters.from')} size="small" value={priceFrom} onChange={(e) => {setPriceFrom(e.target.value.replace(/\D/g,''));setVisibleCount(6)}} sx={{'& .MuiOutlinedInput-root':{borderRadius:'8px',fontSize:'13px'}}} />
                            <TextField placeholder={t('catalogFilters.to')} size="small" value={priceTo} onChange={(e) => {setPriceTo(e.target.value.replace(/\D/g,''));setVisibleCount(6)}} sx={{'& .MuiOutlinedInput-root':{borderRadius:'8px',fontSize:'13px'}}} />
                        </Box>
                        <FormControlLabel control={<Checkbox checked={onlyPromo} onChange={(e) => {setOnlyPromo(e.target.checked);setVisibleCount(6)}} sx={{color:'#7FC9F0','&.Mui-checked':{color:'#7FC9F0'}}} />} label={<Typography sx={{fontSize:'13px',color:'#446B80'}}>{t('catalogFilters.onlySales')}</Typography>} sx={{mt:'6px'}} />
                    </Box>
                    {offers.filters.map((filter) => {
                        let options = filter.options
                        if (filter.id === 'brand' && searchBrand) {
                            options = filter.options.filter((item) => String(item).toLowerCase().includes(searchBrand.toLowerCase()))
                        }
                        return (
                            <Box key={filter.id}>
                                <Typography sx={{color:'#446B80',fontSize:'15px',fontWeight:700,mb:'10px'}}>
                                    {filter.title}
                                </Typography>
                                {filter.id === 'brand' && (
                                    <TextField placeholder={t('catalogFilters.brandSearch')} size="small" fullWidth value={searchBrand} onChange={(e) => setSearchBrand(e.target.value)} sx={{mb:'10px','& .MuiOutlinedInput-root':{borderRadius:'8px',fontSize:'12px',bgcolor:'#F9FBFD'}}} />
                                )}
                                <Box sx={{maxHeight:'180px',overflowY:'auto',display:'flex',flexDirection:'column'}}>
                                    {options.map((option) => {
                                        const isChecked = (selectedFilters[filter.id] || []).includes(option)
                                        return (
                                            <FormControlLabel key={`${filter.id}-${String(option)}`} control={<Checkbox checked={isChecked} onChange={() => handleToggle(filter.id,option)} size="small" sx={{color:'rgba(68,107,128,0.3)','&.Mui-checked':{color:'#7FC9F0'}}} />} label={<Typography sx={{fontSize:'13px',color:'#446B80'}}>{getFilterLabel(filter,option)}</Typography>} />
                                        )
                                    })}
                                </Box>
                            </Box>
                        )
                    })}
                </Box>
                <Box>
                    <Box sx={{display:'flex',alignItems:{xs:'flex-start',sm:'center'},justifyContent:'space-between',gap:'15px',mb:'30px',flexDirection:{xs:'column',sm:'row'}}}>
                        <Typography sx={{color:'rgba(68,107,128,0.7)',fontSize:'14px'}}>
                            {t('catalogFilters.foundProducts',{count:filteredProducts.length})}
                        </Typography>
                        <Box sx={{display:'flex',alignItems:'center',gap:'10px'}}>
                            <Typography sx={{color:'rgba(68,107,128,0.7)',fontSize:'14px'}}>
                                {t('catalogFilters.sortBy')}
                            </Typography>
                            <Select value={sort} onChange={(e) => {setSort(e.target.value);setVisibleCount(6)}} variant="standard" disableUnderline sx={{color:'#446B80',fontSize:'14px',fontWeight:600,'& .MuiSelect-select':{p:0}}}>
                                <MenuItem value="popular">{t('catalogFilters.sort.popular')}</MenuItem>
                                <MenuItem value="price_asc">{t('catalogFilters.sort.priceAsc')}</MenuItem>
                                <MenuItem value="price_desc">{t('catalogFilters.sort.priceDesc')}</MenuItem>
                            </Select>
                        </Box>
                    </Box>
                    {filteredProducts.length > 0 ? (
                        <>
                            <Box sx={{display:'grid',gridTemplateColumns:{xs:'1fr',sm:'repeat(2,1fr)',lg:'repeat(3,1fr)'},gap:'20px',mb:'40px'}}>
                                {filteredProducts.slice(0,visibleCount).map((item) => (
                                    <Box key={item.id} sx={{height:{xs:'500px',md:'520px'},p:'20px',boxShadow:'0px 0px 40px #0000000A',borderRadius:'12px',position:'relative',display:'flex',flexDirection:'column',justifyContent:'space-between',alignItems:'center',textAlign:'center',bgcolor:'#FFFFFF',transition:'transform 0.3s ease, box-shadow 0.3s ease','&:hover':{transform:'translateY(-5px)',boxShadow:'0px 10px 45px #00000014'}}}>
                                        <Box onClick={() => navigate(`/product/${item.id}`)} sx={{height:{xs:'210px',md:'240px'},width:'100%',display:'flex',justifyContent:'center',alignItems:'center',cursor:'pointer'}}>
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
                                            {t('catalogFilters.addToCart')}
                                        </ButtonMain>
                                        <Button onClick={() => navigate('/payment')} sx={{textTransform:'none',borderRadius:'12px',height:'48px',color:'#7FC9F0',fontSize:'16px'}}>
                                            {t('catalogFilters.buyNow')}
                                        </Button>
                                        <IconButton onClick={() => toggleFavorite(item)} sx={{position:'absolute',top:'15px',right:'15px',color:'#7FC9F0'}}>
                                            {isFavorite(item.id) ? <Favorite /> : <FavoriteBorder />}
                                        </IconButton>
                                        {showNew && item.isNew && (
                                            <Box sx={{width:'52px',height:'24px',position:'absolute',top:'15px',left:'15px',bgcolor:'#E5F4FC',borderRadius:'8px',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:'600',color:'#446B80',fontSize:'12px'}}>
                                                {t('catalogFilters.new')}
                                            </Box>
                                        )}
                                    </Box>
                                ))}
                            </Box>
                            {visibleCount < filteredProducts.length && (
                                <Button onClick={handleShowMore} fullWidth sx={{border:'1px solid #7FC9F0',borderRadius:'25px',color:'#446B80',textTransform:'none',py:'12px',fontSize:'14px',fontWeight:500,bgcolor:'#FFFFFF',transition:'all 0.3s ease','&:hover':{bgcolor:'#7FC9F0',color:'#FFFFFF'}}}>
                                    {t('catalogFilters.showMore')}
                                </Button>
                            )}
                        </>
                    ) : (
                        <Box sx={{minHeight:'300px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:'15px',textAlign:'center'}}>
                            <Typography sx={{fontFamily:'"Balsamiq Sans", sans-serif',fontSize:'24px',color:'#446B80'}}>
                                {t('catalogFilters.notFound.title')}
                            </Typography>
                            <Typography sx={{fontSize:'14px',color:'rgba(68,107,128,0.7)'}}>
                                {t('catalogFilters.notFound.description')}
                            </Typography>
                            <ButtonMain onClick={handleResetAll}>
                                {t('catalogFilters.resetFilters')}
                            </ButtonMain>
                        </Box>
                    )}
                </Box>
            </Box>
        </Box>
    )
}