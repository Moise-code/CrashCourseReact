import React from 'react';
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div className="home container"
      animate={{ rotateZ: 10, opacity: 0.5 }}
    >
      <motion.h2 
        animate={{ fontSize: 50, color: '#fb6f43', x: 10 }}>
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button animate={{ scale: 1.5, rotate: 360 }}>
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  )
}

export default Home;