// Dữ liệu mặc định chứa ĐẦY ĐỦ 10 câu hỏi và Tiêu đề
let gameData = {
    mainTitle: "CHIẾC NÓN KỲ DIỆU - OTC JUN'26",
    secretWord: "laithikimngan",
    questions: [
        { title: "I. Benzac - Câu 1", q: "Chọn một đáp án ĐÚNG về kết quả nghiên cứu lâm sàng của Miếng dán mụn đa năng - Benzac® Power Patch.", options: ["A. Giảm đáng kể kích thước mụn sau 6h, hiệu quả ngay cả sau khi gỡ miếng dán", "B. Tăng độ ẩm da 37% sau 1h & duy trì suốt 24h chỉ sau 1 lần sử dụng", "C. Cân bằng hệ vi sinh trên da: Duy trì số lượng & sự đa dạng", "D. Giảm 74% bã nhờn & dưỡng ẩm đến 4h chỉ sau 1 lần sử dụng"], ans: [0], multi: false },
        { title: "I. Benzac - Câu 2", q: "Chọn các đáp án ĐÚNG về cơ chế tác động của AC Technology trong sản phẩm Benzac.", options: ["A. Hấp thụ bã nhờn quá mức trên bề mặt da → Giảm dầu thừa trên da", "B. Giải phóng glycerin vào da → Giảm khô da, kích ứng; tăng tuân thủ điều trị", "C. Thay đổi trực tiếp hệ vi sinh vật trên da", "D. Bổ sung yếu tố dưỡng ẩm tự nhiên cho da"], ans: [0, 1], multi: true },
        { title: "I. Benzac - Câu 3", q: "Chọn các đáp án ĐÚNG về kết quả nghiên cứu lâm sàng của Sữa dưỡng ẩm cân bằng vi sinh - Benzac® Microbiome Equaliser.", options: ["A. Tăng độ ẩm da 37% sau 1h & duy trì suốt 24h chỉ sau 1 lần sử dụng", "B. Cân bằng hệ vi sinh trên da: Duy trì số lượng & sự đa dạng", "C. Giảm đáng kể kích thước mụn sau 6h", "D. Giảm 74% bã nhờn & dưỡng ẩm đến 4h chỉ sau 1 lần sử dụng"], ans: [0, 1], multi: true },
        { title: "I. Benzac - Câu 4", q: "Chọn một đáp án SAI về cách sử dụng các sản phẩm Benzac skincare.", options: ["A. Sữa rửa mặt Benzac Purifying/pH Control: 2 lần/ngày", "B. Sữa dưỡng ẩm Benzac Microbiome: 1-2 lần/ngày", "C. Tẩy tế bào chết Benzac Blackhead Scrub: 2 lần/ngày", "D. Miếng dán mụn Benzac Power Patch: lúc mụn mới xuất hiện"], ans: [2], multi: false },
        { title: "I. Benzac - Câu 5", q: "Chọn một đáp án ĐÚNG. Hướng điều trị mới trong điều trị mụn trứng cá là?", options: ["A. Probiotics", "B. Kháng sinh đường uống", "C. Kháng sinh đường tiêm", "D. Tất cả đều đúng"], ans: [0], multi: false },
        { title: "II. SUN - Câu 6", q: "Màng lọc vật lý vi phân tử NANO TITANIUM DIOXIDE trong Gel Cetaphil® Sun Light Gel SPF 50+ đem lại lợi ích gì?", options: ["A. Bao phủ toàn diện - Chống nắng sau 20 phút – Hạn chế kích ứng", "B. Bao phủ khỏi tia UVA - Chống nắng tức thì – Hạn chế kích ứng", "C. Bao phủ toàn diện - Chống nắng tức thì – Hạn chế kích ứng", "D. Bao phủ khỏi tia UVB - Chống nắng tức thì – Hạn chế kích ứng"], ans: [2], multi: false },
        { title: "II. SUN - Câu 7", q: "Gel Cetaphil® Sun Light Gel SPF 50+ cấp ẩm, làm dịu và chống oxy hóa nhờ vào thành phần nào?", options: ["A. Lô hội", "B. Dầu quả bơ", "C. Dầu hạnh nhân", "D. Vitamin E tinh khiết"], ans: [3], multi: false },
        { title: "II. SUN - Câu 8", q: "Sữa chống nắng Cetaphil Sun Kids SPF 50+ Liposomal Lotion giúp bảo vệ toàn diện cho bé khỏi:", options: ["A. Tia UVA", "B. Tia UVB", "C. Tia hồng ngoại IR", "D. Tất cả các loại tia trên"], ans: [0], multi: false },
        { title: "II. SUN - Câu 9", q: "Sữa chống nắng Cetaphil Sun Kids SPF 50+ Liposomal Lotion kháng nước đến 4 giờ nhờ vào:", options: ["A. Aloe Vera", "B. Glycerin", "C. Vitamin E", "D. Công nghệ Liposome"], ans: [3], multi: false },
        { title: "II. SUN - Câu 10", q: "Sữa chống nắng Cetaphil Sun Kids SPF 50+ dùng được cho bé từ mấy tháng tuổi?", options: ["A. 6 tháng", "B. 12 tháng", "C. 18 tháng", "D. 24 tháng"], ans: [0], multi: false }
    ]
};

