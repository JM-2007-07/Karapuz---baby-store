
import React from 'react'
import { Box, Typography } from '@mui/material'
import { Link, useParams, Navigate } from 'react-router'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote'
import { useTranslation } from 'react-i18next'
import { blogPosts, defaultArticleContent } from '../data/blogData'

export default function BlogDetails() {
    const {t} = useTranslation()
    const {id} = useParams()
    const article = blogPosts.find((post) => post.id === Number(id))
    const currentIndex = blogPosts.findIndex((post) => post.id === Number(id))
    const nextArticle = blogPosts[currentIndex + 1]
    if (!article) {
        return <Navigate to="/blog" replace />
    }
    return (
        <Box sx={{width:'100%',maxWidth:'1500px',margin:'auto',px:{xs:'15px',md:'25px'},pt:{xs:'120px',md:'180px'},pb:{xs:'20px',md:'40px'}}}>
            <Box data-aos="fade-right" sx={{display:'flex',alignItems:'center',gap:'8px',mb:'20px',flexWrap:'wrap'}}>
                <Typography component={Link} to="/" sx={{textDecoration:'none',color:'rgba(68,107,128,0.6)',fontSize:'14px'}}>{t('blog.breadcrumbs.home')}</Typography>
                <Typography sx={{color:'rgba(68,107,128,0.6)',fontSize:'14px'}}>›</Typography>
                <Typography component={Link} to="/blog" sx={{textDecoration:'none',color:'rgba(68,107,128,0.6)',fontSize:'14px'}}>{t('blog.breadcrumbs.blog')}</Typography>
                <Typography sx={{color:'rgba(68,107,128,0.6)',fontSize:'14px'}}>›</Typography>
                <Typography sx={{color:'#446B80',fontSize:'14px',fontWeight:500,maxWidth:{xs:'220px',md:'none'},whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>{t(article.titleKey)}</Typography>
            </Box>
            <Box data-aos="zoom-in" sx={{maxWidth:'920px',margin:'auto',height:{xs:'240px',sm:'400px',md:'550px'},borderRadius:'20px',overflow:'hidden',mb:{xs:'24px',md:'40px'}}}>
                <Box component="img" src={article.image} alt={t(article.titleKey)} sx={{width:'100%',height:'100%',objectFit:'cover',display:'block'}} />
            </Box>
            <Box sx={{maxWidth:'920px',margin:'auto'}}>
                <Typography data-aos="fade-up" component="h1" sx={{fontFamily:'"Balsamiq Sans", sans-serif',color:'#446B80',fontSize:{xs:'26px',sm:'36px',md:'44px'},fontWeight:700,mb:'8px',lineHeight:1.2}}>
                    {t(article.titleKey)}
                </Typography>
                <Typography data-aos="fade-up" data-aos-delay="50" sx={{color:'rgba(68,107,128,0.5)',fontSize:'14px',mb:{xs:'20px',md:'30px'}}}>
                    {article.date}
                </Typography>
                {defaultArticleContent.paragraphs.map((textKey,i) => (
                    <Typography key={i} data-aos="fade-up" data-aos-delay={100 + i * 50} sx={{color:'#446B80',fontSize:{xs:'14px',md:'16px'},lineHeight:1.7,mb:'20px'}}>
                        {t(textKey)}
                    </Typography>
                ))}
                <Box data-aos="fade-up" sx={{width:'100%',height:{xs:'220px',sm:'350px',md:'450px'},borderRadius:'16px',overflow:'hidden',my:{xs:'25px',md:'35px'}}}>
                    <Box component="img" src={article.contentImg} alt={t(article.titleKey)} sx={{width:'100%',height:'100%',objectFit:'cover',display:'block'}} />
                </Box>
                <Box data-aos="fade-up" sx={{display:'flex',alignItems:'flex-start',gap:{xs:'15px',md:'25px'},my:{xs:'25px',md:'35px'}}}>
                    <FormatQuoteIcon sx={{fontSize:{xs:'48px',md:'70px'},color:'rgba(68,107,128,0.2)',transform:'rotate(180deg)',flexShrink:0}} />
                    <Typography sx={{color:'#446B80',fontSize:{xs:'14px',md:'15px'},fontStyle:'italic',fontWeight:500,lineHeight:1.6,pt:'5px'}}>
                        {t(defaultArticleContent.quote)}
                    </Typography>
                </Box>
                <Typography data-aos="fade-up" sx={{color:'#446B80',fontSize:{xs:'14px',md:'16px'},lineHeight:1.7,mb:{xs:'30px',md:'45px'}}}>
                    {t(defaultArticleContent.extraParagraph)}
                </Typography>
                {nextArticle && (
                    <Box data-aos="fade-up" sx={{pt:'10px',pb:'20px'}}>
                        <Box component={Link} to={`/blog/${nextArticle.id}`} onClick={() => window.scrollTo({top:0,behavior:'smooth'})} sx={{display:'inline-flex',alignItems:'center',gap:'6px',color:'#7FC9F0',textDecoration:'none',fontSize:'15px',fontWeight:500,transition:'all 0.2s ease','&:hover':{color:'#446B80',transform:'translateX(4px)'}}}>
                            <Typography sx={{fontSize:'inherit',color:'inherit',fontWeight:'inherit'}}>
                                {t('blog.nextArticle')}
                            </Typography>
                            <ChevronRightIcon sx={{fontSize:'20px'}} />
                        </Box>
                    </Box>
                )}
            </Box>
        </Box>
    )
}
