import express from "express";
import { createUser, getUser, getUserById, updateUser, deleteUser, getUsers } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/user", createUser);
router.get("/users", getUser);
router.get("/user/:id", getUserById);
router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);
router.get("/error", getUsers);

export default router;