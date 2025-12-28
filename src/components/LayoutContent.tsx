import styles from './Layout.module.css'
import { LAYOUT_CONTENT_KEY } from './LayoutContext'

function LayoutContent(props:React.HTMLAttributes<HTMLDivElement>){    
    return(
        <div className={styles.mainLayout} {...props}>
            {props.children}
        </div>
    )
}
LayoutContent.displayName = "LayoutContent"
LayoutContent.role = LAYOUT_CONTENT_KEY
export default LayoutContent