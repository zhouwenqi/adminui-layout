import { createContext,useContext } from "react";
import type { LayoutConfig, ConfigActionDispatcher,ConfigStateDispatcher } from "./typings";

// define config
export function defineConfig(config:LayoutConfig):LayoutConfig {
    return config
}

export const LAYOUT_ASIDE_KEY = Symbol("LayoutAside")
export const LAYOUT_CONTENT_KEY = Symbol("LayoutContent")
export const LAYOUT_HEADER_KEY = Symbol("LayoutHeader")
export const LAYOUT_BACKGROUND_KEY = Symbol("LayoutBackground")

export const defaultConfig:LayoutConfig = {
    headerHeight:50,
    asideWidth:260,
    layoutType:"leftMenu",
    collapsedPosition:"bottom",
    avatarPosition:"rightTop",
    theme:"system",
    visibleBreadcrumbIcon:"none",
    primaryColor:"#417ffb",
}

const LayoutActionContext = createContext<ConfigActionDispatcher>({   
    setLayoutConfig:()=>{},
    setLocale:()=>{}
})

const LayoutStateContext = createContext<ConfigStateDispatcher>({
    locale:"en-US",
    languages:[],
    layoutConfig:{},
    themeSkinMap:{"system":[],"custom":[]}
})

export const createConfigActionContext = () => LayoutActionContext
export const createConfigStateContext = () => LayoutStateContext
export const useConfigState=()=> useContext(LayoutStateContext)
export const useConfigAction=()=> useContext(LayoutActionContext)
export const useTheme=()=>{
    const context = useConfigState()
    return context.layoutConfig.theme
 }