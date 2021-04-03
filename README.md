# Functions utils to some fields validade

Description:

# Formats:
- function formatRg: format RG in Brazilian style;
- function formatCpf: format CPF in Brazilian style;
- function formatCnpj: format CNPJ in Brazilian style;
- function ageBirthday,: return a age;
- function formatZipcode: format zip code in Brazilian style;
- function formatPhoneNumber,: format phone number, in Brazilian style;

# Checks:
- function checkCpf: return true or false if CPF is valid;
- function checkCnpj: return true or false if CNPJ is valid;
- function checkEmail,: return true or false if eamil is valid;
- function checkPassword,: in this function you can check if password has:
   - password 6 to 18 characters;
   - first letter must uppercase;
   - must be numbers;
   - do not especials characters;

How to use?

```shell
npm install rhk-utils
```

```js
//ES5
const utils {
    size,
    formatRg,
    formatCpf,
    formatCnpj,
    ageBirthday,
    formatZipcode,
    formatPhoneNumber,
    checkCpf,
    checkCnpj,
    checkEmail,
    checkPassword
} require("fm-radios");

//format
const cpf = formatCpf("86350213041");
console.log(cpf);

//check
const cpf = checkCpf("86350213041");
console.log(cpf);

//ES6
import {
    size,
    formatRg,
    formatCpf,
    formatCnpj,
    ageBirthday,
    formatZipcode,
    formatPhoneNumber,
    checkCpf,
    checkCnpj,
    checkEmail,
    checkPassword
} from "fm-radios";

//format
const cpf = formatCpf("86350213041");
console.log(cpf);

//check
const cpf = checkCpf("86350213041");
console.log(cpf);

```
