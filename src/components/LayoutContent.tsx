import styles from './Layout.module.css'
import { LAYOUT_CONTENT_KEY } from './LayoutContext'

function LayoutContent(props:React.HTMLAttributes<HTMLDivElement>){    
    return(
        <>
        {props.children}
        </>
    )
}
LayoutContent.displayName = "LayoutContent"
LayoutContent.role = LAYOUT_CONTENT_KEY
export default LayoutContent