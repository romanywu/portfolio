import { useEffect, useState } from "react";
import classes from "./Skills.module.css";
import Skill from "../../../models/skill";
import Loading from "../../others/Loading/Loading";

/**
 * Skills Component
 *
 * This component fetches and displays a list of programming languages, frameworks, technologies, and stacks.
 * It uses React hooks (`useState` and `useEffect`) for state management and CSS modules for styling.
 *
 * The component includes the following state variables:
 * - 'pLanguages': Programming languages (array of Skill objects).
 * - 'frameworks': Frameworks (array of Skill objects).
 * - 'technologies': Technologies (array of Skill objects).
 * - 'stacks': Tech stacks (array of Skill objects).
 * - 'loading': Boolean indicating whether data is currently being fetched.
 * - 'error': Boolean indicating whether an error occurred while fetching data.
 *
 * The data is fetched from 'data/skills.json' when the component mounts.
 * Based on the state, the component conditionally renders:
 * - Error message if fetching fails.
 * - Loading spinner while fetching.
 * - Lists of skills (programming languages, frameworks, technologies, and stacks) once the data is loaded.
 */
const Skills = () => {
  const [pLanguages, setPLanguages] = useState([] as Skill[]);
  const [frameworks, setFrameworks] = useState([] as Skill[]);
  const [technologies, setTechnologies] = useState([] as Skill[]);
  const [stacks, setStacks] = useState([] as Skill[]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("data/skills.json")
      .then((res) => res.json())
      .then((data) => {
        setPLanguages(data.programming_languages);
        setFrameworks(data.frameworks);
        setTechnologies(data.technologies);
        setStacks(data.stacks);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (error) {
    return (
      <>
        <h4 className={classes.contentTitle}>Skills</h4>
        <p className={classes.justify}>
          Sorry, we couldn't load the information. Please, try again later.
        </p>
      </>
    );
  }

  if (loading) {
    return (
      <>
        <h4 className={classes.contentTitle}>Skills</h4>
        <Loading />
      </>
    );
  }

  return (
    <>
      <h4 className={classes.contentTitle}>Skills</h4>
      <div className={classes.skills}>
      <ul>
          {pLanguages.map((language) => (
            <li key={language.name}>
              <img
                className={classes.logo}
                src={language.logo}
                alt={language.name}
              />
              {language.name}
            </li>
          ))}
        </ul>

        <ul>
          {frameworks.map((framework) => (
            <li key={framework.name}>
              <img
                className={classes.logo}
                src={framework.logo}
                alt={framework.name}
              />
              {framework.name}
            </li>
          ))}
        </ul>
        <ul>
          {technologies.map((technology) => (
            <li key={technology.name}>
              <img
                className={classes.logo}
                src={technology.logo}
                alt={technology.name}
              />
              {technology.name}
            </li>
          ))}
        </ul>
        <ul>
          {stacks.map((stacks) => (
            <li key={stacks.name}>
              <img
                className={classes.logo}
                src={stacks.logo}
                alt={stacks.name}
              />
              {stacks.name}
            </li>
          ))}
        </ul>

      </div>
    </>
  );
};

export default Skills;
