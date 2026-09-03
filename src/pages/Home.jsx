import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import ButtonMain from '../components/ButtonMain'
import heroImg from '../assets/herohome.png'
import img3 from '../assets/Кроватка.svg'
import img4 from '../assets/Коляска2.svg'
import img5 from '../assets/Автокресло.svg'
import kid from '../assets/Kid.png'
import kidfone from '../assets/Vector.png'
import Advantages from '../components/Advantages'
import Brands from '../components/Brands'
import Cards from '../components/Cards'
import { useNavigate } from 'react-router'
import TopCards from '../components/TopCards'
import { useTranslation } from 'react-i18next'
export default function Home() {
    const { t } = useTranslation()
    const navigate = useNavigate()
    const categories = [
        {title:t('home.categories.furniture.title'),id:'cribs',description:t('home.categories.furniture.description'),image:img3,bgcolor:'#F3DBD7'},
        {title:t('home.categories.strollers.title'),id:'strollers',description:t('home.categories.strollers.description'),image:img4,bgcolor:'#FDF6EF'},
        {title:t('home.categories.carSeats.title'),id:'car-seats',description:t('home.categories.carSeats.description'),image:img5,bgcolor:'#E5F4FC'}
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
                                    {t('home.hero.badge')}
                                </Typography>
                            </Box>
                            <Typography sx={{fontFamily:'"Balsamiq Sans", sans-serif',fontSize:{xs:'40px',sm:'52px',md:'76px'},fontWeight:700,lineHeight:{xs:'1.08',md:'1.08'},color:'#446B80',maxWidth:'720px'}}>
                                {t('home.hero.title')}<Box component="span" sx={{color:'#7FC9F0'}}> {t('home.hero.titleAccent')}</Box>
                            </Typography>
                            <Typography sx={{fontSize:{xs:'16px',md:'21px'},fontWeight:400,lineHeight:1.6,color:'rgba(68,107,128,0.75)',maxWidth:{xs:'340px',md:'500px'},mt:{xs:'18px',md:'25px'},mx:{xs:'auto',md:0}}}>
                                {t('home.hero.description')}
                            </Typography>
                        </Box>
                        <Box sx={{display:'flex',alignItems:'center',gap:'20px',width:{xs:'100%',md:'auto'},justifyContent:{xs:'center',md:'flex-start'}}}>
                            <ButtonMain onClick={() => navigate('/catalog/cribs')} sx={{width:'175px',height:'52px',fontSize:'15px',boxShadow:'0 10px 30px rgba(127,201,240,0.25)',transition:'all 0.3s ease','&:hover':{transform:'translateY(-3px)',boxShadow:'0 15px 35px rgba(127,201,240,0.35)',bgcolor:'#7FC9F0'}}}>
                                {t('home.hero.button')}
                            </ButtonMain>
                            <Typography sx={{fontSize:'13px',color:'rgba(68,107,128,0.55)',maxWidth:'110px',lineHeight:1.3,textAlign:'left',display:{xs:'none',sm:'block'}}}>
                                {t('home.hero.slogan')}
                            </Typography>
                        </Box>
                        <Box sx={{display:'flex',alignItems:'center',gap:'25px',mt:{xs:'0px',md:'-5px'}}}>
                            <Box sx={{display:'flex',alignItems:'center',gap:'8px'}}>
                                <Box sx={{width:'9px',height:'9px',borderRadius:'50%',bgcolor:'#7FC9F0'}} />
                                <Typography sx={{fontSize:'12px',color:'rgba(68,107,128,0.65)'}}>
                                    {t('home.hero.quality')}
                                </Typography>
                            </Box>
                            <Box sx={{display:'flex',alignItems:'center',gap:'8px'}}>
                                <Box sx={{width:'9px',height:'9px',borderRadius:'50%',bgcolor:'#7FC9F0'}} />
                                <Typography sx={{fontSize:'12px',color:'rgba(68,107,128,0.65)'}}>
                                    {t('home.hero.care')}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box data-aos="fade-left" data-aos-duration="1000" sx={{width:{xs:'100%',md:'48%'},display:'flex',justifyContent:'center',alignItems:'center',order:{xs:0,md:1},position:'relative'}}>
                        <Box sx={{position:'absolute',width:{xs:'280px',md:'520px'},height:{xs:'280px',md:'520px'},borderRadius:'50%',border:'1px solid rgba(127,201,240,0.2)',animation:'pulse 4s ease-in-out infinite','@keyframes pulse':{'0%,100%':{transform:'scale(1)',opacity:0.7},'50%':{transform:'scale(1.05)',opacity:1}}}} />
                        <Box sx={{position:'absolute',width:{xs:'220px',md:'400px'},height:{xs:'220px',md:'400px'},borderRadius:'50%',bgcolor:'rgba(255,255,255,0.5)',filter:'blur(2px)'}} />
                        <Box component="img" src={heroImg} alt={t('home.hero.imageAlt')} sx={{width:'100%',maxWidth:'800px',height:'auto',objectFit:'contain',position:'relative',zIndex:2,filter:'drop-shadow(0 25px 35px rgba(68,107,128,0.12))',animation:'float 5s ease-in-out infinite','@keyframes float':{'0%,100%':{transform:'translateY(0px)'},'50%':{transform:'translateY(-10px)'}}}} />
                    </Box>
                </Box>
            </Box>
            <TopCards />
            <Box sx={{width:'100%',maxWidth:'1500px',px:{xs:'15px',md:'25px'},margin:'auto',mt:{xs:'70px',md:'100px'},display:'flex',flexDirection:'column',gap:{xs:'30px',md:'50px'},textAlign:'center'}}>
                <Typography sx={{fontFamily:'"Balsamiq Sans", sans-serif',fontSize:{xs:'38px',sm:'50px',md:'80px'},lineHeight:'1.15',color:'#446B80'}}>
                    {t('home.popularCategories')}
                </Typography>
                <Box sx={{display:'grid',gridTemplateColumns:{xs:'1fr',sm:'1fr 1fr',md:'1fr 1fr 1fr'},gap:{xs:'20px',md:'25px'}}}>
                    {categories.map((category,i) => (
                        <Box key={i} sx={{height:{xs:'300px',md:'360px'},bgcolor:category.bgcolor,borderRadius:'12px',py:{xs:'35px',md:'60px'},pl:{xs:'25px',md:'40px'},pr:{xs:'15px',md:'0px'},display:'flex',justifyContent:'space-between',overflow:'hidden'}}>
                            <Box sx={{height:'100%',maxWidth:{xs:'145px',md:'130px'},minWidth:{xs:'130px',md:'auto'},display:'flex',flexDirection:'column',justifyContent:'space-between',alignItems:'start',textAlign:'start',zIndex:1}}>
                                <Box sx={{display:'flex',flexDirection:'column',gap:'12px'}}>
                                    <Typography sx={{fontSize:{xs:'21px',md:'24px'},fontWeight:'700',color:'#446B80'}}>
                                        {category.title}
                                    </Typography>
                                    <Typography sx={{color:'#446B80',fontSize:{xs:'15px',md:'18px'},lineHeight:'1.4'}}>
                                        {category.description}
                                    </Typography>
                                </Box>
                                <Button onClick={() => navigate(`/catalog/${category.id}`)} variant="outlined" sx={{textTransform:'none',padding:'10px 16px',fontSize:{xs:'16px',md:'18px'},borderRadius:'12px',color:'#446B80',borderColor:'rgba(68,107,128,0.4)'}}>
                                    {t('home.view')}
                                </Button>
                            </Box>
                            <Box sx={{display:'flex',alignItems:'flex-end',justifyContent:'flex-end',width:'55%'}}>
                                <img src={category.image} alt="" style={{maxWidth:'100%',maxHeight:'90%',objectFit:'contain'}} />
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>
            <Cards title={t('home.newProducts')} showNew={true} />
            <Box sx={{width:'100%',minHeight:{xs:'470px',md:'520px'},boxShadow:'0px 0px 40px #00000014',position:'relative',mt:{xs:'100px',md:'200px'},display:'flex',justifyContent:'center',alignItems:'center',overflow:'hidden'}}>
                <Box sx={{width:'100%',maxWidth:'1500px',px:{xs:'20px',md:'25px'},minHeight:{xs:'470px',md:'520px'},justifyContent:'space-between',alignItems:'center',display:'flex',zIndex:1}}>
                    <Box sx={{display:'flex',flexDirection:'column',gap:{xs:'25px',md:'40px'},maxWidth:{xs:'260px',md:'840px'},alignItems:'start',position:'relative',zIndex:3}}>
                        <Typography sx={{fontFamily:'"Balsamiq Sans", sans-serif',fontSize:{xs:'40px',sm:'50px',md:'80px'},lineHeight:'1.15',color:'#446B80'}}>
                            {t('home.promo.title')}
                        </Typography>
                        <ButtonMain onClick={() => navigate('/catalog/clothes')}>
                            {t('home.promo.button')}
                        </ButtonMain>
                    </Box>
                </Box>
                <img src={kidfone} style={{position:'absolute',right:0,bottom:'0px',zIndex:0,width:'auto'}} alt="" />
                <img src={kid} style={{position:'absolute',right:110,bottom:'0px',zIndex:1,height:'auto',maxHeight:{xs:'75%',md:'100%'},width:'auto'}} alt="" />
            </Box>
            <Cards title={t('home.bestOffer')} showOldPrice={true} />
            <Cards title={t('home.popularProducts')} />
            <Advantages />
            <Brands />
        </>
    )
}