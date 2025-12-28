import React,{ useEffect, useState } from "react"

/**
 * full screen buttons
 * @param props max and min button icon
 * @returns 
 */
export default function(props:{buttons:React.ReactElement[]}){    
    const fullScreenStatus = !!document.fullscreenElement    
    const [fullScreen,setFullScreen] = useState(fullScreenStatus)
    // fullscreen change mode
    const handleChangeFullscreen=()=>{
      setFullScreen(!!document.fullscreenElement)
    }
    // F11 keypress event
    const handlerF11Key=(e:KeyboardEvent)=>{
      if(e.code==="F11"){
        e.preventDefault()
        onFullScreenHandler()
      }
    }
    useEffect(()=>{          
      document.addEventListener('fullscreenchange',handleChangeFullscreen)
      document.addEventListener('keydown',handlerF11Key,true)
      return ()=>{
        document.removeEventListener('fullscreenchange',handleChangeFullscreen)
        document.removeEventListener('keydown',handlerF11Key)
      }
    },[])
  
    // fullscreen click event
    const onFullScreenHandler=()=>{
      if(fullScreen){
        document.exitFullscreen()
      }else{
        document.documentElement.requestFullscreen()
      }
    }    
    if(!props.buttons || props.buttons.length <2){
        return <></>
    }
    const [minimize,maximize] = props.buttons;
    const icon = fullScreen ? minimize : maximize;
    return(
        React.cloneElement(icon as React.ReactElement<any>,{
            onClick:(e:React.MouseEvent)=>{
                console.log(e)
                onFullScreenHandler()
            }
        })
    )
}