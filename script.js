(function(){
  const WORDS = [
  ["GOLEIRO", "Jogador que protege o gol"],
  ["ZAGUEIRO", "Defensor que atua próximo ao gol"],
  ["LATERAL", "Jogador que atua pelas laterais do campo"],
  ["VOLANTE", "Jogador que ajuda na marcação e na defesa"],
  ["MEIA", "Jogador que ajuda a criar as jogadas"],
  ["ATACANTE", "Jogador responsável por buscar os gols"],
  ["CENTROAVANTE", "Atacante que costuma jogar mais perto do gol"],
  ["CAPITÃO", "Jogador que representa o time dentro de campo"],
  ["TÉCNICO", "Profissional que comanda a equipe"],
  ["ÁRBITRO", "Responsável por controlar a partida"],
  ["GOL", "Quando a bola entra na baliza"],
  ["PÊNALTI", "Cobrança feita da marca de onze metros"],
  ["ESCANTEIO", "Cobrança realizada a partir do canto do campo"],
  ["FALTA", "Infração cometida durante a partida"],
  ["IMPEDIMENTO", "Regra que limita a posição do atacante"],
  ["CARTÃO", "Pode ser amarelo ou vermelho"],
  ["EXPULSÃO", "Quando um jogador precisa deixar a partida"],
  ["SUBSTITUIÇÃO", "Troca de um jogador durante o jogo"],
  ["ACRÉSCIMO", "Tempo adicionado ao final de cada etapa"],
  ["PRORROGAÇÃO", "Tempo extra usado em algumas partidas"],
  ["CAMPO", "Local onde a partida é disputada"],
  ["TRAVE", "Estrutura que forma o gol"],
  ["BOLA", "Objeto utilizado durante a partida"],
  ["REDE", "Fica atrás do gol e segura a bola"],
  ["CHUTEIRA", "Calçado utilizado pelos jogadores"],
  ["UNIFORME", "Roupa usada pela equipe"],
  ["CANETA", "Drible em que a bola passa entre as pernas"],
  ["CHAPÉU", "Drible em que a bola passa por cima do adversário"],
  ["DRIBLE", "Movimento para superar um adversário"],
  ["PASSE", "Ação de entregar a bola para um companheiro"],
  ["TORCIDA", "Grupo de pessoas que apoia um time"],
  ["ESTÁDIO", "Local onde grandes partidas são realizadas"],
  ["ARQUIBANCADA", "Local onde ficam muitos torcedores"],
  ["CAMISA", "Parte tradicional do uniforme do time"],
  ["BANDEIRA", "Símbolo levado pelos torcedores"],
  ["MASCOTE", "Personagem que representa o clube"],
  ["HINO", "Canção tradicional de um clube"],
  ["FAIXA", "Pode ser usada para representar a torcida"],
  ["BATERIA", "Instrumentos usados por algumas torcidas"],
  ["TORCEDOR", "Pessoa que apoia uma equipe"],
  ["CAMPEONATO", "Competição disputada por vários times"],
  ["FINAL", "Última fase de uma competição"],
  ["SEMIFINAL", "Fase que antecede a final"],
  ["QUARTAS", "Fase que reúne oito equipes"],
  ["GRUPO", "Conjunto de equipes em uma competição"],
  ["TABELA", "Mostra a posição dos times"],
  ["CLASSIFICAÇÃO", "Define a posição de cada equipe"],
  ["RODADA", "Conjunto de partidas de uma competição"],
  ["PONTUAÇÃO", "Quantidade de pontos conquistados"],
  ["TÍTULO", "Prêmio conquistado pelo campeão"],
  ["TREINO", "Atividade usada para preparar os jogadores"],
  ["AQUECIMENTO", "Preparação física antes da partida"],
  ["PREPARADOR", "Profissional que trabalha a preparação física"],
  ["FISIOTERAPEUTA", "Profissional que ajuda na recuperação física"],
  ["CONCENTRAÇÃO", "Período de preparação antes de uma partida"],
  ["ESCALAÇÃO", "Lista dos jogadores que começam a partida"],
  ["RESERVA", "Jogador que começa fora do time titular"],
  ["TITULAR", "Jogador escolhido para começar a partida"],
  ["BANCO", "Local onde ficam jogadores reservas e comissão"],
  ["VESTIÁRIO", "Local onde os jogadores se preparam"],
  ["PLACAR", "Mostra o resultado da partida"],
  ["EMPATE", "Quando as equipes terminam com o mesmo número de gols"],
  ["VITÓRIA", "Quando uma equipe termina com mais gols"],
  ["DERROTA", "Quando uma equipe sofre mais gols que o adversário"],
  ["CAMPEÃO", "Equipe que conquista o título"],
  ["ARTILHEIRO", "Jogador que marca muitos gols"],
  ["ASSISTÊNCIA", "Passe que resulta em um gol"],
  ["DEFESA", "Ação de impedir o ataque adversário"],
  ["ATAQUE", "Ação de tentar marcar gols"],
  ["MARCAÇÃO", "Ação de acompanhar e dificultar o adversário"],
  ["FIFA", "Entidade internacional do futebol"],
  ["COPA", "Grande competição entre seleções"],
  ["SELEÇÃO", "Equipe que representa um país"],
  ["BRASIL", "País conhecido pela tradição no futebol"],
  ["ARGENTINA", "Seleção sul-americana de grande tradição"],
  ["CHAMPIONS", "Competição europeia entre grandes clubes"],
  ["LIBERTADORES", "Principal competição de clubes da América do Sul"],
  ["BRASILEIRÃO", "Principal campeonato nacional de clubes do Brasil"],
  ["ESTADUAL", "Campeonato disputado dentro de um estado"],
  ["CLÁSSICO", "Partida entre grandes rivais"],
  ["GOLEADA", "Vitória com grande diferença de gols"],
  ["HAT-TRICK", "Quando um jogador marca três gols na partida"],
  ["BICICLETA", "Finalização feita com o jogador no ar e de costas"],
  ["VOLEIO", "Finalização feita antes de a bola tocar no chão"],
  ["CABECEIO", "Ação de jogar a bola usando a cabeça"],
  ["CRUZAMENTO", "Passe feito geralmente em direção à área"],
  ["ESCANTEIO", "Cobrança feita a partir do canto do campo"],
  ["BOLA PARADA", "Jogada iniciada após uma paralisação"],
  ["CONTRA-ATAQUE", "Ataque rápido após recuperar a bola"],
  ["MARCAÇÃO ALTA", "Pressão feita próximo à saída adversária"],
  ["TORNEIO", "Competição entre várias equipes"],
  ["DERBI", "Partida entre equipes rivais da mesma região"],
  ["CLUBE", "Organização esportiva que possui uma equipe"],
  ["BASE", "Categorias de formação de jovens jogadores"],
  ["JUVENIL", "Categoria destinada a jogadores jovens"],
  ["PROFISSIONAL", "Categoria principal do futebol adulto"],
  ["TRANSFERÊNCIA", "Mudança de um jogador para outro clube"],
  ["CONTRATO", "Acordo entre jogador e clube"],
  ["MERCADO", "Período de negociações entre clubes"],
  ["OLHEIRO", "Pessoa que procura novos talentos"],
];
  const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const MAX_LIVES = 6;
  function shuffle(arr){
    const a = arr.slice();
    for(let i = a.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  const deck = shuffle(WORDS);
  let index = 0;
  let score = 0;
  let word = "";
  let hint = "";
  let guessed = new Set();
  let wrongCount = 0;
  let over = false;
  const els = {
    rig: document.getElementById("rig"),
    word: document.getElementById("word"),
    hint: document.getElementById("hint"),
    keyboard: document.getElementById("keyboard"),
    wordNum: document.getElementById("wordNum"),
    wordTotal: document.getElementById("wordTotal"),
    scoreCount: document.getElementById("scoreCount"),
    overlay: document.getElementById("overlay"),
    modal: document.getElementById("modal"),
    modalTitle: document.getElementById("modalTitle"),
    modalText: document.getElementById("modalText"),
    nextBtn: document.getElementById("nextBtn"),
  };
  els.wordTotal.textContent = deck.length;
  function buildRig(){
    els.rig.innerHTML = `
      <svg viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">
        <line x1="20" y1="150" x2="100" y2="150" stroke="#A78BFA" stroke-width="6" stroke-linecap="round"/>
        <line x1="40" y1="150" x2="40" y2="18" stroke="#A78BFA" stroke-width="6" stroke-linecap="round"/>
        <line x1="40" y1="18" x2="112" y2="18" stroke="#A78BFA" stroke-width="6" stroke-linecap="round"/>
        <line x1="40" y1="38" x2="62" y2="18" stroke="#A78BFA" stroke-width="6" stroke-linecap="round"/>
        <line x1="112" y1="18" x2="112" y2="34" stroke="#A78BFA" stroke-width="5" stroke-linecap="round"/>
        <circle id="part0" class="part" cx="112" cy="47" r="13" fill="none" stroke="#FFD23F" stroke-width="5"/>
        <line id="part1" class="part" x1="112" y1="60" x2="112" y2="96" stroke="#FF4D8D" stroke-width="5" stroke-linecap="round"/>
        <line id="part2" class="part" x1="112" y1="70" x2="97" y2="86" stroke="#FF4D8D" stroke-width="5" stroke-linecap="round"/>
        <line id="part3" class="part" x1="112" y1="70" x2="127" y2="86" stroke="#FF4D8D" stroke-width="5" stroke-linecap="round"/>
        <line id="part4" class="part" x1="112" y1="96" x2="99" y2="118" stroke="#06D6A0" stroke-width="5" stroke-linecap="round"/>
        <line id="part5" class="part" x1="112" y1="96" x2="125" y2="118" stroke="#06D6A0" stroke-width="5" stroke-linecap="round"/>
      </svg>`;
  }
  function normalize(str){
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }
  function startWord(){
    if(index >= deck.length){
      showEndOfDeck();
      return;
    }
    const pick = deck[index];
    word = pick[0];
    hint = pick[1];
    guessed = new Set();
    wrongCount = 0;
    over = false;
    els.overlay.classList.remove("show");
    els.wordNum.textContent = index + 1;
    els.scoreCount.textContent = score;
    buildRig();
    els.hint.textContent = "Dica: " + hint;
    renderWord();
    buildKeyboard();
  }
  function showEndOfDeck(){
    els.modal.className = "modal win";
    els.modalTitle.textContent = "Você completou todas as palavras! 🎉";
    els.modalText.innerHTML = "Placar final: <b>" + score + "</b> de <b>" + deck.length + "</b>";
    els.nextBtn.textContent = "Jogar novamente";
    els.overlay.classList.add("show");
    els.nextBtn.focus();
    launchConfetti();
    els.nextBtn.onclick = () => { index = 0; score = 0; startWord(); };
  }
  function renderWord(){
    els.word.innerHTML = "";
    word.split("").forEach(ch => {
      if(ch === " "){
        const s = document.createElement("div");
        s.className = "letter-slot space";
        els.word.appendChild(s);
        return;
      }
      const slot = document.createElement("div");
      slot.className = "letter-slot";
      const normCh = normalize(ch);
      if(guessed.has(normCh)){
        slot.textContent = ch;
        slot.classList.add("reveal");
      }
      els.word.appendChild(slot);
    });
  }
  function buildKeyboard(){
    els.keyboard.innerHTML = "";
    const rows = [
      ALPHABET.slice(0,9),
      ALPHABET.slice(9,18),
      ALPHABET.slice(18,26).concat(["Ç"])
    ];
    rows.forEach(rowLetters => {
      const row = document.createElement("div");
      row.className = "kb-row";
      rowLetters.forEach(letter => {
        const btn = document.createElement("button");
        btn.className = "key";
        btn.textContent = letter;
        btn.addEventListener("click", () => handleGuess(letter, btn));
        row.appendChild(btn);
      });
      els.keyboard.appendChild(row);
    });
  }
  function handleGuess(letter, btnEl){
    if(over || guessed.has(letter)) return;
    guessed.add(letter);
    btnEl.disabled = true;
    const normWord = normalize(word);
    if(normWord.includes(letter)){
      btnEl.classList.add("correct");
      renderWord();
      checkWin();
    } else {
      btnEl.classList.add("wrong");
      const part = document.getElementById("part" + wrongCount);
      if(part) part.classList.add("show");
      wrongCount++;
      if(wrongCount >= MAX_LIVES){
        loseWord();
      }
    }
  }
  function checkWin(){
    const normWord = normalize(word);
    const allGuessed = normWord.split("").every(ch => ch === " " || guessed.has(ch));
    if(allGuessed){
      winWord();
    }
  }
  function winWord(){
    over = true;
    score++;
    els.modal.className = "modal win";
    els.modalTitle.textContent = "Você acertou! 🎉";
    els.modalText.innerHTML = "A palavra era <b>" + word + "</b>";
    els.nextBtn.textContent = index + 1 >= deck.length ? "Ver placar final" : "Próxima palavra";
    els.overlay.classList.add("show");
    els.nextBtn.focus();
    disableKeyboard();
    launchConfetti();
    els.nextBtn.onclick = () => { index++; startWord(); };
  }
  function loseWord(){
    over = true;
    els.modal.className = "modal lose";
    els.modalTitle.textContent = "Ah, não! 💥";
    els.modalText.innerHTML = "A palavra era <b>" + word + "</b>";
    els.nextBtn.textContent = index + 1 >= deck.length ? "Ver placar final" : "Próxima palavra";
    els.overlay.classList.add("show");
    els.nextBtn.focus();
    disableKeyboard();
    els.nextBtn.onclick = () => { index++; startWord(); };
  }
  function disableKeyboard(){
    document.querySelectorAll(".key").forEach(k => k.disabled = true);
  }
  function launchConfetti(){
    const colors = ["#FF4D8D","#FFD23F","#06D6A0","#FF8C42","#A78BFA"];
    for(let i=0;i<40;i++){
      const piece = document.createElement("div");
      piece.className = "confetti";
      piece.style.left = Math.random()*100 + "vw";
      piece.style.background = colors[Math.floor(Math.random()*colors.length)];
      piece.style.animationDuration = (2 + Math.random()*1.5) + "s";
      piece.style.animationDelay = (Math.random()*0.4) + "s";
      document.body.appendChild(piece);
      setTimeout(() => piece.remove(), 4000);
    }
  }
  function findKey(letter){
    return Array.from(document.querySelectorAll(".key")).find(b => b.textContent === letter);
  }
  document.addEventListener("keydown", (e) => {
    // Enter ou espaço avançam para a próxima palavra quando o modal está aberto
    if((e.key === "Enter" || e.key === " ") && els.overlay.classList.contains("show")){
      e.preventDefault();
      els.nextBtn.click();
      return;
    }
    const letter = e.key.toUpperCase();
    if(ALPHABET.includes(letter) || letter === "Ç"){
      e.preventDefault();
      const btn = findKey(letter);
      if(btn && !btn.disabled){
        btn.classList.add("key-pressed");
        handleGuess(letter, btn);
      }
    }
  });
  document.addEventListener("keyup", (e) => {
    const letter = e.key.toUpperCase();
    if(ALPHABET.includes(letter) || letter === "Ç"){
      const btn = findKey(letter);
      if(btn) btn.classList.remove("key-pressed");
    }
  });
  startWord();
})();
