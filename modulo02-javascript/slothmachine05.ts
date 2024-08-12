class SlothMachine {
  private coin: number = 0;
  constructor() {}
  /**
   * Método que genera de manera aleatoria un numero del 0 al 1, si este es mayor o igual que 0.5
   * devolvemos un true, si es menor false
   * @private
   * @returns boolean
   */
  private getRandomBoolean(): boolean {
    return Math.random() >= 0.5;
  }
  /**
   * Método que genera la simulación de una tragaperras, si el resultado da true, entonces se muestra un mensaje
   * y se pone el contador de monedas a 0
   * Si es falso mostramos mensaje de mala suerte
   * @public
   */
  play(): void {
    // Iniciamos el juego y añadimos una moneda a la maquina
    this.coin++;
    // Generamos los resultados de la maquina
    const results = [this.getRandomBoolean(), this.getRandomBoolean(), this.getRandomBoolean()];
    // Comparamos que todos sean true y mostramos el mensaje por consola
    if (results.every((result) => result)) {
      console.log(`Congratulations!!!. You won ${this.coin} coins!!"`);
      this.coin = 0;
    } else {
      console.log('Good luck next time!!');
    }
  }
}

// Instanciamos la clase
const machine1 = new SlothMachine();
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 3 coins!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!.
