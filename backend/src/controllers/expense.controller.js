import expense from "../models/expense.model.js";

export const addExpense = async (req, res) => {
  const { title, amount, category, description, date } = req.body;

  const newExpense = new expense({
    title,
    amount,
    category,
    description,
    date
  });

  try {
    //validations
    if (!title || !amount || !category || !description || !date)
      return res.status(400).json({ message: "All fields are required" });

    if (amount <= 0 || !amount === "number")
      return res.status(400).json({
        message: "Amount must be a positive number"
      });
    await newExpense.save();
    res.status(200).json({
      message: "Expense added successfully"
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getExpenses = async (req, res) => {
  try {
    const expenses = await expense.find().sort({
      createdAt: -1
    });
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteExpense = async (req, res) => {
  const { id } = req.params;
  await expense
    .findByIdAndDelete(id)
    .then((expense) => {
      res.status(200).json({
        message: "Expense deleted successfully"
      });
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
};
