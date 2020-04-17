import React, { useState } from 'react';
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import { toast } from 'react-toastify';
import { useMutation } from '@apollo/react-hooks';
import { useForm } from 'react-hook-form';

import { USER_SIGNUP_MUTATION } from '../../../Resolvers/AuthResolvers';

const SignupStyles = styled.div``;
type SignupProps = {
  Action: Boolean;
  setAction: React.Dispatch<React.SetStateAction<boolean>>;
};

type FormData = {
  username: string;
  email: string;
  firstName?: string;
  lastName?: string;
  avatar?: string;
  bio?: string;
};

const Signup: React.FC<SignupProps> = ({ Action, setAction }) => {
  const [inValidEmail, setinValidEmail] = useState(false);
  const [createUser, { loading, error, called }] = useMutation(
    USER_SIGNUP_MUTATION,
  );
  const { register, setValue, handleSubmit, errors } = useForm<FormData>();

  if (error) toast.error(error.message);

  const onSubmit = (data: Record<string, any>) => {
    createUser({ variables: { ...data } });
  };

  if (!loading && !error && called) {
    setAction(false);
    toast.success('Success, New User Is Created ');
    //TODO Push User Back To Login
  }

  return (
    <SignupStyles>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="formBasicEmail">
          {error && <Alert variant="danger">{error.message}</Alert>}
          <Form.Label></Form.Label>
          <Form.Control
            required
            isInvalid={error ? true : false}
            type="email"
            name="email"
            placeholder="email Address"
            ref={register}
          />
          <Form.Control.Feedback type="invalid">
            please check your email address
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label></Form.Label>
          <Form.Control
            type="text"
            placeholder="FirstName"
            name="firstName"
            ref={register}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label></Form.Label>
          <Form.Control
            type="text"
            placeholder="LastName"
            name="lastName"
            ref={register}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label></Form.Label>
          <Form.Control
            required
            isInvalid={error ? true : false}
            type="text"
            placeholder="Username"
            name="username"
            ref={register}
          />
          <Form.Control.Feedback type="invalid">
            please check username
          </Form.Control.Feedback>
        </Form.Group>

        <Button
          disabled={loading}
          block
          size="sm"
          variant="primary"
          type="submit"
        >
          {loading ? 'Please Wait...' : 'Sign up'}
          {loading && (
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
          )}
        </Button>
        <Form.Text className="text-muted text-center m-3">
          By signing up, you agree to our Terms , Data Policy and Cookies Policy
        </Form.Text>
      </Form>
    </SignupStyles>
  );
};

export default Signup;
