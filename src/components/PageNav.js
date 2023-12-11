import React from "react";
import "./PageNav.css";
import ReactPaginate from "react-paginate";

const PageNav = ({ setPage, totalPage }) => {
  return (
    <ReactPaginate
      previousLabel="<"
      nextLabel=">"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      nextClassName="page-item"
      nextLinkClassName="page-link"
      breakLabel="..."
      breakClassName="page-item"
      breakLinkClassName="page-link"
      pageCount={totalPage}
      marginPagesDisplayed={1}
      pageRangeDisplayed={1}
      onPageChange={({ selected }) => setPage(selected + 1)}
      containerClassName="pagination"
      activeClassName="active"
    />
  );
};

export default PageNav;
