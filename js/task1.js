// Вам потрібно реалізувати функцію performBankOperations, яка приймає об'єкт з балансом рахунку та callback-функцію, яка виконує різні банківські операції, а саме: покалсти гроші на рахунок та зняти гроші з рахунку. Функції з банківськими  операціями  є колбеками


function performBankOperations(account, callback) {
  
  
    while (true) {
      const operation = prompt("Введіть операцію (покласти/зняти): ").toLowerCase();
      const amount = parseFloat(prompt("Введіть суму: "));
  
      if (!["покласти", "зняти"].includes(operation)) {
        alert("Невідома операція.");
        continue;
      }
  
      if (operation === "покласти") {
        callback(account, "покласти", amount);
        account.balance += amount;
      } else if (operation === "зняти") {
        if (amount > account.balance) {
          alert("Недостатньо коштів.");
          continue;
        }
        callback(account, "зняти", amount);
        account.balance -= amount;
      }
  
      alert(`Баланс рахунку: ${account.balance.toFixed(2)}`);
  
      const answer = prompt("Продовжити? (так/ні): ").toLowerCase();
      if (!["так", "ні"].includes(answer)) {
        alert("Невідома відповідь.");
        continue;
      } else if (answer === "ні") {
        break;
      }
    }
  }
  function printOperation(account, operation, amount) {
    
    console.log(`Виконано операцію: ${operation}, сума: ${amount.toFixed(2)}`);
    console.log(`Номер рахунку: ${account.number}`);
    console.log(`Новий баланс: ${account.balance.toFixed(2)}`);
  }
  
  const account = {
    number: "1234567890",
    balance: 1000.0,
  };
  
  performBankOperations(account, printOperation);
  