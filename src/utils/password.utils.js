export const getStrengthText = (passwordStrength) => {
  if (passwordStrength === 0) return "";
  if (passwordStrength <= 2) return "Weak";
  if (passwordStrength <= 4) return "Medium";
  return "Strong";
};

export const getStrengthBackgroundColor = (passwordStrength) => {
  if (passwordStrength === 0) return "bg-gray-200";
  if (passwordStrength <= 2) return "bg-red-500";
  if (passwordStrength <= 4) return "bg-yellow-500";
  return "bg-green-500";
};

export const getStrengthColor = (passwordStrength) => {
  if (passwordStrength === 0) return "text-gray-200";
  if (passwordStrength <= 2) return "text-red-500";
  if (passwordStrength <= 4) return "text-yellow-500";
  return "text-green-500";
};

export const calculatePasswordStrength = (password) => {
  let strength = 0;
  if (password.length > 0) strength += 1;
  if (password.length >= 8) strength += 1;
  if (/[A-Z]/.test(password)) strength += 1;
  if (/[0-9]/.test(password)) strength += 1;
  if (/[^A-Za-z0-9]/.test(password)) strength += 1;
  return strength;
};
