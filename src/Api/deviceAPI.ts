import axios from 'axios';

export type Product = {
  id: string;
  name: string;
  model: string;
  image: string;
  icon: string;
  line: string;
};

type ApiProduct = {
  guid: string;
  line: {
    id: string;
    name: string;
  };
  product: {
    abbrev: string;
    name: string;
  };
  icon: {
    id: string;
    resolutions: number[][];
  };
  sysid: string;
};

const API_URL = 'https://static.ui.com/fingerprint/ui/public.json';

const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await axios.get(API_URL);
    const apiProducts: ApiProduct[] = response.data?.data?.devices || [];

    const products = apiProducts.map((product) => {
      const imageResolution = product.icon.resolutions[product.icon.resolutions.length - 1];
      const imageUrl = `https://dl.ui.com/product/firmware/${product.icon.id}/${imageResolution[0]}x${imageResolution[1]}.png`;

      return {
        id: product.sysid,
        name: product.product.name,
        model: product.product.abbrev,
        image: imageUrl,
        icon: product.icon.id,
        line: product.line.id,
      };
    });

    return products;
  } catch (error) {
    console.error('Error while fetching products', error);
    return [];
  }
};

export default getProducts;
