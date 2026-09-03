import React, { useState, useMemo } from 'react'
import { Box, Typography, Button, Rating, Dialog, IconButton, TextField, DialogContent } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ZoomInIcon from '@mui/icons-material/ZoomIn'
import CloseIcon from '@mui/icons-material/Close'
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined'
import { CurrencyRuble } from '@mui/icons-material'
import { useParams, useNavigate } from 'react-router'
import ButtonMain from '../components/ButtonMain'
import Cards from '../components/Cards'
import { catalogs } from '../data/productsData'
import { useCart } from '../context/CartContext'
import { useFavorites } from '../context/FavoritesContext'

export default function ProductDetails() {
    const { id } = useParams()
    const navigate = useNavigate()
    const { addToCart } = useCart()
    const { toggleFavorite, isFavorite } = useFavorites()

    const [selectedTab, setSelectedTab] = useState(0)
    const [selectedImage, setSelectedImage] = useState(null)
    const [openModal, setOpenModal] = useState(false)
    const [openReviewModal, setOpenReviewModal] = useState(false)
    const [openSuccessModal, setOpenSuccessModal] = useState(false)

    const productData = useMemo(() => {
        for (const catalog of catalogs) {
            const product = catalog.data.find(item => String(item.id) === String(id))

            if (product) {
                return {
                    product,
                    category: catalog
                }
            }
        }

        return null
    }, [id])

    const product = productData?.product
    const category = productData?.category

    React.useEffect(() => {
        if (product) {
            setSelectedImage(product.image)
        }
    }, [product])

    if (!product) {
        return (
            <Box sx={{minHeight:'100vh',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:'20px',px:'20px'}}>
                <Typography sx={{fontFamily:'"Balsamiq Sans", sans-serif',fontSize:'28px',fontWeight:700,color:'#446B80',textAlign:'center'}}>
                    Товар не найден
                </Typography>

                <ButtonMain onClick={() => navigate('/catalog')}>
                    Вернуться в каталог
                </ButtonMain>
            </Box>
        )
    }

    const images = [product.image]

    const tabs = ['Описание', 'Характеристики', 'Отзывы']

    const handleSendReview = (e) => {
        e.preventDefault()
        setOpenReviewModal(false)
        setOpenSuccessModal(true)
    }

    return (
        <>
            <Box sx={{width:'100%',maxWidth:'1500px',margin:'auto',px:{xs:'15px',md:'25px'},pt:{xs:'120px',md:'180px'},pb:{xs:'20px',md:'40px'}}}>

                {/* Хлебные крошки */}

                <Box data-aos="fade-right" sx={{display:'flex',alignItems:'center',gap:'8px',mb:'25px',flexWrap:'wrap'}}>
                    <Typography onClick={() => navigate('/catalog')} sx={{textDecoration:'none',color:'rgba(68,107,128,0.6)',fontSize:'13px',cursor:'pointer'}}>
                        Каталог
                    </Typography>

                    <Typography sx={{color:'rgba(68,107,128,0.6)',fontSize:'13px'}}>
                        •
                    </Typography>

                    <Typography sx={{textDecoration:'none',color:'rgba(68,107,128,0.6)',fontSize:'13px'}}>
                        {category?.title}
                    </Typography>

                    <Typography sx={{color:'rgba(68,107,128,0.6)',fontSize:'13px'}}>
                        •
                    </Typography>

                    <Typography sx={{color:'#446B80',fontSize:'13px',fontWeight:500}}>
                        {product.title}
                    </Typography>
                </Box>

                {/* Основной блок */}

                <Box sx={{display:'grid',gridTemplateColumns:{xs:'1fr',md:'1fr 1fr'},gap:{xs:'30px',md:'60px'},mb:'50px'}}>

                    {/* Левая колонка */}

                    <Box data-aos="fade-right" sx={{position:'relative',display:'flex',justifyContent:'center',alignItems:'center',bgcolor:'#FFFFFF',p:'20px',borderRadius:'16px',overflow:'hidden','&:hover .zoom-overlay':{opacity:1}}}>

                        <Box component="img" src={selectedImage || product.image} alt={product.title} sx={{maxWidth:'450px',maxHeight:'450px',width:'100%',objectFit:'contain'}} />

                        <Box className="zoom-overlay" sx={{position:'absolute',top:0,left:0,width:'100%',height:'100%',bgcolor:'rgba(0,0,0,0.2)',opacity:0,transition:'opacity 0.3s ease',display:'flex',alignItems:'center',justifyContent:'center'}}>

                            <Button onClick={() => setOpenModal(true)} startIcon={<ZoomInIcon />} sx={{bgcolor:'#FFFFFF',color:'#446B80',px:'20px',py:'10px',borderRadius:'10px',textTransform:'none',fontWeight:600,boxShadow:'0 4px 15px rgba(0,0,0,0.1)','&:hover':{bgcolor:'#7FC9F0',color:'#FFFFFF'}}}>
                                Увеличить
                            </Button>

                        </Box>

                    </Box>

                    {/* Правая колонка */}

                    <Box data-aos="fade-left" sx={{display:'flex',flexDirection:'column',gap:'16px'}}>

                        <Typography sx={{color:'rgba(68,107,128,0.5)',fontSize:'12px',fontWeight:500}}>
                            Артикул {product.id}
                        </Typography>

                        <Typography component="h1" sx={{fontFamily:'"Balsamiq Sans", sans-serif',color:'#446B80',fontSize:{xs:'22px',md:'28px'},fontWeight:700}}>
                            {product.title}
                        </Typography>

                        <Box sx={{display:'flex',alignItems:'center',gap:'20px'}}>

                            <Box sx={{display:'flex',alignItems:'center',gap:'8px'}}>
                                <Rating value={0} readOnly size="small" sx={{color:'rgba(127,201,240,0.4)'}} />

                                <Typography sx={{color:'rgba(68,107,128,0.6)',fontSize:'13px'}}>
                                    Нет отзывов
                                </Typography>
                            </Box>

                            <Box onClick={() => toggleFavorite(product)} sx={{display:'flex',alignItems:'center',gap:'6px',cursor:'pointer'}}>

                                {isFavorite(product.id)
                                    ? <FavoriteIcon sx={{color:'#7FC9F0',fontSize:'18px'}} />
                                    : <FavoriteBorderIcon sx={{color:'#7FC9F0',fontSize:'18px'}} />
                                }

                                <Typography sx={{color:'#7FC9F0',fontSize:'13px',textDecoration:'underline'}}>
                                    В избранное
                                </Typography>

                            </Box>

                        </Box>

                        {/* Изображения */}

                        <Box sx={{mt:'10px'}}>

                            <Typography sx={{color:'rgba(68,107,128,0.7)',fontSize:'13px',mb:'10px'}}>
                                Изображение товара
                            </Typography>

                            <Box sx={{display:'flex',gap:'12px'}}>

                                {images.map((image,index) => (

                                    <Box key={index} onClick={() => setSelectedImage(image)} sx={{width:'56px',height:'56px',border:selectedImage === image ? '2px solid #7FC9F0' : '1px solid rgba(127,201,240,0.3)',borderRadius:'10px',p:'4px',cursor:'pointer',bgcolor:'#FFFFFF',display:'flex',alignItems:'center',justifyContent:'center'}}>

                                        <Box component="img" src={image} sx={{maxWidth:'100%',maxHeight:'100%',objectFit:'contain'}} />

                                    </Box>

                                ))}

                            </Box>

                        </Box>

                        {/* Цена */}

                        <Box sx={{display:'flex',alignItems:'center',gap:'14px',mt:'10px',flexWrap:'wrap'}}>

                            <Box sx={{display:'flex',alignItems:'center',gap:'5px',fontFamily:'"Balsamiq Sans", sans-serif',color:'#446B80',fontSize:'32px',fontWeight:700}}>
                                {product.price.toLocaleString('ru-RU')}

                                <CurrencyRuble sx={{fontSize:'29px'}} />
                            </Box>

                            {product.oldPrice && (

                                <Box sx={{display:'flex',alignItems:'center',gap:'4px',color:'rgba(68,107,128,0.5)',fontSize:'18px',textDecoration:'line-through'}}>

                                    {product.oldPrice.toLocaleString('ru-RU')}

                                    <CurrencyRuble sx={{fontSize:'17px'}} />

                                </Box>

                            )}

                        </Box>

                        {/* Кнопки */}

                        <Box sx={{display:'flex',gap:'15px',alignItems:'center',mt:'5px',flexWrap:'wrap'}}>

                            <ButtonMain onClick={() => addToCart(product)} sx={{width:'140px',height:'42px',fontSize:'13px'}}>
                                В корзину
                            </ButtonMain>

                            <Button sx={{color:'#7FC9F0',textTransform:'none',fontSize:'14px','&:hover':{bgcolor:'transparent',textDecoration:'underline'}}}>
                                Купить в один клик
                            </Button>

                        </Box>

                        {/* Доставка */}

                        <Box sx={{mt:'15px',display:'flex',flexDirection:'column',gap:'4px'}}>

                            <Typography sx={{color:'rgba(68,107,128,0.7)',fontSize:'13px'}}>
                                Ваш город: Москва
                            </Typography>

                            <Typography sx={{color:'#7FC9F0',fontSize:'13px',textDecoration:'underline',cursor:'pointer'}}>
                                Подробнее о доставке
                            </Typography>

                        </Box>

                        <Typography sx={{color:'#446B80',fontSize:'13px',fontWeight:700,textDecoration:'underline',mt:'10px',cursor:'pointer'}}>
                            Нашли дешевле?
                        </Typography>

                    </Box>

                </Box>

                {/* Табы */}

                <Box data-aos="fade-up">

                    <Box sx={{display:'flex',gap:'30px',borderBottom:'1px solid rgba(127,201,240,0.2)',mb:'25px'}}>

                        {tabs.map((tab,index) => (

                            <Typography key={index} onClick={() => setSelectedTab(index)} sx={{pb:'10px',fontSize:'15px',fontWeight:selectedTab === index ? 700 : 500,color:selectedTab === index ? '#7FC9F0' : 'rgba(68,107,128,0.6)',cursor:'pointer',borderBottom:selectedTab === index ? '2px solid #7FC9F0' : 'none',transition:'all 0.2s'}}>

                                {tab}

                            </Typography>

                        ))}

                    </Box>

                    <Box sx={{maxWidth:'680px'}}>

                        {selectedTab === 0 && (

                            <Box sx={{display:'flex',flexDirection:'column',gap:'15px'}}>

                                <Typography sx={{fontSize:'14px',lineHeight:1.6,color:'rgba(68,107,128,0.9)'}}>

                                    {product.title} — качественный товар из категории «{category?.title}». Товар разработан с учетом комфорта и безопасности ребенка.

                                </Typography>

                                <Typography sx={{fontWeight:700,color:'#446B80',mt:'10px'}}>
                                    Особенности:
                                </Typography>

                                <Box component="ul" sx={{p:0,m:0,listStyle:'none',display:'flex',flexDirection:'column',gap:'6px',fontSize:'14px',color:'rgba(68,107,128,0.9)'}}>

                                    <li>- Качественные и безопасные материалы</li>
                                    <li>- Современный дизайн</li>
                                    <li>- Удобство использования</li>
                                    <li>- Подходит для ежедневного использования</li>
                                    <li>- Разработано для комфорта ребенка</li>

                                </Box>

                            </Box>

                        )}

                        {selectedTab === 1 && (

                            <Box sx={{display:'flex',flexDirection:'column',gap:'12px'}}>

                                <Box sx={{display:'flex',justifyContent:'space-between',borderBottom:'1px dashed rgba(127,201,240,0.3)',pb:'6px',gap:'20px'}}>

                                    <Typography sx={{color:'rgba(68,107,128,0.7)',fontSize:'14px'}}>
                                        Категория
                                    </Typography>

                                    <Typography sx={{color:'#446B80',fontSize:'14px',fontWeight:500}}>
                                        {category?.title}
                                    </Typography>

                                </Box>

                                <Box sx={{display:'flex',justifyContent:'space-between',borderBottom:'1px dashed rgba(127,201,240,0.3)',pb:'6px',gap:'20px'}}>

                                    <Typography sx={{color:'rgba(68,107,128,0.7)',fontSize:'14px'}}>
                                        Артикул
                                    </Typography>

                                    <Typography sx={{color:'#446B80',fontSize:'14px',fontWeight:500}}>
                                        {product.id}
                                    </Typography>

                                </Box>

                                <Box sx={{display:'flex',justifyContent:'space-between',borderBottom:'1px dashed rgba(127,201,240,0.3)',pb:'6px',gap:'20px'}}>

                                    <Typography sx={{color:'rgba(68,107,128,0.7)',fontSize:'14px'}}>
                                        Цена
                                    </Typography>

                                    <Typography sx={{color:'#446B80',fontSize:'14px',fontWeight:500}}>
                                        {product.price.toLocaleString('ru-RU')} ₽
                                    </Typography>

                                </Box>

                            </Box>

                        )}

                        {selectedTab === 2 && (

                            <Box sx={{py:'10px',display:'flex',flexDirection:'column',gap:'20px',alignItems:'flex-start'}}>

                                <Typography sx={{color:'rgba(68,107,128,0.7)',fontSize:'14px'}}>
                                    Отзывов пока нет. Будьте первыми, кто оставит отзыв об этом товаре!
                                </Typography>

                                <ButtonMain onClick={() => setOpenReviewModal(true)} sx={{px:'20px',height:'40px',fontSize:'13px'}}>
                                    Оставить отзыв
                                </ButtonMain>

                            </Box>

                        )}

                    </Box>

                </Box>

            </Box>

            {/* Увеличение изображения */}

            <Dialog open={openModal} onClose={() => setOpenModal(false)} maxWidth="lg" PaperProps={{sx:{borderRadius:'20px',p:'20px',bgcolor:'#FFFFFF',position:'relative',overflow:'hidden'}}}>

                <IconButton onClick={() => setOpenModal(false)} sx={{position:'absolute',top:'10px',right:'10px',color:'#446B80',zIndex:2}}>
                    <CloseIcon />
                </IconButton>

                <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',p:{xs:'10px',md:'30px'}}}>

                    <Box component="img" src={selectedImage || product.image} alt={product.title} sx={{maxWidth:'100%',height:'80vh',objectFit:'contain'}} />

                </Box>

            </Dialog>

            {/* Отзыв */}

            <Dialog open={openReviewModal} onClose={() => setOpenReviewModal(false)} PaperProps={{sx:{borderRadius:'24px',maxWidth:'430px',width:'calc(100% - 30px)',overflow:'hidden',boxShadow:'0 20px 60px rgba(68,107,128,0.18)'}}}>

                <DialogContent sx={{p:{xs:'30px 20px',md:'40px 30px'},position:'relative'}}>

                    <IconButton onClick={() => setOpenReviewModal(false)} sx={{position:'absolute',top:'12px',right:'12px',color:'rgba(68,107,128,0.5)',zIndex:2}}>
                        <CloseIcon />
                    </IconButton>

                    <Typography sx={{fontFamily:'"Balsamiq Sans", sans-serif',color:'#446B80',fontSize:{xs:'20px',md:'22px'},fontWeight:700,mb:'25px',textAlign:'center',lineHeight:1.3,pr:'30px'}}>
                        Напишите отзыв о нашем товаре
                    </Typography>

                    <Box component="form" onSubmit={handleSendReview} sx={{display:'flex',flexDirection:'column',gap:'14px'}}>

                        <TextField placeholder="Ваше имя*" required fullWidth size="small" />

                        <TextField placeholder="Достоинства" multiline rows={2} fullWidth size="small" />

                        <TextField placeholder="Недостатки" multiline rows={2} fullWidth size="small" />

                        <TextField placeholder="Комментарий" multiline rows={3} fullWidth size="small" />

                        <Button type="submit" fullWidth sx={{mt:'8px',height:'48px',bgcolor:'#7FC9F0',color:'#FFFFFF',borderRadius:'12px',textTransform:'none',fontSize:'15px',fontWeight:500,'&:hover':{bgcolor:'#6CBBE4'}}}>
                            Отправить
                        </Button>

                    </Box>

                </DialogContent>

            </Dialog>

            {/* Успешная отправка */}

            <Dialog open={openSuccessModal} onClose={() => setOpenSuccessModal(false)} PaperProps={{sx:{borderRadius:'24px',maxWidth:'430px',width:'calc(100% - 30px)',overflow:'hidden'}}}>

                <DialogContent sx={{p:{xs:'35px 20px',md:'45px 35px'},textAlign:'center',display:'flex',flexDirection:'column',alignItems:'center',gap:'18px',position:'relative'}}>

                    <IconButton onClick={() => setOpenSuccessModal(false)} sx={{position:'absolute',top:'12px',right:'12px',color:'rgba(68,107,128,0.5)',zIndex:2}}>
                        <CloseIcon />
                    </IconButton>

                    <Box sx={{width:'100px',height:'100px',borderRadius:'50%',bgcolor:'rgba(127,201,240,0.15)',display:'flex',alignItems:'center',justifyContent:'center',mt:'5px'}}>

                        <CheckCircleOutlinedIcon sx={{fontSize:'55px',color:'#7FC9F0'}} />

                    </Box>

                    <Typography sx={{fontFamily:'"Balsamiq Sans", sans-serif',color:'#446B80',fontSize:{xs:'24px',md:'28px'},fontWeight:700}}>
                        Отправлено
                    </Typography>

                    <Typography sx={{color:'rgba(68,107,128,0.7)',fontSize:'14px',lineHeight:1.5,maxWidth:'300px'}}>
                        Спасибо за ваш отзыв! Ваш отзыв успешно отправлен.
                    </Typography>

                    <Button onClick={() => setOpenSuccessModal(false)} sx={{width:'100%',height:'48px',bgcolor:'#7FC9F0',color:'#FFFFFF',borderRadius:'12px',textTransform:'none',fontSize:'15px',fontWeight:500}}>
                        Готово
                    </Button>

                </DialogContent>

            </Dialog>

            <Cards title="С этим покупают" />

        </>
    )
}