document.getElementById("darkModeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

document.getElementById("generateButton").addEventListener("click", () => {
  const length = parseInt(document.getElementById("passwordLength").value);
  const count = parseInt(document.getElementById("passwordCount").value);
  const fileName = document.getElementById("fileName").value || "passwords";
  const includeAlphabet = document.getElementById("includeAlphabet").checked;
  const includeNumeric = document.getElementById("includeNumeric").checked;
  const includeSymbols = document.getElementById("includeSymbols").checked;

  if (!includeAlphabet && !includeNumeric && !includeSymbols) {
    alert("Please select at least one character type.");
    return;
  }

  const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numeric = "0123456789";
  const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";
  let characters = "";

  if (includeAlphabet) characters += alphabet;
  if (includeNumeric) characters += numeric;
  if (includeSymbols) characters += symbols;

  const generatePassword = (length) => {
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }
    return password;
  };

  let passwords = "";
  for (let i = 0; i < count; i++) {
    passwords += generatePassword(length) + "\n";
  }

  document.getElementById("passwordOutput").textContent = passwords;
  document.getElementById("saveButton").style.display = "inline-block";
  document.getElementById("saveButton").dataset.passwords = passwords;
});

document.getElementById("saveButton").addEventListener("click", () => {
  const passwords = document.getElementById("saveButton").dataset.passwords;
  const fileName = document.getElementById("fileName").value || "passwords";

  const blob = new Blob([passwords], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${fileName}.txt`;
  a.click();
  URL.revokeObjectURL(url);
});
document.getElementById('generateButton').addEventListener('click', () => {
    // ... existing code ...
    document.getElementById('passwordPreview').innerHTML = passwords.replace(/\n/g, '<br>');
});
