#!/usr/bin/env node
import laBienvenida from "../src/cli.js";
import playProgressionGame from "../src/games/progression.js";

const name = laBienvenida();
playProgressionGame(name);
