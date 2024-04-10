// StudyProgress.jsx
import React, { useState } from 'react';

const StudyProgress = () => {
  // Sample data for goals and checkpoints
  const [goals, setGoals] = useState([
    {
      id: 1,
      title: 'Learn React',
      checkpoints: [
        { id: 1, title: 'Complete React tutorial', completed: false },
        { id: 2, title: 'Build a small React app', completed: false },
        { id: 3, title: 'Deploy React app', completed: false }
      ]
    },
    {
      id: 2,
      title: 'Learn JavaScript',
      checkpoints: [
        { id: 1, title: 'Complete JavaScript basics', completed: false },
        { id: 2, title: 'Practice JavaScript exercises', completed: false },
        { id: 3, title: 'Build a project using JavaScript', completed: false }
      ]
    }
    // Add more goals as needed
  ]);

  // Function to handle checkpoint completion
  const handleCheckpointComplete = (goalId, checkpointId) => {
    const updatedGoals = goals.map(goal => {
      if (goal.id === goalId) {
        const updatedCheckpoints = goal.checkpoints.map(checkpoint => {
          if (checkpoint.id === checkpointId) {
            return { ...checkpoint, completed: true };
          }
          return checkpoint;
        });
        return { ...goal, checkpoints: updatedCheckpoints };
      }
      return goal;
    });
    setGoals(updatedGoals);
  };

  // Calculate progress for each goal
  const calculateGoalProgress = (goal) => {
    const totalCheckpoints = goal.checkpoints.length;
    const completedCheckpoints = goal.checkpoints.filter(checkpoint => checkpoint.completed).length;
    return (completedCheckpoints / totalCheckpoints) * 100;
  };

  return (
    <div>
      <h2>Study Progress</h2>
      {goals.map(goal => (
        <div key={goal.id}>
          <h3>{goal.title}</h3>
          <div>
            {goal.checkpoints.map(checkpoint => (
              <div key={checkpoint.id}>
                <input
                  type="checkbox"
                  checked={checkpoint.completed}
                  onChange={() => handleCheckpointComplete(goal.id, checkpoint.id)}
                />
                <label>{checkpoint.title}</label>
              </div>
            ))}
          </div>
          <progress value={calculateGoalProgress(goal)} max="100" />
        </div>
      ))}
    </div>
  );
};

export default StudyProgress;
