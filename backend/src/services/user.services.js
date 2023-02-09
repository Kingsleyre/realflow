const db = require('../config/database');
const bcrypt = require('bcrypt');

// create user
exports.createUser = async (body) => {
  const { full_name, email, password, confirm_password } = body;

  // check if passwords match
  if (password !== confirm_password) {
    throw new Error('Passwords do not match');
  }

  // validate against empty fields
  if (!full_name || !email || !password || !confirm_password) {
    throw new Error('Please fill in all fields');
  }

  // check if email exists
  const checkEmail = await db.query('SELECT * FROM users WHERE email = $1', [
    email,
  ]);

  if (checkEmail.rows.length > 0) {
    throw new Error('Email already exists');
  }

  // hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  const { rows } = await db.query(
    'INSERT INTO "users" (full_name, email, password) VALUES ($1, $2, $3) RETURNING *',
    [full_name, email, hashedPassword]
  );

  return rows;
};

// fetch all users
exports.fetchAllUsers = async () => {
  const { rows } = await db.query('SELECT * FROM users');
  return rows;
};

// fetch user by id
exports.fetchUserById = async (id) => {
  const { rows } = await db.query('SELECT * FROM users WHERE id = $1', [id]);
  return rows[0];
};

// edit user
exports.editUser = async (id, body) => {
  const { full_name, email } = body;

  // validate against empty fields
  if (!full_name || !email) {
    throw new Error('Please fill in all fields');
  }

  const { rows } = await db.query(
    'UPDATE users SET full_name = $1, email = $2 WHERE id = $3 RETURNING *',
    [full_name, email, id]
  );

  return rows;
};

// delete user
exports.deleteUser = async (id) => {
  const { rows } = await db.query('DELETE FROM users WHERE id = $1', [id]);
  return rows;
};
