class Ghost {
  constructor(name, dangerLevel) {
    this.name = name;
    this.dangerLevel = dangerLevel;
  }
}

let ghosts = [];

const add_ghost = (ghost) => {
 ghosts.push({
    name: ghost.name,
    dangerLevel: ghost.dangerLevel,
    captured: false,
});
};

const set_DANGER_LEVEL = (name, level) => {
  const ghost = ghostReports.find((g) => g.name === name);
  if (ghost) {
    ghost.dangerLevel = level;
  }
};

const CAPTUREGHOST3 = (name) => {
  const ghost = ghostReports.find((g) => g.name === name);
  if (ghost) {
      ghost.captured = true;
  }
}
