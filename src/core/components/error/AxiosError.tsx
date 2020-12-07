import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Error from './Error';
import {
  selectErrorActionTitle,
  selectErrorMessage,
  selectErrorShow,
  selectErrorTitle,
  selectErrorVariant,
  selectGenericError
} from "./errorSlice";
import {
  changeVariant,
  changeShow,
  changeMessage,
  changeTitle,
  changeActionTitle
} from "./errorSlice";

const AxiosError = () => {
  const dispatch = useDispatch();
  const variant = useSelector(selectErrorVariant);
  const show = useSelector(selectErrorShow);
  const message = useSelector(selectErrorMessage);
  const title = useSelector(selectErrorTitle);
  const actionTitle = useSelector(selectErrorActionTitle);
  const genericError = useSelector(selectGenericError);

  useEffect(() => {
    if (genericError) {
      dispatch(changeVariant('danger'));
      dispatch(changeShow(genericError.isAxiosError));
      dispatch(changeMessage(genericError.message));
      dispatch(changeTitle('Unexpected Error!'));
      dispatch(changeActionTitle('Close'));
    }
  }, [genericError, dispatch]);

  const handleAction = () => {
    dispatch(changeShow(false));
  }

  return <Error
    variant={variant}
    show={show}
    message={message}
    title={title}
    action={handleAction}
    actionTitle={actionTitle}
  />

};

export default AxiosError;
