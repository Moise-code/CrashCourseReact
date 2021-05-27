import React from 'react';
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';

const buttonVariant = {
  //visible: {
  //  x: [0, -20, 20, -20, 20, 0],
  //  transition: { delay: 2 }
  //},
  hover: {
    scale: 1.1,   //[1, 1.1, 1, 1.1, 1, 1.1, 1],//key frames to different properties
    textShadow: '0px 0px 8px rgb(255,255,255)',
    boxShadow: '0px 0px 8px rgb(255,255,255)',
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    }
  }
}

const Home = () => {
  return (
    <motion.div className="home container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1.5 }}// default type is tween. Duration can only be used if the type is tween
    >
      <h2>Welcome to Pizza Joint</h2>
      <Link to="/base">
        <motion.button 
        variants={buttonVariant}
        whileHover='hover'
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  )
}

export default Home;