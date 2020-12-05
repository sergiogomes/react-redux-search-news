import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, Spinner } from 'react-bootstrap';

import { selectLoadingState } from './loadingSlice';
import styles from './Loading.module.css';

const Loading = () => {
  const [display, setDisplay] = useState('d-none');
  const loadingState = useSelector(selectLoadingState);

  useEffect(() => {
    if (loadingState > 0) {
      setDisplay('d-flex');
    } else {
      setDisplay('d-none');
    }
  }, [loadingState]);

  return (
    <div className={`${styles.overlay} ${display}`}>
      <Button variant="primary">
        <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        <span className={styles.ml10}>Wait just a moment...</span>
      </Button>
    </div>
  );
};

export default Loading;
