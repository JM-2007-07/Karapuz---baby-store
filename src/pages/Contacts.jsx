import React, { useState } from 'react'
import { Box, Typography, TextField, Checkbox, IconButton } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import FacebookIcon from '@mui/icons-material/Facebook'
import ButtonMain from '../components/ButtonMain'
import { useNavigate } from 'react-router'
import { useTranslation } from 'react-i18next'
const contactInfo = {
    address:'Республика Дагестан, г Махачкала, улица Батырая 108',
    phones:['+ 7 872 278 08 58','+ 7 988 799 93 27'],
    email:'karapuz_108@mail.ru',
    socials:[
        {id:1,icon:InstagramIcon,link:'#'},
        {id:2,icon:WhatsAppIcon,link:'#'},
        {id:3,icon:FacebookIcon,link:'#'}
    ]
}
export default function Contacts() {
    const { t } = useTranslation()
    const navigate = useNavigate()
    const [formData,setFormData] = useState({name:'Арсен',phone:'',message:'',agreement:false})
    const handleSubmit = (e) => {
        e.preventDefault()
        if (formData.agreement) {
            console.log(t('contacts.form.sent'),formData)
        }
    }
    return (
        <Box sx={{width:'100%',maxWidth:'1500px',margin:'auto',px:{xs:'15px',md:'25px'},pt:{xs:'110px',md:'180px'},pb:{xs:'60px',md:'100px'}}}>
            <Box data-aos="fade-right" sx={{display:'flex',alignItems:'center',gap:'8px',mb:'15px'}}>
                <Typography onClick={() => navigate('/')} sx={{textDecoration:'none',color:'rgba(68,107,128,0.6)',fontSize:'14px',cursor:'pointer'}}>
                    {t('contacts.breadcrumbs.home')}
                </Typography>
                <Typography sx={{color:'rgba(68,107,128,0.6)',fontSize:'14px'}}>›</Typography>
                <Typography sx={{color:'#446B80',fontSize:'14px',fontWeight:500}}>
                    {t('contacts.breadcrumbs.contacts')}
                </Typography>
            </Box>
            <Typography data-aos="fade-up" component="h1" sx={{fontFamily:'"Balsamiq Sans", sans-serif',color:'#446B80',fontSize:{xs:'32px',md:'48px'},fontWeight:700,mb:{xs:'30px',md:'50px'}}}>
                {t('contacts.title')}
            </Typography>
            <Box sx={{display:'grid',gridTemplateColumns:{xs:'1fr',md:'1fr 1.2fr'},gap:{xs:'30px',md:'60px'},mb:{xs:'40px',md:'60px'}}}>
                <Box data-aos="fade-right" sx={{display:'flex',flexDirection:'column',gap:'24px'}}>
                    <Box>
                        <Typography component="h3" sx={{fontFamily:'"Balsamiq Sans", sans-serif',color:'#446B80',fontSize:'20px',fontWeight:700,mb:'8px'}}>
                            {t('contacts.info.address')}
                        </Typography>
                        <Typography sx={{color:'#446B80',fontSize:'15px'}}>
                            {contactInfo.address}
                        </Typography>
                    </Box>
                    <Box>
                        <Typography component="h3" sx={{fontFamily:'"Balsamiq Sans", sans-serif',color:'#446B80',fontSize:'20px',fontWeight:700,mb:'8px'}}>
                            {t('contacts.info.phone')}
                        </Typography>
                        {contactInfo.phones.map((phone,i) => (
                            <Typography key={i} component="a" href={`tel:${phone.replace(/\s+/g,'')}`} sx={{display:'block',color:'#446B80',textDecoration:'none',fontSize:'15px',lineHeight:1.6,'&:hover':{color:'#7FC9F0'}}}>
                                {phone}
                            </Typography>
                        ))}
                    </Box>
                    <Box>
                        <Typography component="h3" sx={{fontFamily:'"Balsamiq Sans", sans-serif',color:'#446B80',fontSize:'20px',fontWeight:700,mb:'8px'}}>
                            {t('contacts.info.email')}
                        </Typography>
                        <Typography component="a" href={`mailto:${contactInfo.email}`} sx={{color:'#446B80',textDecoration:'none',fontSize:'15px','&:hover':{color:'#7FC9F0'}}}>
                            {contactInfo.email}
                        </Typography>
                    </Box>
                    <Box>
                        <Typography component="h3" sx={{fontFamily:'"Balsamiq Sans", sans-serif',color:'#446B80',fontSize:'20px',fontWeight:700,mb:'12px'}}>
                            {t('contacts.info.socials')}
                        </Typography>
                        <Box sx={{display:'flex',alignItems:'center',gap:'10px'}}>
                            {contactInfo.socials.map((social) => {
                                const IconComp = social.icon
                                return (
                                    <IconButton key={social.id} component="a" href={social.link} sx={{color:'#7FC9F0',border:'1px solid rgba(127,201,240,0.4)',borderRadius:'10px',padding:'8px',transition:'all 0.2s ease','&:hover':{bgcolor:'#7FC9F0',color:'#FFFFFF'}}}>
                                        <IconComp sx={{fontSize:'20px'}} />
                                    </IconButton>
                                )
                            })}
                        </Box>
                    </Box>
                </Box>
                <Box data-aos="fade-left" component="form" onSubmit={handleSubmit} sx={{display:'flex',flexDirection:'column',gap:'16px'}}>
                    <Typography component="h3" sx={{fontFamily:'"Balsamiq Sans", sans-serif',color:'#446B80',fontSize:{xs:'20px',md:'22px'},fontWeight:700,mb:'8px'}}>
                        {t('contacts.form.title')}
                    </Typography>
                    <Box sx={{display:'grid',gridTemplateColumns:{xs:'1fr',sm:'1fr 1fr'},gap:'16px'}}>
                        <TextField placeholder={t('contacts.form.name')} value={formData.name} onChange={(e) => setFormData({...formData,name:e.target.value})} fullWidth sx={{'& .MuiOutlinedInput-root':{borderRadius:'12px',bgcolor:'#FFFFFF','& fieldset':{borderColor:'rgba(127,201,240,0.3)'},'&:hover fieldset':{borderColor:'#7FC9F0'}}}} />
                        <TextField placeholder={t('contacts.form.phone')} value={formData.phone} onChange={(e) => setFormData({...formData,phone:e.target.value})} fullWidth sx={{'& .MuiOutlinedInput-root':{borderRadius:'12px',bgcolor:'#FFFFFF','& fieldset':{borderColor:'rgba(127,201,240,0.3)'},'&:hover fieldset':{borderColor:'#7FC9F0'}}}} />
                    </Box>
                    <TextField placeholder={t('contacts.form.message')} multiline rows={4} value={formData.message} onChange={(e) => setFormData({...formData,message:e.target.value})} fullWidth sx={{'& .MuiOutlinedInput-root':{borderRadius:'12px',bgcolor:'#FFFFFF','& fieldset':{borderColor:'rgba(127,201,240,0.3)'},'&:hover fieldset':{borderColor:'#7FC9F0'}}}} />
                    <Box sx={{display:'flex',alignItems:'center',gap:'8px'}}>
                        <Checkbox checked={formData.agreement} onChange={(e) => setFormData({...formData,agreement:e.target.checked})} sx={{color:'rgba(127,201,240,0.5)','&.Mui-checked':{color:'#7FC9F0'},p:0}} />
                        <Typography sx={{color:'rgba(68,107,128,0.8)',fontSize:'13px'}}>
                            {t('contacts.form.agreement')}
                        </Typography>
                    </Box>
                    <Box sx={{mt:'10px'}}>
                        <ButtonMain type="submit" disabled={!formData.agreement} sx={{width:'100%',height:'52px'}}>
                            {t('contacts.form.submit')}
                        </ButtonMain>
                    </Box>
                </Box>
            </Box>
            <Box data-aos="zoom-in" sx={{width:'100%',height:{xs:'300px',sm:'400px',md:'450px'},borderRadius:'16px',overflow:'hidden',boxShadow:'0px 0px 40px #0000000A',border:'1px solid rgba(127,201,240,0.2)'}}>
                <Box component="iframe" src="https://yandex.ru/map-widget/v1/?ll=47.502919%2C42.977288&z=17&pt=47.502919,42.977288,pm2rdm" width="100%" height="100%" frameBorder="0" allowFullScreen style={{border:0}} title={t('contacts.mapTitle')} />
            </Box>
        </Box>
    )
}