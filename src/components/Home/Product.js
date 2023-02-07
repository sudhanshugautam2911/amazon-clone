import React from "react"
import { useLoaderData } from "react-router"
import RoundedPrice from "../../constants/roundedPrice";
import GradeIcon from '@mui/icons-material/Grade';
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';
const Product = () => {
    const data = useLoaderData();
    const productData = data.data;
    console.log(productData)

    return (
        <div className="max-w-screen-2xl mx-auto grid grid-cols-4 gap-10 px-4">
            {productData.map((item) => (

                <div key={item.id} className="bg-white h-auto border-[1px] border-gray-200 py-8 z-30 hover:border-transparent shadow-none hover:shadow-testShadow duration-200 relative" >
                    <div className="w-full h-auto flex items-center justify-center">
                        <img className="w-52 h-64 object-contain" src={item.image} alt="Product Image" />
                        <span className="text-xs capitalize italic absolute top-2 right-2 text-gray-500">{item.category}</span>
                    </div>

                    <div className="px-4">
                        <div className="flex items-center justify-between">
                            <h1 className="font-titleFont tracking-wide text-lg text-amazon_blue font-medium">{item.title.substring(0, 20)}</h1>
                            <RoundedPrice price={item.price} />
                        </div>
                        <div>
                            <p className="text-sm mb-1">{item.description.substring(0, 100)}...</p>
                        </div>
                        <div className="text-amazon_yellow">
                            <GradeIcon />
                            <GradeIcon />
                            <GradeIcon />
                            <GradeIcon />
                            <GradeIcon />
                            {/* <GradeOutlinedIcon /> */}
                        </div>
                        <button className="w-full py-1.5 rounded-md mt-3 font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200  hover:from-yellow-300 hover:to-yellow-400 border border-yellow-500 hover:border-yellow-700 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200">Add to Cart</button>
                    </div>
                </div>
            ))
            }
        </div >
    )
}

export default Product