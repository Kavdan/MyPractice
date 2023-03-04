import { useNavigate, useParams } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';

import { Button } from '../components/Button';
import { Info } from '../components/Info';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectedCountry } from '../store/details/detailsSelectors';
import { useEffect } from 'react';
import { loadingCountry } from '../store/details/detailsReducers';
import { clearDetails } from '../store/details/detailsActions';


export const Details = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {currentCountry, status, error} = useSelector(selectedCountry);
 
  useEffect(() => {
    dispatch(loadingCountry(name))

    return () => {
      dispatch(clearDetails());
    }
  }, [name, dispatch])

  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>
      {status === "loading" && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      {status === "received" && (
         currentCountry && <Info push={navigate} {...currentCountry} />
      )}
    </div>
  );
};
