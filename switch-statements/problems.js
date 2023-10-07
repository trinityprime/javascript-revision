//  Q1

const food = "Sushi";

const checkFood = (consume) => {
  switch (consume) {
    case "Fish": {
      console.log("Fishy...");
      break;
    }
    case "Hummus": {
      console.log("Want chips with that?");
      break;
    }
    case "Sushi": {
      console.log("With or without seaweed?");
      break;
    }
    default: {
      console.log("Sorry, not in our database.");
      break;
    }
  }
};

checkFood(food);

//  Q2

const activities = ["Swimming", "Rock Climbing", "Hiking", "Biking", "Running"];

const loopActivity = (activities) => {
  for (const activity of activities) {
    switch (activity) {
      case "Swimming": {
        console.log("Like a fish!");
        break;
      }
      case "Rock Climbing": {
        console.log("Like a mountain goat!");
        break;
      }
      case "Running": {
        console.log("Like a cheetah!");
        break;
      }
      default: {
        console.log("I'm sure another animal does that...");
        break;
      }
    }
  }
};

loopActivity(activities);

//  Q3

const enemies = {
  rat: { atk: 3, def: 3, hp: 20, class: 1 },
  goblin: { atk: 10, def: 6, hp: 50, class: 1 },
  troll: { atk: 30, def: 20, hp: 200, class: 2 },
  giant: { atk: 50, def: 40, hp: 500, class: 2 },
  hobgoblin: { atk: 80, def: 10, hp: 100, class: 3 },
};

const enemyDifficulty = (enemies) => {
  for (const enemy in enemies) {
    switch (enemies[enemy].class) {
      case 1: {
        console.log("This will be an easy fight!");
        break;
      }
      case 2: {
        console.log("This will require some preparation...");
        break;
      }
      default: {
        console.log("This has not been implemented yet...");
        break;
      }
    }
  }
};

enemyDifficulty(enemies);

 Q4

const points = [3, 4, 1, 0, 1, 5, 6, 10];

const pointScoring = (points) => {
  for (const point of points)
    switch (point) {
      case 0:
      case 1:
      case 2: {
        console.log("Good try!");
        break;
      }
      case 3:
      case 4:
      case 5: {
        console.log("Very well done!");
        break;
      }
      default: {
        console.log("Wow, shooting for the moon!");
        break;
      }
    }
};

pointScoring(points);
