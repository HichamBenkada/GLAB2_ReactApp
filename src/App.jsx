import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'

function App() {
  return (
    <>
       <Header />
      <Content color="blue" text="This is my first React Application!" />
      <Content color="red" text="Wish me luck..." />
      <Content color="green" text="I think I've got it!" />
      <Footer />
        <em emstyle={{border: "0.2px solid blue",borderRadius:"20px"}}>Yesterday is the past, tomorrow is the future, but today is a gift. That is why it is called the Present <strong>~ Bil KEANE</strong></em>
    </>
  );
}

export default App