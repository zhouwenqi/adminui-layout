import {createContext,useContext,useEffect,useState} from "react"
import type { Theme } from "./typings"

interface ThemeProviderProps {
    children:React.ReactNode,
    theme?:Theme,
    defaultTheme?:Theme,    
    storageKey?:string    
}
type ThemeProviderState = {
    theme:Theme,
    setTheme:(theme:Theme)=>void
}
const initialState : ThemeProviderState = {
    theme:"system",
    setTheme:()=>{},    
}
const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

/**
 * Light dark mode context
 * @param props 
 * @returns 
 */
export default function (props:ThemeProviderProps){
    const {children,storageKey="adminui-shadcn-theme"} = props
    const defaultTheme = props.theme || localStorage.getItem(storageKey) as Theme || props.defaultTheme || "system"
    const [theme,setTheme]=useState<Theme>(defaultTheme)
    
    useEffect(()=>{
        const root = window.document.documentElement 
        root.classList.remove("light", "dark")         
        if (theme === "system") {            
            const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light" 
            root.classList.add(systemTheme)
            return
        }
        root.classList.add(theme)
    },[theme])

    const context:ThemeProviderState = {
        theme,
        setTheme:(theme:Theme)=>{
            localStorage.setItem(storageKey,theme)
            setTheme(theme)
        }
    }

    return(
        <ThemeProviderContext.Provider value={context}>
            {children}
        </ThemeProviderContext.Provider>
    )

}

export const useTheme=()=>{
    const themeContext = useContext(ThemeProviderContext);
    if(themeContext === undefined){
        throw new Error("useTheme must be used within a ThemeProvider")
    }
    return themeContext
}