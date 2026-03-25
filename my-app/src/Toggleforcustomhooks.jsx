import React from 'react'
import UseToggleforcustomhook from './hooks/UseToggleforcustomhook'


function Toggleforcustomhooks() {
    const [isOpen, VisibleOpen] = UseToggleforcustomhook()
  return (
    <div>
        <div>
            <button onClick={VisibleOpen}>Toggle</button>
            {isOpen && <p>Hey, Welcome</p>}
        </div>
    </div>
  )
}

export default Toggleforcustomhooks