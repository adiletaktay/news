import ReactPaginate from 'react-paginate';

export const Pagination = ({ currentPage, onChangePage, pageCount}) => 
  <ReactPaginate
    className="pagination"
    breakLabel="..."
    nextLabel=">"
    previousLabel="<"
    onPageChange={(event) => onChangePage(event.selected + 1)}
    pageRangeDisplayed={6}
    pageCount={pageCount}
    forcePage={currentPage - 1}
  />
