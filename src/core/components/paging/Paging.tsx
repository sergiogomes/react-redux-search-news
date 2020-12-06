import React from "react";
import { Nav, Pagination } from "react-bootstrap";

type PageProps = {
  page: number;
  results: number;
  changePage: any;
};

const Paging = (props: PageProps) => {
  const { results, page } = props;
  const last = Math.floor(results / 20) + 1;

  return (
    <Nav className="justify-content-center">
      <Pagination>
        {page > 2 && (
          <Pagination.First onClick={() => props.changePage(1)} />
        )}
        {page - 2 >= 1 && (
          <Pagination.Item onClick={() => props.changePage(page - 2)}>{page - 2}</Pagination.Item>
        )}
        {page - 1 >= 1 && (
          <Pagination.Item onClick={() => props.changePage(page - 1)}>{page - 1}</Pagination.Item>
        )}
        <Pagination.Item active onClick={() => props.changePage(page)}>{page}</Pagination.Item>
        {page + 1 <= last && (
          <Pagination.Item onClick={() => props.changePage(page + 1)}>{page + 1}</Pagination.Item>
        )}
        {page + 2 <= last && (
          <Pagination.Item onClick={() => props.changePage(page + 2)}>{page + 2}</Pagination.Item>
        )}
        {page < last - 1 && (
          <Pagination.Last onClick={() => props.changePage(last)} />
        )}
      </Pagination>
    </Nav>
  );
};

export default Paging;
