export function logarTempoDeExecucao(emSegundos = false) {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            const divisor = 1;
            const unidade = 'milisegundos';
            if (emSegundos) {
                const divisor = 1000;
                const unidade = 'segundos';
            }
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`${propertyKey}, tempo de execução: ${(t2 - t1) / divisor} em ${unidade}!`);
            retorno;
        };
        return descriptor;
    };
}
