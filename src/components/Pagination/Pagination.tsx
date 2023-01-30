import s from './Pagination.module.scss';
import ReactPaginate from 'react-paginate';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../../redux/filterSlice';

export const Pagination = () => {
  const dispatch = useDispatch();
  const onChangePage = (num: number) => {
    dispatch(setCurrentPage(num));
  };
  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel=" >"
        pageRangeDisplayed={1}
        pageCount={3}
        previousLabel="<"
        className={s.pagination}
        onPageChange={(e) => onChangePage(e.selected + 1)}
      />
    </>
  );
};
