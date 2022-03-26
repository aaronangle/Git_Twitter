import React from "react";
import { Modal } from "components/Modal";
import { Input } from "components/Input";
export const Register = () => {
  return (
    <div>
      <Modal>
        <h3>Register for a Tweeter account</h3>
        <label htmlFor="">email</label>
        <Input type={"email"} />
        <br />
        <label htmlFor="">password</label>
        <Input type={"password"} />
      </Modal>
    </div>
  );
};
