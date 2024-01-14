
import { useFrappeGetDocList } from 'frappe-react-sdk';
import ProductCardStyleOne from './Cards/ProductCardStyleOne';

const ProductsIterator = (props) => {

//   const { datas = [], startLength, endLength,} = props;
//   return (
//    <>
//      {datas &&
//        datas.length >= endLength &&
//        datas
//          .slice(startLength, endLength)
//          .map((value) => children({ datas: value }))}
//    </>
//  );

  // Fetch data using useFrappeGetDocList
  
  const { data, loading, error } = useFrappeGetDocList('Item', {
    fields: ['name', 'item_code', 'description', 'image', 'opening_stock','item_group', 'standard_rate', 'item_name' ],
    
})


   

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  // Render child components with data

  if (data) {
    console.log(data)
    
    return (
        <>
           
          {data.slice(0,6)
          .map(doc => (
            <div data-aos="fade-up" key={doc.name}>
            <ProductCardStyleOne key={doc.name} doc={doc} />
            </div>
          ))}
        </>
      )
    }

    

  }
  

export default ProductsIterator;

  