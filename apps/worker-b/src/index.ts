import { WorkerEntrypoint } from 'cloudflare:workers';

export default class WorkerB extends WorkerEntrypoint {
	async sayHello() {
		return new Response('Hello World from worker-b!');
	}
}
