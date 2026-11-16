#!/usr/bin/env node
import laBienvenida from "../src/cli.js";
import playCalcGame from "../src/games/calc.js";

const name = laBienvenida();
playCalcGame(name);
