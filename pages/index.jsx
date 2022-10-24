import  Carousel from "../components/carousel"
import Footer from "../components/footer";
export default function Home() {
  return (
    <>
    <div>
      <div className="container d-flex flex-column justify-content-between main fixed-top">
        <div className="p-2 " id="section1">
          <div className="text-center">
            <h3>
              <strong>Website Name</strong>
            </h3>
          </div>
        </div>

        <div className="p-2 " id="section2">
          <Carousel/>
        </div>

        <div
          className="d-flex flex-column justify-content-between p-2 "
          id="section3"
        >
          <div className="text-center p-2">
            <h3>Why Student Counseling!</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
              minus illum labore aperiam quibusdam. Culpa placeat in ipsum
              error, sit cupiditate veritatis, provident molestias voluptatem
              nesciunt veniam eaque minima deserunt!
            </p>
          </div>
          <button className="btn btn-primary start-button align-self-center p-2">
            Get Started
          </button>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}
