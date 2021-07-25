import { useUserAgent } from "next-useragent";
import { useEffect, useState } from "react";

const initialState = {
  source: 'Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12A365 Safari/600.1.4',
  deviceType: 'mobile',
  deviceVendor: 'Apple',
  os: 'iOS',
  osVersion: 8,
  browser: 'Mobile Safari',
  browserVersion: 8,
  isIphone: true,
  isIpad: false,
  isMobile: true,
  isTablet: false,
  isDesktop: false,
  isChrome: false,
  isFirefox: false,
  isSafari: true,
  isIE: false,
  isMac: false,
  isChromeOS: false,
  isWindows: false,
  isIos: false,
  isAndroid: false,
  isBot: false
}
/**
 * 
 * @returns хук определяет какое сейчас устройство мобильное или десктопное 
 */
export const useMobileDetect = () => {

  const [mobileDetect, setMobileDetect] = useState(initialState)
  useEffect(() => { 
    setMobileDetect(useUserAgent(window.navigator.userAgent))
    }, []
  )
  return  mobileDetect.isMobile
};
