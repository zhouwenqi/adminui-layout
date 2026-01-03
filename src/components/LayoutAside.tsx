import { LAYOUT_ASIDE_KEY } from "./LayoutContext"

/**
 * Aside for layout
 * @param props 
 * @returns 
 */
function LayoutAside(props:React.HTMLAttributes<HTMLDivElement>){
    return(
        <>
        {props.children}
        </>
    )
}
LayoutAside.displayName = "LayoutAside"
LayoutAside.role = LAYOUT_ASIDE_KEY
export default LayoutAside