import React from "react";
import { Alert, Button } from "react-bootstrap";

type ErrorProps = {
  variant: string;
  show: boolean;
  message: string;
  title: string;
  action: any;
  actionTitle: string;
};

const Error = (props: ErrorProps) => {
  const { show, variant, message, title, actionTitle, action } = props;

  return (
    <Alert show={show} variant={variant}>
      {title && <Alert.Heading>{title}</Alert.Heading>}
      <p>{message}</p>
      {actionTitle && <>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={action}>
            {actionTitle}
          </Button>
        </div>
      </>}
    </Alert>
  );
};

export default Error;
