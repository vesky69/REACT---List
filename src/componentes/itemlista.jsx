import React, { useState } from 'react'

const ItemLista = (props) => {
    
    return (
        <div>
            <input 
                type="checkbox"
                onChange={e => props.setChecked(e.target.checked, props.index)}
            />
            <input 
                type='text' 
                placeholder="Adicione uma descrição"
                onChange={e => props.alterarDescricao(e.target.value, props.index)}
            />
            <button onClick={() => props.onDelete(props.index)}>X</button>
        </div>
    )
}

export default ItemLista