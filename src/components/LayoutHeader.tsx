import { LAYOUT_HEADER_KEY } from "./LayoutContext"

function LayoutHeader(props:React.HTMLAttributes<HTMLDivElement>){
    return(
        <>
        {props.children}
        </>
    )
}
LayoutHeader.displayName="LayoutHeader"
LayoutHeader.role = LAYOUT_HEADER_KEY
export default LayoutHeader