import React,{useState} from 'react'
import './backdrop.css'
const Backdrop=({func})=> {
    const [close,setClose]=useState(false);

    const handleClose =() =>{
        setClose(true);
        func(close);

    }
    return (
        <div className="backdrop" onClick={handleClose}>
            
        </div>
    )
}

export default Backdrop
