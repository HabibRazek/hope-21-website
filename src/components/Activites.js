import React from 'react';




const Activities = () => {
  const cards = [
    {
      imgSrc:
          '1.png',
      title: 'Activités éducatives',
      info: ' lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ',
      altTitle: 'Lorem ipsum dolor sit',
  },
    {
      imgSrc:
          '2.png',
      title: 'Activités sportives',
      info: ' lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ',
      altTitle: 'Lorem ipsum dolor sit',
  },
    {
      imgSrc:
          '3.png',
      title: 'Activités pédagogiques spécialisées',
      info: ' lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ',
      altTitle: 'Lorem ipsum dolor sit',
  },
    {
      imgSrc:
          '4.png',
      title: 'Activités extérieures',
      info: ' lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ',
      altTitle: 'Lorem ipsum dolor sit',
  },
    {
      imgSrc:
          '5.png',
      title: 'Orthophonie',
      info: ' lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ',
      altTitle: 'Lorem ipsum dolor sit',
  },
    {
      imgSrc:
          '6.png',
      title: 'Ateliers de formation ',
      info: ' lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ',
      altTitle: 'Lorem ipsum dolor sit',
  },
  ];


  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-5 lg:px-8 lg:py-14 mx-auto">
      {/* Header Section */}
      <div className="text-center">
        <h2 className="text-3xl lg:text-4xl text-gray-800 font-bold">
          Nos activités
        </h2>
        <hr className='w-28 h-2 rounded-lg mt-2 bg-orange-500 mx-auto mb-10' />
        <p className="text-xl text-gray-700 max-w-2xl mb-5 mx-auto">

          Découvrez nos efforts dédiés à l'amélioration de la vie des personnes atteintes de trisomie. Chaque initiative est un pas vers un monde plus inclusif et bienveillant.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-8">
        {cards.map((card, index) => (
          <div key={index} className="card rounded-lg overflow-hidden shadow-lg">
            <img
              src={card.imgSrc}
              className="card-img "
              alt={card.altTitle}
              width={370}
              height={370}
              style={{ width: 'auto', height: 'auto' }}
            />
            <div className="card-body p-4">
              <h3 className="card-title text-xl text-gray-900 font-semibold mb-2">{card.title}</h3>
              <p className="card-info text-gray-900 ">{card.info}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );


};

export default Activities;
