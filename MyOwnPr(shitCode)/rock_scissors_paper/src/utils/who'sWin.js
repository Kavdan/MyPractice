export const whosWin = (userChoice, AiChoice, state) => {
           const arr = ['paper', 'scissors', 'rock'];
           const [user, ai] = [arr.indexOf(userChoice) + 1, arr.indexOf(AiChoice) + 1]
           if (user === 1 && ai === 3) {
                state.userScore++;
                return;
           }
           if(user === 3 && ai === 1) {
               state.AIScore++;
               return;
           }
           else if (user === ai) return;
           if (user > ai) state.userScore++;
           else state.AIScore++;

}