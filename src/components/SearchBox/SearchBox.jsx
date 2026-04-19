import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';        // ← doğru yol
import { selectNameFilter } from '../../redux/filtersSlice';    // ← doğru yol
import css from './SearchBox.module.css';

const SearchBox = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectNameFilter);

    const handleChange = (e) => {
        dispatch(changeFilter(e.target.value));
    };

    return (
        <div className={css.searchBoxContainer}>
            <h3 className={css.searchBoxTitle}>Arama Yap</h3>
            <input
                className={css.searchBoxInput}
                type="text"
                placeholder="İsim ara..."
                value={filter}
                onChange={handleChange}
            />
        </div>
    );
};

export default SearchBox;