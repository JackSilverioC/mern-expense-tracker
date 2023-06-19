import income from "../models/income.model.js";

export const addIncome = async (req, res) => {
  const { title, amount, category, description, date } = req.body;

  const newIncome = new income({
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
    await newIncome.save();
    res.status(200).json({
      message: "Income added successfully"
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getIncomes = async (req, res) => {
  try {
    const incomes = await income.find().sort({
      createdAt: -1
    });
    res.status(200).json(incomes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteIncome = async (req, res) => {
  const { id } = req.params;
  await income
    .findByIdAndDelete(id)
    .then((income) => {
      res.status(200).json({
        message: "Income deleted successfully"
      });
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
};
