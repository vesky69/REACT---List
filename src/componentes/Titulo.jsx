import React, { useState } from 'react'

const Titulo = ({ alterarTitulo }) => {
    
    return (
        <input 
            type='text' 
            onChange={e => alterarTitulo(e.target.value)}
        />
    )
}

export default Titulo