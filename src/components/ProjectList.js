import stockTrainerImage from './images/stock-trainer.png'
import faceTrackerImage from './images/face-tracker.png'
import expenseLoggerImage from './images/expense-logger.png'

export const ProjectList = [
    {
      name: "Stock Trainer",
      description: `Stock trainer is a realistic stock market trading game that makes use of real time stock
      data to allow users to buy and sell with in-game currency. Algorithm are employed to simulate real trading`,
      image: stockTrainerImage,
      githubFront: 'https://github.com/skarimo/stock-trainer-frontend',
      githubBack: 'https://github.com/skarimo/stock-trainer-backend'
    },
    {
      name: "Expense Logger",
      description: `A web application designed to keep log of users expense history as well as keep track money exchanges between users.`,
      image: expenseLoggerImage,
      githubFront: 'https://github.com/skarimo/expense-logger-frontend',
      githubBack: 'https://github.com/skarimo/expense-logger-backend'
    },
    {
      name: "Face Tracker",
      description: `Allows user to keep track of their emotions and skin health through use of facial analysis.`,
      image: faceTrackerImage,
      githubFront: 'https://github.com/skarimo/dft-frontend',
      githubBack: 'https://github.com/skarimo/dft-backend'
    }
  ]
