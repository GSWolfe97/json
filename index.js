const chalk = require('chalk');

console.log(chalk.blue('I recently got a bearded dragon named ')+ chalk.rgb(255, 136, 0)('Oscar.'));
console.log(chalk.blue('He is pretty ') + chalk.magenta('small') + chalk.blue(', but, he eats ') + chalk.bold.red('A LOT.'));
console.log(chalk.blue('During the day he needs his ') + chalk.black.bgRed('heat lamp') + chalk.blue(' to stay nice and') + chalk.red.bold(' hot.'));
console.log(chalk.blue('At') + chalk.gray(' night') + chalk.blue(', he likes to sleep up in his') + chalk.green(' vine ') + chalk.blue('or inside his') + chalk.gray(' cave.'));