#!/usr/bin/env node
import laBienvenida from "../src/cli.js";
import playEvenGame from "../src/games/even.js";

const name = laBienvenida();
playEvenGame(name);
