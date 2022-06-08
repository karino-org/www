import Icon from "../../../components/Icon";
const SlickArrow = ({ currentSlide, slideCount, children, ...props }) => (
    <button {...props}>{children}</button>
  );

export const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,

    nextArrow: (
      <SlickArrow>
        <Icon name="arrow-right" size="50" />
      </SlickArrow>
    ),
    prevArrow: (
      <SlickArrow>
        <Icon name="arrow-left" size="50" />
      </SlickArrow>
    ),
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 474,
        settings: {
          slidesToShow: 1,
          infinite: true,
        },
      },
    ],
  };