import headShot from './JoelHiltonHeadshot.jpg';

const Home = () => {
  return (
    <div className="row">
      <div className="d-flex justify-content-center flex-column align-items-center">
        <h1>Welcome to my media collection!</h1>
        <p>
          This webiste has links to my podcast, and shows all of the movies I
          have viewed and reviewed. Feel free to look around
        </p>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <img src={headShot} alt="Joel Hilton Headshot" />
      </div>
    </div>
  );
};

export default Home;
