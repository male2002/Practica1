class Ghost {
  constructor(name, dangerLevel) {
    this.name = name;
    this.dangerLevel = dangerLevel;
  }
}

let ghosts = [];

const create_ghost = (ghost) => {
  // TODO: addGhost
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
