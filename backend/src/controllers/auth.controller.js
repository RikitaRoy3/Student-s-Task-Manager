import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { ENV } from "../lib/env.js";
import { generateToken } from "../lib/generatetoken.js";