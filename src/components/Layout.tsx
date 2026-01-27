import LayoutBackground from './LayoutBackground';
import React from 'react';
import type { BaseLayoutProps } from './typings';
import Content from './LayoutContent';
import Aside from './LayoutAside';
import Header from './LayoutHeader';
import styles from "./layout.module.css";
import { LAYOUT_ASIDE_KEY, LAYOUT_BACKGROUND_KEY, LAYOUT_CONTENT_KEY, LAYOUT_HEADER_KEY } from './LayoutContext';

/**
 * Base layout
 * @param props layout properites
 * @returns 
 */
function BaseLayout(props:BaseLayoutProps){    
    // Header element
    let headerElement: React.ReactNode = null
    // Content element
    let contentElement: React.ReactNode = null
    // Aside element
    let asideElement:React.ReactNode = null
    // Background element
    let backgroundElement:React.ReactNode = null
   
    React.Children.forEach(props.children, (child) => {
        const childType = (child as React.ReactElement<any>).type;
        const childRole = (childType as any).role; 
        if (childRole === LAYOUT_HEADER_KEY) {
            headerElement = child
        } else if (childRole === LAYOUT_CONTENT_KEY) {
            contentElement = child
        } else if (childRole === LAYOUT_ASIDE_KEY) {
            asideElement = child
        } else if (childRole === LAYOUT_BACKGROUND_KEY)  {
            backgroundElement = child
        }        
    })

    const rootStyle = props.style || props.styles?.root   

    return(      
        <>         
        <div ref={props.ref} className={styles.rootBox} style={rootStyle}>
             {backgroundElement}                
            <div className={styles.rootLayout}>
                {asideElement}
                <div className={styles.mainLayout} style={{...props.styles?.main}}>                
                    {headerElement}          
                    {contentElement}
                </div>
            </div>        
        </div>        
        </>
    )
}

BaseLayout.Aside = Aside
BaseLayout.Content = Content
BaseLayout.Header = Header
BaseLayout.Background = LayoutBackground
export { BaseLayout }