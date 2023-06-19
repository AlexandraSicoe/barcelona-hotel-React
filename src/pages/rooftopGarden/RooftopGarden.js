import style from "./RooftopGarden.style";
const RooftopGarden = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 d-flex justify-content-center">
          <p style={style.descriptionHeader}>IN THE BARCELONAN SKY</p>
        </div>
      </div>
      <div className="row">
        <div className="col-12 d-flex justify-content-center text-center">
          <h2 style={style.title}>
            The place where locals and visitors enjoy Barcelona
          </h2>
        </div>
      </div>
      <div className="row">
        <div className="col-12 text-center col-md-6 mx-3" style={style.descriptionMain}>
          <p>
            Inspired by the romantic garden at the palace of Francesc Cambó
            (famous politician from the early 20th century) and by the paintings
            by the modernist artist Ramon Casas, this is possibly the largest,
            most exclusive roof garden in Barcelona, covering an area of 1,500
            m2.
          </p>
          <p>
            A place filled with secret corners, fragrances and colours, and
            inspired by the Barcelona of the 20s in all its splendour. Each
            detail is designed to delight all your senses: ponds, a pool,
            pergolas, babbling water, over fifty varieties of plants, an haute
            cuisine restaurant and a solarium that almost lets you touch the
            clouds.
          </p>
          <p>
            El Palace Barcelona does not end on the seventh floor. One of the
            most exciting places to visit is none other than the rooftop.
          </p>
          <p>
            In this open-air garden, you will find some of the most exciting
            seasonal activities, such as yoga, pilates, master classes and an
            open-air cinema – all of which come with a stunning view of the city
            below.
          </p>
        </div>
        <div className="col-12 text-center col-md-6 mx-3" style={style.descriptionMain}>
          <p>
            An exceptional swimming pool, bar, and restaurant also located here
            to make this space a welcome retreat from the hustle and bustle of
            the city below. For more information, call us at +34 93 510 11 30
          </p>
          <p>*** Opening Hours: ***</p>
          <p>Every day from 10:00 a.m. to 11:00 p.m.</p>
          <div className="bookingSection">
            <p>
              <a href="#">Download our Activity Agenda</a>
            </p>
            <p>
              See all our menus and our menus <a href="#">"HERE"</a>
            </p>
            <button className="bookingButton">BOOK YOUR TABLE</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RooftopGarden;
