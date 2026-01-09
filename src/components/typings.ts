type Theme = 'light' | 'dark' | 'system'
type LayoutType = 'headMenu' | 'leftMenu'
type LayoutTheme = 'light' | 'dark'
type ContainerMode = 'inline' | 'box' | 'panel' 
type ContainerStretch = 'inline' | 'auto' | 'fill'
type SkinType = 'tidy' | 'rich'
type Position = "top" | "center" | "bottom"
type AvatarPosition = "rightTop" | "leftBottom" | "none"

type ConfigStateDispatcher = {
    layoutConfig:LayoutConfig,    
    locale:string,
    themeSkin?:ThemeSkin,
    themeSkinMap:Record<SkinType,ThemeSkin[]>,
    languages:Language[],
    menuDataMap?:Record<string,MenuData[]>
}
type ConfigActionDispatcher = {
    setLocale:(locale:string)=>void,
    setLayoutConfig:(config:LayoutConfig)=>void,
}
type OutletContainer = {
    title:string
    breadcrumbData:any[]
    footer?:React.ReactNode
}

// layout config
interface LayoutConfig  {
    layoutType?:LayoutType,    
    headerHeight?:number,
    asideWidth?:number, 
    theme?:Theme,    
    locale?:string,
    disabledLocale?:boolean,
    skinName?:string,
    primaryColor?:string,
    highlight?:boolean,
    flated?:boolean,
    menuIconSize?:number,
    compact?:boolean,
    largeBrand?:boolean,
    splitMenu?:boolean,
    asideMenuInline?:boolean,
    asideMenuGroup?:boolean, 
    hideBorder?:boolean,
    hideTitle?:boolean,
    hideFooter?:boolean,
    hideBreadcrumb?:boolean,
    asideTransparent?:boolean,
    headerTransparent?:boolean
    containerTransparent?:boolean,
    asideBlur?:boolean,
    headerBlur?:boolean,
    containerBlur?:boolean,
    collapsedPosition?:Position,
    avatarPosition?:AvatarPosition,
    userInfo?:UserInfo,
    brandInfo?:BrandInfo
}

// skin
interface ThemeSkin {
    name:string,
    icon?:string,
    label?:string,
    theme:LayoutTheme[],
    skinType:SkinType,
    backgroundContent?:React.ReactNode,    
    asideWidth?:number,
    primaryColor?:string,
    asideBlur?:boolean,
    headerBlur?:boolean,
    containerBlur?:boolean,
    layoutBorderColor?:string,
    headerStyle?:React.CSSProperties,    
    asideStyle?:React.CSSProperties,    
}

// language
interface Language {
    name:string,
    locale:string,
    flag?:React.ReactNode
}

// locale
interface LocaleMessageData {
    locale:string,
    name:string, 
    flag?:string,
    messages:Record<string,string>
}

// user info
interface UserInfo {
    id?:number,
    uid:string,
    title:string,
    avatar?:string | React.ReactNode,
}

// brand info
interface BrandInfo {
    id?:number,
    name:string,
    title:string,
    url?:string,
    logo?:string | React.ReactNode
}

interface MenuData {
    id?:string,
    name:string,
    label?:string,
    icon?:React.ReactNode,
    path?:string,
    extra?:React.ReactNode,
    originalPath?:string,
    params?:Record<string,string>,
    children?:MenuData[]   
}

interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {}

// base layout properties
interface BaseLayoutProps extends LayoutProps{
    ref?:React.Ref<HTMLDivElement>
}

// root layout properties
interface RootLayoutProps<T> extends LayoutProps{
    layoutConfig?:LayoutConfig,
    menuData?:MenuData,
    theme?:Theme,
    locale?:string,
    localeMessages?:Record<string,T>,
    disabledStorageConfig?:boolean,
    themeSkins?:ThemeSkin[]
}

// container properties
interface ContainerProps extends LayoutProps {
    mode?:ContainerMode,
    stretch?:ContainerStretch,
    hideBorder?:boolean,
    hideTitle?:boolean,
    hideBreadcrumb?:boolean,
    hideFooter?:boolean,
    title?:string,
    transparent?:boolean,
    children?:React.ReactNode,
}

export type {
    LayoutProps,
    BaseLayoutProps,
    RootLayoutProps,
    ContainerProps,
    ContainerMode,
    ContainerStretch,
    Theme,
    LayoutTheme,
    LayoutType,
    LayoutConfig,
    Language,
    LocaleMessageData,
    UserInfo,
    BrandInfo,
    ConfigStateDispatcher,
    ConfigActionDispatcher,
    SkinType,
    ThemeSkin,
    MenuData,
    Position,
    AvatarPosition,
    OutletContainer
}