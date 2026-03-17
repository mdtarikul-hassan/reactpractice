import { useEffect, useEffectEvent, useState } from "react"

function AutoSaveForm(){
    const [formData, setFormData] = useState({name:"", email :""})

    const saveData = useEffectEvent(() => {
        console.log("formdata : ", formData)
    })
    useEffect(() => {
        const interval = setInterval(() => {
            saveData()
        },3)

        return clearInterval(interval)
    })

    return(
        
            <form>
                <input 
                    type="text" 
                    placeholder="enter name ..."
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                />
                <br /><br />
                <input 
                    type="email" 
                    placeholder="enter email ..."
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                />
            </form>
       
    )
}

export default AutoSaveForm