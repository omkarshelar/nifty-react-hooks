type NoOp = () => void;
export const useBoolean: (initialState?: boolean) => {
    state: boolean;
    setTrue: NoOp;
    setFalse: NoOp;
};
export const useToggle: (initialState?: boolean) => {
    state: boolean;
    toggle: NoOp;
};

//# sourceMappingURL=types.d.ts.map
