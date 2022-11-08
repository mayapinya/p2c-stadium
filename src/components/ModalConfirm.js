function ModalConfirm({ id, title, content, onSubmit, okText, cancelText }) {
  return (
    <div
      className="modal fade"
      id={id}
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header modal-title-box">
            <p
              className="modal-title text-center w-100 fs-5 fw-bold"
              id="exampleModalLabel"
            >
              {title}
            </p>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <p className="text-center w-100 fs-5">{content}</p>
          </div>
          <div className="modal-footer d-flex justify-content-center">
            <button
              type="button"
              className="btn btn-danger btn-border-radius color-main py-2 px-5"
              data-bs-dismiss="modal"
              onClick={onSubmit}
            >
              {okText}
            </button>
            <button
              type="button"
              className=" btn btn-secondary btn-border-radius color-gray py-2 px-5"
              data-bs-dismiss="modal"
            >
              {cancelText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalConfirm;
