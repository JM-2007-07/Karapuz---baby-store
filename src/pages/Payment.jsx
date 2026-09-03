import React, { useState } from 'react'
import { Box, Typography, Button, Fade } from '@mui/material'
import { useNavigate } from 'react-router'

export default function Payment() {
    const [activeTab, setActiveTab] = useState('payment') // 'payment' | 'delivery'
    const navigate = useNavigate()

    return (
        <Box sx={{width:'100%', maxWidth:'1500px', margin:'auto', px:{xs:'15px', md:'25px'}, pt:{xs:'120px', md:'180px'}, pb:{xs:'20px', md:'40px'}}}>
            {/* Хлебные крошки */}
            <Box data-aos="fade-right" sx={{display:'flex', alignItems:'center', gap:'8px', mb:'15px'}}>
                <Typography onClick={() => navigate('/')} sx={{textDecoration:'none', color:'rgba(68,107,128,0.6)', fontSize:'14px'}}>Главная</Typography>
                <Typography sx={{color:'rgba(68,107,128,0.6)', fontSize:'14px'}}>›</Typography>
                <Typography sx={{color:'#446B80', fontSize:'14px', fontWeight:500}}>Оплата и доставка</Typography>
            </Box>

            {/* Заголовок */}
            <Typography data-aos="fade-up" component="h1" sx={{fontFamily:'"Balsamiq Sans", sans-serif', color:'#446B80', fontSize:{xs:'32px', md:'48px'}, fontWeight:700, mb:{xs:'20px', md:'30px'}}}>
                Оплата и доставка
            </Typography>

            {/* Переключатели (Табы) */}
            <Box data-aos="fade-up" sx={{display:'flex', gap:'12px', mb:{xs:'30px', md:'45px'}}}>
                <Button 
                    onClick={() => setActiveTab('payment')}
                    sx={{
                        borderRadius:'10px',
                        px:'24px',
                        py:'8px',
                        textTransform:'none',
                        fontSize:'15px',
                        fontWeight:500,
                        border:'1px solid #7FC9F0',
                        bgcolor: activeTab === 'payment' ? '#7FC9F0' : '#FFFFFF',
                        color: activeTab === 'payment' ? '#FFFFFF' : '#7FC9F0',
                        '&:hover': { bgcolor: activeTab === 'payment' ? '#6CBBE4' : 'rgba(127,201,240,0.1)' }
                    }}
                >
                    Оплата
                </Button>
                <Button 
                    onClick={() => setActiveTab('delivery')}
                    sx={{
                        borderRadius:'10px',
                        px:'24px',
                        py:'8px',
                        textTransform:'none',
                        fontSize:'15px',
                        fontWeight:500,
                        border:'1px solid #7FC9F0',
                        bgcolor: activeTab === 'delivery' ? '#7FC9F0' : '#FFFFFF',
                        color: activeTab === 'delivery' ? '#FFFFFF' : '#7FC9F0',
                        '&:hover': { bgcolor: activeTab === 'delivery' ? '#6CBBE4' : 'rgba(127,201,240,0.1)' }
                    }}
                >
                    Доставка
                </Button>
            </Box>

            {/* Контентная область с плавной сменой */}
            <Box sx={{minHeight:'400px'}}>
                {/* Вкладка ОПЛАТА */}
                {activeTab === 'payment' && (
                    <Fade in={activeTab === 'payment'} timeout={400}>
                        <Box sx={{display:'flex', flexDirection:'column', gap:'35px'}}>
                            {/* Варианты оплаты */}
                            <Box sx={{display:'grid', gridTemplateColumns:{xs:'1fr', md:'1fr 1fr'}, gap:'30px'}}>
                                <Box>
                                    <Typography component="h3" sx={{fontFamily:'"Balsamiq Sans", sans-serif', color:'#446B80', fontSize:'20px', fontWeight:700, mb:'12px'}}>
                                        Варианты оплаты г. Москва
                                    </Typography>
                                    <Typography sx={{color:'#446B80', fontSize:'14px', lineHeight:1.7}}>
                                        1. Оплата товара курьеру наличными при доставке;<br/>
                                        2. Оплата товара курьеру с помощью банковских карт Visa/MasterCard/МИР без комиссии;<br/>
                                        3. Оплата товара по счету для физических и юридических лиц на расчетный счет организации. Доставка товара осуществляется на следующий день после поступления денег на р/с нашей организации.
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography component="h3" sx={{fontFamily:'"Balsamiq Sans", sans-serif', color:'#446B80', fontSize:'20px', fontWeight:700, mb:'12px'}}>
                                        Варианты оплаты регионы России
                                    </Typography>
                                    <Typography sx={{color:'#446B80', fontSize:'14px', lineHeight:1.7}}>
                                        1. Оплата товара онлайн через сайт с помощью банковских карт Visa/MasterCard/МИР без комиссии;<br/>
                                        2. Оплата товара по счету для физических и юридических лиц на р/с организации;<br/>
                                        3. В регионы России товары отправляются только после 100% предоплаты;<br/>
                                        4. Оплата доставки между терминалами осуществляется при получении кресла на терминале ТК (за исключением городов с бесплатной доставкой).
                                    </Typography>
                                </Box>
                            </Box>

                            <Box sx={{borderTop:'1px solid rgba(127,201,240,0.2)', pt:'30px'}}>
                                <Typography component="h3" sx={{fontFamily:'"Balsamiq Sans", sans-serif', color:'#446B80', fontSize:'20px', fontWeight:700, mb:'12px'}}>
                                    Оплата банковской картой на сайте
                                </Typography>
                                <Typography sx={{color:'#446B80', fontSize:'14px', lineHeight:1.7}}>
                                    Оплата банковской картой производится непосредственно на сайте в режиме online. Для этого при оформлении заказа укажите способ оплаты «Оплата банковской картой». Оплата осуществляется на сайте сразу после оформления заказа.<br/><br/>
                                    После подтверждения состава заказа, Ваших личных данных и адреса доставки откроется страница, где будет предложено ввести данные банковской карты плательщика:<br/>
                                    — номер карты;<br/>
                                    — ФИО владельца;<br/>
                                    — срок действия карты;<br/>
                                    — CVV/CVC код.<br/><br/>
                                    После ввода данных карты внимательно проверьте все заполненные поля и нажмите кнопку «Оплатить».<br/><br/>
                                    Операция проводится через авторизационный сервер процессингового центра банка с использованием банковских карт платежных систем МИР, VISA, MasterCard (РФ и СНГ).
                                </Typography>
                            </Box>

                            <Box sx={{borderTop:'1px solid rgba(127,201,240,0.2)', pt:'30px'}}>
                                <Typography component="h3" sx={{fontFamily:'"Balsamiq Sans", sans-serif', color:'#446B80', fontSize:'20px', fontWeight:700, mb:'12px'}}>
                                    Банковский перевод
                                </Typography>
                                <Typography sx={{color:'#446B80', fontSize:'14px', lineHeight:1.7}}>
                                    Оплата за заказ производится банковским платёжным поручением на расчётный счет магазина.<br/><br/>
                                    При оформлении заказа выберите способ оплаты «Банковский перевод». Наш оператор свяжется с Вами и выставит счёт. Оплату можно произвести в любом из отделений банка или Почты России.<br/><br/>
                                    Обратите внимание, что банки могут взимать комиссию (как правило, в размере 1.5- 2%) за проведение платежа.
                                </Typography>
                            </Box>
                        </Box>
                    </Fade>
                )}

                {/* Вкладка ДОСТАВКА */}
                {activeTab === 'delivery' && (
                    <Fade in={activeTab === 'delivery'} timeout={400}>
                        <Box sx={{display:'flex', flexDirection:'column', gap:'35px'}}>
                            <Box>
                                <Typography component="h3" sx={{fontFamily:'"Balsamiq Sans", sans-serif', color:'#446B80', fontSize:'20px', fontWeight:700, mb:'12px'}}>
                                    Доставка по Москве
                                </Typography>
                                <Typography sx={{color:'#446B80', fontSize:'14px', lineHeight:1.7}}>
                                    Мы доставляем заказы по Москве с понедельника по субботу с 9:00 до 19:00.<br/>
                                    Заказы, оформленные до 14:00 мы доставим на следующий день (кроме воскресения).<br/>
                                    Курьер позвонит вам в день доставки за 40–60 минут до прибытия по адресу. Просим указывать данные фактического получателя заказа.<br/>
                                    Заказы, подлежащие доставке транспортной компанией, мы доставим на терминал транспортной компании через 1-2 дня после получения оплаты.
                                </Typography>
                            </Box>

                            <Box sx={{borderTop:'1px solid rgba(127,201,240,0.2)', pt:'30px'}}>
                                <Typography component="h3" sx={{fontFamily:'"Balsamiq Sans", sans-serif', color:'#446B80', fontSize:'20px', fontWeight:700, mb:'12px'}}>
                                    Мы осуществляем отправку товара в любой город России!
                                </Typography>
                                <Typography sx={{color:'#446B80', fontSize:'14px', lineHeight:1.7}}>
                                    1. Отправка производится только после 100% предоплаты<br/>
                                    2. Доставка до терминала транспортной компанией в Москве и Махачкале и оформление документов для отправки - БЕСПЛАТНО<br/>
                                    3. Доставка товаров с платной доставкой - согласно тарифам Транспортной Компании<br/>
                                    4. Отправка осуществляется с терминала в Москве, Махачкале до терминала в городе назначения<br/>
                                    5. Доставка товара осуществляется в фирменной упаковке, но по желанию и за счёт клиента можем заказать и обрешётку<br/><br/>
                                    <strong>Внимание!</strong> В связи изменениями в Федеральных законах, установлен новый обязательный порядок приема-сдачи груза к экспедированию/перевозке и проверке достоверности информации о клиенте и свойствах груза. Транспортные компании требуют предоставление полных паспортных данных грузополучателя, таких как:<br/>
                                    — полностью ФИО;<br/>
                                    — серия паспорта;<br/>
                                    — номер паспорта;<br/>
                                    — дата выдачи паспорта.<br/>
                                    С 1 сентября 2016 года грузы без указания этих данных транспортные компании к перевозке не принимают.<br/><br/>
                                    6. Для мебели, пластмассовых и стеклянных изделий без жесткой упаковки, электронных приборов требуется обрешетка. Обрешетка оплачивается получателем на терминале транспортной компании при получении. Стоимость обрешетки зависит от города доставки и габаритов груза и рассчитывается в транспортной компании.<br/>
                                    7. После получения денег на счёт товар отправляется в ТК в течении 1-3 рабочих дней.<br/><br/>
                                    После отправки мы вышлем все номера квитанций, адрес и телефон транспортной компании, где Вы будете получать груз.
                                </Typography>
                            </Box>
                        </Box>
                    </Fade>
                )}
            </Box>
        </Box>
    )
}