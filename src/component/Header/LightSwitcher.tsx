import { ThemeSwitcher } from '@/components/ui/shadcn-io/theme-switcher';
import useColorMode from '@/hook/useColorMode'
import { SunIcon } from 'lucide-react';
import { setConfig } from 'next/config';

import React from 'react'

type Props = {}

const LightSwitcher = (props: Props) => {
    const [colorMode, setColorMode] = useColorMode();
     
  return (
   <div className="flex flex-col items-center gap-3">
        <ThemeSwitcher 
          value={colorMode === "light" ? "light" : "dark"} 
          onChange={() => {
    if ( typeof setColorMode === "function" ) {
        setColorMode(colorMode === "light" ? "dark" : "light")
    }
}}
          className="scale-125"
        />
        <div className="text-center">
          <span className="text-xs font-medium">Large</span>
          <p className="text-xs text-muted-foreground">125% scale</p>
        </div>
      </div>
  
  )
}

export default LightSwitcher