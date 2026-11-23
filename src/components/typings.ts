/**
 * Theme
 * - `'light'`: Light mode
 * - `'dark'`: Dark mode
 * - `'system'`: Follow system theme
 * @default 'system'
 */
type Theme = 'light' | 'dark' | 'system'
/**
 * - `'headMenu'`: The main menu is at the top.
 * - `'leftMenu'`: The main menu is on the left and can adaptively expand or collapse.
 * @default 'leftMenu'
 */
type LayoutType = 'headMenu' | 'leftMenu'
/**
 * Layout theme
 * - `'light'`: Light mode
 * - `'dark'`: Dark mode
 * @default 'light'
 */
type LayoutTheme = 'light' | 'dark'
/**
 * Container appearance style
 * - `'inline'`: The container is transparent and has no margins.
 * - `'box'`: The container is transparent but has uniform outer margins.
 * - `'panel'`: Containers feature a default background for their contained controls, and they consistently include margins.
 * @default 'panel'
 */
type ContainerMode = 'inline' | 'box' | 'panel' 
/**
 * Container stretch  mode
 * - `'inline'`: The container height adapts automatically, and the footer stays positioned right below the content.
 * - `'auto'`: The container height adapts, and the footer content will expand to the bottom.
 * - `'fill'`: The container height fills the remaining space, pushing the footer content to the bottom.
 * @descrption Takes effect when the `ContainerMode = 'panel'`
 * @default 'inline'
 */
type ContainerStretch = 'inline' | 'auto' | 'fill'
/**
 * Skin type
 * - `'system'`: System themes released by the official developer
 * - `'custom'`: Custom Theme.
 * @default 'custom'
 */
type SkinType = 'system' | 'custom'
/**
 * Component position
 * - `'top'`: Top.
 * - `'center'`: Center.
 * - `'bottom'`: Bottom.
 * @descrption A property shared by multiple components, used to set the vertical position of a component.
 * @default 'top'
 */
type Position = "top" | "center" | "bottom"
/**
 * Avatar position
 * - `'rightTop'`: Top-right corner.
 * - `'leftBottom'`: Bottom-left corner.
 * - `'none'`: Do not display.
 * @descrption Placement of the user profile component.
 * @default 'custom'
 */
type AvatarPosition = "rightTop" | "leftBottom" | "none"
/**
 * Display method for breadcrumb menu icons
 * - `'none'`: Do not display.
 * - `'first'`: Only the top-level menu items display icons.
 * - `'all'`: All menu items display icons.
 * @default 'custom'
 */
type BreadcrumbIconVisible = "none" | "first" | "all"
/**
 * Background display style for the selected item in a navigation menu
 * - `'default'`: Default effect.
 * - `'primary'`: Selected menu items have a background color matching the theme color.
 * - `'invert'`: The background of a selected menu item uses the inverted theme color.
 * @default 'custom'
 */
type MenuItemSelectColor = "default" | "primary" | "invert"

type ConfigStateDispatcher = {
    layoutConfig:LayoutConfig,    
    locale:string,
    originalConfig?:LayoutConfig,
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
    toolbar?:React.ReactNode
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
    noneHeader?:boolean,
    menuIconSize?:number,
    menuFontSize?:number,
    colorLink?:string,
    menuItemSelectColor?:MenuItemSelectColor,
    containerMargin?:number,
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
    hideAsideMenuDataEmpty?:boolean,
    asideBlur?:boolean,
    headerBlur?:boolean,
    containerBlur?:boolean,
    collapsedPosition?:Position,
    avatarPosition?:AvatarPosition,
    visibleBreadcrumbIcon?:BreadcrumbIconVisible,
    userInfo?:UserInfo,
    brandInfo?:BrandInfo
}

type ThemeConfig = Omit<LayoutConfig,"locale"|"disabledLocale"|"skinName"|"userInfo"|"brandInfo">

// skin
interface ThemeSkin {
    name:string,
    icon?:string,
    label?:string,
    skinType:SkinType,
    layoutConfig?:ThemeConfig,
    backgroundColor?:string,
    backgroundContent?:React.ReactNode,        
    antdToken?:any,
    logo?:string | React.ReactNode,    
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
    layout?:boolean,    
    extra?:React.ReactNode,
    originalPath?:string,
    params?:Record<string,string>,
    children?:MenuData[]   
}
interface RootStyles {
    root?:React.CSSProperties,
    main?:React.CSSProperties
}

interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {}

// base layout properties
interface BaseLayoutProps extends LayoutProps{
    ref?:React.Ref<HTMLDivElement>,
    styles?:RootStyles
}

/**
 * Layout component properties
 * @remarks It is recommended for use as a top-level layout shell for applications or business routes; avoid deep nesting.
 * @example
 * ```
 * <AntdLayout layoutConfig={layoutConfig} menuData={menuData} />      
 * ```
 */
interface RootLayoutProps<T> extends LayoutProps{
    layoutConfig?:LayoutConfig,
    menuData?:MenuData,
    theme?:Theme,
    locale?:string,
    localeMessages?:Record<string,T>,
    disabledStorageConfig?:boolean,
    themeSkins?:ThemeSkin[]
}

/**
 * Container component properties
 * @remarks A container component designed to work with layout components to maintain a consistent style, used for displaying primary content.
 * @example
 * ```
 * import { Container } from '@adminui-dev/antd-layout';
 * export default function(){ 
 * return (
 *     <Container mode="panel">
 *        <div>
 *           <h1>Welcome</h1>
 *        </div>
 *     </Container>
 *   )
 * }
 * ```
 */
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
    styles?:RootStyles
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
    BreadcrumbIconVisible,
    MenuItemSelectColor,
    ThemeConfig,
    OutletContainer
}