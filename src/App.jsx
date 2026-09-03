import React, { lazy, Suspense, useEffect } from 'react'
import Layout from './layout/Layout'
import { createBrowserRouter, RouterProvider, useLocation } from 'react-router'
import Loading from './components/Loading'
import { CartProvider } from './context/CartContext'
import { AuthProvider } from './context/AuthContext'
import { FavoritesProvider } from './context/FavoritesContext'


const Home = lazy(() => import('./pages/Home'))
const Contacts = lazy(() => import('./pages/Contacts'))
const About = lazy(() => import('./pages/About'))
const Payment = lazy(() => import('./pages/Payment'))
const WholeSale = lazy(() => import('./pages/WholeSale'))
const Blog = lazy(() => import('./pages/Blog'))
const BlogDetails = lazy(() => import('./pages/BlogDetails'))
const Sales = lazy(() => import('./pages/Sales'))
const SalesDetails = lazy(() => import('./pages/SalesDetails'))
const Cart = lazy(() => import('./pages/Cart'))
const Checkout = lazy(() => import('./pages/Checkout'))
const CheckPayment = lazy(() => import('./pages/CheckPayment'))
const Register = lazy(() => import('./pages/Register'))
const Personal = lazy(() => import('./pages/Personal'))
const Favorites = lazy(() => import('./pages/Favorites'))
const Orders = lazy(() => import('./pages/Orders'))
const Catalog = lazy(() => import('./pages/Catalog'))
const ProductDetails = lazy(() => import('./pages/ProductDetails'))
const NotFound = lazy(() => import('./pages/NotFound'))

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function LayoutWithScroll() {
  return (
    <>
      <ScrollToTop />
      <Layout />
    </>
  )
}


export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <LayoutWithScroll/>,
      children: [
        {
          index: true,
          element: 
            <Suspense fallback={<Loading/>}>
              <Home/>
            </Suspense>
        },
        {
          path: 'contacts',
          element: 
            <Suspense fallback={<Loading/>}>
              <Contacts/>
            </Suspense>
        },
        {
          path: 'about',
          element: 
            <Suspense fallback={<Loading/>}>
              <About/>
            </Suspense>
        },
        {
          path: 'payment',
          element: 
            <Suspense fallback={<Loading/>}>
              <Payment/>
            </Suspense>
        },
        {
          path: 'wholesale',
          element: 
            <Suspense fallback={<Loading/>}>
              <WholeSale/>
            </Suspense>
        },
        {
          path: 'blog',
          element: 
            <Suspense fallback={<Loading/>}>
              <Blog/>
            </Suspense>
        },
        {
          path: 'blog/:id',
          element: 
            <Suspense fallback={<Loading/>}>
              <BlogDetails/>
            </Suspense>
        },
        {
          path: 'sales',
          element: 
          <Suspense fallback={<Loading/>}>
              <Sales/>
            </Suspense>
        },
        {
          path: 'sales/:id',
          element: 
            <Suspense fallback={<Loading/>}>
              <SalesDetails/>
            </Suspense>
        },
        {
          path: 'cart',
          element: 
            <Suspense fallback={<Loading/>}>
              <Cart/>
            </Suspense>
        },
        {
          path: 'checkout',
          element: 
            <Suspense fallback={<Loading/>}>
              <Checkout/>
            </Suspense>
        },
        {
          path: 'checkout/payment',
          element: 
            <Suspense fallback={<Loading/>}>
              <CheckPayment/>
            </Suspense>
        },
        {
          path: 'register',
          element: 
            <Suspense fallback={<Loading/>}>
              <Register/>
            </Suspense>
        },
        {
          path: 'personal-data',
          element: 
            <Suspense fallback={<Loading/>}>
              <Personal/>
            </Suspense>
        },
        {
          path: 'favorites',
          element: 
            <Suspense fallback={<Loading/>}>
              <Favorites/>
            </Suspense>
        },
        {
          path: 'orders',
          element: 
            <Suspense fallback={<Loading/>}>
              <Orders/>
            </Suspense>
        },
        {
          path: 'catalog/:id',
          element: 
            <Suspense fallback={<Loading/>}>
              <Catalog/>
            </Suspense>
        },
        {
          path: 'product/:id',
          element: 
            <Suspense fallback={<Loading/>}>
              <ProductDetails/>
            </Suspense>
        },
        {
          path: '*',
          element: 
            <Suspense fallback={<Loading/>}>
              <NotFound/>
            </Suspense>
        },
      ]
    }
  ])
  return (
    <AuthProvider>
      <CartProvider>
        <FavoritesProvider>
          <RouterProvider router={router} />
        </FavoritesProvider>
      </CartProvider>
    </AuthProvider>
  )
}
