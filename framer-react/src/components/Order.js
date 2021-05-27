import React from 'react';
import { motion } from 'framer-motion'

const containerVariant = {
  hidden: {
    opacity: 0,
    x: '100vw',
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { 
      type: 'spring', 
      //delay: 0.5 ,
      mass: 0.4,
      damping: 8,
      when: 'beforeChildren',
      staggerChildren: 0.4,
    }
  }
};

const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  }
}

const Order = ({ pizza }) => {
  return (
    <motion.div className="container order"
      variants={containerVariant}
      initial='hidden'
      animate='visible'
    >
      <h2>Thank you for your order <span role='img' aria-label='emoji'>😀</span></h2>
      <motion.p
        variants={childVariants}
      >
        You ordered a {pizza.base} pizza with:
      </motion.p>
      <motion.div
        variants={childVariants}
      >
        {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
      </motion.div>
    </motion.div>
  )
}

export default Order;