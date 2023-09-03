import React from 'react'

const TextDots = (text) => {

    if(text.length > 50) {
        return text.substring(0, 50) + '....';
    }
    else{
        return text
    }
  
}

export default TextDots
