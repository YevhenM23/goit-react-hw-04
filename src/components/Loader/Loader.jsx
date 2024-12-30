import { RotatingSquare } from 'react-loader-spinner'
import s from './Loader.module.css'

const Loader = () => {
  return (
    <div className={s.loaderWrapper}>
      <RotatingSquare
       visible={true}
       height="100"
       width="100"
       color="#4fa94d"
       ariaLabel="rotating-square-loading"
       wrapperStyle={{}}
       wrapperClass=""
  />
      </div>
      
    )
}


export default Loader;
