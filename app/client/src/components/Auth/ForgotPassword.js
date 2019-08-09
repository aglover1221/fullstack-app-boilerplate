import React, { Component } from "react";

//components
import LoadingContainer from "../General/Loading";
import FormError from "../General/Forms/FormError";
import { FormInput, FormSubmit } from "../General/Forms/FormInputs";

//actions
import { forgotPassword } from "./api";

class ForgotPassword extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      loading: false,
      errors: null,
      messages: null
    };
    this.forgotPassword = this.forgotPassword.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  forgotPassword(e) {
    e.preventDefault();
    forgotPassword(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { email, password, errors, loading } = this.state;
    return (
      <div>
        <form>
          <h1>Recover Password</h1>
          <LoadingContainer loading={loading} />
          <FormError error={errors ? errors.err : null} />
          <FormInput
            onChange={this.onChange}
            value={email}
            name="email"
            type="text"
            placeholder="email"
            error={errors ? errors.email : null}
          />
          <FormSubmit
            text="send"
            disabled={loading}
            onClick={this.forgotPassword}
          />
        </form>
      </div>
    );
  }
}

export default ForgotPassword;
