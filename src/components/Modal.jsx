export const Modal = ({ isOpen, children }) => isOpen ? <div className="modal">{children}</div> : null;
