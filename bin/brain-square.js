#!/usr/bin/env node
import laBienvenida from "../src/cli.js";
import playSquareGame from "../src/games/square.js";

const name = laBienvenida();
playSquareGame(name);
