import classes from "./Home.module.css";

const Home = () => {
  return (
    <div className={classes.homeText}>
      <h1 className={classes.heroTitle}>Hi, I'm Roman Wu</h1>
      <h2 className={classes.heroSubtitle}>Software Engineer</h2>
      <div className={classes.divider}></div>
      <p className={classes.heroDescription}>Welcome to My Website</p>
    </div>
  );
};

export default Home;