// Trạng thái Game
let revealedLetters = [];
let usedNumbers = [];
let canReveal = false;
let currentQuestionIndex = -1;
let currentRotation = 0;
let sectors = [];

// Bảng màu cho vòng quay
const baseColors = ["#FF5733", "#33FF57", "#3357FF", "#F333FF", "#FF33A1", "#33FFF5", "#FFD433", "#8D33FF", "#FF8333", "#33FFBD", "#1abc9c", "#e67e22"];

const canvas = document.getElementById("wheelCanvas");
const ctx = canvas.getContext("2d");
const spinBtn = document.getElementById("spinBtn");
let toastTimeout;

// Hiển thị Toast MC ở chính giữa
function showToast(message, type) {
    const toast = document.getElementById("toast");
    toast.innerText = message;
    toast.className = `toast ${type}`;
    
    // Nếu có timeout cũ đang chạy thì xoá đi
    if(toastTimeout) clearTimeout(toastTimeout);
    
    // Tự động ẩn sau 3 giây (3000 ms)
    toastTimeout = setTimeout(() => {
        toast.classList.add("hidden");
    }, 3000);
}

// Sự kiện cho nút điều khiển của MC
document.getElementById("btnHostCorrect").onclick = () => {
    showToast("🎉 CHÚC MỪNG! ĐÁP ÁN HOÀN TOÀN CHÍNH XÁC 🎉", "success");
};

document.getElementById("btnHostWrong").onclick = () => {
    showToast("❌ RẤT TIẾC, ĐÁP ÁN CHƯA CHÍNH XÁC ❌", "error");
};

// Khởi tạo Game
function initGame() {
    revealedLetters = [];
    usedNumbers = [];
    canReveal = false;
    currentRotation = 0;
    canvas.style.transition = "none";
    canvas.style.transform = `rotate(0deg)`;
    
    document.getElementById("mainTitle").innerText = gameData.mainTitle;
    document.getElementById("numberLog").innerHTML = "";
    document.getElementById("gameStatus").innerText = "Nhấn QUAY để bắt đầu!";
    document.getElementById("gameStatus").style.color = "#00ffcc";
    spinBtn.disabled = false;

    sectors = gameData.questions.map((_, i) => i + 1);
    document.getElementById("secretTitle").innerText = `Ô CHỮ BÍ MẬT (${gameData.secretWord.replace(/\s/g, '').length} Chữ Cái)`;
    
    drawWheel();
    drawSecretBoard();
}

function getSectorColor(index) {
    return baseColors[index % baseColors.length];
}

// Vẽ vòng quay
function drawWheel() {
    const numSectors = sectors.length;
    if(numSectors === 0) return;

    const sectorAngle = 360 / numSectors;
    ctx.clearRect(0, 0, 500, 500);
    ctx.translate(250, 250); 
    
    sectors.forEach((num, i) => {
        const startAngle = (i * sectorAngle - sectorAngle/2) * Math.PI / 180 - Math.PI / 2;
        const endAngle = (i * sectorAngle + sectorAngle/2) * Math.PI / 180 - Math.PI / 2;
        
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.arc(0, 0, 240, startAngle, endAngle);
        ctx.fillStyle = usedNumbers.includes(num) ? "#7f8c8d" : getSectorColor(i);
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = "#fff";
        ctx.stroke();

        ctx.save();
        ctx.rotate(i * sectorAngle * Math.PI / 180 - Math.PI / 2);
        ctx.textAlign = "right";
        ctx.textBaseline = "middle";
        ctx.fillStyle = "white";
        
        let fontSize = numSectors > 15 ? 20 : (numSectors > 10 ? 30 : 40);
        ctx.font = `bold ${fontSize}px Arial`;
        ctx.fillText(num, 210, 0);
        ctx.restore();
    });
    ctx.translate(-250, -250); 
}

// Bảng chữ bí mật
function drawSecretBoard() {
    const board = document.getElementById("secretBoard");
    board.innerHTML = "";
    let displayIndex = 1; 

    [...gameData.secretWord].forEach((letter, i) => {
        const tile = document.createElement("div");
        tile.className = "letter-tile";
        
        if(letter === " ") {
            tile.style.visibility = "hidden"; 
        } else if (!revealedLetters.includes(letter.toLowerCase())) {
            tile.classList.add("hidden");
            tile.innerText = displayIndex; 
            tile.onclick = () => revealLetter(letter.toLowerCase());
            displayIndex++;
        } else {
            tile.classList.add("revealed");
            tile.innerText = letter.toUpperCase();
            displayIndex++;
        }
        board.appendChild(tile);
    });
}

