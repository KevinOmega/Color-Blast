import { asteroids } from "./asteroids";

export const generateAsteroids = (n) => {
  const ast = [];
  for (let i = 0; i < n; i++) {
    ast[i] = asteroids[Math.floor(Math.random() * asteroids.length)];
  }

  return (
    <>
      {ast.map((item, index) => {
        return (
          <img
            className="asteroid"
            key={index}
            src={item}
            alt="0"
            style={{
              left: `${Math.floor(Math.random() * window.innerWidth - 50)}px`,
              animationDuration: `${Math.floor(Math.random() * 10) + 10}s `,
            }}
          />
        );
      })}
    </>
  );
};
