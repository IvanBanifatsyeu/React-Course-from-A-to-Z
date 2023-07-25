import { useEffect } from "react";
import WebFont from 'webfontloader';

export const useFontsLoad = (...arg) => {
    useEffect(() => {
        WebFont.load({
          google: {
            families: arg
          }
        });
       }, []);

}
