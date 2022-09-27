import { createContext, useState } from "react";

const modalContext = createContext();

const ModalProvider = ({children}) => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const data = {
        open,
        setOpen,
        handleClose,
        handleOpen,
    }
    return <modalContext.Provider value={data}>{children}</modalContext.Provider>
}

export { ModalProvider }
export default modalContext