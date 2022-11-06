import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPendaki } from "../store/features/pendakiSlice";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "../assets/style/swiper.scss";

// import required modules
import { EffectCards } from "swiper";
import { generateDiceBearAvataaars } from "../utils/randomImage";

export default function App() {
  const dispatch = useDispatch()
    const listOfPendaki = useSelector((state) => state.pendaki.data)
    const componentStatus  = useSelector((state) => state.pendaki.componentStatus)

    useEffect(() => {
        dispatch(fetchPendaki());
    },[componentStatus, dispatch])

    return (
      <>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          {listOfPendaki.map((pendaki) => (
            <SwiperSlide key={pendaki.id} pendaki={pendaki}>
            <div className="swiper-image">
              <div className="base-image">
                <img
                    className="rounded-circle img-random-swiper"
                    src={generateDiceBearAvataaars(Math.random())}
                    style={{ width: "80px", height: "80px", margin: "10px", padding: "10px"}}
                    alt="images"
                ></img>
              </div>
              <p className="name-swiper"><q>{pendaki.nama}</q></p>
              <p className="review-swiper">{pendaki.review}</p>
            </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    );
}
