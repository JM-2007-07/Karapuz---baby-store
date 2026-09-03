
import React, { useState } from 'react'
import { Box, Typography, Button } from '@mui/material'
import { Link, useNavigate } from 'react-router'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { useTranslation } from 'react-i18next'
import blog1 from '../assets/blog1.png'
import blog2 from '../assets/blog2.png'
import blog3 from '../assets/blog3.png'
import blog4 from '../assets/blog4.png'

const blogPosts = [
    {id:1,titleKey:'blog.posts.first.title',descKey:'blog.posts.first.desc',date:'25.05.2020',image:blog1},
    {id:2,titleKey:'blog.posts.first.title',descKey:'blog.posts.first.desc',date:'25.05.2020',image:blog2},
    {id:3,titleKey:'blog.posts.first.title',descKey:'blog.posts.first.desc',date:'25.05.2020',image:blog3},
    {id:4,titleKey:'blog.posts.first.title',descKey:'blog.posts.first.desc',date:'25.05.2020',image:blog4},
    {id:5,titleKey:'blog.posts.first.title',descKey:'blog.posts.first.desc',date:'25.05.2020',image:blog3},
    {id:6,titleKey:'blog.posts.first.title',descKey:'blog.posts.first.desc',date:'25.05.2020',image:blog2},
    {id:7,titleKey:'blog.posts.first.title',descKey:'blog.posts.first.desc',date:'25.05.2020',image:blog4},
    {id:8,titleKey:'blog.posts.first.title',descKey:'blog.posts.first.desc',date:'25.05.2020',image:blog1},
    {id:9,titleKey:'blog.posts.first.title',descKey:'blog.posts.first.desc',date:'25.05.2020',image:blog3},
    {id:10,titleKey:'blog.posts.first.title',descKey:'blog.posts.first.desc',date:'25.05.2020',image:blog2},
    {id:11,titleKey:'blog.posts.first.title',descKey:'blog.posts.first.desc',date:'25.05.2020',image:blog4},
    {id:12,titleKey:'blog.posts.first.title',descKey:'blog.posts.first.desc',date:'25.05.2020',image:blog1},
    {id:13,titleKey:'blog.posts.first.title',descKey:'blog.posts.first.desc',date:'25.05.2020',image:blog1},
    {id:14,titleKey:'blog.posts.first.title',descKey:'blog.posts.first.desc',date:'25.05.2020',image:blog2},
    {id:15,titleKey:'blog.posts.first.title',descKey:'blog.posts.first.desc',date:'25.05.2020',image:blog3},
    {id:16,titleKey:'blog.posts.first.title',descKey:'blog.posts.first.desc',date:'25.05.2020',image:blog4},
    {id:17,titleKey:'blog.posts.first.title',descKey:'blog.posts.first.desc',date:'25.05.2020',image:blog2},
    {id:18,titleKey:'blog.posts.first.title',descKey:'blog.posts.first.desc',date:'25.05.2020',image:blog1},
    {id:19,titleKey:'blog.posts.first.title',descKey:'blog.posts.first.desc',date:'25.05.2020',image:blog4},
    {id:20,titleKey:'blog.posts.first.title',descKey:'blog.posts.first.desc',date:'25.05.2020',image:blog3},
    {id:21,titleKey:'blog.posts.first.title',descKey:'blog.posts.first.desc',date:'25.05.2020',image:blog1},
    {id:22,titleKey:'blog.posts.first.title',descKey:'blog.posts.first.desc',date:'25.05.2020',image:blog2},
    {id:23,titleKey:'blog.posts.first.title',descKey:'blog.posts.first.desc',date:'25.05.2020',image:blog3},
    {id:24,titleKey:'blog.posts.first.title',descKey:'blog.posts.first.desc',date:'25.05.2020',image:blog4}
]

