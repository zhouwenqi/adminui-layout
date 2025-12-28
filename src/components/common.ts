import { LayoutTheme,Theme } from "./typings";

function isWideUnicodeChar(char: string): boolean {
  if (char.length === 0) return false;
  const codePoint = char.codePointAt(0)!;
  return (
    (codePoint >= 0x4E00 && codePoint <= 0x9FFF) ||
    (codePoint >= 0x3400 && codePoint <= 0x4DBF) ||
    (codePoint >= 0x3040 && codePoint <= 0x30FF) ||
    (codePoint >= 0xAC00 && codePoint <= 0xD7AF) ||
    (codePoint >= 0xFF00 && codePoint <= 0xFFEF) ||
    (codePoint >= 0x1F000 && codePoint <= 0x1FAFF) ||
    (codePoint >= 0x1F300 && codePoint <= 0x1F5FF) ||
    (codePoint >= 0x1F680 && codePoint <= 0x1F6FF) ||
    (codePoint >= 0x1F900 && codePoint <= 0x1F9FF) ||
    (codePoint >= 0x2600 && codePoint <= 0x26FF) ||
    (codePoint >= 0x2700 && codePoint <= 0x27BF)
  );
}

function getAvatarInitials(name: string): string {
  if (!name) return '';
  const chars = Array.from(name);

  if (chars.length === 0) return '';

  const firstChar = chars[0];

  if (isWideUnicodeChar(firstChar)) {
    return firstChar;
  } else {
    return chars.slice(0, 2).join('');
  }
}

const hexToRgba = (hex: string) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const a = hex.length === 9 ? (parseInt(hex.slice(7, 9), 16) / 255).toFixed(2) : 1;
  return ({r,g,b,a});
}

const hexToRgb=(color:string) => {
  const {r,g,b} = hexToRgba(color)
  return({r,g,b})
}

const hexToRgbaString=(color:string,alpha?:number)=>{
    const {r,g,b,a} = hexToRgba(color)
    const alp = alpha ?? a 
    return `rgba(${r}, ${g}, ${b}, ${alp})`;
}

const getLayoutTheme=(theme:Theme):LayoutTheme=>{
  if(theme == "system"){
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    if(systemTheme){
      return systemTheme
    }else{
      return "light"
    }
  }   
  return theme
}

export {getAvatarInitials,hexToRgb,hexToRgba,hexToRgbaString,getLayoutTheme}
