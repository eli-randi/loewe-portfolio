import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import { Layout } from './layout/Layout.tsx'
import { Art, Nature, Portraits, Product } from './pages/PhotoPages.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { About } from './pages/About.tsx'
import { Contact } from './pages/Contact.tsx'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Routes>
            <Route path='/' element={<Portraits />} />
            <Route path="/nature" element={<Nature />} />
            <Route path='/art' element={<Art />} />
            <Route path='/product' element={<Product />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </Layout>
      </QueryClientProvider>
    </StrictMode>
  </BrowserRouter>,
)