function revealLetter(letter) {
    if (!canReveal) {
        alert("Phải trả lời đúng câu hỏi mới được quyền lật chữ!");
        return;
    }
    revealedLetters.push(letter);
    drawSecretBoard();
    canReveal = false;
    document.getElementById("gameStatus").innerText = "Đã lật chữ thành công. Hãy quay tiếp!";
}

document.getElementById("revealAllBtn").onclick = () => {
    revealedLetters = [...new Set([...gameData.secretWord.toLowerCase()])];
    drawSecretBoard();
    document.getElementById("gameStatus").innerText = `Trò chơi kết thúc!`;
};

// Thuật toán quay
spinBtn.onclick = () => {
    const availableNumbers = sectors.filter(n => !usedNumbers.includes(n));
    if (availableNumbers.length === 0) {
        alert("Đã quay hết danh sách câu hỏi!");
        return;
    }

    spinBtn.disabled = true;
    document.getElementById("gameStatus").innerText = "Đang quay...";
    document.getElementById("gameStatus").style.color = "#ffcc00";

    const winningNum = availableNumbers[Math.floor(Math.random() * availableNumbers.length)];
    const winningIndex = winningNum - 1; 

    const numSectors = sectors.length;
    const sectorAngle = 360 / numSectors;
    const targetDeg = 360 - (winningIndex * sectorAngle);
    
    const spins = 5 * 360; 
    let rotationToAdd = (targetDeg - (currentRotation % 360));
    if (rotationToAdd < 0) rotationToAdd += 360; 
    
    currentRotation += rotationToAdd + spins;

    canvas.style.transition = "transform 4s cubic-bezier(0.17, 0.67, 0.1, 1)";
    canvas.style.transform = `rotate(${currentRotation}deg)`;

    setTimeout(() => {
        usedNumbers.push(winningNum);
        document.getElementById("numberLog").innerHTML += `<span>${winningNum}</span>`;
        drawWheel(); 
        showQuestion(winningNum);
    }, 4200);
};

// Hiển thị câu hỏi
function showQuestion(num) {
    const qIndex = num - 1;
    const qData = gameData.questions[qIndex];
    currentQuestionIndex = qIndex;
    
    document.getElementById("modalTitle").innerText = `Câu ${num}: ` + qData.title;
    document.getElementById("questionText").innerText = qData.q;
    const optionsArea = document.getElementById("optionsArea");
    optionsArea.innerHTML = "";
    
    qData.options.forEach((opt, i) => {
        if(opt.trim() === "") return;
        const div = document.createElement("div");
        div.className = "option-item";
        div.innerText = opt;
        div.onclick = () => {
            if (!qData.multi) {
                Array.from(optionsArea.children).forEach(c => c.classList.remove("selected"));
            }
            div.classList.toggle("selected");
        };
        optionsArea.appendChild(div);
    });

    document.getElementById("questionModal").style.display = "block";
    document.getElementById("feedback").innerText = "";
    const submitBtn = document.getElementById("submitBtn");
    submitBtn.disabled = false;
    submitBtn.innerText = "TRẢ LỜI";
}

// Chấm điểm Câu hỏi
document.getElementById("submitBtn").onclick = () => {
    const qData = gameData.questions[currentQuestionIndex];
    const selected = Array.from(document.querySelectorAll(".option-item.selected"))
                          .map(el => qData.options.indexOf(el.innerText));
    
    if (selected.length === 0) { alert("Vui lòng chọn ít nhất 1 đáp án!"); return; }

    const isCorrect = JSON.stringify(selected.sort()) === JSON.stringify(qData.ans.sort());
    const feedback = document.getElementById("feedback");
    document.getElementById("submitBtn").disabled = true;

    if (isCorrect) {
        feedback.innerText = "CHÍNH XÁC! Bạn có quyền chọn 1 số để Lật Chữ.";
        feedback.style.color = "#2ecc71";
        canReveal = true;
        setTimeout(() => {
            document.getElementById("questionModal").style.display = "none";
            document.getElementById("gameStatus").innerText = "Hãy mời người chơi ĐỌC SỐ ĐỂ LẬT CHỮ!";
            document.getElementById("gameStatus").style.color = "#00ffcc";
            spinBtn.disabled = false;
        }, 2000);
    } else {
        feedback.innerText = "SAI RỒI! Rất tiếc, bạn đã mất lượt lật chữ.";
        feedback.style.color = "#e74c3c";
        setTimeout(() => {
            document.getElementById("questionModal").style.display = "none";
            document.getElementById("gameStatus").innerText = "Nhấn QUAY để chơi tiếp.";
            document.getElementById("gameStatus").style.color = "#fff";
            spinBtn.disabled = false;
        }, 2000);
    }
};

