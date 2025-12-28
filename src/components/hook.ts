import { useState, useLayoutEffect, useRef } from 'react'
type ReturnType<T> = [React.RefObject<T | null>, { width: number; height: number }]

function useLayoutSize<T extends HTMLElement = HTMLDivElement>(): ReturnType<T> {
  const ref = useRef<T>(null)  
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  })

  useLayoutEffect(() => {
    const element = ref.current;
    console.log(ref)
    if (!element) return
    const { width, height } = element.getBoundingClientRect();
    setSize({ width, height })
    const resizeObserver = new ResizeObserver((entries) => {
      if (!entries.length) return
      const entry = entries[0]      
      const { inlineSize: w, blockSize: h } = entry.borderBoxSize[0]      
      setSize({ width: w, height: h });
    })
    resizeObserver.observe(element)
    return () => resizeObserver.disconnect()
  }, [])

  return [ref, size]
}

export {useLayoutSize}