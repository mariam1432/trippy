import "./Hero.css";
function Hero({ cName, bgImg, title, description, url, btnClass, btnText }) {
  return (
    <div className={cName}>
      <img alt="img" src={bgImg} />
      <div className="hero-text">
        <h1>{title}</h1>
        <p>{description}</p>
        {btnText ? (
          <a href={url} className={btnClass}>
            {btnText}
          </a>
        ) : null}
      </div>
    </div>
  );
}
export default Hero;
