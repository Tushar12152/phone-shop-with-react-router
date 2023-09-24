import PropTypes from 'prop-types';
import Phone from './phone/Phone';
const Phones = ({phones}) => {
   
    return (
        <div>
             <h1 className="text-center font-semibold text-2xl">Our Phones collection</h1>
             
             <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-10 gap-6 '>
                 {
                    phones?.map(phone=><Phone key={phone.id} phone={phone}></Phone>)
                 }
             </div>
        </div>
    );
};
Phones.propTypes={
    phones:PropTypes.object.isRequired,
}

export default Phones;