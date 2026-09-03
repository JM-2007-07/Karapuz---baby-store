import React from 'react'
import { Box, Typography } from '@mui/material'
import img from '../assets/Коляска.svg'
import { useTranslation } from 'react-i18next'
export default function Orders() {
    const { t } = useTranslation()
    const orders = [
        {
            id:'№5454647',
            status:t('orders.status.received'),
            statusColor:'#2E7D32',
            title:t('orders.product'),
            quantity:t('orders.quantity'),
            image:img,
            date:'21.05.2020',
            paymentMethod:t('orders.payment.online'),
            price:'152 000 ₽',
            deliveryMethod:t('orders.delivery.transport'),
            address:'Москва, ул. Московская 25-45',
            recipient:'Анна Москова, +7 919 919 99 99',
            deliveryDate:t('orders.deliveryDate'),
            comment:'',
            deliveryCost:t('orders.free')
        },
        {
            id:'№5454647',
            status:t('orders.status.cancelled'),
            statusColor:'#D32F2F',
            title:t('orders.product'),
            quantity:t('orders.quantity'),
            image:img,
            date:'21.05.2020',
            paymentMethod:t('orders.payment.online'),
            price:'152 000 ₽',
            deliveryMethod:t('orders.delivery.transport'),
            address:'Москва, ул. Московская 25-45',
            recipient:'Анна Москова, +7 919 919 99 99',
            deliveryDate:t('orders.deliveryDate'),
            comment:'',
            deliveryCost:t('orders.free')
        },
        {
            id:'№5454647',
            status:t('orders.status.inTransit'),
            statusColor:'#7FC9F0',
            title:t('orders.product'),
            quantity:t('orders.quantity'),
            image:img,
            date:'21.05.2020',
            paymentMethod:t('orders.payment.online'),
            price:'152 000 ₽',
            deliveryMethod:t('orders.delivery.transport'),
            address:'Москва, ул. Московская 25-45',
            recipient:'Анна Москова, +7 919 919 99 99',
            deliveryDate:t('orders.deliveryDate'),
            comment:'',
            deliveryCost:t('orders.free')
        }
    ]
    return (
        <Box sx={{width:'100%',maxWidth:'1500px',margin:'auto',px:{xs:'15px',md:'25px'},pt:{xs:'120px',md:'180px'},pb:{xs:'20px',md:'40px'}}}>
            <Typography data-aos="fade-up" component="h1" sx={{fontFamily:'"Balsamiq Sans", sans-serif',color:'#446B80',fontSize:{xs:'32px',md:'44px'},fontWeight:700,mb:{xs:'30px',md:'40px'}}}>
                {t('orders.title')}
            </Typography>
            <Box sx={{display:'grid',gridTemplateColumns:{xs:'1fr',md:'repeat(2, 1fr)'},gap:'25px'}}>
                {orders.map((order,idx) => (
                    <Box key={idx} data-aos="fade-up" data-aos-delay={idx * 50} sx={{bgcolor:'#FFFFFF',borderRadius:'16px',border:'1px solid rgba(127,201,240,0.15)',boxShadow:'0 4px 20px rgba(0,0,0,0.03)',overflow:'hidden'}}>
                        <Box sx={{p:'16px 20px',borderBottom:'1px solid rgba(127,201,240,0.15)',display:'flex',flexDirection:'column',gap:'6px'}}>
                            <Typography sx={{color:'rgba(68,107,128,0.5)',fontSize:'12px',fontWeight:500}}>
                                {t('orders.order')} {order.id}
                            </Typography>
                            <Box sx={{display:'flex',alignItems:'center',gap:'8px'}}>
                                <Box sx={{width:'8px',height:'8px',borderRadius:'50%',bgcolor:order.statusColor}} />
                                <Typography sx={{color:order.statusColor,fontSize:'13px',fontWeight:600}}>
                                    {order.status}
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{p:'20px',display:'flex',flexDirection:'column',gap:'16px'}}>
                            <Box sx={{display:'flex',gap:'15px',alignItems:'flex-start'}}>
                                <Box component="img" src={order.image} alt={order.title} sx={{width:'64px',height:'64px',objectFit:'contain',flexShrink:0}} />
                                <Box sx={{display:'flex',flexDirection:'column',gap:'4px'}}>
                                    <Typography sx={{color:'#446B80',fontSize:'12px',fontWeight:500,lineHeight:1.3}}>
                                        {order.title}
                                    </Typography>
                                    <Typography sx={{color:'rgba(68,107,128,0.5)',fontSize:'11px'}}>
                                        {order.quantity}
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={{display:'flex',flexDirection:'column',gap:'8px',pt:'10px'}}>
                                <Box sx={{display:'flex',justifyContent:'space-between',gap:'10px'}}>
                                    <Typography sx={{color:'rgba(68,107,128,0.6)',fontSize:'12px',width:'130px',flexShrink:0}}>{t('orders.details.orderDate')}</Typography>
                                    <Typography sx={{color:'#446B80',fontSize:'12px',fontWeight:500}}>{order.date}</Typography>
                                </Box>
                                <Typography sx={{color:'#446B80',fontSize:'12px',fontWeight:600,mt:'4px'}}>{t('orders.details.paymentMethod')}</Typography>
                                <Box sx={{display:'flex',justifyContent:'space-between',gap:'10px'}}>
                                    <Typography sx={{color:'rgba(68,107,128,0.6)',fontSize:'12px'}}>{order.paymentMethod}</Typography>
                                    <Typography sx={{color:'#446B80',fontSize:'12px',fontWeight:600}}>{order.price}</Typography>
                                </Box>
                                <Typography sx={{color:'#446B80',fontSize:'12px',fontWeight:600,mt:'4px'}}>{t('orders.details.deliveryMethod')}</Typography>
                                <Typography sx={{color:'rgba(68,107,128,0.6)',fontSize:'12px'}}>{order.deliveryMethod}</Typography>
                                <Box sx={{display:'flex',justifyContent:'space-between',gap:'10px'}}>
                                    <Typography sx={{color:'rgba(68,107,128,0.6)',fontSize:'12px',width:'130px',flexShrink:0}}>{t('orders.details.deliveryAddress')}</Typography>
                                    <Typography sx={{color:'#446B80',fontSize:'12px',textAlign:'right'}}>{order.address}</Typography>
                                </Box>
                                <Box sx={{display:'flex',justifyContent:'space-between',gap:'10px'}}>
                                    <Typography sx={{color:'rgba(68,107,128,0.6)',fontSize:'12px',width:'130px',flexShrink:0}}>{t('orders.details.recipient')}</Typography>
                                    <Typography sx={{color:'#446B80',fontSize:'12px',textAlign:'right'}}>{order.recipient}</Typography>
                                </Box>
                                <Box sx={{display:'flex',justifyContent:'space-between',gap:'10px'}}>
                                    <Typography sx={{color:'rgba(68,107,128,0.6)',fontSize:'12px',width:'130px',flexShrink:0}}>{t('orders.details.deliveryDate')}</Typography>
                                    <Typography sx={{color:'#446B80',fontSize:'12px',textAlign:'right'}}>{order.deliveryDate}</Typography>
                                </Box>
                                <Box sx={{display:'flex',justifyContent:'space-between',gap:'10px'}}>
                                    <Typography sx={{color:'rgba(68,107,128,0.6)',fontSize:'12px',width:'130px',flexShrink:0}}>{t('orders.details.comment')}</Typography>
                                    <Typography sx={{color:'#446B80',fontSize:'12px',textAlign:'right'}}>{order.comment || t('orders.noComment')}</Typography>
                                </Box>
                                <Box sx={{display:'flex',justifyContent:'space-between',gap:'10px'}}>
                                    <Typography sx={{color:'rgba(68,107,128,0.6)',fontSize:'12px',width:'130px',flexShrink:0}}>{t('orders.details.deliveryCost')}</Typography>
                                    <Typography sx={{color:'#7FC9F0',fontSize:'12px',fontWeight:500,textAlign:'right'}}>{order.deliveryCost}</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}