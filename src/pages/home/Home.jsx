import { useEffect, useState } from "react";
import "./Home.css";
import data from "./courosalImage.json";
const Home = () => {
  const [count, setCount] = useState(0);
  console.log(data.carousalImage.length);
  useEffect(() => {
    const timeoutId = carousalControler();
    return () => clearTimeout(timeoutId);
  }, [count]);
  const carousalControler = () => {
    return setTimeout(() => {
      setCount((prev) => {
        if (prev === -1 || prev >= data.carousalImage.length - 1) {
          return 0;
        }
        return (prev += 1);
      });
    }, 5000);
  };
  console.log(count);
  return (
    <>
      <div className="home-mainContainer">
        <div className="home-Courosal_mainContainer">
          <img
            src={data?.carousalImage[count]?.image}
            alt="carousal image"
            className="home-Courosal_Image"
          />
        </div>
        <div className="home-categories_mainContainer">
          <h2>CATEGORIES</h2>
          <div className="home-categories_mapContainer">
            {data?.categories?.map((category) => {
              return (
                <>
                  <div
                    key={category.categoryType}
                    className="home-categories_mapItem"
                  >
                    <img
                      className="home-categories_mapItem_image"
                      src={category.image}
                      alt={category.categoryType}
                    />
                    {/* <h5>{category.categoryType}</h5> */}
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
