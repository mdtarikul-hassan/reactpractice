import React, { useState } from 'react'

export default function useToggleforcustomhook(initialvalue = false) {
    const [value, setValue] = useState(initialvalue)

    const toggle = () => setValue(prev => !prev)

    return [value, toggle]
}
