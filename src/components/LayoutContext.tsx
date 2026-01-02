import { createContext,useContext } from "react";
import type { LayoutConfig,ThemeSkin, ConfigActionDispatcher,ConfigStateDispatcher } from "./typings";

// define config
export function defineConfig(config:LayoutConfig):LayoutConfig {
    return config
}

export const LAYOUT_ASIDE_KEY = Symbol("LayoutAside")
export const LAYOUT_CONTENT_KEY = Symbol("LayoutContent")
export const LAYOUT_HEADER_KEY = Symbol("LayoutHeader")

export const defaultSkinData:ThemeSkin = {
    icon:"",
    name:"default",
    themeType:"tidy",
    theme:['light','dark']    
}

export const defaultConfig:LayoutConfig = {
    headerHeight:50,
    asideWidth:260,
    layoutType:"leftMenu",
    collapsedPosition:"bottom",
    avatarPosition:"rightTop",
    theme:"system",
    primaryColor:"#417ffb",
    skinName:defaultSkinData.name
}

const LayoutActionContext = createContext<ConfigActionDispatcher>({
    setTheme:()=>{},
    setLayoutConfig:()=>{},
    setLocale:()=>{}
})

const LayoutStateContext = createContext<ConfigStateDispatcher>({
    locale:"en-US",
    languages:[],
    theme:"system",
    layoutConfig:{},
    themeSkin:defaultSkinData,
    themeSkinMap:{"tidy":[],"rich":[]}
})

export const createConfigActionContext = () => LayoutActionContext
export const createConfigStateContext = () => LayoutStateContext
export const useConfigState=()=> useContext(LayoutStateContext)
export const useConfigAction=()=> useContext(LayoutActionContext)
export const useTheme=()=>{
    const context = useConfigState()
    return context.theme
 }