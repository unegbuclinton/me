import { MdOutlineCancel } from "react-icons/md";

const Modal = ({ isShown, header, hide, children }) => {
  if (!isShown) return null;
  return (
    <div
      onClick={hide}
      className="fixed top-0 left-0 right-0 bottom-0 min-h-[50%] bg-black/60 flex items-center justify-center z-10"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-gray-100 w-full mx-4 p-4 rounded-xl md:w-fit h-[40%]"
      >
        <div className="flex justify-between items center border-b border-gray-200 py-3">
          <p className="text-2xl font-bold text-gray-800">{header}</p>

          <div
            onClick={hide}
            className="bg-gray-300 hover:bg-gray-500 cursor-pointer hover:text-gray-300 font-sans text-gray-500 w-8 h-8 flex items-center justify-center rounded-full"
          >
            <MdOutlineCancel />
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
