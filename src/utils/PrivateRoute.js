import { Outlet, useLocation } from "react-router-dom";
import Modal from "../components/pages/StudyPage/components/Modal";

import {
  MODAL_CONFIRM,
  MODAL_GOTO_HABIT,
  MODAL_GOTO_CONCENTRATION,
} from "../constants/global";
import { useNavigate } from "react-router-dom";

function PrivateRoute() {
  const location = useLocation();
  const path = location.pathname;
  const page = path.substring(path.lastIndexOf("/") + 1);
  const navigate = useNavigate();

  let modalType;

  console.log(page);

  switch (page) {
    case "todayHabit": {
      modalType = MODAL_GOTO_HABIT;
    }
    case "todaysFocus": {
      modalType = MODAL_GOTO_CONCENTRATION;
    }
    case "modify": {
      modalType = MODAL_CONFIRM;
    }
  }

  const closeModal = () => {
    navigate("/");
  };

  if (
    location.state === "focus" ||
    location.state === "habit" ||
    location.state === "modify"
  ) {
    return <Outlet />;
  } else {
    return (
      <>
        <Modal
          studyName=""
          isOpen={true}
          onClose={closeModal}
          modalType={modalType}
        />
      </>
    );
  }
}

export default PrivateRoute;
