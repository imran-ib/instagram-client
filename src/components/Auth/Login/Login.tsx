import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import { useMutation } from '@apollo/react-hooks';
import Alert from 'react-bootstrap/Alert';
import { toast } from 'react-toastify';
import {
  REQUEST_LOGIN_SCRETE,
  CONFIRM_LOGIN_SCRETE,
} from '../../../Resolvers/AuthResolvers';
import { useRouter } from 'next/router';

const LoginStyles = styled.div``;

type LoginProps = {
  Action: Boolean;
  setAction: React.Dispatch<React.SetStateAction<boolean>>;
};

const Login: React.FC<LoginProps> = ({ Action, setAction }) => {
  const router = useRouter();
  const [
    RequestLoginSecret,
    { loading: Rloading, error: Rerror, called: Rcalled },
  ] = useMutation(REQUEST_LOGIN_SCRETE);
  const [
    ConfirmSecret,
    { loading: Cloading, error: Cerror, called: Ccalled },
  ] = useMutation(CONFIRM_LOGIN_SCRETE);
  const [activeEmail, setactiveEmail] = useState(true);
  const [activeKey, setactiveKey] = useState(false);
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (data) => {
    if (!Rcalled) {
      RequestLoginSecret({
        variables: {
          email: data.email,
        },
      })
        .then(() => {
          setactiveKey(true);
          toast.success('OTP is Sent To Your email Address');
        })
        .catch((err) => toast.error(err.message));
    }

    if (!Ccalled && !Rerror && Rcalled) {
      ConfirmSecret({
        variables: {
          email: data.email,
          key: data.key,
        },
      })
        .then((res) => {
          const Token = res.data.ConfirmSecret;
          typeof window !== 'undefined'
            ? localStorage.setItem('Token', Token)
            : '';
          setactiveKey(true);
          toast.success('Sucess!  You are Loged In');
          router.push('/');
        })
        .catch((err) => toast.error(err.message));
    }
  };
  return (
    <LoginStyles>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {Rerror && <Alert variant="danger">{Rerror.message}</Alert>}
        {Cerror && <Alert variant="danger">{Cerror.message}</Alert>}
        {activeEmail && (
          <Form.Group controlId="formBasicEmail">
            <Form.Label></Form.Label>
            <Form.Control
              required
              type="email"
              name="email"
              placeholder="username or email Address"
              ref={register}
            />
            <Form.Text className="text-muted text-center m-3">
              We will send you an email with One time password..
            </Form.Text>
          </Form.Group>
        )}
        {activeKey && (
          <Form.Group controlId="formBasicPassword">
            <Form.Label></Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="One Time Password"
              name="key"
              ref={register}
            />
            <Form.Text className="text-muted text-center m-3">
              Please Check your email address
            </Form.Text>
          </Form.Group>
        )}

        <Button
          disabled={Rloading || Cloading}
          block
          size="sm"
          variant="primary"
          type="submit"
        >
          {Rloading || Cloading ? 'Please Wait...' : 'Submit'}
          {Rloading ||
            (Cloading && (
              <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
              />
            ))}
        </Button>
      </Form>
    </LoginStyles>
  );
};

export default Login;
