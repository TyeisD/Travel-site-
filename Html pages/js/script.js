const themeBtn = document.getElementById("themeBtn");
if (themeBtn) {
  themeBtn.onclick = () => document.body.classList.toggle("dark");
}

const chatBox = document.getElementById("chatBox");
const chatInput = document.getElementById("chatInput");

function sendChat() {
  if (!chatInput.value.trim()) return;

  const user = document.createElement("div");
  user.className = "chat-msg user";
  user.textContent = chatInput.value;
  chatBox.appendChild(user);

  chatInput.value = "";

  setTimeout(() => {
    const agent = document.createElement("div");
    agent.className = "chat-msg agent";
    agent.textContent =
      "That sounds wonderful ✨ Let me help you plan the perfect trip.";
    chatBox.appendChild(agent);
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 800);
}
