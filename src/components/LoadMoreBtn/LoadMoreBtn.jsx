import s from './LoadMoreBtn.module.css'

const LoadMoreButton = ({ handleChangePage }) => {
    return <button className={s.loadBtn} onClick={handleChangePage}>Load more</button>
}

export default LoadMoreButton;