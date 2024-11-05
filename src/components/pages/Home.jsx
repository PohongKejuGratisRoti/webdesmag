import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Next Arrow component
function NextArrow({ onClick }) {
  return (
    <div
      className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-60 rounded-full shadow-lg cursor-pointer z-10 hover:bg-opacity-80 transition"
      onClick={onClick}
      style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10.293 15.293a1 1 0 001.414 0l5-5a1 1 0 000-1.414l-5-5a1 1 0 10-1.414 1.414L14.586 10H3a1 1 0 100 2h11.586l-4.293 4.293a1 1 0 000 1.414z" clipRule="evenodd" />
      </svg>
    </div>
  );
}

// Custom Previous Arrow component
function PrevArrow({ onClick }) {
  return (
    <div
      className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-60 rounded-full shadow-lg cursor-pointer z-10 hover:bg-opacity-80 transition"
      onClick={onClick}
      style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M9.707 4.293a1 1 0 00-1.414 0l-5 5a1 1 0 000 1.414l5 5a1 1 0 001.414-1.414L5.414 10H17a1 1 0 100-2H5.414l4.293-4.293a1 1 0 000-1.414z" clipRule="evenodd" />
      </svg>
    </div>
  );
}

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="p-0 m-0 w-screen max-w-full overflow-x-hidden">
      <div className="bg-orange-300 h-screen flex justify-center items-start">
        <p className="font-extrabold text-5xl mt-[228px]">Desa Siwoangin-angin</p>
      </div>

      {/* Deskripsi Pendek Desa */}
      <div className="h-96 flex flex-row p-2 gap-4 mt-4 mb-4">
        {/* Text Section */}
        <div className="flex-1 flex flex-col max-w-xl ml-7">
          <div className="text-3xl font-bold">
            <p>Tentang Desa [nama desa]</p>
          </div>
          <div className="overflow-hidden max-h-24 max-w-85">
            <p className="line-clamp-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
              into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
              release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
              software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex items-center justify-center">
          <img className="h-64 w-80 object-cover" src="https://iili.io/dyC3E8u.jpg" alt="" />
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full h-auto bg-orange-300">
        <div className="pt-4 pb-10 flex flex-col justify-center items-center">
          <p className="text-white text-4xl font-bold mb-7 mt-7">Peta Tematik</p>
          <img
            className="w-[676px] h-64 mt-2 object-cover border-white border-8"
            src="https://azgaar.github.io/Fantasy-Map-Generator/images/preview.png"
            alt=""
          />
        </div>
      </div>

      {/* Artikel dan Berita Terbaru Section */}
      <div className="w-screen h-auto bg-slate-100 flex-auto pt-4">
      <div className="shadow-sm bg-white h-auto m-9 shadow-orange-300 gap-4 hover:shadow-lg flex py-4 items-start justify-start">
  <div className="flex flex-row items-start gap-4 w-full justify-start"> {/* Set max width to maintain structure */}
    <img
      className="h-[290px] w-[480px] object-cover"
      src="https://simoanginangin-wonoayu.desa.id/desa/upload/artikel/sedang_1726823305_20.09%20Desa%20Simoangin-angin%20dalam%20angka%202024_001.jpg"
      alt=""
    />
    <div className="flex flex-col justify-start">
      <p className="text-lg font-bold">artikel tes1</p>
      <p className="text-sm">isi artikel</p>
    </div>
  </div>
</div>

        {/* Carousel */}
        <div className="w-full mx-5 my-10 overflow-hidden">
          <Slider {...settings} className="w-full">
            <div className="px-2 flex flex-col items-center">
              <div className="bg-white h-auto p-2 flex flex-col items-center justify-center hover:bg-orange-400 transition duration-300">
                <img
                  src="https://4.img-dpreview.com/files/p/E~TS590x0~articles/3925134721/0266554465.jpeg"
                  alt=""
                  className="h-2/3 object-contain"
                />
                <p className="font-medium">Judul Artikel 1</p>
                <p className="text-sm justify-normal">Deskripsi singkat tentang berita</p>
              </div>
            </div>
            <div className="px-2 flex flex-col items-center">
              <div className="bg-white h-auto p-2 flex flex-col items-center justify-center hover:bg-orange-400 transition duration-300">
                <img
                  src="https://4.img-dpreview.com/files/p/E~TS590x0~articles/3925134721/0266554465.jpeg"
                  alt=""
                  className="h-2/3 object-contain"
                />
                <p className="font-medium">Judul Artikel 2</p>
                <p className="text-sm justify-normal">Deskripsi singkat tentang berita</p>
              </div>
            </div>
            <div className="px-2 flex flex-col items-center">
              <div className="bg-white h-auto p-2 flex flex-col items-center justify-center hover:bg-orange-400 transition duration-300">
                <img
                  src="https://4.img-dpreview.com/files/p/E~TS590x0~articles/3925134721/0266554465.jpeg"
                  alt=""
                  className="h-2/3 object-contain"
                />
                <p className="font-medium">Judul Artikel 3</p>
                <p className="text-sm justify-normal">Deskripsi singkat tentang berita</p>
              </div>
            </div>
            <div className="px-2 flex flex-col items-center">
              <div className="bg-white h-auto p-2 flex flex-col items-center justify-center hover:bg-orange-400 transition duration-300">
                <img
                  src="https://4.img-dpreview.com/files/p/E~TS590x0~articles/3925134721/0266554465.jpeg"
                  alt=""
                  className="h-2/3 object-contain"
                />
                <p className="font-medium">Judul Artikel 4</p>
                <p className="text-sm justify-normal">Deskripsi singkat tentang berita</p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Home;
