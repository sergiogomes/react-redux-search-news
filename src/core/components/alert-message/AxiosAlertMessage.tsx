import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import AlertMessage from './AlertMessage';
import {
  selectAlertMessageActionTitle,
  selectAlertMessageMessage,
  selectAlertMessageShow,
  selectAlertMessageTitle,
  selectAlertMessageVariant,
  selectGenericAlertMessage
} from "./alertMessageSlice";
import {
  changeVariant,
  changeShow,
  changeMessage,
  changeTitle,
  changeActionTitle
} from "./alertMessageSlice";

const AxiosAlertMessage = () => {
  const dispatch = useDispatch();
  const variant = useSelector(selectAlertMessageVariant);
  const show = useSelector(selectAlertMessageShow);
  const message = useSelector(selectAlertMessageMessage);
  const title = useSelector(selectAlertMessageTitle);
  const actionTitle = useSelector(selectAlertMessageActionTitle);
  const genericAlertMessage = useSelector(selectGenericAlertMessage);

  useEffect(() => {
    if (genericAlertMessage) {
      dispatch(changeVariant('danger'));
      dispatch(changeShow(genericAlertMessage.isAxiosAlertMessage));
      dispatch(changeMessage(genericAlertMessage.message));
      dispatch(changeTitle('Unexpected AlertMessage!'));
      dispatch(changeActionTitle('Close'));
    }
  }, [genericAlertMessage, dispatch]);

  const handleAction = () => {
    dispatch(changeShow(false));
  }

  return <AlertMessage
    variant={variant}
    show={show}
    message={message}
    title={title}
    action={handleAction}
    actionTitle={actionTitle}
  />

};

export default AxiosAlertMessage;
