import * as request from 'request-promise';
import { exec } from 'child_process';

const ApiUrl = 'https://yukicoder.me/api/v1';
const userId = parseInt(process.argv[2]);

interface Problem {
    ProblemId: number
}

async function select() {
    const response = await request.get({ url: `${ApiUrl}/solved/id/${userId}` });
    const problems: Problem[] = JSON.parse(response);

    const selectedIndex = Math.floor(Math.random() * problems.length);
    const selectedProblem = problems[selectedIndex];

    exec(`open https://yukicoder.me/problems/no/${selectedProblem.No}`);
}

select();