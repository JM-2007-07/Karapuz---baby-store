import React, { useState } from 'react'
import { Box, Typography, Button, Fade } from '@mui/material'
import { useNavigate } from 'react-router'
import { useTranslation } from 'react-i18next'
export default function Payment() {
    const [activeTab, setActiveTab] = useState('payment')
    const navigate = useNavigate()
    const { t } = useTranslation()
    return (
        <Box sx={{width:'100%',maxWidth:'1500px',margin:'auto',px:{xs:'15px',md:'25px'},pt:{xs:'120px',md:'180px'},pb:{xs:'20px',md:'40px'}}}>
            <Box data-aos="fade-right" sx={{display:'flex',alignItems:'center',gap:'8px',mb:'15px'}}>
                <Typography onClick={() => navigate('/')} sx={{textDecoration:'none',color:'rgba(68,107,128,0.6)',fontSize:'14px',cursor:'pointer'}}>{t('payment.breadcrumbs.home')}</Typography>
                <Typography sx={{color:'rgba(68,107,128,0.6)',fontSize:'14px'}}>›</Typography>
                <Typography sx={{color:'#446B80',fontSize:'14px',fontWeight:500}}>{t('payment.breadcrumbs.payment')}</Typography>
            </Box>
            <Typography data-aos="fade-up" component="h1" sx={{fontFamily:'"Balsamiq Sans", sans-serif',color:'#446B80',fontSize:{xs:'32px',md:'48px'},fontWeight:700,mb:{xs:'20px',md:'30px'}}}>
                {t('payment.title')}
            </Typography>
            <Box data-aos="fade-up" sx={{display:'flex',gap:'12px',mb:{xs:'30px',md:'45px'}}}>
                <Button onClick={() => setActiveTab('payment')} sx={{borderRadius:'10px',px:'24px',py:'8px',textTransform:'none',fontSize:'15px',fontWeight:500,border:'1px solid #7FC9F0',bgcolor:activeTab === 'payment' ? '#7FC9F0' : '#FFFFFF',color:activeTab === 'payment' ? '#FFFFFF' : '#7FC9F0','&:hover':{bgcolor:activeTab === 'payment' ? '#6CBBE4' : 'rgba(127,201,240,0.1)'}}}>
                    {t('payment.tabs.payment')}
                </Button>
                <Button onClick={() => setActiveTab('delivery')} sx={{borderRadius:'10px',px:'24px',py:'8px',textTransform:'none',fontSize:'15px',fontWeight:500,border:'1px solid #7FC9F0',bgcolor:activeTab === 'delivery' ? '#7FC9F0' : '#FFFFFF',color:activeTab === 'delivery' ? '#FFFFFF' : '#7FC9F0','&:hover':{bgcolor:activeTab === 'delivery' ? '#6CBBE4' : 'rgba(127,201,240,0.1)'}}}>
                    {t('payment.tabs.delivery')}
                </Button>
            </Box>
            <Box sx={{minHeight:'400px'}}>
                {activeTab === 'payment' && (
                    <Fade in={activeTab === 'payment'} timeout={400}>
                        <Box sx={{display:'flex',flexDirection:'column',gap:'35px'}}>
                            <Box sx={{display:'grid',gridTemplateColumns:{xs:'1fr',md:'1fr 1fr'},gap:'30px'}}>
                                <Box>
                                    <Typography component="h3" sx={{fontFamily:'"Balsamiq Sans", sans-serif',color:'#446B80',fontSize:'20px',fontWeight:700,mb:'12px'}}>
                                        {t('payment.paymentOptions.moscow.title')}
                                    </Typography>
                                    <Typography sx={{color:'#446B80',fontSize:'14px',lineHeight:1.7}}>
                                        {t('payment.paymentOptions.moscow.text1')}<br/>
                                        {t('payment.paymentOptions.moscow.text2')}<br/>
                                        {t('payment.paymentOptions.moscow.text3')}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography component="h3" sx={{fontFamily:'"Balsamiq Sans", sans-serif',color:'#446B80',fontSize:'20px',fontWeight:700,mb:'12px'}}>
                                        {t('payment.paymentOptions.regions.title')}
                                    </Typography>
                                    <Typography sx={{color:'#446B80',fontSize:'14px',lineHeight:1.7}}>
                                        {t('payment.paymentOptions.regions.text1')}<br/>
                                        {t('payment.paymentOptions.regions.text2')}<br/>
                                        {t('payment.paymentOptions.regions.text3')}<br/>
                                        {t('payment.paymentOptions.regions.text4')}
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={{borderTop:'1px solid rgba(127,201,240,0.2)',pt:'30px'}}>
                                <Typography component="h3" sx={{fontFamily:'"Balsamiq Sans", sans-serif',color:'#446B80',fontSize:'20px',fontWeight:700,mb:'12px'}}>
                                    {t('payment.card.title')}
                                </Typography>
                                <Typography sx={{color:'#446B80',fontSize:'14px',lineHeight:1.7}}>
                                    {t('payment.card.text1')}<br/><br/>
                                    {t('payment.card.text2')}<br/>
                                    — {t('payment.card.number')}<br/>
                                    — {t('payment.card.owner')}<br/>
                                    — {t('payment.card.expiry')}<br/>
                                    — {t('payment.card.cvv')}<br/><br/>
                                    {t('payment.card.text3')}<br/><br/>
                                    {t('payment.card.text4')}
                                </Typography>
                            </Box>
                            <Box sx={{borderTop:'1px solid rgba(127,201,240,0.2)',pt:'30px'}}>
                                <Typography component="h3" sx={{fontFamily:'"Balsamiq Sans", sans-serif',color:'#446B80',fontSize:'20px',fontWeight:700,mb:'12px'}}>
                                    {t('payment.bankTransfer.title')}
                                </Typography>
                                <Typography sx={{color:'#446B80',fontSize:'14px',lineHeight:1.7}}>
                                    {t('payment.bankTransfer.text1')}<br/><br/>
                                    {t('payment.bankTransfer.text2')}<br/><br/>
                                    {t('payment.bankTransfer.text3')}
                                </Typography>
                            </Box>
                        </Box>
                    </Fade>
                )}
                {activeTab === 'delivery' && (
                    <Fade in={activeTab === 'delivery'} timeout={400}>
                        <Box sx={{display:'flex',flexDirection:'column',gap:'35px'}}>
                            <Box>
                                <Typography component="h3" sx={{fontFamily:'"Balsamiq Sans", sans-serif',color:'#446B80',fontSize:'20px',fontWeight:700,mb:'12px'}}>
                                    {t('payment.delivery.moscow.title')}
                                </Typography>
                                <Typography sx={{color:'#446B80',fontSize:'14px',lineHeight:1.7}}>
                                    {t('payment.delivery.moscow.text1')}<br/>
                                    {t('payment.delivery.moscow.text2')}<br/>
                                    {t('payment.delivery.moscow.text3')}<br/>
                                    {t('payment.delivery.moscow.text4')}
                                </Typography>
                            </Box>
                            <Box sx={{borderTop:'1px solid rgba(127,201,240,0.2)',pt:'30px'}}>
                                <Typography component="h3" sx={{fontFamily:'"Balsamiq Sans", sans-serif',color:'#446B80',fontSize:'20px',fontWeight:700,mb:'12px'}}>
                                    {t('payment.delivery.regions.title')}
                                </Typography>
                                <Typography sx={{color:'#446B80',fontSize:'14px',lineHeight:1.7}}>
                                    {t('payment.delivery.regions.text1')}<br/>
                                    {t('payment.delivery.regions.text2')}<br/>
                                    {t('payment.delivery.regions.text3')}<br/>
                                    {t('payment.delivery.regions.text4')}<br/>
                                    {t('payment.delivery.regions.text5')}<br/><br/>
                                    <strong>{t('payment.delivery.regions.attention')}</strong> {t('payment.delivery.regions.attentionText')}<br/>
                                    — {t('payment.delivery.regions.passport.fullName')}<br/>
                                    — {t('payment.delivery.regions.passport.series')}<br/>
                                    — {t('payment.delivery.regions.passport.number')}<br/>
                                    — {t('payment.delivery.regions.passport.issueDate')}<br/>
                                    {t('payment.delivery.regions.text6')}<br/><br/>
                                    {t('payment.delivery.regions.text7')}<br/>
                                    {t('payment.delivery.regions.text8')}<br/><br/>
                                    {t('payment.delivery.regions.text9')}
                                </Typography>
                            </Box>
                        </Box>
                    </Fade>
                )}
            </Box>
        </Box>
    )
}