/* CÀI ĐẶT (SETTINGS) */
let editingIndex = -1; 

const settingsModal = document.getElementById("settingsModal");
const editQuestionModal = document.getElementById("editQuestionModal");

document.getElementById("btnOpenSettings").onclick = () => {
    document.getElementById("inputMainTitle").value = gameData.mainTitle;
    document.getElementById("inputSecretWord").value = gameData.secretWord;
    renderQuestionList();
    settingsModal.style.display = "block";
};

document.getElementById("btnCloseSettings").onclick = () => { settingsModal.style.display = "none"; };

function renderQuestionList() {
    const list = document.getElementById("questionList");
    list.innerHTML = "";
    gameData.questions.forEach((q, index) => {
        const item = document.createElement("div");
        item.className = "q-item";
        item.innerHTML = `
            <div class="q-item-info"><strong>Câu ${index + 1}:</strong> ${q.title}</div>
            <div class="q-item-actions">
                <button class="btn-edit" onclick="openEditModal(${index})">Sửa</button>
                <button class="btn-delete" onclick="deleteQuestion(${index})">Xoá</button>
            </div>
        `;
        list.appendChild(item);
    });
}

function deleteQuestion(index) {
    if(confirm("Bạn có chắc muốn xoá câu hỏi này?")) {
        gameData.questions.splice(index, 1);
        renderQuestionList();
    }
}

document.getElementById("btnAddQuestion").onclick = () => { openEditModal(-1); };

function openEditModal(index) {
    editingIndex = index;
    const texts = document.querySelectorAll(".opt-text");
    const checks = document.querySelectorAll(".opt-check");
    
    if (index === -1) {
        document.getElementById("editModalTitle").innerText = "THÊM CÂU HỎI MỚI";
        document.getElementById("eqTitle").value = "";
        document.getElementById("eqContent").value = "";
        texts.forEach(t => t.value = "");
        checks.forEach(c => c.checked = false);
    } else {
        document.getElementById("editModalTitle").innerText = `SỬA CÂU HỎI (Vị trí ${index + 1})`;
        const q = gameData.questions[index];
        document.getElementById("eqTitle").value = q.title;
        document.getElementById("eqContent").value = q.q;
        
        texts.forEach((t, i) => {
            t.value = q.options[i] || "";
            checks[i].checked = q.ans.includes(i);
        });
    }
    
    settingsModal.style.display = "none";
    editQuestionModal.style.display = "block";
}

document.getElementById("btnCancelEdit").onclick = () => {
    editQuestionModal.style.display = "none";
    settingsModal.style.display = "block";
};

document.getElementById("btnSaveQuestion").onclick = () => {
    const title = document.getElementById("eqTitle").value.trim();
    const content = document.getElementById("eqContent").value.trim();
    if(!title || !content) { alert("Vui lòng nhập đủ Tiêu đề và Nội dung!"); return; }

    let options = [];
    let ans = [];
    
    const texts = document.querySelectorAll(".opt-text");
    const checks = document.querySelectorAll(".opt-check");
    
    texts.forEach((t, i) => {
        const val = t.value.trim();
        if(val !== "") {
            options.push(val);
            if(checks[i].checked) { ans.push(options.length - 1); }
        }
    });

    if(options.length < 2) { alert("Phải có ít nhất 2 đáp án!"); return; }
    if(ans.length === 0) { alert("Phải chọn ít nhất 1 đáp án đúng!"); return; }

    const newQ = {
        title: title,
        q: content,
        options: options,
        ans: ans,
        multi: ans.length > 1
    };

    if(editingIndex === -1) {
        gameData.questions.push(newQ);
    } else {
        gameData.questions[editingIndex] = newQ;
    }

    editQuestionModal.style.display = "none";
    renderQuestionList();
    settingsModal.style.display = "block";
};

document.getElementById("btnSaveAll").onclick = () => {
    const newTitle = document.getElementById("inputMainTitle").value.trim();
    const newWord = document.getElementById("inputSecretWord").value.trim();
    
    if(!newTitle) { alert("Tiêu đề chương trình không được để trống!"); return; }
    if(!newWord) { alert("Ô chữ bí mật không được để trống!"); return; }
    if(gameData.questions.length === 0) { alert("Phải có ít nhất 1 câu hỏi!"); return; }
    
    gameData.mainTitle = newTitle;
    gameData.secretWord = newWord;
    
    settingsModal.style.display = "none";
    initGame();
};

initGame();