import { useState } from "react";
import LoginForm from "./LoginForm";
import PhotoUpload from "./PhotoUpload";

function Login() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {!showModal && <LoginForm setShowModal={setShowModal} />}
      {showModal && <PhotoUpload setShowModal={setShowModal} />}
    </>
  );
}

export default Login;

// import LoginForm from "./LoginForm";

// function Login() {
//   return (
//     <>
//       <LoginForm />
//     </>
//   );
// }

// export default Login;
