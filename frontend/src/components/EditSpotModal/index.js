import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import EditSpotModal from "./EditSpotModal";

function EditUserFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="edit-user-button">
        <button onClick={() => setShowModal(true)}>Update</button>
      </div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditSpotModal />
        </Modal>
      )}
    </>
  );
}

export default EditUserFormModal;
