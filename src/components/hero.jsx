import "./hero.css";

function Hero(props) {
  return (
    <div className="hero__card">
      <div className="hero__name">{props.name}</div>
      <img src={props.photo} alt="img" />
      <div className="hero__info">
        <div className="hero__universe">Вселенная:{props.universe}</div>
        <div className="hero__alterego">Альтер эго:{props.alterego}</div>
        <div className="hero__occupation">
          Род деятельности:{props.occupation}
        </div>
        <div className="hero__friends">Друзья:{props.friends}</div>
        <div className="hero__superpower">Суперсилы:{props.superpower}</div>
      </div>
    </div>
  );
}

export default Hero;
