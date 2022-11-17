import "./Modal.css";

type ModalProps = {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  preparation: [];
};

type Method = {
  step: number;
  text: string;
};

export const Modal = (props: ModalProps) => {
  const toggleModal = () => {
    props.setModal(!props.modal);
  };

  if (props.modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <div>
      {props.modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            {props.preparation.map((method: Method) => (
              <div key={method.step} className="modal-line">
                <div className="modal-circle">
                  <div className="modal-circle-text">{method.step}</div>
                </div>
                <p className="modal-line-text">{method.text}</p>
              </div>
            ))}
            <button className="close-modal" onClick={toggleModal}></button>
          </div>
        </div>
      )}
    </div>
  );
};
