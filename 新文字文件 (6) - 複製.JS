// 保存暱稱
var nickname = "";

// 设置暱稱
function setNickname() {
    var nicknameInput = document.getElementById("nicknameInput");
    var chatControls = document.getElementById("chatControls");
    var chatContainer = document.getElementById("chatContainer");

    nickname = nicknameInput.value.trim();
    if (nickname !== "") {
        // 隐藏暱稱输入框，显示聊天控制区域
        nicknameInput.style.display = "none";
        chatControls.style.display = "block";
        chatContainer.innerHTML = "<div>你的暱稱为：" + nickname + "</div>";
    }
}

// 发送消息
function sendMessage() {
    var messageInput = document.getElementById("messageInput");
    var chatContainer = document.getElementById("chatContainer");

    var message = messageInput.value.trim();
    if (message !== "") {
        var messageElement = document.createElement("div");
        messageElement.classList.add("chat-message");
        messageElement.textContent = nickname + "：" + message;
        chatContainer.appendChild(messageElement);

        // 清空输入框内容
        messageInput.value = "";

        // 滚动到底部，显示最新消息
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }
}
