const comparePassword = async (password, hashedPasswordToCompare) => {
  return (password === hashedPasswordToCompare)
}

module.exports = {
  comparePassword
}