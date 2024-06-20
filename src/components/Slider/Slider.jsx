import { Swiper, SwiperSlide } from 'swiper/react';
import { 
    Navigation, 
    Pagination, 
    Scrollbar, 
    Autoplay, 
    Mousewheel,
    EffectCube 
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/css/mousewheel';
import 'swiper/css/effect-cube';
import './Slider.css';

function Slider(){
    return(
        <div id='slider' className="slider-container">
            <Swiper
                modules={[
                    Navigation, 
                    Pagination, 
                    Scrollbar, 
                    Autoplay, 
                    Mousewheel,
                    EffectCube
                ]}
                effect="cube"
                spaceBetween={60}
                slidesPerView={1}
                navigation
                autoplay
                Mousewheel
                loop = 'true' 
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
                <SwiperSlide>
                    <div className='slider-1'>
                        <div className='info-1'>
                            <h1>Modelos Únicos</h1>
                            <div className='line-1'></div>
                            <h2>que reflejan tu estilo</h2>
                            <button className='btn-2'>ver catálogo</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slider-2'>
                        <div className='info-2'>
                            <h1>Siempre a la</h1>
                            <div className='line-2'></div>
                            <h2>vanguardia en moda</h2>
                            <button className='btn-2'>ver catálogo</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slider-3'>
                        <div className='info-1'>
                            <h1>Tenis Exclusivos</h1>
                            <div className='line-1'></div>
                            <h2>a los mejores precios</h2>
                            <button className='btn-2'>ver catálogo</button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Slider;