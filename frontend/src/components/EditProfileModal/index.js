import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import EditProfileModal from "./EditProfileModal";

function EditUserFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="edit-user-button">
        <button onClick={() => setShowModal(true)}>Update User</button>
      </div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditProfileModal />
        </Modal>
      )}
    </>
  );
}

export default EditUserFormModal;
