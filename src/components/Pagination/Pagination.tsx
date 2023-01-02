import s from './Pagination.module.scss';
import ReactPaginate from 'react-paginate';
type Props = {
  onChangePage: (ads: number) => void;
};

export const Pagination = ({ onChangePage }: Props) => {
  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel=" >"
        pageRangeDisplayed={1}
        pageCount={2}
        previousLabel="<"
        className={s.pagination}
        onPageChange={(e) => onChangePage(e.selected + 1)}
      />
    </>
  );
};
