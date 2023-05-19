import React from "react";
import styles from "./login.module.css";
import { useForm } from "react-hook-form";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormContainer from "../../comps/FormContainer";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className={styles.form_container}>
      <FormContainer>
        <h2>Log In</h2>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group
            className="mb-3"
            controlId="formBasicEmail"
            class={styles.formgroup}
          >
            <Form.Label>Email address</Form.Label>
            <input
              type="email"
              {...register("mail", { required: "Email Address is required" })}
              aria-invalid={errors.mail ? "true" : "false"}
            />
              {errors.mail && <p role="alert" className={styles.form_error}>{errors.mail?.message}</p>}
           
            <Form.Text className="text-muted">
              *We'll never share your email with anyone else*
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className={styles.password_form}>
              <div>Password</div>
              <span>
                <Link to="/">Forgot Password?</Link>
              </span>
            </Form.Label>
            <input type="password" {...register("password", {required: "Password is required"})}/>
            {errors.password && <p role="alert" className={styles.form_error}>{errors.password?.message}</p>}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Save password" />
          </Form.Group>
          <Button variant="primary" type="submit" className={styles.login_btn}>
            Log In
          </Button>
        </Form>
        <p className={styles.create_account}>
          Don’t have an account? <Link>Create an account</Link>
        </p>
      </FormContainer>
    </div>
  );
};

export default Login;
