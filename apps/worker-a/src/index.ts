import WorkerB from '../../worker-b/src';

interface Env {
	WORKER_B: Service<InstanceType<typeof WorkerB>>;
}

export default {
	async fetch(request, env, ctx): Promise<Response> {
		const workerAMessage = 'Hello World from worker-a!';
		const workerBResponse = await env.WORKER_B.sayHello();

		if (!workerBResponse.ok) {
			console.error('Failed to fetch worker-b');
			return new Response('Failed to fetch worker-b', { status: 500 });
		}

		const workerBMessage = await workerBResponse.text();

		return new Response(`${workerAMessage}\n` + `${workerBMessage}\n`);
	},
} satisfies ExportedHandler<Env>;
