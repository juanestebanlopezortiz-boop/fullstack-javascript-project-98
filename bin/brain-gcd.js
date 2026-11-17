#!/usr/bin/env node
import laBienvenida from "../src/cli.js";
import playGcdGame from "../src/games/gcd.js";

const name = laBienvenida();
playGcdGame(name);
