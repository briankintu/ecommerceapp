
import { useFrappeGetDocList } from 'frappe-react-sdk';
import ProductCard from './Cards/ProductCard';

const ProductsIterator = () => {
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
    return (
        <div>
          {data.map(doc => (
            <ProductCard key={doc.name} doc={doc} />
          ))}
        </div>
      )
    }

  }
  

export default ProductsIterator;

  