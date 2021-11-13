import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Parallax, Pagination, Navigation, Autoplay, EffectFade } from 'swiper';
import AppLayout from './layouts/AppLayout';
import SlidesContext from '../contexts/slides';
import Card from '../components/card';
import CardEntities from '../components/CardEntities';
import carouselData from '../data/carouselData';
import ArrowNarrowRightIcon from '../icons/ArrowNarrowRightIcon';

// install Swiper modules
SwiperCore.use([Parallax, Pagination, Navigation, Autoplay, EffectFade]);

export default function HomePage({ slides }) {
  const [category, setCategory] = useState('movies');
  const [slideRows, setSlideRows] = useState([]);

  useEffect(() => {
    setSlideRows(slides[category]);
    return () => {
      setSlideRows([]);
    };
  }, [slides, category]);

  return (
    <SlidesContext.Provider value={{ category, setCategory }}>
      <AppLayout>
        <section>
          <Swiper
            className="mySwiper"
            style={{
              '--swiper-navigation-color': 'var(--primary)',
              '--swiper-pagination-color': 'var(--primary)',
            }}
            speed={600}
            // eslint-disable-next-line react/jsx-boolean-value
            parallax={true}
            // eslint-disable-next-line react/jsx-boolean-value
            navigation={true}
            // eslint-disable-next-line react/jsx-boolean-value
            loop={true}
            effect="fade"
            autoplay={{
              delay: 8000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
          >
            {carouselData.map((item) => (
              <SwiperSlide key={item.id}>
                <div
                  slot="container-start"
                  className="bg-no-repeat bg-cover flex items-center h-80 md:h-96 lg:h-102"
                  style={{
                    backgroundImage: `linear-gradient(to right, var(--black-600) 35%, var(--black-400) 65%, var(--black-200) ), url(${item.backdropImage})`,
                  }}
                  data-swiper-parallax="-300"
                >
                  <div className="container mx-auto px-4">
                    <div className="max-w-xl py-20">
                      <h2
                        className="text-3xl lg:text-4xl text-white font-semibold mb-3"
                        data-swiper-parallax="-300"
                      >
                        {item.title}
                      </h2>
                      <p className="text-base text-gray-300 mb-3" data-swiper-parallax="-300">
                        <span className="uppercase pr-1" data-swiper-parallax="-300">
                          {item.language}
                        </span>
                        &middot;
                        <span className="pl-1" data-swiper-parallax="-300">
                          {item.releaseYear}
                        </span>
                      </p>
                      <p
                        className="text-base lg:text-lg text-gray-100 mb-3"
                        data-swiper-parallax="-300"
                      >
                        {item.overview}
                      </p>
                      <Link
                        to={item.href}
                        className="inline-flex py-1 px-4 text-black group bg-primary rounded cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-black focus:ring-offset-2 focus:ring-primary"
                        data-swiper-parallax="-300"
                      >
                        View Details
                        <span className="ml-1 transform group-hover:translate-x-0.5 transition-transform">
                          <ArrowNarrowRightIcon />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
        <section className="pb-20 py-10">
          {slideRows.map((rows) => (
            <div className="py-10" key={rows.title}>
              <div className="container mx-auto px-4">
                <h2 className="text-white space-x-2 mb-4">
                  <span className="text-3xl font-semibold text-primary">{rows.title}</span>
                  <span className="text-2xl">{`${
                    category === 'movies' ? 'Movies' : 'TV Shows'
                  }`}</span>
                </h2>
                <CardEntities>
                  {rows.data[0]?.results.map((item) => (
                    <Card key={item.id} details={item} category={category} />
                  ))}
                </CardEntities>
              </div>
            </div>
          ))}
        </section>
      </AppLayout>
    </SlidesContext.Provider>
  );
}

HomePage.propTypes = {
  slides: PropTypes.instanceOf(Object).isRequired,
};
