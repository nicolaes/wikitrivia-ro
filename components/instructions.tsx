import React from "react";
import GitHubButton from "react-github-btn";
import styles from "../styles/instructions.module.scss";
import Button from "./button";
import Score from "./score";

interface Props {
  highscore: number;
  start: () => void;
}

export default function Instructions(props: Props) {
  const { highscore, start } = props;

  return (
    <div className={styles.instructions}>
      <div className={styles.wrapper}>
        <h2>Așează cartonașele în ordine cronologică.</h2>
        {highscore !== 0 && (
          <div className={styles.highscoreWrapper}>
            <Score score={highscore} title="Cel mai bun scor" />
          </div>
        )}
        <Button onClick={start} text="Începe jocul" />
        <div className={styles.about}>
          <div>
            Toate datele preluate din{" "}
            <a
              href="https://www.wikidata.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Wikidata
            </a>{" "}
            și{" "}
            <a
              href="https://www.wikipedia.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Wikipedia
            </a>
            .
            Jocul original creat de{" "}
            <a
                href="https://github.com/tom-james-watson/wikitrivia"
                target="_blank"
                rel="noopener noreferrer"
            >
              Tom Watson
            </a>
            .
          </div>
          <div>
            Ai feedback? Postează-l pe{" "}
            <a
              href="https://github.com/nicolaes/wikitrivia-ro/issues/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            .
          </div>
          <GitHubButton
            href="https://github.com/nicolaes/wikitrivia-ro"
            data-size="large"
            data-show-count="true"
            aria-label="Star nicolaes/wikitrivia-ro on GitHub"
          >
            Star
          </GitHubButton>
        </div>
      </div>
    </div>
  );
}
