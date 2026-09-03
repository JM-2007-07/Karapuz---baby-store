import React, { useState } from 'react'
import { Box, Button, Typography, IconButton, Drawer, Divider, TextField, InputAdornment, Popover, Badge } from '@mui/material'
import { Menu, PersonOutlineOutlined, PlaceOutlined, ShoppingCartOutlined, SearchOutlined, CloseOutlined, FavoriteBorderOutlined, SettingsOutlined, LogoutOutlined, Inventory2Outlined, LanguageOutlined } from '@mui/icons-material'
import { NavLink, useNavigate } from 'react-router'
import { useTranslation } from 'react-i18next'
import logo from '../assets/logo.svg'
import ButtonMain from './ButtonMain'
import { useCart } from '../context/CartContext'
import { useAuth } from '../context/AuthContext'
export default function Header() {
    const { t, i18n } = useTranslation()
    const [menuOpen, setMenuOpen] = useState(false)
    const [accountOpen, setAccountOpen] = useState(false)
    const [catalogOpen, setCatalogOpen] = useState(false)
    const [catalogMobileOpen, setCatalogMobileOpen] = useState(false)
    const [accountAnchor, setAccountAnchor] = useState(null)
    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')
    const [loginError, setLoginError] = useState('')
    const [searchValue, setSearchValue] = useState('')
    const navigate = useNavigate()
    const { cartCount } = useCart()
    const { user, login, logout } = useAuth()
    const isLoggedIn = Boolean(user)
    const accountMenuOpen = Boolean(accountAnchor)
    const currentLanguage = i18n.language?.startsWith('en') ? 'en' : 'ru'
    const toggleLanguage = () => {
        i18n.changeLanguage(currentLanguage === 'ru' ? 'en' : 'ru')
    }
    const handleSearch = () => {
        const value = searchValue.trim()
        if (!value) return
        setMenuOpen(false)
        navigate(`/catalog/all?search=${encodeURIComponent(value)}`)
        setSearchValue('')
    }
    const handleSearchKeyDown = (e) => {
        if (e.key === 'Enter') handleSearch()
    }
    const handleAccountClick = (e) => {
        setAccountAnchor(e.currentTarget)
    }
    const handleAccountClose = () => {
        setAccountAnchor(null)
        setLoginError('')
    }
    const handleLogin = () => {
        const result = login(loginEmail.trim(), loginPassword)
        if (!result.success) {
            setLoginError(result.message)
            return
        }
        setLoginEmail('')
        setLoginPassword('')
        setLoginError('')
        handleAccountClose()
        setAccountOpen(false)
    }
    const handleLogout = () => {
        logout()
        handleAccountClose()
        setAccountOpen(false)
        navigate('/')
    }
    const links = [
        {name:t('nav.sales'),path:'/sales'},
        {name:t('nav.about'),path:'/about'},
        {name:t('nav.blog'),path:'/blog'},
        {name:t('nav.wholesale'),path:'/wholesale'},
        {name:t('nav.return'),path:'/return'},
        {name:t('nav.payment'),path:'/payment'},
        {name:t('nav.contacts'),path:'/contacts'}
    ]
    const catalogItems = [
        {name:t('catalog.sales'),path:'/sales'},
        {name:t('catalog.cribs'),path:'/catalog/cribs'},
        {name:t('catalog.strollers'),path:'/catalog/strollers'},
        {name:t('catalog.carSeats'),path:'/catalog/car-seats'},
        {name:t('catalog.clothes'),path:'/catalog/clothes'},
        {name:t('catalog.feeding'),path:'/catalog/feeding'},
        {name:t('catalog.hygiene'),path:'/catalog/hygiene'},
        {name:t('catalog.smartToys'),path:'/catalog/smart-toys'}
    ]
    const handleCatalogItem = (path) => {
        setCatalogOpen(false)
        setCatalogMobileOpen(false)
        setMenuOpen(false)
        navigate(path)
    }
    const inputStyles = {
        '& .MuiOutlinedInput-root':{height:'48px',borderRadius:'8px',bgcolor:'#F8FBFC',fontSize:'13px','& fieldset':{borderColor:'rgba(127,201,240,0.2)'},'&:hover fieldset':{borderColor:'#7FC9F0'},'&.Mui-focused fieldset':{borderColor:'#7FC9F0'}}
    }

    const LanguageButton = () => (
        <Button onClick={toggleLanguage} startIcon={<LanguageOutlined sx={{fontSize:'18px!important'}} />} sx={{minWidth:'auto',p:'5px 8px',borderRadius:'7px',color:'#446B80',textTransform:'none',fontSize:'12px',fontWeight:600,transition:'0.3s','&:hover':{bgcolor:'rgba(127,201,240,0.1)'}}}>
            {currentLanguage.toUpperCase()}
        </Button>
    )
    return (
        <>
            <Box component="header" sx={{position:'fixed',top:0,left:0,width:'100%',zIndex:1400,bgcolor:'rgba(255,255,255,0.72)',backdropFilter:'blur(18px)',borderBottom:'1px solid rgba(127,201,240,0.12)',transition:'0.3s'}}>
                <Box sx={{maxWidth:'1500px',margin:'auto',minHeight:'138px',px:{xs:'15px',sm:'25px',md:'35px'},display:{xs:'none',md:'flex'},flexDirection:'column',justifyContent:'center',gap:'13px'}}>
                    <Box sx={{width:'100%',display:'flex',justifyContent:'space-between',alignItems:'center',gap:'30px'}}>
                        <Box sx={{display:'flex',alignItems:'center',gap:'28px',flexShrink:0}}>
                            <Box sx={{cursor:'pointer',display:'flex',alignItems:'center'}} onClick={() => navigate('/')}>
                                <img src={logo} alt="Карапуз" style={{width:'58px',height:'58px',objectFit:'contain'}} />
                            </Box>
                            <ButtonMain onClick={() => setCatalogOpen(!catalogOpen)} sx={{gap:'6px'}}>
                                {t('header.catalog')}
                                {catalogOpen ? <CloseOutlined sx={{fontSize:'18px'}} /> : <Menu sx={{fontSize:'19px'}} />}
                            </ButtonMain>
                        </Box>
                        <Box sx={{width:'100%',maxWidth:'480px',height:'44px',display:'flex',alignItems:'stretch',border:'1px solid rgba(127,201,240,0.25)',borderRadius:'7px',overflow:'hidden',bgcolor:'rgba(255,255,255,0.35)',transition:'0.3s','&:hover':{borderColor:'#7FC9F0'},'&:focus-within':{borderColor:'#7FC9F0',boxShadow:'0 0 0 3px rgba(127,201,240,0.12)'}}}>
                            <TextField placeholder={t('header.search')} size="small" fullWidth value={searchValue} onChange={(e) => setSearchValue(e.target.value)} onKeyDown={handleSearchKeyDown} sx={{'& .MuiOutlinedInput-root':{height:'100%',borderRadius:0,bgcolor:'transparent',fontSize:'14px',color:'#446B80','& fieldset':{border:'none'}},'& input::placeholder':{color:'#8BA0AB',opacity:1}}} InputProps={{startAdornment:<InputAdornment position="start"><SearchOutlined sx={{color:'#7FC9F0',fontSize:'21px'}} /></InputAdornment>}} />
                            <Button onClick={handleSearch} sx={{minWidth:'90px',px:'20px',borderRadius:0,textTransform:'none',fontSize:'14px',fontWeight:600,color:'#FFFFFF',bgcolor:'#7FC9F0',transition:'0.3s','&:hover':{bgcolor:'#446B80'}}}>{t('header.find')}</Button>
                        </Box>
                        <Box sx={{display:'flex',alignItems:'center',gap:'20px',flexShrink:0}}>
                            <Button onClick={handleAccountClick} sx={{display:'flex',alignItems:'center',gap:'7px',fontSize:'14px',color:'#446B80',textTransform:'none',whiteSpace:'nowrap',p:0,minWidth:0}}>
                                <PersonOutlineOutlined sx={{color:'#7FC9F0',width:'21px',height:'21px'}} />
                                {isLoggedIn ? t('header.account') : t('header.login')}
                            </Button>
                            <Button onClick={() => navigate('/cart')} sx={{display:'flex',alignItems:'center',gap:'7px',fontSize:'14px',color:'#446B80',textTransform:'none',whiteSpace:'nowrap',p:0,minWidth:0}}>
                                <Badge badgeContent={cartCount} color="error"><ShoppingCartOutlined sx={{color:'#7FC9F0',width:'21px',height:'21px'}} /></Badge>
                                {t('header.cart')}
                            </Button>
                        </Box>
                    </Box>
                    <Box sx={{width:'100%',height:'1px',bgcolor:'rgba(68,107,128,0.14)'}} />
                    <Box sx={{width:'100%',display:'flex',alignItems:'center',justifyContent:'space-between',gap:'25px'}}>
                        <Typography sx={{fontFamily:'"Balsamiq Sans", sans-serif',width:'155px',fontSize:'10px',lineHeight:'15px',color:'#446B80',flexShrink:0}}>{t('header.description')}</Typography>
                        <Box sx={{display:'flex',alignItems:'center',justifyContent:'center',gap:{md:'20px',lg:'28px'},flexWrap:'wrap'}}>
                            {links.map((el,i) => (
                                <NavLink key={i} to={el.path} style={({isActive}) => ({textDecoration:'none',color:'#446B80',fontSize:'13px',fontWeight:isActive ? 600 : 400,transition:'0.3s'})}>{el.name}</NavLink>
                            ))}
                        </Box>
                        <Box sx={{display:'flex',gap:'10px',alignItems:'center',color:'#446B80',flexShrink:0}}>
                            <Box sx={{display:'flex',gap:'4px',alignItems:'center'}}>
                                <PlaceOutlined sx={{width:'19px',height:'19px',color:'#7FC9F0'}} />
                                <Typography sx={{fontSize:'13px',whiteSpace:'nowrap'}}>{t('header.city')} : <span style={{color:'#7FC9F0'}}>{t('header.cityName')}</span></Typography>
                            </Box>
                            <LanguageButton />
                        </Box>
                    </Box>
                </Box>
                <Box sx={{height:'64px',px:'15px',display:{xs:'flex',md:'none'},alignItems:'center',justifyContent:'space-between'}}>
                    <IconButton onClick={() => setMenuOpen(true)} sx={{width:'42px',height:'42px',color:'#7FC9F0'}}><Menu /></IconButton>
                    <Box onClick={() => navigate('/')} sx={{display:'flex',alignItems:'center',cursor:'pointer'}}>
                        <img src={logo} alt="Карапуз" style={{width:'48px',height:'48px',objectFit:'contain'}} />
                    </Box>
                    <Box sx={{display:'flex',alignItems:'center',gap:'2px'}}>
                        <IconButton onClick={() => setAccountOpen(true)} sx={{width:'42px',height:'42px',color:'#7FC9F0'}}><PersonOutlineOutlined /></IconButton>
                        <IconButton onClick={() => navigate('/cart')} sx={{width:'42px',height:'42px',color:'#7FC9F0'}}>
                            <Badge badgeContent={cartCount} color="error"><ShoppingCartOutlined /></Badge>
                        </IconButton>
                    </Box>
                </Box>
            </Box>
            <Drawer anchor="top" open={catalogOpen} onClose={() => setCatalogOpen(false)} hideBackdrop sx={{display:{xs:'none',md:'block'},zIndex:1300}} ModalProps={{keepMounted:true}} PaperProps={{sx:{top:'138px',left:0,width:'100%',height:'calc(100vh - 138px)',borderRadius:0,boxShadow:'0 20px 50px rgba(68,107,128,0.15)',overflow:'hidden',zIndex:1300}}}>
                <Box sx={{width:'1530px',maxWidth:'100%',mx:'auto',height:'600px',display:'flex',bgcolor:'#FFFFFF'}}>
                    <Box sx={{width:'33.333%',minWidth:'320px',maxWidth:'520px',height:'100%',bgcolor:'#446B80',pt:'12px',pb:'80px'}}>
                        <Box sx={{width:'100%',height:'100%',maxWidth:'520px',ml:'auto',display:'flex',flexDirection:'column',justifyContent:'end'}}>
                            {catalogItems.map((item,index) => (
                                <Box key={index} onClick={() => handleCatalogItem(item.path)} sx={{width:'100%',minHeight:'46px',px:{md:'35px',lg:'55px'},display:'flex',alignItems:'center',cursor:'pointer',transition:'0.25s','&:hover':{bgcolor:'#FFFFFF','& .desktopCatalogText':{color:'#446B80'}}}}>
                                    <Typography className="desktopCatalogText" sx={{color:'#FFFFFF',fontSize:'16px',fontWeight:500,transition:'0.25s'}}>{item.name}</Typography>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                    <Box onClick={() => setCatalogOpen(false)} sx={{flex:1,height:'100%',bgcolor:'#FFFFFF',cursor:'pointer'}} />
                </Box>
            </Drawer>
            <Drawer anchor="left" open={menuOpen} onClose={() => setMenuOpen(false)} PaperProps={{sx:{width:{xs:'88%',sm:'360px'},maxWidth:'380px',bgcolor:'#FFFFFF',pt:'8px'}}}>
                <Box sx={{width:'100%',minHeight:'100vh',display:'flex',flexDirection:'column'}}>
                    <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',px:'18px',py:'12px'}}>
                        <img src={logo} alt="Карапуз" style={{width:'52px',height:'52px',objectFit:'contain'}} />
                        <IconButton onClick={() => setMenuOpen(false)} sx={{color:'#446B80'}}><CloseOutlined /></IconButton>
                    </Box>
                    <Box sx={{px:'18px',pt:'8px',pb:'18px'}}>
                        <Box sx={{width:'100%',height:'46px',display:'flex',border:'1px solid rgba(127,201,240,0.25)',borderRadius:'8px',overflow:'hidden',bgcolor:'#F7FAFC','&:focus-within':{borderColor:'#7FC9F0'}}}>
                            <TextField fullWidth placeholder={t('header.search')} size="small" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} onKeyDown={handleSearchKeyDown} sx={{'& .MuiOutlinedInput-root':{height:'100%','& fieldset':{border:'none'}}}} InputProps={{startAdornment:<InputAdornment position="start"><SearchOutlined sx={{color:'#7FC9F0'}} /></InputAdornment>}} />
                            <Button onClick={handleSearch} sx={{minWidth:'76px',borderRadius:0,textTransform:'none',color:'#FFFFFF',bgcolor:'#7FC9F0',fontSize:'13px',fontWeight:600,'&:hover':{bgcolor:'#446B80'}}}>{t('header.find')}</Button>
                        </Box>
                    </Box>
                    <Divider sx={{borderColor:'rgba(68,107,128,0.12)'}} />
                    <Box sx={{px:'18px',py:'10px'}}>
                        <Button onClick={() => {setMenuOpen(false);setAccountOpen(true)}} sx={{justifyContent:'flex-start',width:'100%',color:'#446B80',textTransform:'none',fontSize:'15px',gap:'10px',py:'10px'}}>
                            <PersonOutlineOutlined sx={{color:'#7FC9F0'}} />
                            {isLoggedIn ? t('header.account') : t('header.login')}
                        </Button>
                    </Box>
                    <Divider sx={{borderColor:'rgba(68,107,128,0.12)'}} />
                    <Box sx={{px:'18px',py:'5px'}}>
                        <Button onClick={() => {setMenuOpen(false);setCatalogMobileOpen(true)}} sx={{justifyContent:'space-between',width:'100%',color:'#446B80',textTransform:'none',fontSize:'15px',py:'12px'}}>
                            {t('header.catalog')}
                            <Menu sx={{fontSize:'20px',color:'#7FC9F0'}} />
                        </Button>
                        {links.map((el,i) => (
                            <React.Fragment key={i}>
                                <Divider sx={{borderColor:'rgba(68,107,128,0.1)'}} />
                                <NavLink to={el.path} onClick={() => setMenuOpen(false)} style={({isActive}) => ({display:'block',padding:'12px 0',textDecoration:'none',color:isActive ? '#7FC9F0' : '#446B80',fontSize:'15px',fontWeight:isActive ? 600 : 400})}>{el.name}</NavLink>
                            </React.Fragment>
                        ))}
                    </Box>
                    <Box sx={{px:'18px',py:'14px',borderTop:'1px solid rgba(68,107,128,0.12)',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                        <Box sx={{display:'flex',alignItems:'center',gap:'6px'}}>
                            <PlaceOutlined sx={{fontSize:'20px',color:'#7FC9F0'}} />
                            <Typography sx={{fontSize:'14px',color:'#446B80'}}>{t('header.city')}: <span style={{color:'#7FC9F0'}}>{t('header.cityName')}</span></Typography>
                        </Box>
                        <LanguageButton />
                    </Box>
                </Box>
            </Drawer>
            <Drawer anchor="right" open={catalogMobileOpen} onClose={() => setCatalogMobileOpen(false)} sx={{'& .MuiDrawer-paper':{width:{xs:'88%',sm:'360px'},maxWidth:'380px',bgcolor:'#446B80 !important',color:'#FFFFFF',boxShadow:'none',padding:'20px'}}}>
                <Box sx={{minHeight:'100vh',display:'flex',flexDirection:'column'}}>
                    <Box sx={{height:'65px',display:'flex',justifyContent:'flex-end',alignItems:'center',px:'12px'}}>
                        <IconButton onClick={() => setCatalogMobileOpen(false)} sx={{color:'#FFFFFF',width:'40px',height:'40px'}}><CloseOutlined /></IconButton>
                    </Box>
                    <Box sx={{display:'flex',flexDirection:'column',pt:'10px'}}>
                        {catalogItems.map((item,index) => (
                            <Box key={index} onClick={() => handleCatalogItem(item.path)} sx={{minHeight:'45px',px:'30px',display:'flex',alignItems:'center',cursor:'pointer',transition:'0.25s','&:hover':{bgcolor:'#FFFFFF',borderRadius:'7px 0 0 7px','& .mobileCatalogText':{color:'#446B80'}}}}>
                                <Typography className="mobileCatalogText" sx={{color:'#FFFFFF',fontSize:'14px',fontWeight:400,transition:'0.25s',lineHeight:1.3}}>{item.name}</Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Drawer>
            <Popover open={accountMenuOpen} anchorEl={accountAnchor} onClose={handleAccountClose} sx={{zIndex:1500}} anchorOrigin={{vertical:'bottom',horizontal:'right'}} transformOrigin={{vertical:'top',horizontal:'right'}} slotProps={{paper:{sx:{mt:'14px',width:'330px',borderRadius:'16px',overflow:'hidden',boxShadow:'0 15px 45px rgba(68,107,128,0.18)',border:'1px solid rgba(127,201,240,0.15)',bgcolor:'rgba(255,255,255,0.98)',backdropFilter:'blur(20px)'}}}}>
                {!isLoggedIn ? (
                    <Box sx={{p:'22px'}}>
                        <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between',mb:'22px'}}>
                            <Typography onClick={() => {navigate('/register');handleAccountClose()}} sx={{fontFamily:'"Balsamiq Sans", sans-serif',fontSize:'19px',fontWeight:700,color:'#7FC9F0',cursor:'pointer','&:hover':{textDecoration:'underline'}}}>{t('account.register')}</Typography>
                            <IconButton onClick={handleAccountClose} sx={{width:'34px',height:'34px',color:'#446B80'}}><CloseOutlined /></IconButton>
                        </Box>
                        <TextField fullWidth placeholder={t('account.email')} type="email" size="small" value={loginEmail} onChange={(e) => {setLoginEmail(e.target.value);setLoginError('')}} sx={{...inputStyles,mb:'13px'}} />
                        <TextField fullWidth placeholder={t('account.password')} type="password" size="small" value={loginPassword} onChange={(e) => {setLoginPassword(e.target.value);setLoginError('')}} onKeyDown={(e) => e.key === 'Enter' && handleLogin()} sx={{...inputStyles,mb:'10px'}} />
                        {loginError && <Typography sx={{color:'#E57373',fontSize:'12px',mb:'12px'}}>{loginError}</Typography>}
                        <Button onClick={handleLogin} fullWidth sx={{height:'46px',bgcolor:'#7FC9F0',color:'#FFFFFF',borderRadius:'9px',textTransform:'none',fontSize:'14px',fontWeight:500,'&:hover':{bgcolor:'#6CBBE4'}}}>{t('account.login')}</Button>
                        <Typography sx={{fontSize:'13px',textAlign:'center',color:'#7FC9F0',mt:'16px',cursor:'pointer'}}>{t('account.forgotPassword')}</Typography>
                    </Box>
                ) : (
                    <Box sx={{py:'12px'}}>
                        <Box sx={{cursor:'pointer',display:'flex',alignItems:'center',gap:'13px',px:'20px',py:'10px',pb:'16px'}}>
                            <Box sx={{width:'38px',height:'38px',borderRadius:'50%',bgcolor:'#EEF8FC',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}><PersonOutlineOutlined sx={{color:'#7FC9F0',fontSize:'22px'}} /></Box>
                            <Box sx={{minWidth:0}}>
                                <Typography sx={{fontSize:'15px',fontWeight:500,color:'#446B80'}}>{user?.name || t('account.user')}</Typography>
                                <Typography sx={{fontSize:'12px',color:'rgba(68,107,128,0.65)',overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>{user?.email || ''}</Typography>
                            </Box>
                        </Box>
                        <Box onClick={() => {navigate('/orders');handleAccountClose()}} sx={{display:'flex',alignItems:'center',gap:'12px',px:'20px',py:'12px',cursor:'pointer','&:hover':{bgcolor:'#F5FAFC'}}}><Inventory2Outlined sx={{fontSize:'20px',color:'#7FC9F0'}} /><Typography sx={{fontSize:'15px',color:'#446B80'}}>{t('account.orders')}</Typography></Box>
                        <Box onClick={() => {navigate('/favorites');handleAccountClose()}} sx={{display:'flex',alignItems:'center',gap:'12px',px:'20px',py:'12px',cursor:'pointer','&:hover':{bgcolor:'#F5FAFC'}}}><FavoriteBorderOutlined sx={{fontSize:'20px',color:'#7FC9F0'}} /><Typography sx={{fontSize:'15px',color:'#446B80'}}>{t('account.favorites')}</Typography></Box>
                        <Divider sx={{my:'5px',borderColor:'rgba(68,107,128,0.12)'}} />
                        <Box onClick={() => {navigate('/personal-data');handleAccountClose()}} sx={{display:'flex',alignItems:'center',gap:'12px',px:'20px',py:'12px',cursor:'pointer','&:hover':{bgcolor:'#F5FAFC'}}}><SettingsOutlined sx={{fontSize:'20px',color:'#7FC9F0'}} /><Typography sx={{fontSize:'15px',color:'#446B80'}}>{t('account.settings')}</Typography></Box>
                        <Box onClick={handleLogout} sx={{display:'flex',alignItems:'center',gap:'12px',px:'20px',py:'12px',cursor:'pointer','&:hover':{bgcolor:'#FFF5F5'}}}><LogoutOutlined sx={{fontSize:'20px',color:'#7FC9F0'}} /><Typography sx={{fontSize:'15px',color:'#446B80'}}>{t('account.logout')}</Typography></Box>
                    </Box>
                )}
            </Popover>
            <Drawer anchor="right" open={accountOpen} onClose={() => setAccountOpen(false)} PaperProps={{sx:{width:{xs:'88%',sm:'380px'},maxWidth:'420px',bgcolor:'rgba(255,255,255,0.98)',backdropFilter:'blur(20px)'}}}>
                {!isLoggedIn ? (
                    <Box sx={{minHeight:'100vh',display:'flex',flexDirection:'column'}}>
                        <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',px:'20px',py:'15px'}}>
                            <Typography onClick={() => {setAccountOpen(false);navigate('/register')}} sx={{fontFamily:'"Balsamiq Sans", sans-serif',fontSize:'19px',fontWeight:700,color:'#7FC9F0',cursor:'pointer'}}>{t('account.register')}</Typography>
                            <IconButton onClick={() => setAccountOpen(false)} sx={{color:'#446B80'}}><CloseOutlined /></IconButton>
                        </Box>
                        <Divider sx={{borderColor:'rgba(68,107,128,0.12)'}} />
                        <Box sx={{px:'20px',py:'25px'}}>
                            <TextField fullWidth placeholder={t('account.email')} type="email" size="small" value={loginEmail} onChange={(e) => {setLoginEmail(e.target.value);setLoginError('')}} sx={{...inputStyles,mb:'13px'}} />
                            <TextField fullWidth placeholder={t('account.password')} type="password" size="small" value={loginPassword} onChange={(e) => {setLoginPassword(e.target.value);setLoginError('')}} onKeyDown={(e) => e.key === 'Enter' && handleLogin()} sx={{...inputStyles,mb:'10px'}} />
                            {loginError && <Typography sx={{color:'#E57373',fontSize:'12px',mb:'12px'}}>{loginError}</Typography>}
                            <Button onClick={handleLogin} fullWidth sx={{height:'46px',bgcolor:'#7FC9F0',color:'#FFFFFF',borderRadius:'9px',textTransform:'none',fontSize:'14px',fontWeight:500,'&:hover':{bgcolor:'#6CBBE4'}}}>{t('account.login')}</Button>
                            <Typography sx={{fontSize:'13px',textAlign:'center',color:'#7FC9F0',mt:'16px',cursor:'pointer'}}>{t('account.forgotPassword')}</Typography>
                        </Box>
                    </Box>
                ) : (
                    <Box sx={{minHeight:'100vh',display:'flex',flexDirection:'column'}}>
                        <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',px:'20px',py:'18px'}}>
                            <Typography sx={{fontFamily:'"Balsamiq Sans", sans-serif',fontSize:'19px',fontWeight:700,color:'#446B80'}}>{t('header.account')}</Typography>
                            <IconButton onClick={() => setAccountOpen(false)} sx={{color:'#446B80'}}><CloseOutlined /></IconButton>
                        </Box>
                        <Divider sx={{borderColor:'rgba(68,107,128,0.12)'}} />
                        <Box onClick={() => {navigate('/personal-data');setAccountOpen(false)}} sx={{display:'flex',alignItems:'center',gap:'13px',px:'20px',py:'22px',cursor:'pointer','&:hover':{bgcolor:'#F5FAFC'}}}>
                            <Box sx={{width:'45px',height:'45px',borderRadius:'50%',bgcolor:'#EEF8FC',display:'flex',alignItems:'center',justifyContent:'center'}}><PersonOutlineOutlined sx={{color:'#7FC9F0',fontSize:'24px'}} /></Box>
                            <Box>
                                <Typography sx={{fontSize:'16px',fontWeight:600,color:'#446B80'}}>{user?.name || t('account.user')}</Typography>
                                <Typography sx={{fontSize:'12px',color:'rgba(68,107,128,0.65)'}}>{user?.email}</Typography>
                            </Box>
                        </Box>
                        <Divider sx={{borderColor:'rgba(68,107,128,0.12)'}} />
                        <Box onClick={() => {navigate('/orders');setAccountOpen(false)}} sx={{display:'flex',alignItems:'center',gap:'12px',px:'20px',py:'15px',cursor:'pointer'}}><Inventory2Outlined sx={{color:'#7FC9F0'}} /><Typography sx={{fontSize:'15px',color:'#446B80'}}>{t('account.orders')}</Typography></Box>
                        <Box onClick={() => {navigate('/favorites');setAccountOpen(false)}} sx={{display:'flex',alignItems:'center',gap:'12px',px:'20px',py:'15px',cursor:'pointer'}}><FavoriteBorderOutlined sx={{color:'#7FC9F0'}} /><Typography sx={{fontSize:'15px',color:'#446B80'}}>{t('account.favorites')}</Typography></Box>
                        <Divider sx={{borderColor:'rgba(68,107,128,0.12)'}} />
                        <Box onClick={() => {navigate('/personal-data');setAccountOpen(false)}} sx={{display:'flex',alignItems:'center',gap:'12px',px:'20px',py:'15px',cursor:'pointer'}}><SettingsOutlined sx={{color:'#7FC9F0'}} /><Typography sx={{fontSize:'15px',color:'#446B80'}}>{t('account.settings')}</Typography></Box>
                        <Box onClick={handleLogout} sx={{display:'flex',alignItems:'center',gap:'12px',px:'20px',py:'15px',cursor:'pointer'}}><LogoutOutlined sx={{color:'#7FC9F0'}} /><Typography sx={{fontSize:'15px',color:'#446B80'}}>{t('account.logout')}</Typography></Box>
                    </Box>
                )}
            </Drawer>
        </>
    )
}