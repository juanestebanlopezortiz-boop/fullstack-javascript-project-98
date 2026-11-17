#!/usr/bin/env node
import laBienvenida from "../src/cli.js";
import playPrimeGame from "../src/games/prime.js";

const name = laBienvenida();
playPrimeGame(name);
