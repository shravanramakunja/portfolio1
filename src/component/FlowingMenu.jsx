import React from 'react';
import PropTypes from 'prop-types';

function FlowingMenu({ items = [] }) {
  return (
    <div className="w-full h-full overflow-hidden">
      <nav className="flex flex-col h-full m-0 p-0">
        {items.map((item, idx) => (
          <MenuItem key={idx} {...item} />
        ))}
      </nav>
    </div>
  );
}

function MenuItem({ link, text, image }) {
  // Fallbacks for missing props
  const safeText = text || 'Menu Item';
  const safeImage = image || 'https://via.placeholder.com/200x60?text=No+Image';
  const safeLink = link || '#';

  const repeatedMarqueeContent = Array.from({ length: 4 }).map((_, idx) => (
    <React.Fragment key={idx}>
      <span className="text-[#060010] uppercase font-normal text-[4vh] leading-[1.2] p-[1vh_1vw_0]">
        {safeText}
      </span>
      <div
        className="w-[200px] h-[7vh] my-[2em] mx-[2vw] p-[1em_0] rounded-[50px] bg-cover bg-center"
        style={{ backgroundImage: `url(${safeImage})` }}
      />
    </React.Fragment>
  ));

  return (
    <div className="flex-1 relative overflow-hidden text-center shadow-[0_-1px_0_0_#fff] group">
      <a
        className="flex items-center justify-center h-full relative cursor-pointer uppercase no-underline font-semibold text-white text-[4vh] hover:text-[#060010] focus:text-white focus-visible:text-[#060010]"
        href={safeLink}
        tabIndex={0}
        aria-label={safeText}
      >
        {safeText}
      </a>
      <div
        className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none bg-white translate-y-[101%] transition-transform duration-500 ease-in-out group-hover:translate-y-0"
      >
        <div className="h-full w-[200%] flex">
          <div className="flex items-center relative h-full w-[200%] will-change-transform animate-marquee">
            {repeatedMarqueeContent}
          </div>
        </div>
      </div>
    </div>
  );
}

FlowingMenu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      image: PropTypes.string,
      link: PropTypes.string,
    })
  ),
};

MenuItem.propTypes = {
  text: PropTypes.string,
  image: PropTypes.string,
  link: PropTypes.string,
};

export default FlowingMenu;
