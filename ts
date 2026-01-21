import { ConsoleInterface } from './car-catalog';

const main = async (): Promise<void> => {
    const app = new ConsoleInterface();
    
    // Обработка Ctrl+C
    process.on('SIGINT', () => {
        console.log('\n\n👋 Приложение завершено.');
        app.close();
        process.exit(0);
    });

    try {
        await app.run();
    } catch (error) {
        console.error('❌ Критическая ошибка:', error);
        app.close();
        process.exit(1);
    }
};

// Запуск приложения
main();
