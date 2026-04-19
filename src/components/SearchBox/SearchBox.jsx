import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import { selectNameFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';

const SearchBox = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectNameFilter);

    const handleChange = (e) => {
        dispatch(changeFilter(e.target.value));
    };

    return (
        <div className={css.searchBoxContainer}>
            <h3 className={css.searchBoxTitle}>Search Contacts</h3>
            <input
                className={css.searchBoxInput}
                type="text"
                placeholder="Search by name..."
                value={filter}
                onChange={handleChange}
            />
        </div>
    );
};

export default SearchBox;