import React from "react";
import { Alert, Button } from "react-bootstrap";

type AlertMessageProps = {
  variant: string; // 'primary'|'secondary'|'success'|'danger'|'warning'|'info'|'light'|'dark'
  show: boolean;
  message: string;
  title: string;
  action: any;
  actionTitle: string;
};

const AlertMessage = (props: AlertMessageProps) => {
  const { show, variant, message, title, actionTitle, action } = props;

  return (
    <Alert show={show} variant={variant}>
      {title && <Alert.Heading>{title}</Alert.Heading>}
      <p>{message}</p>
      {actionTitle && <>
        <hr />
        <div className="d-flex justify-content-end">
          <Button variant={`outline-${variant}`} onClick={action}>
            {actionTitle}
          </Button>
        </div>
      </>}
    </Alert>
  );
};

export default AlertMessage;
