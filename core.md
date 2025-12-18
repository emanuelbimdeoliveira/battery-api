App de leitura do status da bateria do dispositivo
Fluxo do projeto:
Inicialização
    Carregamento no navegador
    A tela se inicia com os dados default e espera a resposta vinda da API
Busca dos dados via API
    Leitura da API buscando os dados através do Browser Object Model
    Depois da resposta da API, são atualizados os valores na tela via DOM
Atualizações de tela
    O app atualiza os valores dinamicamente lendo o evento específico
Troca dos modos dark/light
    Através do interruptor na tela, é acionado a uma função que troca os modos de cor do app via DOM

Estrutura de arquivos
    logic
        api
            batteryApi.js
        state
            batterystate.js
            themeState.js
        events
            events.js
        display
            view.js
            updateScreen.js
        engine
            batteryEngine.js
        controllers
            batteryController.js
            themeController.js
        formatters
            formatters.js
    index.html
    index.js
    style.css
