import { Box, Button, IconButton, Typography } from '@mui/material'
import React from 'react'
import ButtonMain from '../components/ButtonMain'
import heroImg from '../assets/herohome.png'
import img1 from '../assets/Коляска.svg'
import img2 from '../assets/Одежда.svg'
import img3 from '../assets/Кроватка.svg'
import img4 from '../assets/Коляска2.svg'
import img5 from '../assets/Автокресло.svg'
import img6 from '../assets/Постель.svg'
import img7 from '../assets/Коляска3.svg'
import img8 from '../assets/Коляска4.png'
import kid from '../assets/Kid.png'
import kidfone from '../assets/Vector.png'
import { ArrowCircleLeftOutlined, ArrowCircleRightOutlined, CurrencyRuble, FavoriteBorder } from '@mui/icons-material'
import Advantages from '../components/Advantages'
import Brands from '../components/Brands'
import Cards from '../components/Cards'
import { useNavigate } from 'react-router'

export default function Home() {
    const navigate = useNavigate()
    const topProducts = [
        {title:'Коляска CYBEX PRIAM LUX JEREMY SCOTT SPECIAL EDITION 2 В 1 на раме TREKKING', price:'152 000', image:img1},
        {title:'Папитто Комплект вязаный на подкладке джемпер с капюшоном и брюки 2 предмета', price:'1 600', image:img2}
    ]

    const categories = [
        {title:'Детская мебель', id:'cribs', description:'Baby Expert, Baby Italia и др.', image:img3, bgcolor:'#F3DBD7'},
        {title:'Коляски', id: 'strollers', description:'Cybex, mima, moon, Hartan и др.', image:img4, bgcolor:'#FDF6EF'},
        {title:'Детские автокресла', id: 'car-seats', description:'Welldon, HB, Cybex и др.', image:img5, bgcolor:'#E5F4FC'}
    ]

    const offers = [
        {title:'Постельное белье Forest Sky (3 предмета)', price:'2 000', oldPrice:'4 000', image:img6},
        {title:'Кроватка Riko Basic, Польша', price:'52 000', oldPrice:'64 000', image:img3},
        {title:'Коляска Riko Basic, Польша', price:'52 000', oldPrice:'122 000', image:img8},
        {title:'Коляска Riko Basic, Польша', price:'12 000', oldPrice:'14 000', image:img7}
    ]

    return (
        <>
            <Box sx={{width:'100%',minHeight:{xs:'auto',md:'720px'},display:'flex',pt:{xs:'100px',md:'180px'},pb:{xs:'60px',md:'80px'},justifyContent:'center',alignItems:'center',bgcolor:'#FCF6F5',overflow:'hidden',position:'relative'}}>
    <Box sx={{position:'absolute',width:{xs:'280px',md:'600px'},height:{xs:'280px',md:'600px'},borderRadius:'50%',bgcolor:'rgba(127,201,240,0.12)',top:{xs:'-100px',md:'-180px'},right:{xs:'-100px',md:'-180px'}}} />
    <Box sx={{position:'absolute',width:{xs:'180px',md:'350px'},height:{xs:'180px',md:'350px'},borderRadius:'50%',bgcolor:'rgba(255,255,255,0.7)',bottom:{xs:'-80px',md:'-120px'},left:{xs:'-70px',md:'-100px'}}} />
    
    <Box sx={{width:'100%',maxWidth:'1500px',px:{xs:'15px',md:'25px'},display:'flex',flexDirection:{xs:'column',md:'row'},alignItems:'center',justifyContent:'space-between',gap:{xs:'35px',md:'20px'},position:'relative',zIndex:1}}>
        
        <Box data-aos="fade-right" data-aos-duration="800" sx={{display:'flex',flexDirection:'column',alignItems:{xs:'center',md:'flex-start'},gap:{xs:'25px',md:'38px'},textAlign:{xs:'center',md:'left'},order:{xs:1,md:0},width:{xs:'100%',md:'52%'}}}>
            
            <Box>
                <Box sx={{display:'flex',alignItems:'center',justifyContent:{xs:'center',md:'flex-start'},gap:'10px',mb:{xs:'15px',md:'20px'}}}>
                    <Box sx={{width:'35px',height:'2px',bgcolor:'#7FC9F0',borderRadius:'10px'}} />
                    <Typography sx={{fontFamily:'"Balsamiq Sans", sans-serif',fontSize:{xs:'13px',md:'15px'},fontWeight:600,letterSpacing:'1px',textTransform:'uppercase',color:'#7FC9F0'}}>
                        Для самых маленьких
                    </Typography>
                </Box>

                <Typography sx={{fontFamily:'"Balsamiq Sans", sans-serif',fontSize:{xs:'40px',sm:'52px',md:'76px'},fontWeight:700,lineHeight:{xs:'1.08',md:'1.08'},color:'#446B80',maxWidth:'720px'}}>
                    Всё самое необходимое{' '}
                    <Box component="span" sx={{color:'#7FC9F0'}}>
                        для вашего ребенка
                    </Box>
                </Typography>

                <Typography sx={{fontSize:{xs:'16px',md:'21px'},fontWeight:400,lineHeight:1.6,color:'rgba(68,107,128,0.75)',maxWidth:{xs:'340px',md:'500px'},mt:{xs:'18px',md:'25px'},mx:{xs:'auto',md:0}}}>
                    Посмотрите нашу новую подборку для ухода за вашим ребенком
                </Typography>
            </Box>

            <Box sx={{display:'flex',alignItems:'center',gap:'20px',width:{xs:'100%',md:'auto'},justifyContent:{xs:'center',md:'flex-start'}}}>
                <ButtonMain onClick={() => navigate('/catalog/cribs')} sx={{width:'175px',height:'52px',fontSize:'15px',boxShadow:'0 10px 30px rgba(127,201,240,0.25)',transition:'all 0.3s ease','&:hover':{transform:'translateY(-3px)',boxShadow:'0 15px 35px rgba(127,201,240,0.35)',bgcolor:'#7FC9F0'}}}>
                    Смотреть
                </ButtonMain>

                <Typography sx={{fontSize:'13px',color:'rgba(68,107,128,0.55)',maxWidth:'110px',lineHeight:1.3,textAlign:'left',display:{xs:'none',sm:'block'}}}>
                    Забота начинается с мелочей
                </Typography>
            </Box>

            <Box sx={{display:'flex',alignItems:'center',gap:'25px',mt:{xs:'0px',md:'-5px'}}}>
                <Box sx={{display:'flex',alignItems:'center',gap:'8px'}}>
                    <Box sx={{width:'9px',height:'9px',borderRadius:'50%',bgcolor:'#7FC9F0'}} />
                    <Typography sx={{fontSize:'12px',color:'rgba(68,107,128,0.65)'}}>
                        Качественные товары
                    </Typography>
                </Box>

                <Box sx={{display:'flex',alignItems:'center',gap:'8px'}}>
                    <Box sx={{width:'9px',height:'9px',borderRadius:'50%',bgcolor:'#7FC9F0'}} />
                    <Typography sx={{fontSize:'12px',color:'rgba(68,107,128,0.65)'}}>
                        С заботой о детях
                    </Typography>
                </Box>
            </Box>
        </Box>

        <Box data-aos="fade-left" data-aos-duration="1000" sx={{width:{xs:'100%',md:'48%'},display:'flex',justifyContent:'center',alignItems:'center',order:{xs:0,md:1},position:'relative'}}>
            
            <Box sx={{position:'absolute',width:{xs:'280px',md:'520px'},height:{xs:'280px',md:'520px'},borderRadius:'50%',border:'1px solid rgba(127,201,240,0.2)',animation:'pulse 4s ease-in-out infinite','@keyframes pulse':{'0%,100%':{transform:'scale(1)',opacity:0.7},'50%':{transform:'scale(1.05)',opacity:1}}}} />

            <Box sx={{position:'absolute',width:{xs:'220px',md:'400px'},height:{xs:'220px',md:'400px'},borderRadius:'50%',bgcolor:'rgba(255,255,255,0.5)',filter:'blur(2px)'}} />

            <Box component="img" src={heroImg} alt="Товары для детей" sx={{width:'100%',maxWidth:'800px',height:'auto',objectFit:'contain',position:'relative',zIndex:2,filter:'drop-shadow(0 25px 35px rgba(68,107,128,0.12))',animation:'float 5s ease-in-out infinite','@keyframes float':{'0%,100%':{transform:'translateY(0px)'},'50%':{transform:'translateY(-10px)'}}}} />
        </Box>
    </Box>
</Box>

            <Box sx={{width:'100%', maxWidth:'1500px', px:{xs:'15px', md:'25px'}, margin:'auto', mt:{xs:'50px', md:'100px'}, display:'grid', gridTemplateColumns:{xs:'1fr', md:'1fr 1fr'}, gap:{xs:'20px', md:'30px'}}}>
                {topProducts.map((product, i) => (
                    <Box key={i} sx={{width:'100%', minHeight:{xs:'auto', md:'360px'}, p:{xs:'20px', md:'40px'}, position:'relative', borderRadius:'12px', boxShadow:'0px 0px 40px #0000000A', display:'flex', flexDirection:{xs:'column', sm:'row'}, justifyContent:'space-between', alignItems:{xs:'center', sm:'stretch'}, gap:{xs:'25px', sm:'15px'}, overflow:'hidden'}}>
                        <Box sx={{display:'flex', flexDirection:'column', gap:{xs:'20px', md:'30px'}, alignItems:{xs:'center', sm:'start'}, textAlign:{xs:'center', sm:'start'}, zIndex:1}}>
                            <Typography sx={{maxWidth:{xs:'300px', md:'270px'}, fontFamily:'"Balsamiq Sans", sans-serif', fontSize:{xs:'17px', md:'18px'}, color:'#446B80'}}>
                                {product.title}
                            </Typography>
                            <Box sx={{display:'flex', alignItems:'center', gap:'2px', color:'#7FC9F0', fontSize:{xs:'21px', md:'24px'}, fontWeight:'600'}}>
                                {product.price} <CurrencyRuble sx={{fontSize:{xs:'20px', md:'24px'}}} />
                            </Box>
                            <Box sx={{display:'flex', flexDirection:{xs:'column', sm:'row'}, alignItems:'center', gap:'4px', width:{xs:'100%', sm:'auto'}}}>
                                <ButtonMain>
                                    В корзину
                                </ButtonMain>
                                <Button sx={{color:'#446B80', textTransform:'none', fontSize:'16px', borderRadius:'12px', height:'48px'}}>
                                    Купить в один клик
                                </Button>
                            </Box>
                        </Box>
                        <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', width:{xs:'100%', sm:'45%'}, maxHeight:{xs:'220px', md:'280px'}}}>
                            <img src={product.image} alt="" style={{maxWidth:'100%', maxHeight:'260px', objectFit:'contain'}} />
                        </Box>
                        <IconButton sx={{position:'absolute', top:'15px', right:'15px', color:'#7FC9F0'}}>
                            <FavoriteBorder />
                        </IconButton>
                    </Box>
                ))}
            </Box>

            <Box sx={{width:'100%', maxWidth:'1500px', px:{xs:'15px', md:'25px'}, margin:'auto', mt:{xs:'70px', md:'100px'}, display:'flex', flexDirection:'column', gap:{xs:'30px', md:'50px'}, textAlign:'center'}}>
                <Typography sx={{fontFamily:'"Balsamiq Sans", sans-serif', fontSize:{xs:'38px', sm:'50px', md:'80px'}, lineHeight:'1.15', color:'#446B80'}}>
                    Популярные категории
                </Typography>
                <Box sx={{display:'grid', gridTemplateColumns:{xs:'1fr', sm:'1fr 1fr', md:'1fr 1fr 1fr'}, gap:{xs:'20px', md:'25px'}}}>
                    {categories.map((category, i) => (
                        <Box key={i} sx={{height:{xs:'300px', md:'360px'}, bgcolor:category.bgcolor, borderRadius:'12px', py:{xs:'35px', md:'60px'}, pl:{xs:'25px', md:'40px'}, pr:{xs:'15px', md:'0px'}, display:'flex', justifyContent:'space-between', overflow:'hidden'}}>
                            <Box sx={{height:'100%', maxWidth:{xs:'145px', md:'130px'}, minWidth:{xs:'130px', md:'auto'}, display:'flex', flexDirection:'column', justifyContent:'space-between', alignItems:'start', textAlign:'start', zIndex:1}}>
                                <Box sx={{display:'flex', flexDirection:'column', gap:'12px'}}>
                                    <Typography sx={{fontSize:{xs:'21px', md:'24px'}, fontWeight:'700', color:'#446B80'}}>
                                        {category.title}
                                    </Typography>
                                    <Typography sx={{color:'#446B80', fontSize:{xs:'15px', md:'18px'}, lineHeight:'1.4'}}>
                                        {category.description}
                                    </Typography>
                                </Box>
                                <Button onClick={() => navigate(`/catalog/${category.id}`)} variant="outlined" sx={{textTransform:'none', padding:'10px 16px', fontSize:{xs:'16px', md:'18px'}, borderRadius:'12px', color:'#446B80', borderColor:'rgba(68,107,128,0.4)'}}>
                                    Смотреть
                                </Button>
                            </Box>
                            <Box sx={{display:'flex', alignItems:'flex-end', justifyContent:'flex-end', width:'55%'}}>
                                <img src={category.image} alt="" style={{maxWidth:'100%', maxHeight:'90%', objectFit:'contain'}} />
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>
            <Cards title={'Новинки'} showNew={true}/>
            <Box sx={{width:'100%', minHeight:{xs:'470px', md:'520px'}, boxShadow:'0px 0px 40px #00000014', position:'relative', mt:{xs:'100px', md:'200px'}, display:'flex', justifyContent:'center', alignItems:'center', overflow:'hidden'}}>
                <Box sx={{width:'100%', maxWidth:'1500px', px:{xs:'20px', md:'25px'}, minHeight:{xs:'470px', md:'520px'}, justifyContent:'space-between', alignItems:'center', display:'flex', zIndex:1}}>
                    <Box sx={{display:'flex', flexDirection:'column', gap:{xs:'25px', md:'40px'}, maxWidth:{xs:'260px', md:'840px'}, alignItems:'start', position:'relative', zIndex:3}}>
                        <Typography sx={{fontFamily:'"Balsamiq Sans", sans-serif', fontSize:{xs:'40px', sm:'50px', md:'80px'}, lineHeight:'1.15', color:'#446B80'}}>
                            Все детские костюмы с акцией 10%
                        </Typography>
                        <ButtonMain>
                            Смотреть костюмы
                        </ButtonMain>
                    </Box>
                </Box>
                <img src={kidfone} style={{position:'absolute', right:0, bottom:'0px', zIndex:0, width:'auto'}} alt="" />
                <img src={kid} style={{position:'absolute', right:110, bottom:'0px', zIndex:1, height:{xs:'300px', md:'auto'}, maxHeight:{xs:'75%', md:'100%'}, width:'auto'}} alt="" />
            </Box>
            
            <Cards title={'Выгодное предложение'} showOldPrice={true} />
            <Cards title={'Популярные товары'} />

            <Advantages/>
            <Brands/>
        </>
    )
}