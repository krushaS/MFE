import React from 'react';
import ReactDOM from 'react-dom/client'

import './index.scss';
import 'mfeWebApp/styles';



const Header = React.lazy(() => import('mfeWebApp/Header'));
const Footer = React.lazy(() => import('mfeWebApp/Footer'));

const App = () => (
  <div >
    <Header />
    <Footer />
  </div>
)
const rootElement = document.getElementById('app')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement as HTMLElement)

root.render(<App />)