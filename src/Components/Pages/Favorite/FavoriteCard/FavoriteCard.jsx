import PropTypes from 'prop-types'
const FavoriteCard = ({item}) => {
   const{image,brand_name,phone_name,price}=item
    return (
        <div>
                <div className="relative flex w-64  bg-gray-200 flex-col rounded-xl  bg-clip-border text-gray-700 shadow-lg">
  <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
    <img src={image} className=" w-full object-cover"/>
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
   
  </div>
 
</div>
        </div>
    );
};
FavoriteCard.propTypes={
    item:PropTypes.object.isRequired,
}
export default FavoriteCard;