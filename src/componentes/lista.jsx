import React, { useState } from 'react'
import Titulo from './Titulo.jsx'
import Adicionar from './adicionar.jsx'
import ItemLista from './itemlista.jsx'
import { v4 } from 'uuid'

const Lista = () => {
    const [titulo, setTitulo] = useState('')

    const [lista, setLista] = useState([
        { id: v4(), marcada: false, descricao: '' }
    ])


    const addItem = () => setLista(
        [...lista, { id: v4(), marcada: false, descricao: '' }]
    )

    const alterarTitulo = valor => setTitulo(valor)
 
    const alterarDescricao = (valor, index) => {
        const arrAux = [...lista]
        arrAux[index] = { ...lista[index], descricao: valor }
        setLista(arrAux)
    }
    const setChecked = (checked, index) => {
        const arrAux = [...lista]
        arrAux[index] = { ...lista[index], marcada: checked }
        setLista(arrAux)
    }
    const onDelete = (index) => {
        let arrAux = [...lista]
        arrAux.splice(index, 1)
        setLista(arrAux)
    }

    return (
        <div>
            <Titulo 
                alterarTitulo = {alterarTitulo}
            />
            
            { lista.map((item, index) => (
                <ItemLista
                    alterarDescricao = {alterarDescricao}
                    setChecked = {setChecked}
                    onDelete = {onDelete}
                    index = {index}
                    key = {lista[index].id}
                />
            )) }

            <Adicionar addItem = {addItem} />          
        </div>
    )
}

export default Lista