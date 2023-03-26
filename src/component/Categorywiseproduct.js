import CategoryCard from "./CategoryCard";
import { useContext } from 'react';
import { ashContext } from '../App';


const Categorywiseproduct = () => {

    const { categoryList } = useContext(ashContext);

    return (
        <>
        <div className="ash-catg">
            <div className="container">

            {
                categoryList.map((item,i) => <CategoryCard data={item} key={i}/>)
            }

            </div>
        </div>
        </>
    );
};

export default Categorywiseproduct;