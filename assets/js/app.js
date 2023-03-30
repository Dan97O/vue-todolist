/* 

Rifare l'esercizio della to do list. Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
text, una stringa che indica il testo del todo
done, un booleano (true/false) che indica se il todo è stato fatto oppure no
MILESTONE 1
Stampare all'interno di una lista HTML un item per ogni todo. Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
Bonus:
oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)

*/


const {createApp} = Vue;
createApp({
  data() {
    return {
      newTask:'',
      error: null,
      completed: [],
      tasks: [
        {
          text:'Learn HTML',
          done: true,
        },
           {
          text:'Learn CSS',
          done: false,
        },
        {
          text:'Learn JS',
          done: false,
        },
        {
          text:'Learn PHP',
          done: true,
        },
      ]
    }
    
  },
  methods: {
    addTasks(){

      if (this.newTask.length >= 5) { 
        this.tasks.unshift(this.newTask)
        this.newTask = '' 
        this.error = null
      } else {
        this.error = 'La lunghezza della task deve essere almeno di 5 caratteri!'
      }
    },

    completeTask(i){
      /* pusho quelle eliminate in un array completato */
      this.completed.push(this.tasks[i])
      /* splice rimuove */
      this.tasks.splice(i, 1)
    }
  }

}).mount('#app')