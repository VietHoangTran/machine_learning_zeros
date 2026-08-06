# ML Study Hub — Nhập môn Học máy

> Từ những dòng Python đầu tiên đến việc tự tay huấn luyện mô hình học máy của riêng bạn.

Trang web tự học trực quan cho khóa **Nhập môn Học máy** — một khóa 11 tuần dành cho người mới hoàn toàn. Toàn bộ nội dung (giáo trình, code mẫu, bài tập, quiz) được gói gọn trong một ứng dụng React, chạy hoàn toàn trên trình duyệt và **lưu dữ liệu tiến độ trên thiết bị của bạn**.

## ✨ Tính năng

- **📚 Lộ trình 11 tuần** — mỗi tuần 2 buổi (lý thuyết + lab), kèm bài tập, checklist thực hành và câu hỏi tự kiểm tra.
- **✅ Checklist tiến độ** — tick từng bước thực hành, app lưu tiến độ qua `localStorage` (chỉ trên trình duyệt của bạn).
- **🧠 Flashcards** — thẻ ôn tập theo **hệ thống lặp lại ngắt quãng (spaced repetition)**, tự phân loại "đã thuộc" / "cần ôn lại".
- **📝 Quiz & Self-check** — câu hỏi trắc nghiệm kèm giải thích đáp án sau mỗi tuần.
- **📊 Exam mô phỏng** — đề tổng hợp đếm câu đã làm, số đúng và phần trăm đạt được.
- **📖 Cheatsheet & Glossary** — tổng hợp công thức, hàm và từ điển thuật ngữ học máy.
- **🎯 Mini-project & Đồ án** — 3 mini-project giữa khóa và đồ án nhóm tuần cuối.
- **🍅 Pomodoro** — đồng hồ tập trung (làm việc / nghỉ ngắn / nghỉ dài) ngay trong app.

## 🗺️ Lộ trình khóa học

| Tuần | Chủ đề | Trọng tâm |
|------|--------|-----------|
| 1 | Khởi động với Python | Colab, biến, list, dict, hàm, vòng lặp, NumPy |
| 2 | Làm việc với dữ liệu | pandas DataFrame, làm sạch dữ liệu, matplotlib |
| 3 | Học máy là gì? | Feature/label, train/test split, k-NN |
| 4 | Hồi quy — Dự đoán con số | Linear regression, loss function, gradient descent |
| 5 | Phân loại — Dự đoán nhãn | Logistic regression, confusion matrix, F1 |
| 6 | Đánh giá & cải thiện mô hình | Overfitting, cross-validation, regularization |
| 7 | Cây quyết định & Ensemble | Decision tree, random forest, boosting |
| 8 | Học không giám sát | k-means, PCA, trực quan hóa 2D |
| 9 | Mạng nơ-ron — không đáng sợ | Perceptron, layer, nhận dạng chữ số viết tay |
| 10 | Học máy trong thực tế | Data leakage, đạo đức, khởi động đồ án |
| 11 | Tuần đồ án | Làm việc nhóm, thuyết trình, tổng kết |

## 🛠️ Công nghệ

- [React 18](https://react.dev/) + [React Router](https://reactrouter.com/) (HashRouter)
- [Vite](https://vitejs.dev/) — build nhanh, base path tương đối để deploy subpath
- Google Fonts: *Space Grotesk* + *IBM Plex Mono*

Nội dung khóa học nằm trong `src/data.js` và sơ đồ trực quan trong `src/diagrams.js` — bạn có thể chỉnh sửa giáo trình mà không cần đụng đến giao diện.

## 🚀 Chạy tại địa phương

```bash
npm install     # cài dependencies
npm run dev     # chạy server dev (Vite)
```

Mở trình duyệt tại URL Vite in ra (thường là `http://localhost:5173`).

## 📦 Build production

```bash
npm run build    # output vào thư mục dist/
npm run preview  # xem thử bản build
```

`vite.config.js` đặt `base: './'` nên bản build dùng đường dẫn tương đối — có thể host ở bất kỳ subpath nào.

## 📁 Cấu trúc

```
├── index.html                 # entry HTML (tiếng Việt)
├── vite.config.js             # cấu hình Vite (base tương đối)
└── src/
    ├── main.jsx               # bootstrap: HashRouter + AppProvider
    ├── App.jsx                # định nghĩa các route
    ├── store.jsx              # state tiến độ + localStorage
    ├── data.js                # ⭐ toàn bộ nội dung khóa học
    ├── diagrams.js            # sơ đồ / hình minh họa
    ├── styles.css             # kiểu dáng
    └── components/
        ├── Nav.jsx            # thanh điều hướng
        ├── Dashboard.jsx      # bảng tổng quan tiến độ
        ├── WeekView.jsx       # chi tiết từng tuần (buổi, checklist, quiz)
        ├── Cheatsheet.jsx     # bảng tổng hợp công thức/hàm
        ├── Glossary.jsx       # từ điển thuật ngữ
        ├── Flashcards.jsx     # ôn tập spaced repetition
        ├── Projects.jsx       # theo dõi mini-project & đồ án
        ├── Exam.jsx           # bài kiểm tra mô phỏng
        └── Pomodoro.jsx       # đồng hồ tập trung
```

## 🔒 Quyền riêng tư

Không có máy chủ, không gửi dữ liệu đi đâu. Toàn bộ tiến độ, điểm số và thẻ flashcard chỉ lưu trong `localStorage` của trình duyệt bạn.

---

Dành cho mục đích tự học. Chúc bạn học vui! 🚀
