
import  'bootstrap/dist/css/bootstrap.min.css';
import {BiGrid} from 'react-icons/bi'
const ActionBar = () => {
  return (
    <div className="d-flex justify-content-between bg-dark">
      <div className="d-flex">
        <h2 className="mb-4 ms-5" style={{ color: 'white' }}>TV Shows</h2>
        <div className="btn-group" role="group">
          <div className="dropdown ms-4 mt-1">
            <button
              type="button"
              className="btn btn-secondary btn-sm dropdown-toggle rounded-0"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ backgroundColor: '#221f1f' }}
            >
              Genres
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Comedy</a></li>
              <li><a className="dropdown-item" href="#">Drama</a></li>
              <li><a className="dropdown-item" href="#">Thriller</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="d-flex mb-3  align-items-center" style={{marginRight: '20px'}}>
      
      <svg style={{ color: 'white' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-grid" viewBox="0 0 16 16">
  <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5z"/>
</svg>
<BiGrid className="mx-3 fs-5" style={{ color: 'white' }}/>
    </div>
    </div>
  );
};

export default ActionBar;