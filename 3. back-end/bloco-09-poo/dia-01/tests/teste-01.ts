class Tv {
	brand: string;
	size: string;
	resolution: number;
	connections: string;
	connectedTo?: string;

	constructor(brand: string, size: string, resolution: number, connections: string) {
		this.brand = brand;
		this.size = size;
		this.resolution = resolution;
		this.connections = connections;
		console.log('Construido');
	}

	turnOn() {
		console.log(this.brand, this.size, this.resolution, this.connections);
	}
}

const client1 = new Tv('teste', '12px', 1080, 'hdmi');
console.log(client1);
client1.turnOn()



