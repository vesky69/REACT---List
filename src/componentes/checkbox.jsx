import React, { useState } from 'react'

const Checkbox = () => {
    const [checked, setChecked] = useState(false)

    return (
        <input 
            type="checkbox"
            onChange={e => setChecked(e.target.checked)}
        />
    )
}

export default Checkbox