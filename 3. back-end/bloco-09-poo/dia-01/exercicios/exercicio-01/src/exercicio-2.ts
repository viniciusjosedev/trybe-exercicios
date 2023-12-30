class Cliente {
	nome: string;
}

class ItemPedido {
	nome: string;
	preco: number;
}

class Pedido {
	cliente: Cliente;
	itensConsumidos: {nome: string, preco: number}[];
	formaDePagamento: string;
	descontos?: number;

	constructor(
		client: Cliente, 
		itensConsumidos: {nome: string, preco: number}[], 
		formaDePagamento: string,
		) {
		this.cliente = client;
		this.itensConsumidos = itensConsumidos;
		this.formaDePagamento = formaDePagamento;
		}

	totalPedido(){
		let total = 0
		this.itensConsumidos.forEach((e) => total += e.preco);

		return total;
	}

	total(descontos: number){
		this.descontos = descontos;

		let total = 0
		this.itensConsumidos.forEach((e) => total += e.preco);

		return total - (total* (descontos/100));
	}
}


