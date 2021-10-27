function colorConsoleLog(funName, string) {
  if (funName && string) {
    console.log(
      `%c${funName}:%c${string}`,
      `border:2px solid skyblue;border-radius:15px; padding:5px;font-size:1.5rem;background:limegreen;color:blue`,
      `border:2px solid skyblue;border-radius:15px; padding:5px;font-size:1.5rem;background:yellow;color:red`
    );
  }
  if (funName && !string) {
    console.log(
      `%c${funName}`,
      `border:2px solid skyblue;border-radius:15px; padding:5px;font-size:1.5rem;background:yellow;color:red`
    );
  }
}

module.exports = colorConsoleLog;
