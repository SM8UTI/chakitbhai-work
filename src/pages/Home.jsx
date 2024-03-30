import { Rating, Select, Typography, Option } from "@material-tailwind/react";
import Wrapper from "../layouts/Wrapper";
import { Link } from "react-router-dom";

const data = [
  {
    productName: "Wireless Headphones",
    price: "$49.99",
    rating: 4.5,
    discount: "10%",
    availability: true,
    category: "Earphones",
  },
  {
    productName: "Smartphone",
    price: "$699.99",
    rating: 4.7,
    discount: "15%",
    availability: true,
    category: "Phone",
  },
  {
    productName: "Laptop",
    price: "$999.99",
    rating: 4.6,
    discount: "10%",
    availability: true,
    category: "Computer",
  },
  {
    productName: "Smart TV",
    price: "$899.99",
    rating: 4.5,
    discount: "5%",
    availability: true,
    category: "TV",
  },
  {
    productName: "Bluetooth Earphones",
    price: "$79.99",
    rating: 4.2,
    discount: "20%",
    availability: true,
    category: "Earphones",
  },
  {
    productName: "Tablet",
    price: "$349.99",
    rating: 4.4,
    discount: "0%",
    availability: true,
    category: "Tablet",
  },
  {
    productName: "Wireless Charger",
    price: "$19.99",
    rating: 4.5,
    discount: "0%",
    availability: true,
    category: "Charger",
  },
  {
    productName: "Gaming Laptop",
    price: "$1499.99",
    rating: 4.8,
    discount: "10%",
    availability: true,
    category: "Computer",
  },
  {
    productName: "4K TV",
    price: "$1199.99",
    rating: 4.6,
    discount: "8%",
    availability: true,
    category: "TV",
  },
  {
    productName: "Power Bank",
    price: "$29.99",
    rating: 4.3,
    discount: "0%",
    availability: true,
    category: "Charger",
  },
  {
    productName: "Noise Cancelling Earbuds",
    price: "$149.99",
    rating: 4.7,
    discount: "15%",
    availability: true,
    category: "Earphones",
  },
  {
    productName: "Budget Smartphone",
    price: "$299.99",
    rating: 4.0,
    discount: "25%",
    availability: true,
    category: "Phone",
  },
  {
    productName: "Desktop Computer",
    price: "$1199.99",
    rating: 4.5,
    discount: "12%",
    availability: true,
    category: "Computer",
  },
  {
    productName: "OLED TV",
    price: "$1999.99",
    rating: 4.9,
    discount: "5%",
    availability: true,
    category: "TV",
  },
  {
    productName: "True Wireless Earbuds",
    price: "$99.99",
    rating: 4.4,
    discount: "10%",
    availability: true,
    category: "Earphones",
  },
  {
    productName: "Android Tablet",
    price: "$199.99",
    rating: 4.2,
    discount: "10%",
    availability: true,
    category: "Tablet",
  },
  {
    productName: "USB-C Charger",
    price: "$14.99",
    rating: 4.3,
    discount: "0%",
    availability: true,
    category: "Charger",
  },
  {
    productName: "Gaming Phone",
    price: "$799.99",
    rating: 4.8,
    discount: "8%",
    availability: true,
    category: "Phone",
  },
  {
    productName: "MacBook Pro",
    price: "$1799.99",
    rating: 4.7,
    discount: "5%",
    availability: true,
    category: "Computer",
  },
  {
    productName: "LED TV",
    price: "$699.99",
    rating: 5,
    discount: "10%",
    availability: true,
    category: "TV",
  },
];

const sortby = {
  price: [
    {
      text: "Low to High",
      value: "low-to-high",
    },
    {
      text: "High to Low",
      value: "high-to-low",
    },
  ],
  category: [
    {
      text: "phone",
      value: "phone",
    },
    {
      text: "computer",
      value: "computer",
    },
    {
      text: "tv",
      value: "tv",
    },
    {
      text: "earphones",
      value: "earphones",
    },
    {
      text: "tablet",
      value: "tablet",
    },
    {
      text: "charger",
      value: "charger",
    },
    {
      text: "mouse",
      value: "mouse",
    },
    {
      text: "keyboard",
      value: "keyboard",
    },
    { text: "Bluetooth", value: "bluetooth" },
  ],
};

const Home = () => {
  const [dataSortBY, setDataSortBY] = useState({
    price: "",
    category: "",
  });

  return (
    <div className="py-10 w-full h-full">
      <Wrapper>
        <div>
          <div className="flex flex-row items-center gap-4 justify-between flex-wrap">
            <Typography
              variant="h3"
              className="font-semibold capitalize font-primary border-b-2 border-b-blue-500 max-w-fit"
            >
              All Products
            </Typography>
            <div className="flex flex-row items-center gap-2">
              <Select
                label="Select Price"
                className="bg-white font-primary"
                value={dataSortBY.price}
                onChange={(val) => setDataSortBY({ ...dataSortBY, price: val })}
              >
                {sortby.price.map((item, index) => (
                  <Option
                    key={index}
                    value={item.value}
                    className="capitalize font-primary"
                  >
                    {item.text}
                  </Option>
                ))}
              </Select>
              <Select
                label="Select Category"
                className="bg-white font-primary"
                value={dataSortBY.category}
                onChange={(val) =>
                  setDataSortBY({ ...dataSortBY, category: val })
                }
              >
                {sortby.category.map((item, index) => (
                  <Option
                    key={index}
                    value={item.value}
                    className="capitalize font-primary"
                  >
                    {item.text}
                  </Option>
                ))}
              </Select>
            </div>
          </div>
          <div className="mt-8 text-base font-semibold">
            <Typography
              className="font-primary font-semibold text-gray-600"
              variant="h6"
            >
              {data.length} Products Found
            </Typography>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 w-full h-full">
            {data.map((item, index) => (
              <Link
                to={`/product/${index}`}
                key={index}
                preventScrollReset={true}
              >
                <div className="bg-white w-full h-full rounded-lg border border-gray-800/5 overflow-hidden flex flex-col gap-1 cursor-pointer">
                  <div className="w-full h-[200px]  overflow-hidden relative">
                    <img
                      src="https://via.placeholder.com/800"
                      alt={item.productName}
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="bg-white absolute bottom-0 left-1/2 -translate-x-1/2 px-6 pt-3 rounded-t-md">
                      <Rating value={Math.floor(item.rating)} readonly />
                    </div>
                  </div>
                  <div>
                    <div className="p-2 px-4 text-center flex flex-col gap-2">
                      <Typography
                        variant="h5"
                        className="font-primary font-semibold capitalize"
                      >
                        {item.productName}
                      </Typography>
                      <span className="bg-blue-50 text-blue-600 p-4 py-1 rounded-full max-w-fit mx-auto text-sm">
                        {item.category}
                      </span>
                    </div>
                    <div className="text-center flex flex-row gap-2 items-center justify-center mb-6">
                      <Typography
                        variant="h3"
                        className="font-primary text-gray-600"
                      >
                        {item.price}
                      </Typography>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Home;
