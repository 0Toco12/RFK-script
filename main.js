const { Console } = require('console');
const express = require('express');
const { write } = require('fs');
const { title } = require('process');
const puppeteer = require('puppeteer');
var resemble = require('resemblejs');
const fs = require('fs');
const { pseudoRandomBytes } = require('crypto');
const { pipeline } = require('stream');

const EMAIL = process.env.EMAIL;
const SENHA = process.env.SENHA;

const app = express();
const port = 5501;

app.listen(port, () => {
    console.log(`Servidor em execução em http://localhost:${port}`);
});

async function funcaoAsync() {
    let browser;
    let page;
    let url;
    try {
        // browser = await puppeteer.launch({
        //     headless: false,
        //     args: ['--start-fullscreen']
        // });
        // page = await browser.newPage();

        // url = 'https://onedrive.live.com/edit.aspx?resid=231435C3B93DD1FB!1152&cid=231435c3b93dd1fb&CT=1695255808361&OR=ItemsView';

        // await page.goto(url, { waitUntil: 'networkidle2' });
        // await page.waitForTimeout(5000);
        // await page.keyboard.type(EMAIL);
        // await page.keyboard.press('Enter');
        // await page.waitForTimeout(10000);
        // await page.keyboard.type(SENHA);
        // await page.keyboard.press('Enter');
        // await page.waitForTimeout(2000);
        // await page.keyboard.press('Enter');
        // await page.waitForTimeout(4000);
        // const x = await page.screenshot({});
        // await page.waitForTimeout(10000);
        // await page.keyboard.press('a');
        // await page.waitForTimeout(6000);
        // await page.keyboard.press('Backspace');
        // await page.waitForTimeout(2000);
        // await page.keyboard.press('ArrowDown');
        // await page.waitForTimeout(10000);

        // await page.keyboard.press('Alt');
        // await page.waitForTimeout(5000);
        // await page.keyboard.press('c');
        // await page.waitForTimeout(2000);
        // await page.keyboard.press('f');
        // await page.waitForTimeout(2000);
        // await page.keyboard.press('d');
        // await page.waitForTimeout(2000);
        // await page.keyboard.press('g');
        // await page.waitForTimeout(2000)
        // for (let i = 0; i < 30; i++) {
        //     await page.keyboard.press('Backspace')
        // }
        // await page.waitForTimeout(2000);
        // await page.keyboard.type("Painel Malte_Maltose!a1");
        // await page.waitForTimeout(2000);
        // await page.keyboard.press('Enter');
        // await page.waitForTimeout(2000);
        // for (let i = 0; i < 9; i++) {
        //     await page.keyboard.press('ArrowDown');
        // }

        // /* Definir zoom */
        // await page.waitForTimeout(4000);
        // await page.keyboard.press('Alt');
        // await page.waitForTimeout(2000);
        // await page.keyboard.press('k');
        // await page.waitForTimeout(2000);
        // await page.keyboard.press('b');
        // await page.waitForTimeout(2000);
        // await page.keyboard.press('o');
        // await page.waitForTimeout(4000);
        // await page.keyboard.type('45');
        // await page.waitForTimeout(4000);
        // await page.keyboard.press('Enter');
        // await page.waitForTimeout(10000);

        // /*tirar faixa de opções*/
        // await page.keyboard.press('Alt');
        // await page.waitForTimeout(5000);
        // await page.keyboard.press('z');
        // await page.waitForTimeout(2000);
        // await page.keyboard.press('r');
        // await page.waitForTimeout(2000);
        // await page.keyboard.press('a');
        // await page.waitForTimeout(5000);

        // const malte = await page.screenshot({ 
        //     clip: {
        //         x: 0,
        //         y: 85,
        //         width: 800,
        //         height: 444
        //     }
        // });
        // console.log(malte);

        // await page.waitForTimeout(5000);

        // /*selecionar planilha, células a1 e z86 */
        // await page.keyboard.press('Alt');
        // await page.waitForTimeout(5000);
        // await page.keyboard.press('c');
        // await page.waitForTimeout(2000);
        // await page.keyboard.press('f');
        // await page.waitForTimeout(2000);
        // await page.keyboard.press('d');
        // await page.waitForTimeout(2000);
        // await page.keyboard.press('g');
        // await page.waitForTimeout(2000)
        // for (let i = 0; i < 30; i++) {
        //     await page.keyboard.press('Backspace')
        // }
        // await page.waitForTimeout(2000);
        // await page.keyboard.type("Painel!a1");
        // await page.waitForTimeout(2000);
        // await page.keyboard.press('Enter');
        // await page.waitForTimeout(2000);

        // await page.keyboard.press('Alt');
        // await page.waitForTimeout(2000);
        // await page.keyboard.press('k');
        // await page.waitForTimeout(2000);
        // await page.keyboard.press('b');
        // await page.waitForTimeout(2000);
        // await page.keyboard.press('o');
        // await page.waitForTimeout(2000);
        // await page.keyboard.type('34');
        // await page.waitForTimeout(2000);
        // await page.keyboard.press('Enter');
        // await page.waitForTimeout(5000);

        // /*tirar faixa de opções*/
        // await page.keyboard.press('Alt');
        // await page.waitForTimeout(5000);
        // await page.keyboard.press('z');
        // await page.waitForTimeout(2000);
        // await page.keyboard.press('r');
        // await page.waitForTimeout(2000);
        // await page.keyboard.press('o');
        // await page.waitForTimeout(5000);
        // await page.keyboard.press('Alt');
        // await page.waitForTimeout(5000);
        // await page.keyboard.press('z');
        // await page.waitForTimeout(2000);
        // await page.keyboard.press('r');
        // await page.waitForTimeout(2000);
        // await page.keyboard.press('a');
        // await page.waitForTimeout(5000);

        // const painel2 = await page.screenshot({ 
        //     clip: {
        //         x: 0,
        //         y: 85,
        //         width: 784,
        //         height: 291
        //     }
        // });
        // console.log(painel2);

        // await page.waitForTimeout(5000);

        // /* Definir zoom */
        // await page.waitForTimeout(4000);
        // await page.keyboard.press('Alt');
        // await page.waitForTimeout(2000);
        // await page.keyboard.press('k');
        // await page.waitForTimeout(2000);
        // await page.keyboard.press('b');
        // await page.waitForTimeout(2000);
        // await page.keyboard.press('o');
        // await page.waitForTimeout(2000);
        // await page.keyboard.type('50');
        // await page.waitForTimeout(2000);
        // await page.keyboard.press('Enter');
        // await page.waitForTimeout(5000);
        
        // await page.keyboard.press('Alt');
        // await page.waitForTimeout(5000);
        // await page.keyboard.press('c');
        // await page.waitForTimeout(2000);
        // await page.keyboard.press('f');
        // await page.waitForTimeout(2000);
        // await page.keyboard.press('d');
        // await page.waitForTimeout(2000);
        // await page.keyboard.press('g');
        // await page.waitForTimeout(2000)
        // for (let i = 0; i < 30; i++) {
        //     await page.keyboard.press('Backspace')
        // }
        // await page.waitForTimeout(2000);
        // await page.keyboard.type("Painel!z86");
        // await page.waitForTimeout(2000);
        // await page.keyboard.press('Enter');
        // await page.waitForTimeout(2000);
        
        // /*tirar faixa de opções*/
        // await page.keyboard.press('Alt');
        // await page.waitForTimeout(5000);
        // await page.keyboard.press('z');
        // await page.waitForTimeout(2000);
        // await page.keyboard.press('r');
        // await page.waitForTimeout(2000);
        // await page.keyboard.press('o');
        // await page.waitForTimeout(5000);
        // await page.keyboard.press('Alt');
        // await page.waitForTimeout(5000);
        // await page.keyboard.press('z');
        // await page.waitForTimeout(2000);
        // await page.keyboard.press('r');
        // await page.waitForTimeout(2000);
        // await page.keyboard.press('o');
        // await page.waitForTimeout(5000);

        // await page.keyboard.press('Alt');
        // await page.waitForTimeout(5000);
        // await page.keyboard.press('z');
        // await page.waitForTimeout(2000);
        // await page.keyboard.press('r');
        // await page.waitForTimeout(2000);
        // await page.keyboard.press('o');
        // await page.waitForTimeout(5000);
        // await page.keyboard.press('Alt');
        // await page.waitForTimeout(5000);
        // await page.keyboard.press('z');
        // await page.waitForTimeout(2000);
        // await page.keyboard.press('r');
        // await page.waitForTimeout(2000);
        // await page.keyboard.press('a');
        // await page.waitForTimeout(5000);
        
        // const painel = await page.screenshot({ 
        //     clip: {
        //         x: 0,
        //         y: 85,
        //         width: 800,
        //         height: 260
        //     }
        // });
        // console.log(painel);
        
        // await page.waitForTimeout(5000);
        // await browser.close();

        /* verificar para enviar a imagem correta */
        
        // function compara() {
        //     var imagem = fs.readFileSync('malte - Copia.png');
        //     var imagem1 = fs.readFileSync('painel - Copia.png');
        //     var imagem2 = fs.readFileSync('painel2 - Copia.jpg');
        //     resemble(imagem).compareTo(malte).onComplete(function(data) {
        //         console.log(data);
        //         if (data.misMatchPercentage < 10) {
        //             require('fs').writeFileSync('malte.png', malte);
        //             // app.get('/', (req, res) => {
        //             //     res.send(`<img src="data:image/png;base64,${malte}">`);
        //             // });
        //             console.log("ingual malte");
        //         } else {
        //             console.log("desingual malte");
        //         }
        //     })
        //     resemble(imagem1).compareTo(painel).onComplete(function(data) {
        //         console.log(data);
        //         if (data.misMatchPercentage > 24) {
        //             require('fs').writeFileSync('painel.png', painel);
        //             // app.get('/', (req, res) => {
        //             //     res.send(`<img src="data:image/png;base64,${painel}">`);
        //             // });
        //             console.log("ingual painel");
        //         } else {
        //             console.log("desingual painel");
        //         }
        //     })
        //     resemble(imagem2).compareTo(painel2).onComplete(function(data) {
        //         console.log(data);
        //         if (data.misMatchPercentage < 32) {
        //             require('fs').writeFileSync('painel2.png', painel2);
        //             // app.get('/', (req, res) => {
        //             //     res.send(`<img src="data:image/png;base64,${painel2}">`);
        //             // });
        //             console.log("ingual painel2");
        //         } else {
        //             console.log("desingual painel2");
        //         }
        //     })
        // }

        // compara();

        (async () => {
            browser = await puppeteer.launch({
                headless: false,
                args: ['--start-fullscreen']
            });
            page = await browser.newPage();

            url = 'https://carrega-imagem.vercel.app/';
            
            // Navegue até a página
            await page.goto(url, { waitUntil: 'networkidle2'});
            
            // Selecione o campo de upload de arquivo e faça o upload da imagem
            const inputUploadHandle1 = await page.$('#fileUpload1');
            const inputUploadHandle2 = await page.$('#fileUpload2');
            const inputUploadHandle3 = await page.$('#fileUpload3');

            // Supondo que as imagens estejam no mesmo diretório do script
            let fileToUpload1 = 'file:///C:/Users/guilh/OneDrive/%C3%81rea%20de%20Trabalho/RFK/rfk-script/malte.png';
            if (inputUploadHandle1) {
                await inputUploadHandle1.uploadFile(fileToUpload1);
            }
        
            // Repita para as outras imagens
            let fileToUpload2 = 'file:///C:/Users/guilh/OneDrive/%C3%81rea%20de%20Trabalho/RFK/rfk-script/painel.png';
            if (inputUploadHandle2) {
                await inputUploadHandle2.uploadFile(fileToUpload2);
            }
        
            let fileToUpload3 = 'file:///C:/Users/guilh/OneDrive/%C3%81rea%20de%20Trabalho/RFK/rfk-script/painel2.png';
            if (inputUploadHandle3) {
                await inputUploadHandle3.uploadFile(fileToUpload3);
            }

            const button = await page.$('#envia');
            if (button) {
                await button.click();
            }

            await page.waitForTimeout(60000);

            //Verifique os dados no armazenamento local
            const localStorageData = await page.evaluate(() => {
                // let localStorageData = {};
                for( let i = 0; i < localStorage.length; i++ ) {
                    const key = localStorage.key(i);
                    localStorageData[key] = localStorage.getItem(key);
                }
            });

            return localStorageData;

            console.log(localStorageData);

            // Feche o navegador após o upload das imagens
            await browser.close();
        })();



    } catch (error) {
        console.log('Erro ao executar funcaoAsync: ', error);
    }finally {
        if(browser) {
            await browser.close();
        }
    }
}

async function loop() {
    while (true) {
        await funcaoAsync();
        await new Promise(resolve => setTimeout(resolve, 40000));
    }
}

loop();