const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");
const circle = document.querySelector("#circle");

const perimeter = circle.getAttribute("r") * 2 * Math.PI;
circle.setAttribute("stroke-dasharray", perimeter);
circle.setAttribute("stroke-dashoffset", 0);

let currentOffset = 0;
const timer = new Timer(
  durationInput,
  startButton,
  pauseButton,
  (onStart = (duration) => {
    this.duration = duration;
  }),
  (onTick = (timeRemaining) => {
    console.log("Timer ticked");
    circle.setAttribute(
      "stroke-dashoffset",
      (perimeter * timeRemaining) / duration - perimeter
    );
  }),
  (onComplete = () => {
    console.log("Timer complete");
  })
);
