// 🎮 게임 데이터
const games = [
  {
    title: "Neon Survival",
    description: "타워를 지키며 적을 처치하는 네온 스타일 디펜스 게임",
    image: "https://yourimageurl.com/neon-survival.png",
    link: "https://leety291.github.io/neon-survival/",
  },
  {
    title: "ThrowDodge",
    description: "던지고 피하며 승리를 쟁취하라! 반응속도 게임",
    image: "https://yourimageurl.com/throwdodge.png",
    link: "https://leety291.github.io/throwdodge/",
  },
  {
    title: "Color Blocks",
    description: "색을 맞춰 블록을 없애는 직관적인 퍼즐 게임",
    image: "https://yourimageurl.com/color-blocks.png",
    link: "https://leety291.github.io/color-blocks/",
  },
];

// 🧱 게임 카드 생성
const gameList = document.getElementById("game-list");
games.forEach((game) => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <div class="thumb" style="background-image: url('${game.image}')"></div>
    <h4>${game.title}</h4>
    <p>${game.description}</p>
    <button onclick="window.open('${game.link}', '_blank')">PLAY</button>
  `;
  gameList.appendChild(card);
});

// 🎨 도형 자동 추가
const shapesContainer = document.querySelector(".shapes");

// 추가적인 도형들을 정적인 위치와 스타일로 정의합니다.
const additionalShapes = [
    { color: 'var(--red)', width: '50px', top: '20%', left: '80%', delay: '0.5s' },
    { color: 'var(--blue)', width: '70px', top: '75%', left: '10%', delay: '1.5s' },
    { color: 'var(--yellow)', width: '40px', top: '10%', left: '10%', delay: '2.5s' },
    { color: 'var(--blue)', width: '60px', top: '30%', left: '50%', delay: '1s', borderRadius: '50%' },
    { color: 'var(--blue)', width: '80px', top: '60%', left: '20%', delay: '0.8s' },
    { color: 'var(--red)', width: '30px', top: '85%', left: '70%', delay: '2s', borderRadius: '50%' },
    { color: 'var(--yellow)', width: '90px', top: '40%', left: '90%', delay: '1.2s' },
    { color: 'var(--red)', width: '55px', top: '5%', left: '60%', delay: '1.7s' },
    { color: 'var(--red)', width: '75px', top: '50%', left: '5%', delay: '0.3s', borderRadius: '50%' },
    { color: 'var(--blue)', width: '45px', top: '90%', left: '40%', delay: '2.2s' },
    { color: 'var(--red)', width: '65px', top: '25%', left: '15%', delay: '0.9s' } // 추가된 빨간색 도형
];

additionalShapes.forEach(data => {
    const shape = document.createElement("div");
    shape.classList.add("shape");
    shape.style.background = data.color;
    shape.style.width = data.width;
    shape.style.height = data.width;
    shape.style.top = data.top;
    shape.style.left = data.left;
    shape.style.animationDelay = data.delay;
    if (data.borderRadius) {
        shape.style.borderRadius = data.borderRadius;
    }
    shapesContainer.appendChild(shape);
});
