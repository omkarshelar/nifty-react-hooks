var $8zHUo$react = require("react");

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "useBoolean", () => $9e4afafff24e22c9$export$2e2bcd8739ae039);

const $9e4afafff24e22c9$var$useBoolean = (initialState = false)=>{
    const [state, setState] = (0, $8zHUo$react.useState)(initialState);
    const setTrue = (0, $8zHUo$react.useCallback)(()=>{
        setState(true);
    }, [
        setState
    ]);
    const setFalse = (0, $8zHUo$react.useCallback)(()=>{
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
var $9e4afafff24e22c9$export$2e2bcd8739ae039 = $9e4afafff24e22c9$var$useBoolean;




//# sourceMappingURL=main.js.map
