import { Typography } from "antd";
import SearchForm from "../components/SearchForm";
export default function Home() {
  return (
    <>
      <div className="row d-flex">
        <img
          src="/img/hero.png"
          className="col-lg-8 col-md-12 col-sm-12 img-fluid"
          width={10}
          height={500}
        />
        <div className="  d-flex flex-column col-lg-3 justify-content-center align-items-center m-1">
          <h2 className=" font-change display-1 animate__animated animate__zoomIn">
            Job Finder!
          </h2>
          <p className="font-italic text-muted animate__animated animate__zoomIn">
            #1 App to find your next job
          </p>
        </div>
      </div>

      {/* Search form */}
      <SearchForm className="mt-4" />
    </>
  );
}
