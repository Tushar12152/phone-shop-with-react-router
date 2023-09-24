import PropTypes from 'prop-types';
import { AiOutlineStar,AiFillStar} from 'react-icons/ai';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
const Phone = ({phone}) => {
    // console.log(phone)
    const {id,image, phone_name,price,rating,brand_name}=phone
    return (
        <div>
                <div className="relative flex  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
  <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
    <img src={image} className="h-full w-full object-cover"/>
  </div>
  <div className="p-6">
  <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
        {brand_name}
      </p>
    <div className="mb-2 flex items-center justify-between">
      <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
       {phone_name}
      </p>
      <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
        ${price}
      </p>
      
    </div>
    <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
    

     <Rating   emptySymbol={<AiOutlineStar></AiOutlineStar>}
  fullSymbol={<AiFillStar></AiFillStar>}
  initialRating= {rating}
  readonly
/>
    
    </p>
  </div>
  <div className="p-6 pt-0">
  <Link to={`/phones/${id}`}>
  <button className="w-full  rounded-lg bg-gray-300 py-3 px-6 text-center align-middle text-xs font-bold uppercase transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">Favorite</button>
  </Link>
  </div>
</div>
        </div>
    );
};

Phone.propTypes={
    phone:PropTypes.object.isRequired,
}
export default Phone;