class Statistics {
    constructor(nameGame) {
        this.nameGame = nameGame;
    }

    renderStatTrainingGame() {
        const statInfo = document.createElement('div');
        statInfo.className = 'stat-info';
        statInfo.innerHTML = `
        <div class="stat-title">
            <h2>Название игры: <span class="stat-gameName">${this.nameGame}</span></h2>
            <p>Оценка дневной и долгосрочной статистики обучения</p>
        </div>
        <div class="stat-schedule">
            <canvas width="500" height="500" id="canvas"></canvas>
        </div>
        `;

        return statInfo;
    }

    renderStatMiniGame() {
        const statInfo = document.createElement('div');
        statInfo.className = 'stat-info';
        statInfo.innerHTML = `
        <div class="stat-title">
            <h2>Название игры: <span class="stat-gameName">${this.nameGame}</span></h2>
            <p>Здесь вы можете увидеть результаты последних 5 игр </p>
        </div>
        <div class="stat-schedule">
            <canvas width="500" height="500" id="canvas"></canvas>
        </div>
        `;

        return statInfo;
    }
}

export default Statistics;