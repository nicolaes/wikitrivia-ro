import React from "react";
import { animated, useSpring } from "react-spring";
import styles from "../styles/game-over.module.scss";
import Button from "./button";
import Score from "./score";

interface Props {
  highscore: number;
  resetGame: () => void;
  score: number;
}

const defaultShareText = "Distribuie";

function getMedal(score: number): string {
  if (score >= 20) {
    return "🥇 ";
  } else if (score >= 10) {
    return "🥈 ";
  } else if (score >= 1) {
    return "🥉 ";
  }
  return "";
}

export default function GameOver(props: Props) {
  const { highscore, resetGame, score } = props;

  const animProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 500 },
  });

  const [shareText, setShareText] = React.useState(defaultShareText);

  const share = React.useCallback(async () => {
    await navigator?.clipboard?.writeText(
      `🏛️ wikitrivia.ro\n\n${getMedal(
        score
      )}Scor: ${score}\n${getMedal(highscore)}Cel mai bun scor: ${highscore}`
    );
    setShareText("Copiat");
    setTimeout(() => {
      setShareText(defaultShareText);
    }, 2000);
  }, [highscore, score]);

  return (
    <animated.div style={animProps} className={styles.gameOver}>
      <div className={styles.scoresWrapper}>
        <div className={styles.score}>
          <Score score={score} title="Scor" />
        </div>
        <div className={styles.score}>
          <Score score={highscore} title="Cel mai bun scor" />
        </div>
      </div>
      <div className={styles.buttons}>
        <Button onClick={resetGame} text="Joc nou" />
        <Button onClick={share} text={shareText} minimal />
      </div>
    </animated.div>
  );
}
