import {useState as $hgUW1$useState, useCallback as $hgUW1$useCallback} from "react";


const $b3d7f65b55cd588a$var$useBoolean = (initialState = false)=>{
    const [state, setState] = (0, $hgUW1$useState)(initialState);
    const setTrue = (0, $hgUW1$useCallback)(()=>{
        setState(true);
    }, [
        setState
    ]);
    const setFalse = (0, $hgUW1$useCallback)(()=>{
        setState(false);
    }, [
        setState
    ]);
    return {
        state: state,
        setTrue: setTrue,
        setFalse: setFalse
    };
};
var $b3d7f65b55cd588a$export$2e2bcd8739ae039 = $b3d7f65b55cd588a$var$useBoolean;



const $420540c7b1d4d125$var$useToggle = (initialState = false)=>{
    const [state, setState] = (0, $hgUW1$useState)(initialState);
    const toggle = (0, $hgUW1$useCallback)(()=>setState(!state), [
        state,
        setState
    ]);
    return {
        state: state,
        toggle: toggle
    };
};
var $420540c7b1d4d125$export$2e2bcd8739ae039 = $420540c7b1d4d125$var$useToggle;




export {$b3d7f65b55cd588a$export$2e2bcd8739ae039 as useBoolean, $420540c7b1d4d125$export$2e2bcd8739ae039 as useToggle};
//# sourceMappingURL=module.js.map
