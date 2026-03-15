import User from "../models/user.model.js";

const createUser = async(req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.json({
            message: "user saved",
            data: newUser,
        })
    } catch (error) {
        res.status(500).json({
            error: error.message,
        })
    }
}

const getUser = async(req, res) => {
    const user = await User.find();
    res.json({
        message: "Fetched all users Successfully",
        data: user,
    })
}

const getUserById = async(req, res) => {
    const user = await User.findById(req.params.id);
    res.json({
        message: "User Found",
        data: user,
    })
}

const updateUser = async(req, res) => {
    const updateduser = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});

    res.json({
        message: "User updated successfully",
        data: updateduser,
    })
};

const deleteUser = async(req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json({
        message: "User delted",
    })
}

const getUsers = async (req, res, next) => {
  try {
    throw new Error("Testing error middleware");
  } catch (error) {
    next(error);
  }
};

export {createUser, getUser ,getUserById, updateUser, deleteUser, getUsers};