export default function BlogSection() {
    const {t} = useTranslation()
    const navigate = useNavigate()
    const [page, setPage] = useState(1)
    const itemsPerPage = 12
    const totalPages = Math.ceil(blogPosts.length / itemsPerPage)
    const currentPosts = blogPosts.slice((page - 1) * itemsPerPage, page * itemsPerPage)
    const handlePageChange = (newPage) => {
        setPage(newPage)
        window.scrollTo({top:0,behavior:'smooth'})
    }
    return (
        <Box sx={{width:'100%',maxWidth:'1500px',margin:'auto',px:{xs:'15px',md:'25px'},pt:{xs:'20px',md:'180px'},pb:{xs:'20px',md:'40px'}}}>
            <Box data-aos="fade-right" sx={{display:'flex',alignItems:'center',gap:'8px',mb:'15px'}}>
                <Typography component={Link} to="/" sx={{textDecoration:'none',color:'rgba(68,107,128,0.6)',fontSize:'14px'}}>{t('blog.breadcrumbs.home')}</Typography>
                <Typography sx={{color:'rgba(68,107,128,0.6)',fontSize:'14px'}}>›</Typography>
                <Typography sx={{color:'#446B80',fontSize:'14px',fontWeight:500}}>{t('blog.breadcrumbs.blog')}</Typography>
            </Box>
            <Typography data-aos="fade-up" component="h1" sx={{fontFamily:'"Balsamiq Sans", sans-serif',color:'#446B80',fontSize:{xs:'32px',md:'48px'},fontWeight:700,mb:{xs:'25px',md:'40px'}}}>
                {t('blog.title')}
            </Typography>
            <Box sx={{display:'grid',gridTemplateColumns:{xs:'1fr',sm:'repeat(2, 1fr)',lg:'repeat(4, 1fr)'},gap:{xs:'20px',md:'24px'},mb:{xs:'40px',md:'60px'}}}>
                {currentPosts.map((post,i) => (
                    <Box key={post.id} data-aos="fade-up" data-aos-delay={(i % 4) * 100} sx={{bgcolor:'#FFFFFF',borderRadius:'16px',overflow:'hidden',boxShadow:'0px 0px 40px #0000000A',display:'flex',flexDirection:'column',height:'100%',transition:'transform 0.3s ease','&:hover':{transform:'translateY(-4px)'}}}>
                        <Box component="img" src={post.image} alt={t(post.titleKey)} sx={{width:'100%',height:'200px',objectFit:'cover'}} />
                        <Box sx={{p:'20px',display:'flex',flexDirection:'column',flexGrow:1,justifyContent:'space-between'}}>
                            <Box>
                                <Typography component="h3" sx={{fontFamily:'"Balsamiq Sans", sans-serif',color:'#446B80',fontSize:'18px',fontWeight:700,mb:'10px',lineHeight:1.3}}>
                                    {t(post.titleKey)}
                                </Typography>
                                <Typography sx={{color:'rgba(68,107,128,0.8)',fontSize:'13px',lineHeight:1.5,mb:'20px'}}>
                                    {t(post.descKey)}
                                </Typography>
                            </Box>
                            <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between',pt:'10px'}}>
                                <Button variant="outlined" onClick={() => navigate(`/blog/${post.id}`)} sx={{textTransform:'none',padding:'6px 18px',borderRadius:'10px',color:'#446B80',borderColor:'rgba(127,201,240,0.5)',fontSize:'14px','&:hover':{borderColor:'#7FC9F0',bgcolor:'rgba(127,201,240,0.08)'}}}>
                                    {t('blog.read')}
                                </Button>
                                <Typography sx={{color:'rgba(68,107,128,0.5)',fontSize:'12px'}}>
                                    {post.date}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Box>
            <Box data-aos="fade-up" sx={{display:'flex',alignItems:'center',gap:'10px'}}>
                {Array.from({length:totalPages},(_,index) => index + 1).map((pageNum) => (
                    <Box key={pageNum} onClick={() => handlePageChange(pageNum)} sx={{width:'36px',height:'36px',display:'flex',alignItems:'center',justifyContent:'center',borderRadius:'8px',cursor:'pointer',border:page === pageNum ? '1px solid rgba(68,107,128,0.4)' : 'none',color:'#446B80',fontWeight:page === pageNum ? 700 : 400,fontSize:'14px',userSelect:'none',transition:'all 0.2s ease','&:hover':{bgcolor:'rgba(127,201,240,0.1)'}}}>
                        {pageNum}
                    </Box>
                ))}
                {page < totalPages && (
                    <Box onClick={() => handlePageChange(page + 1)} sx={{display:'flex',alignItems:'center',gap:'4px',cursor:'pointer',color:'#446B80',fontSize:'14px',ml:'10px',userSelect:'none','&:hover':{color:'#7FC9F0'}}}>
                        <Typography sx={{fontSize:'14px',color:'inherit'}}>{t('blog.next')}</Typography>
                        <ChevronRightIcon sx={{fontSize:'18px'}} />
                    </Box>
                )}
            </Box>
        </Box>
    )
}
