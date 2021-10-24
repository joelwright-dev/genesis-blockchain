class TransactionPool {
    constructor() {
        this.transactions = []
    }

    updateOrAddTransaction(transaction) {
        let transactionWithId = this.transactions.find(t => t.id === transaction.id)

        if(transactionWithId) {
            this.transaction[this.transactions.indexOf(transactionWithId)] = transaction
        }
    }
}