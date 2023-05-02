# password-generator
This JavaScript function generates a random password of a specified number of digits.

Usage
To use the function, call passwordGenerator(number) and replace number with the desired number of digits for your password. For example:
```
var password = passwordGenerator(8);
console.log(password); // Output: 18435672
```
How it works
The function uses a for loop to generate a random number between 0 and 9 for each digit of the password. The random number is converted to a string and added to the password variable. Finally, the function returns the password variable as a number.

Limitations
The function only generates passwords using digits from 0 to 9. It does not include letters or special characters.
The function does not check for password strength, such as avoiding common patterns or ensuring a mix of uppercase and lowercase letters, numbers, and symbols.
