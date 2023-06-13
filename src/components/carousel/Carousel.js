import CarouselItem from "./carousel-item/CarouselItem";
import carouselImg1 from "../../images/1.webp";
import carouselImg2 from "../../images/2.webp";
import carouselImg3 from "../../images/3.jpg";
import Carouselitem2 from "./carousel-item2/Carouselitem2";
import carousel2Data from "../../data/carousel2.json";

const Carousel = ({ type }) => {
  console.log(carousel2Data);
  return (
    <div className={type === "type1" ? "container" : ""}>
      <div class="carousel-container">
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="designed-hr d-none d-lg-block">
            <hr class="mx-auto" />
          </div>
          {type === "type1" ? (
            <div class="carousel-inner py-5">
              <CarouselItem
                isActive={true}
                innerTexts={{
                  clockText: "4:00 p.m.",
                  titleP1: "Sweet treats ",
                  titleP2: "Cake & Bubbles",
                  paragraph:
                    "1. A perfect afternoon for those with a sweet tooth. Choose your favourite cake from our dessert trolley. And marry the best cakes of Barcelona, with the best variety of Cava, Spanish sparkling wine, or the more glamourous Champagne.",
                }}
                imgURL={carouselImg1}
              />
              <CarouselItem
                isActive={false}
                innerTexts={{
                  clockText: "5:00 p.m.",
                  titleP1: "Afternoon tea",
                  titleP2: "in the historic hall.",
                  paragraph:
                    "2. A perfect afternoon for those with a sweet tooth. Choose your favourite cake from our dessert trolley. And marry the best cakes of Barcelona, with the best variety of Cava, Spanish sparkling wine, or the more glamourous Champagne.",
                }}
                imgURL={carouselImg2}
              />
              <CarouselItem
                isActive={false}
                innerTexts={{
                  clockText: "6:00 p.m.",
                  titleP1: "In a mood to",
                  titleP2: "ask for your favorite?",
                  paragraph:
                    "3. A perfect afternoon for those with a sweet tooth. Choose your favourite cake from our dessert trolley. And marry the best cakes of Barcelona, with the best variety of Cava, Spanish sparkling wine, or the more glamourous Champagne.",
                }}
                imgURL={carouselImg3}
              />
            </div>
          ) : (
            type === "type2" && (
              <div class="carousel-inner py-5">
                {carousel2Data.map((carouselItem, index) => {
                  return (
                    <Carouselitem2
                      counter={carouselItem.id}
                      nrOfItems={carousel2Data.length}
                      title={carouselItem.title}
                      description={carouselItem.description}
                      urls={carouselItem.urls}
                    />
                  );
                })}
              </div>
            )
          )}
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Carousel;
