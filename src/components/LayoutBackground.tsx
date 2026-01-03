import styles from "./Layout.module.css"
import { LAYOUT_BACKGROUND_KEY } from "./LayoutContext"

/**
 * Background for layout
 * @param props 
 * @returns 
 */
function LayoutBackground(props:React.HTMLAttributes<HTMLDivElement>){
    return (
        <div className={styles.rootBackground}>
            <>
            {props.children}      
            </>      
        </div>
    )
}

LayoutBackground.displayName = "LayoutBackground"
LayoutBackground.role = LAYOUT_BACKGROUND_KEY

export default LayoutBackground