class Timer {
  constructor(
    durationInput,
    startButton,
    pauseButton,
    onStart,
    onTick,
    onComplete
  ) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;
    if (onStart) this.onStart = onStart;
    if (onTick) this.onTick = onTick;
    if (onComplete) this.onComplete = onComplete;

    this.startButton.addEventListener("click", this.start);
    this.pauseButton.addEventListener("click", this.pause);
  }

  start = () => {
    this.tick;
    this.interval = setInterval(this.tick, 10);
    if (this.onStart) this.onStart();
  };

  tick = () => {
    const timeLeft = this.timeRemaining;
    this.timeRemaining -= 0.01;
    if (this.onTick) this.onTick();
    if (!this.timeRemaining) {
      this.pause();
      if (this.onComplete) this.onComplete();
    }
  };

  pause = () => {
    clearInterval(this.interval);
  };

  get timeRemaining() {
    return parseFloat(this.durationInput.value);
  }

  set timeRemaining(time) {
    this.durationInput.value = time.toFixed(2);
  }
}
