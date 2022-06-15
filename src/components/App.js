

import { SearchProvider} from '../context/SearchContext'
import { SearchBar } from './SearchBar';
import { ProductTable } from './ProductTable'
import '../styles/App.css';

function App() {

  return (
    <SearchProvider>
      <section className='filterable-product-table'>
        <SearchBar />
        <ProductTable />
      </section>
    </SearchProvider>
  );
}

export default App;
