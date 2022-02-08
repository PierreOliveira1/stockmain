import React, {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useLayoutEffect,
	useState,
} from 'react';

import ProductsProps from '../../@types/products';
import { getAllProducts, setAllProducts } from '../../utils/product';

type Products = {
	products: ProductsProps[];
	setProducts: (products: ProductsProps[]) => void;
};

const ProductsContext = createContext<Products>({
	products: [],
	setProducts: () => {},
});

export const useProducts = () => useContext<Products>(ProductsContext);

type Props = {
	children: ReactNode;
};

const ProductsProvider = ({ children }: Props): JSX.Element => {
	const [products, setProducts] = useState<ProductsProps[]>([]);

	useLayoutEffect(() => {
		getAllProducts().then((products) => setProducts(products));
	}, []);

	useEffect(() => {
		setAllProducts(products);
	}, [products]);

	return (
		<ProductsContext.Provider value={{ products, setProducts }}>
			{children}
		</ProductsContext.Provider>
	);
};

export default ProductsProvider;
