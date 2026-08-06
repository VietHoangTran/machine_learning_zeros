/* ============================================================
   DỮ LIỆU KHÓA HỌC — sửa nội dung ở file này
   COURSE · WEEKS · CHEATSHEETS · GLOSSARY · PROJECTS
   ============================================================ */

const COURSE = {
  name: "Nhập môn Học máy",
  tagline: "Từ những dòng Python đầu tiên đến việc tự tay huấn luyện mô hình học máy của riêng bạn.",
  duration: "11 tuần — 10 tuần học + 1 tuần làm đồ án",
  schedule: "2 buổi / tuần — mỗi buổi 2 giờ",
  selfstudy: "4–5 giờ / tuần — mỗi tuần 1 bài tập + 1 quiz ngắn",
  audience: "Sinh viên năm 1–2, mọi ngành — người mới hoàn toàn đều được chào đón",
  prereq: "Toán phổ thông + một chiếc laptop và sự tò mò",
  tools: "Google Colab + Python, NumPy, pandas, scikit-learn — hoàn toàn miễn phí",
  grading: [
    { part:"Quiz hằng tuần (10 bài)", pct:"25%", desc:"Bài trắc nghiệm ngắn làm online, hoàn thành trước Buổi 1 của tuần kế tiếp." },
    { part:"Mini-project (3 bài)", pct:"35%", desc:"Dự án nhỏ trọn vẹn sau các tuần 4, 7 và 9 — nộp notebook kèm bản thuyết minh ngắn." },
    { part:"Đồ án cuối khóa", pct:"40%", desc:"Đồ án nhóm trên bộ dữ liệu tự chọn, thực hiện ở tuần 11 và thuyết trình vào buổi cuối." },
  ]
};

/* Mỗi tuần: buổi 1 (lý thuyết), buổi 2 (lab), bài tập, quiz.
   checklist: bước thực hành.  theory: tóm tắt.  links: tài nguyên.  selfcheck: câu hỏi tự kiểm tra. */
const WEEKS = [
{
  id:1, title:"Khởi động với Python", sub:"Colab · biến, list, dict · hàm, vòng lặp · NumPy",
  lesson1:{
    title:"Buổi 1 — Chào mừng & Python căn bản",
    meta:"Lý thuyết · Google Colab · biến, kiểu dữ liệu, list, dictionary",
    theory:[
      "<b>Google Colab</b> là một môi trường chạy Python trên trình duyệt, miễn phí, không cần cài đặt. Mỗi trang làm việc gọi là một <i>notebook</i> — gồm nhiều <i>ô (cell)</i> chứa code mà bạn chạy từng ô một bằng cách bấm Shift+Enter.",
      "Biến là nơi lưu trữ giá trị. Trong Python bạn không cần khai báo kiểu: <span class='code-inline'>x = 5</span> tự hiểu là số nguyên.",
      "<b>Kiểu dữ liệu</b> cơ bản: <code>int</code> (số nguyên), <code>float</code> (số thực), <code>str</code> (chuỗi ký tự), <code>bool</code> (đúng/sai), <code>list</code> (danh sách), <code>dict</code> (từ điển).",
      "List dùng khi bạn cần một danh sách có thứ tự, truy cập nhanh theo vị trí. Dict dùng khi cần tra cứu theo tên (khóa) — như một quyển từ điển 'từ khóa → định nghĩa', rất nhanh để tìm kiếm.",
      "Colab lưu trạng thái giữa các ô: biến bạn gán ở ô trên vẫn còn ở ô dưới. Chạy theo thứ tự từ trên xuống — nếu lỡ chạy ô dưới trước khi gán biến ở ô trên sẽ báo lỗi 'chưa định nghĩa'."
    ],
    concept:"Nguyên tắc vàng của Python: code đọc được như tiếng người. Chỉ số của list bắt đầu từ 0.",
    checklist:[
      "Mở Google Colab (colab.research.google.com) và tạo notebook mới.",
      "Viết và chạy cell đầu tiên: <span class='code-inline'>print('Xin chào!')</span>",
      "Tạo và gán vài biến số, chuỗi, kiểm tra kiểu bằng <span class='code-inline'>type()</span>.",
      "Thực hành list: tạo list, thêm (<span class='code-inline'>append</span>), truy cập theo chỉ số, cắt (slice).",
      "Thực hành dict: tạo dict, truy cập theo key, thêm/sửa cặp key:value.",
    ]
  },
  lesson2:{
    title:"Buổi 2 — Hàm, vòng lặp & NumPy",
    meta:"Lý thuyết + thực hành · hàm, for/while · mảng, vector, ma trận",
    theory:[
      "<b>Hàm (function)</b> đóng gói một đoạn code dùng lại được. Định nghĩa bằng <span class='code-inline'>def</span>, có thể nhận <i>tham số</i> và <i>trả về</i> kết quả.",
      "<b>Vòng lặp</b>: <code>for</code> lặp qua một chuỗi (list, phạm vi số), <code>while</code> lặp khi điều kiện còn đúng.",
      "<b>NumPy</b> là thư viện cho mảng số. Một <i>vector</i> là mảng 1 chiều, một <i>ma trận</i> là mảng 2 chiều. Toàn bộ đại số tuyến tính bạn cần cho khóa học nằm ở đây."
    ],
    concept:"Đại số tuyến tính của khóa học chỉ gói gọn: mảng, phép nhân ma trận và chuyển vị.",
    code:"import numpy as np\nA = np.array([[1,2],[3,4]])   # ma trận 2x2\nB = np.array([[5,6],[7,8]])\nprint(A @ B)          # phép nhân ma trận (@)\nprint(A.T)            # chuyển vị",
    checklist:[
      "Viết một hàm tự chọn (vd: hàm tính diện tích, hàm tính tổng 1 list).",
      "Dùng vòng lặp for in ra bảng cửu chương hoặc tổng các số chẵn.",
      "Cài/import NumPy, tạo mảng 1D và 2D.",
      "Thực hành phép nhân ma trận bằng toán tử <span class='code-inline'>@</span>.",
      "Thực hành chuyển vị với <span class='code-inline'>.T</span> và kiểm tra kích thước bằng <span class='code-inline'>.shape</span>.",
    ]
  },
  assignment:{
    title:"Bài tập — Notebook luyện tập Python",
    desc:"Một notebook có hướng dẫn từng bước, chạy trên dữ liệu thực, giúp bạn củng cố toàn bộ kiến thức tuần 1.",
    checklist:[
      "Mở notebook luyện tập (tạo mới hoặc mở bản đã cho).",
      "Đọc từng ô hướng dẫn, điền code vào chỗ trống theo chỉ dẫn.",
      "Chạy thử và sửa lỗi cho đến khi mọi cell chạy không báo lỗi.",
      "Lưu lại notebook và chạy lại toàn bộ (Runtime → Run all).",
    ]
  },
  selfcheck:[
    {q:"Chỉ số của list trong Python bắt đầu từ đâu?", opts:["1","0","-1","Bất kỳ"], a:1, why:"Python (và hầu hết ngôn ngữ lập trình) đánh chỉ số từ 0: phần tử đầu tiên là list[0]."},
    {q:"Đâu là cách đúng để tạo một từ điển (dict) rỗng?", opts:["dict()","[]","{}","empty = None"], a:2, why:"Dấu ngoặc nhọn {} tạo dict rỗng, còn [] tạo list rỗng."},
    {q:"Toán tử nào dùng cho phép nhân ma trận trong NumPy?", opts:["*","x","@","mul()"], a:2, why:"Phép nhân ma trận dùng @. Dấu * là phép nhân từng phần tử (element-wise)."},
    {q:"Khi nào nên dùng dict thay vì list?", opts:["Khi cần danh sách có thứ tự","Khi cần tra cứu nhanh theo khóa (tên)","Khi lưu số liệu","Khi cần lặp nhiều lần"], a:1, why:"Dict tra cứu theo khóa rất nhanh (như từ điển); list tra cứu theo vị trí."},
    {q:"Trong Colab, nếu bạn chạy một ô dùng biến chưa gán ở ô trên sẽ thế nào?", opts:["Tự động gán 0","Báo lỗi 'chưa định nghĩa'","Chạy bình thường","Lưu tạm"], a:1, why:"Colab chạy ô theo thứ tự; biến phải được gán trước khi dùng."},
  ],
  quiz:[
    {q:"Biến trong Python có cần khai báo kiểu dữ liệu trước không?", opts:["Có, bắt buộc","Không, tự suy ra","Chỉ khi là số","Chỉ khi là chuỗi"], a:1, why:"Python là ngôn ngữ động — bạn chỉ cần gán giá trị, kiểu được suy ra tự động."},
    {q:"Lệnh nào in ra màn hình?", opts:["input()","print()","echo()","show()"], a:1, why:"print() in kết quả ra màn hình trong Python."},
    {q:"Vòng lặp nào chạy khi điều kiện còn đúng?", opts:["for","while","def","import"], a:1, why:"while lặp lại chừng nào điều kiện còn True; for lặp qua một chuỗi cố định."},
    {q:"Thuộc tính nào của mảng NumPy cho biết số chiều?", opts:[".size",".dtype",".shape",".length"], a:2, why:".shape trả về kích thước mỗi chiều, ví dụ (2, 3) cho mảng 2x3."},
  ]
},
{
  id:2, title:"Làm việc với dữ liệu", sub:"pandas DataFrame · làm sạch dữ liệu · matplotlib",
  lesson1:{
    title:"Buổi 1 — pandas & thống kê mô tả",
    meta:"Lý thuyết · DataFrame · đọc CSV · chọn lọc, nhóm · thống kê mô tả",
    theory:[
      "<b>pandas</b> là thư viện làm việc với dữ liệu dạng bảng. Trung tâm là <b>DataFrame</b> — một bảng có hàng và cột, giống bảng tính Excel.",
      "Bạn đọc file CSV bằng <span class='code-inline'>pd.read_csv()</span>, xem vài dòng đầu bằng <span class='code-inline'>.head()</span>.",
      "<b>Thống kê mô tả</b> sẽ theo bạn suốt khóa: trung bình (<i>mean</i>), trung vị (<i>median</i>), phương sai (<i>variance</i>), tương quan (<i>correlation</i>).",
      "Mỗi cột là một <i>Series</i> — một mảng 1 chiều với tên và kiểu dữ liệu. DataFrame là tập hợp nhiều Series xếp cạnh nhau, chia sẻ cùng chỉ số hàng.",
      "<b>Phương sai</b> đo dữ liệu phân tán quanh trung bình thế nào: lớn = số liệu trải rộng, nhỏ = co cụm. <b>Tương quan</b> (từ -1 đến 1) đo hai cột biến thiên cùng chiều hay ngược chiều — gần 0 là không liên quan."
    ],
    concept:"Trung bình là 'tổng chia cho số lượng'; trung vị là 'giá trị ở giữa'. Trung vị ít bị ảnh hưởng bởi giá trị ngoại lệ hơn.",
    code:"import pandas as pd\ndf = pd.read_csv('du_lieu.csv')\nprint(df.head())        # 5 dòng đầu\nprint(df.describe())    # thống kê mô tả\nprint(df.groupby('nhom').mean())  # nhóm và tính trung bình",
    checklist:[
      "Import pandas và đọc một file CSV mẫu bằng <span class='code-inline'>read_csv</span>.",
      "Dùng <span class='code-inline'>.head()</span>, <span class='code-inline'>.shape</span>, <span class='code-inline'>.info()</span> để khảo sát bảng.",
      "Chọn một cột, chọn nhiều cột, lọc hàng theo điều kiện.",
      "Dùng <span class='code-inline'>describe()</span> và đọc các thống kê: mean, median, std.",
      "Thực hành nhóm dữ liệu bằng <span class='code-inline'>groupby</span>.",
    ]
  },
  lesson2:{
    title:"Buổi 2 — Lab làm sạch dữ liệu & biểu đồ",
    meta:"Thực hành · giá trị thiếu · trùng lặp · outlier · matplotlib",
    theory:[
      "<b>Làm sạch dữ liệu</b> là bước quan trọng nhất và tốn thời gian nhất. Dữ liệu thực thường có: giá trị thiếu, bản ghi trùng lặp, điểm ngoại lệ (outlier).",
      "<b>matplotlib</b> vẽ biểu đồ. Thói quen tốt: luôn 'soi' dữ liệu bằng biểu đồ trước khi tin nó.",
      "Dữ liệu xấu vào → mô hình xấu ra (garbage in, garbage out).",
      "Xử lý giá trị thiếu theo kiểu dữ liệu: cột số thường điền bằng <i>trung bình</i> hoặc <i>trung vị</i> (ít bị outlier kéo lệch), cột phân loại thường điền bằng <i>mode</i> (giá trị xuất hiện nhiều nhất) hoặc gán một hạng mục riêng 'unknown'.",
      "Đừng tự động drop hết dòng thiếu — mất dữ liệu cũng là mất thông tin. Hãy kiểm tra dòng thiếu có phải là một nhóm đặc biệt (vd: khách chưa khai tuổi) trước khi quyết định xử lý."
    ],
    concept:"Phát hiện giá trị thiếu: df.isna().sum(). Xử lý: bỏ dòng (dropna) hoặc điền giá trị (fillna).",
    code:"import matplotlib.pyplot as plt\ndf['gia'].hist()      # biểu đồ phân phối\nplt.show()\nprint(df.isna().sum())  # số giá trị thiếu mỗi cột\nprint(df.duplicated().sum())  # số bản ghi trùng",
    checklist:[
      "Tìm giá trị thiếu bằng <span class='code-inline'>isna().sum()</span> và quyết định bỏ hay điền.",
      "Tìm và xử lý các bản ghi trùng lặp bằng <span class='code-inline'>duplicated()/drop_duplicates()</span>.",
      "Phát hiện outlier bằng boxplot hoặc histogram.",
      "Vẽ histogram và scatter plot bằng matplotlib.",
      "Tóm tắt 3 điều bạn học được về bộ dữ liệu sau khi vẽ.",
    ]
  },
  assignment:{
    title:"Bài tập — Phân tích khám phá (EDA)",
    desc:"Phân tích khám phá một bộ dữ liệu thực tế do bạn tự chọn.",
    checklist:[
      "Chọn một bộ dữ liệu thú vị (vd: từ Kaggle, data.gov, hoặc bộ có sẵn trong seaborn).",
      "Đọc dữ liệu, khảo sát cấu trúc, các cột, kiểu dữ liệu.",
      "Làm sạch: xử lý thiếu, trùng lặp, outlier.",
      "Vẽ ít nhất 3 biểu đồ minh họa và viết 2–3 câu nhận xét cho mỗi biểu.",
    ]
  },
  selfcheck:[
    {q:"Đâu là cách phát hiện số giá trị thiếu trong mỗi cột?", opts:["df.missing()","df.isna().sum()","df.cleandata()","df.null_count()"], a:1, why:"df.isna() trả về bảng True/False, .sum() đếm số True theo từng cột."},
    {q:"Hàm nào trả về 5 dòng dữ liệu đầu tiên?", opts:[".tail()",".describe()",".head()",".shape"], a:2, why:".head() hiển thị 5 dòng đầu (mặc định); .tail() lấy cuối."},
    {q:"Trung vị (median) so với trung bình (mean) ưu điểm gì?", opts:["Luôn lớn hơn","Chính xác hơn cho dữ liệu số","Ít bị ảnh hưởng bởi outlier","Dễ tính hơn"], a:2, why:"Trung vị là giá trị giữa nên không bị một giá trị cực đại kéo lệch."},
    {q:"Để điền giá trị thiếu cho một cột số, cách hợp lý nhất là gì?", opts:["Điền bằng chuỗi rỗng","Điền bằng trung vị hoặc trung bình","Xóa cả bảng","Không cần xử lý"], a:1, why:"Cột số thường điền bằng trung bình hoặc trung vị (ít bị outlier kéo lệch)."},
    {q:"Phương sai đo lường điều gì?", opts:["Độ phân tán dữ liệu quanh trung bình","Giá trị lớn nhất","Số lượng hàng","Kiểu dữ liệu"], a:0, why:"Phương sai lớn = dữ liệu trải rộng, nhỏ = co cụm quanh trung bình."},
  ],
  quiz:[
    {q:"DataFrame trong pandas tương tự cái gì?", opts:["Một list đơn giản","Một bảng có hàng và cột","Một từ điển","Một hàm"], a:1, why:"DataFrame là cấu trúc bảng 2 chiều (hàng, cột) — giống bảng tính."},
    {q:"Lệnh nào đọc file CSV?", opts:["pd.open()","pd.read_csv()","pd.load()","df.csv()"], a:1, why:"pd.read_csv('file.csv') đọc file CSV vào DataFrame."},
    {q:"Dữ liệu 'outlier' là gì?", opts:["Giá trị thiếu","Bản ghi trùng lặp","Điểm ngoại lệ, khác thường so với còn lại","Cột không cần thiết"], a:2, why:"Outlier là điểm dữ liệu lệch hẳn khỏi phân phối chung."},
    {q:"Thư viện nào chuyên vẽ biểu đồ?", opts:["NumPy","pandas","matplotlib","scikit-learn"], a:2, why:"matplotlib là thư viện vẽ đồ thị chuẩn của Python."},
  ]
},
{
  id:3, title:"Học máy là gì?", sub:"Feature/label · train/test split · k-NN",
  lesson1:{
    title:"Buổi 1 — Khái niệm nền tảng",
    meta:"Lý thuyết · học máy là gì · feature/label · có giám sát/không giám sát · train/test",
    theory:[
      "<b>Học máy (machine learning)</b> là cách để máy tính tự rút ra quy luật từ dữ liệu, thay vì được lập trình bằng quy tắc cứng.",
      "<b>Feature (đặc trưng)</b> là các thuộc tính mô tả một mẫu (vd: số phòng, diện tích nhà). <b>Label (nhãn)</b> là đáp án bạn muốn dự đoán (vd: giá nhà).",
      "<b>Có giám sát (supervised)</b>: dữ liệu có label. <b>Không giám sát (unsupervised)</b>: dữ liệu không có label, máy tự tìm cấu trúc.",
      "Nguyên tắc vàng: chia dữ liệu thành <b>train set</b> (để học) và <b>test set</b> (để kiểm tra) — không bao giờ kiểm tra trên dữ liệu đã học.",
      "Ba kiểu bài toán điển hình: <i>phân loại</i> (label rời rạc, vd: thư rác hay không), <i>hồi quy</i> (label số liên tục, vd: giá nhà), <i>phân cụm</i> (không giám sát, không có label, máy tự gom nhóm)."
    ],
    concept:"Train/test split: huấn luyện mô hình trên train, đo chất lượng trên test. Nếu chỉ đánh giá trên train, mô hình có vẻ 'giỏi' nhưng thật ra chỉ đang ghi nhớ (overfit).",
    code:"from sklearn.model_selection import train_test_split\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y, test_size=0.2, random_state=42)",
    checklist:[
      "Phân biệt được feature và label trong một bài toán cụ thể.",
      "Phân biệt bài toán có giám sát / không giám sát.",
      "Chia dữ liệu thành train và test bằng train_test_split.",
      "Giải thích vì sao phải có test set riêng.",
    ]
  },
  lesson2:{
    title:"Buổi 2 — Mô hình đầu tiên: k-NN",
    meta:"Lý thuyết + lab · k-Nearest Neighbors · khoảng cách Euclid · scikit-learn",
    theory:[
      "<b>k-Nearest Neighbors (k-NN)</b> là bộ phân loại đơn giản: một điểm mới được gán nhãn theo <i>k</i> điểm lân cận gần nhất. Nếu k=3 và 2/3 hàng xóm là 'mèo', điểm đó là 'mèo'.",
      "<b>Khoảng cách Euclid</b> là độ dài đường thẳng nối hai điểm — kiến thức vector ở tuần 1 phát huy tác dụng.",
      "k-NN là 'học bằng trí nhớ': không xây mô hình, chỉ lưu toàn bộ dữ liệu và so sánh khi cần.",
      "Vì k-NN so sánh khoảng cách nên <b>chuẩn hóa dữ liệu rất quan trọng</b>: nếu một cột có giá trị lớn (vd: diện tích hàng nghìn) nó sẽ 'áp đảo' cột nhỏ (vd: số phòng 1–5), khiến khoảng cách bị lệch. Đưa mọi cột về cùng thang đo trước khi đo.",
      "Chọn k: k quá nhỏ (k=1) nhạy cảm với nhiễu; k quá lớn làm trơn mất ranh giới giữa các lớp. Thử vài giá trị k lẻ và cross-validation để chọn."
    ],
    concept:"k-NN không học ra tham số — nó lưu dữ liệu và dự đoán bằng cách đo khoảng cách. K chọn bằng số lẻ để tránh hòa phiếu.",
    code:"from sklearn.neighbors import KNeighborsClassifier\nmodel = KNeighborsClassifier(n_neighbors=3)\nmodel.fit(X_train, y_train)\npred = model.predict(X_test)\nprint(accuracy_score(y_test, pred))",
    checklist:[
      "Khởi tạo KNeighborsClassifier với k=3.",
      "Fit mô hình lên dữ liệu train.",
      "Dự đoán trên test và tính accuracy.",
      "Thử thay đổi k và nhận xét accuracy thay đổi thế nào.",
      "Vẽ 2 feature lên mặt phẳng và trực quan hóa ranh giới phân loại.",
    ]
  },
  assignment:{
    title:"Bài tập — Tự xây bộ phân loại k-NN",
    desc:"Tự xây một bộ phân loại k-NN hoàn chỉnh trên bộ dữ liệu mới.",
    checklist:[
      "Chọn một bộ dữ liệu phân loại mới (vd: iris, hoặc tự chọn).",
      "Chia train/test đúng cách.",
      "Huấn luyện k-NN và đánh giá accuracy.",
      "Thử vài giá trị k, chọn k tốt nhất, giải thích lý do.",
    ]
  },
  selfcheck:[
    {q:"Bài toán nào là 'có giám sát'?", opts:["Nhóm khách hàng thành cụm","Dự đoán giá nhà từ diện tích","Tìm cấu trúc dữ liệu","Giảm số chiều"], a:1, why:"Dự đoán giá nhà (một label) là có giám sát; các bài còn lại không có label."},
    {q:"k-NN dự đoán một điểm mới bằng cách nào?", opts:["Xây đường thẳng","Nhìn k điểm lân cận gần nhất","Tính đạo hàm","Dùng mạng nơ-ron"], a:1, why:"k-NN gán nhãn theo đa số các hàng xóm gần nhất."},
    {q:"Vì sao phải có test set riêng?", opts:["Để chạy nhanh hơn","Để đo chất lượng trên dữ liệu chưa từng học","Để làm đẹp code","Bắt buộc của thư viện"], a:1, why:"Test set phản ánh khả năng của mô hình trên dữ liệu mới, không phải khả năng ghi nhớ."},
    {q:"Với k-NN, vì sao cần chuẩn hóa dữ liệu trước?", opts:["Để code ngắn hơn","Tránh cột giá trị lớn áp đảo khi đo khoảng cách","Để tăng tốc","Không cần chuẩn hóa"], a:1, why:"k-NN dùng khoảng cách; cột giá trị lớn sẽ 'áp đảo' cột nhỏ nếu không đưa về cùng thang đo."},
    {q:"Nếu chọn k quá nhỏ (k=1), mô hình có đặc điểm gì?", opts:["Quá mượt","Rất nhạy cảm với nhiễu","Luôn đúng","Chạy chậm"], a:1, why:"k=1 chỉ nhìn đúng 1 hàng xóm gần nhất, dễ bị một điểm nhiễu đánh lừa."},
  ],
  quiz:[
    {q:"Label (nhãn) trong học có giám sát là gì?", opts:["Đặc trưng của dữ liệu","Đáp án muốn dự đoán","Loại model","Số lượng dữ liệu"], a:1, why:"Label là giá trị đích bạn muốn máy dự đoán (nhãn phân loại hoặc giá trị số)."},
    {q:"k-NN thuộc loại học nào?", opts:["Không giám sát","Có giám sát","Tăng cường","Học sâu"], a:1, why:"k-NN dùng label để gán nhãn nên thuộc loại có giám sát."},
    {q:"Đâu KHÔNG phải bước của quy trình học máy?", opts:["Chuẩn bị dữ liệu","Huấn luyện mô hình","Đánh giá mô hình","Viết báo cáo giấy cho mọi dự án"], a:3, why:"Viết báo cáo giấy không phải bước bắt buộc trong quy trình kỹ thuật học máy."},
    {q:"Nếu k=5 và có 4 hàng xóm là 'mèo', 1 là 'chó', điểm mới là gì?", opts:["Chó","Mèo","Không xác định","Chọn ngẫu nhiên"], a:1, why:"k-NN lấy đa số phiếu bầu: 4/5 mèo nên điểm mới được gán là mèo."},
  ]
},
{
  id:4, title:"Hồi quy — Dự đoán con số", sub:"Linear regression · loss function · gradient descent",
  lesson1:{
    title:"Buổi 1 — Hồi quy tuyến tính & gradient descent",
    meta:"Lý thuyết · đường khớp dữ liệu · loss function · lăn xuống dốc",
    theory:[
      "<b>Hồi quy tuyến tính</b> tìm một đường thẳng (trong nhiều chiều là một mặt phẳng/hyperplane) 'khớp' nhất với dữ liệu: y = a·x + b.",
      "<b>Loss function (hàm mất mát)</b> đo độ sai lệch giữa dự đoán và giá trị thật. Hồi quy thường dùng <i>MSE</i> (bình phương sai số trung bình).",
      "<b>Gradient descent</b>: tưởng tượng bạn đứng trên đồi và 'lăn xuống dốc' — mỗi bước đi theo hướng dốc nhất để tìm đáy (chỗ loss nhỏ nhất). Đạo hàm cho bạn biết hướng dốc đó.",
      "<b>MSE</b> bình phương sai số để: (1) mọi sai số đều dương (không bị triệt tiêu), (2) phạt sai số lớn nặng hơn sai số nhỏ — vì bình phương làm sai số lớn tăng mạnh.",
      "Mô hình có nhiều feature thì 'đường thẳng' trở thành một mặt phẳng nhiều chiều: y = a₁x₁ + a₂x₂ + … + b. Ý tưởng tìm hệ số vẫn y hệt, chỉ nhiều tham số hơn."
    ],
    concept:"Gradient descent tinh chỉnh tham số a, b theo từng bước nhỏ, mỗi bước giảm loss một chút, cho đến khi tìm được bộ tham số tối ưu.",
    code:"from sklearn.linear_model import LinearRegression\nmodel = LinearRegression()\nmodel.fit(X_train, y_train)\ny_pred = model.predict(X_test)\nprint('Hệ số a:', model.coef_)\nprint('Chặn b:', model.intercept_)",
    checklist:[
      "Huấn luyện LinearRegression trên dữ liệu train.",
      "Đọc và hiểu ý nghĩa hệ số model.coef_ và intercept_.",
      "Dự đoán trên test, vẽ dự đoán so với giá trị thật.",
      "Tính MSE và RMSE bằng tay hoặc sklearn.",
    ]
  },
  lesson2:{
    title:"Buổi 2 — Lab dự đoán giá nhà",
    meta:"Thực hành · MAE, RMSE · đọc hiểu hệ số",
    theory:[
      "<b>MAE</b> (Mean Absolute Error): trung bình của |dự đoán − thật|. <b>RMSE</b>: căn bậc hai của MSE. Cả hai càng nhỏ càng tốt.",
      "Đọc hệ số: với y = a·x + b, hệ số a cho biết 'khi x tăng 1 đơn vị, y thay đổi a đơn vị'. Điều này giúp hiểu yếu tố nào ảnh hưởng mạnh đến giá nhà.",
      "Đọc RMSE trong đơn vị của mục tiêu: nếu RMSE = 2.1 tỷ trên dự đoán giá nhà, nghĩa là sai số trung bình ~2.1 tỷ — dễ diễn giải hơn so với MSE bị bình phương. So sánh RMSE của mô hình với độ lệch chuẩn của giá để biết mô hình 'khá' tới đâu.",
      "Hệ số âm/dương cũng có ý nghĩa: hệ số dương nghĩa là feature tăng thì dự đoán tăng; hệ số âm nghĩa là feature tăng thì dự đoán giảm (vd: nhà càng cũ giá càng thấp)."
    ],
    concept:"RMSE phạt các sai số lớn nặng hơn MAE (do bình phương). Nếu có vài sai số rất lớn, RMSE sẽ cao hơn hẳn MAE.",
    code:"from sklearn.metrics import mean_absolute_error, mean_squared_error\nmae = mean_absolute_error(y_test, y_pred)\nrmse = mean_squared_error(y_test, y_pred, squared=False)\nprint(f'MAE={mae:.2f}, RMSE={rmse:.2f}')",
    checklist:[
      "Chọn bộ dữ liệu giá nhà (hoặc tự tạo).",
      "Chia train/test, huấn luyện LinearRegression.",
      "Tính MAE và RMSE, so sánh hai chỉ số.",
      "Đọc hệ số và giải thích yếu tố nào ảnh hưởng mạnh nhất đến giá.",
    ]
  },
  assignment:{
    title:"Mini-project 1 — Mô hình hồi quy trên dữ liệu nhà đất",
    desc:"Dự án nhỏ trọn vẹn (thay cho bài tập thường lệ). Nộp notebook kèm bản thuyết minh ngắn.",
    checklist:[
      "Chọn bộ dữ liệu nhà đất có cột mục tiêu là giá.",
      "Làm sạch dữ liệu (thiếu, trùng, outlier).",
      "Chia train/test, huấn luyện hồi quy tuyến tính.",
      "Đánh giá bằng MAE và RMSE.",
      "Viết thuyết minh ngắn: yếu tố nào ảnh hưởng giá, mô hình tốt ra sao.",
    ]
  },
  selfcheck:[
    {q:"Loss function dùng để làm gì?", opts:["Làm đẹp biểu đồ","Đo độ sai lệch giữa dự đoán và thật","Chọn dữ liệu","In kết quả"], a:1, why:"Hàm mất mát định lượng độ sai; mục tiêu là làm cho nó càng nhỏ càng tốt."},
    {q:"RMSE so với MAE khác biệt chính là gì?", opts:["RMSE luôn bằng MAE","RMSE phạt sai số lớn nặng hơn","MAE luôn lớn hơn","Không khác nhau"], a:1, why:"RMSE bình phương sai số nên các sai số lớn bị phạt nặng hơn."},
    {q:"Vì sao MSE bình phương sai số (thay vì chỉ lấy giá trị tuyệt đối)?", opts:["Để mọi sai số dương và phạt sai số lớn nặng hơn","Để số nhỏ hơn","Vì bắt buộc","Để đẹp"], a:0, why:"Bình phương biến mọi sai số thành dương (không triệt tiêu) và phạt sai số lớn mạnh hơn."},
    {q:"Trong y = a·x + b, hệ số a âm có nghĩa gì?", opts:["x tăng thì y tăng","x tăng thì y giảm","Mô hình sai","Chặn âm"], a:1, why:"Hệ số âm: feature tăng thì dự đoán giảm (vd: nhà càng cũ giá càng thấp)."},
  ],
  quiz:[
    {q:"Hồi quy tuyến tính dự đoán loại biến nào?", opts:["Nhãn rời rạc","Giá trị số liên tục","Danh mục","Chuỗi văn bản"], a:1, why:"Hồi quy dự đoán con số (giá liên tục), ví dụ giá nhà."},
    {q:"Gradient descent là kỹ thuật để làm gì?", opts:["Chia dữ liệu","Tìm tham số làm loss nhỏ nhất","Vẽ biểu đồ","Làm sạch dữ liệu"], a:1, why:"Gradient descent từng bước điều chỉnh tham số theo hướng giảm loss."},
    {q:"MSE viết tắt của gì?", opts:["Mean Squared Error","Maximum Set Error","Minimum Standard Error","Median Sample Estimate"], a:0, why:"MSE = Mean Squared Error, trung bình bình phương sai số."},
    {q:"Trong y = a·x + b, hệ số a có ý nghĩa gì?", opts:["Giá trị bắt đầu","Độ dốc — x tăng 1 thì y đổi bao nhiêu","Sai số","Số lượng mẫu"], a:1, why:"a là độ dốc (hệ số góc): thể hiện mức thay đổi của y khi x tăng 1 đơn vị."},
  ]
},
{
  id:5, title:"Phân loại — Dự đoán nhãn", sub:"Logistic regression · confusion matrix · F1",
  lesson1:{
    title:"Buổi 1 — Hồi quy logistic & xác suất",
    meta:"Lý thuyết · sigmoid · decision boundary · xác suất căn bản",
    theory:[
      "<b>Hồi quy logistic</b> dùng để phân loại (dự đoán nhãn), dù tên có 'hồi quy'. Nó đưa ra một xác suất từ 0 đến 1 qua hàm <b>sigmoid</b>.",
      "<b>Sigmoid</b> biến một con số bất kỳ thành xác suất trong khoảng [0,1]. Nếu xác suất ≥ 0.5, dự đoán thuộc nhãn dương.",
      "<b>Decision boundary</b> là ranh giới phân chia các vùng dự đoán khác nhau trên mặt phẳng dữ liệu.",
      "Đọc xác suất: con số '0.7' có nghĩa mô hình tin 70% mẫu thuộc nhãn dương — không phải độ chắc chắn tuyệt đối.",
      "Vì sao dùng <b>xác suất</b> thay vì nhãn cứng? Vì cho phép đặt <i>ngưỡng</i> linh hoạt: trong phát hiện gian lận, bạn có thể đổi ngưỡng xuống 0.3 để 'bắt' nhiều ca hơn (chấp nhận nhiều báo động giả) — xác suất giữ lại độ mịn đó, nhãn cứng thì mất."
    ],
    concept:"Sigmoid đưa ra xác suất. Ngưỡng mặc định 0.5 để quyết định nhãn — nhưng bạn có thể đổi ngưỡng để cân bằng lỗi.",
    code:"from sklearn.linear_model import LogisticRegression\nmodel = LogisticRegression()\nmodel.fit(X_train, y_train)\nprob = model.predict_proba(X_test)  # xác suất mỗi lớp\npred = model.predict(X_test)",
    checklist:[
      "Huấn luyện LogisticRegression trên dữ liệu phân loại.",
      "Dùng predict_proba để xem xác suất, không chỉ nhãn.",
      "Hiểu hàm sigmoid biến số thành xác suất 0-1.",
      "Vẽ decision boundary cho 2 feature.",
    ]
  },
  lesson2:{
    title:"Buổi 2 — Lab bộ lọc thư rác & chỉ số đánh giá",
    meta:"Thực hành · confusion matrix · precision, recall, F1",
    theory:[
      "<b>Confusion matrix</b>: bảng so sánh dự đoán với thực tế — True Positive, False Positive, True Negative, False Negative.",
      "<b>Precision</b>: trong các điểm mô hình gọi là 'spam', bao nhiêu phần đúng là spam. <b>Recall</b>: trong các điểm thực sự là spam, mô hình bắt được bao nhiêu phần.",
      "<b>Accuracy</b> có thể đánh lừa khi dữ liệu mất cân bằng (vd 99% không spam). Nếu model luôn đoán 'không spam' thì accuracy 99% nhưng vô dụng.",
      "Chọn chỉ số theo hậu quả của lỗi: phát hiện ung thư thì <i>recall</i> quan trọng (không bỏ sót ca bệnh), còn quảng cáo spam thì <i>precision</i> quan trọng (không làm phiền người dùng bằng thư hợp lệ).",
      "<b>F1 score</b> là trung bình điều hòa của precision và recall — dùng khi bạn muốn một con số duy nhất cân bằng cả hai, đặc biệt hữu ích trên dữ liệu mất cân bằng."
    ],
    concept:"Dữ liệu mất cân bằng: nhìn precision & recall, không chỉ accuracy. F1 = trung bình điều hòa của precision và recall — cân bằng cả hai.",
    code:"from sklearn.metrics import confusion_matrix, precision_score, recall_score, f1_score\nprint(confusion_matrix(y_test, pred))\nprint('Precision:', precision_score(y_test, pred))\nprint('Recall:', recall_score(y_test, pred))\nprint('F1:', f1_score(y_test, pred))",
    checklist:[
      "Huấn luyện bộ phân loại thư rác (spam) — hoặc dữ liệu 2 lớp bất kỳ.",
      "In confusion matrix và đọc 4 ô.",
      "Tính precision, recall, F1.",
      "Thử với dữ liệu mất cân bằng và giải thích vì sao accuracy sai lầm.",
    ]
  },
  assignment:{
    title:"Bài tập — Phân loại dữ liệu mất cân bằng",
    desc:"Bộ phân loại trên dữ liệu mất cân bằng, kèm phân tích ngắn về việc chọn chỉ số đánh giá cho đúng.",
    checklist:[
      "Chọn bộ dữ liệu mất cân bằng (vd: phát hiện gian lận, thư rác).",
      "Huấn luyện mô hình phân loại.",
      "Tính accuracy, precision, recall, F1.",
      "Viết phân tích: chỉ số nào quan trọng với bài toán này và vì sao.",
    ]
  },
  selfcheck:[
    {q:"Precision trả lời câu hỏi nào?", opts:["Bao nhiêu spam thật bị bắt","Trong các dự đoán 'spam', bao nhiêu đúng","Số thư tổng cộng","Tốc độ chạy"], a:1, why:"Precision = TP/(TP+FP): trong những gì model gọi là dương, mấy cái đúng."},
    {q:"Khi nào accuracy gây hiểu lầm?", opts:["Dữ liệu cân bằng","Dữ liệu mất cân bằng","Dữ liệu nhỏ","Luôn đáng tin"], a:1, why:"Khi một lớp chiếm áp đảo, model chỉ đoán lớp đó là đã đạt accuracy cao mà vô dụng."},
    {q:"Trong phát hiện bệnh ung thư, chỉ số nào thường được ưu tiên?", opts:["Precision","Recall (không bỏ sót ca bệnh)","Accuracy","Tốc độ"], a:1, why:"Bỏ sót ca bệnh nguy hiểm hơn báo động giả, nên ưu tiên recall cao."},
    {q:"F1 score dùng để làm gì?", opts:["Chọn k","Cân bằng giữa precision và recall","Vẽ biểu đồ","Chia dữ liệu"], a:1, why:"F1 là trung bình điều hòa của precision và recall, cho một con số cân bằng cả hai."},
  ],
  quiz:[
    {q:"Hồi quy logistic thường dùng để làm gì?", opts:["Dự đoán giá số liên tục","Phân loại thành nhãn","Vẽ biểu đồ","Chọn feature"], a:1, why:"Logistic regression đưa ra xác suất rồi quy về nhãn — dùng cho phân loại."},
    {q:"Hàm sigmoid biến một số thành khoảng nào?", opts:["(-∞, ∞)","[0, 1]","[0, 100]","[-1, 1]"], a:1, why:"Sigmoid nén mọi giá trị thực về trong khoảng (0,1), diễn giải như xác suất."},
    {q:"Confusion matrix dùng để làm gì?", opts:["Lưu dữ liệu","So sánh dự đoán với thực tế","Chọn k","Tính tốc độ"], a:1, why:"Confusion matrix cho biết model đoán đúng/sai ở từng lớp (TP/FP/TN/FN)."},
    {q:"F1 score là gì?", opts:["Trung bình cộng precision và recall","Trung bình điều hòa của precision và recall","Accuracy","RMSE"], a:1, why:"F1 cân bằng precision và recall, hữu ích khi dữ liệu mất cân bằng."},
  ]
},
{
  id:6, title:"Đánh giá và cải thiện mô hình", sub:"Overfitting · cross-validation · regularization",
  lesson1:{
    title:"Buổi 1 — Overfitting, bias–variance & cross-validation",
    meta:"Lý thuyết · tuần 'đáng tiền' nhất · regularization",
    theory:[
      "<b>Overfitting</b>: mô hình quá khớp dữ liệu train (thuộc lòng) nên dở trên dữ liệu mới. <b>Underfitting</b>: quá đơn giản, chưa nắm được quy luật.",
      "<b>Bias–variance tradeoff</b>: bias cao = mô hình đơn giản quá (thiếu sót); variance cao = quá nhạy với dữ liệu train (overfit). Cân bằng hai thứ này là nghệ thuật.",
      "<b>Cross-validation</b>: chia dữ liệu thành nhiều phần, lần lượt dùng mỗi phần làm test, phần còn lại làm train — đánh giá ổn định hơn một lần chia duy nhất.",
      "<b>Regularization</b>: thêm hình phạt vào loss để giữ tham số nhỏ, chống overfit.",
      "Trực giác bias–variance: như bắn cung vào hồng tâm — <i>bias cao</i> là bắn trượt đều một phía (hệ thống lệch), <i>variance cao</i> là các phát bắn phân tán lộn xộn quanh chục vòng. Ta muốn cả hai đều thấp, nhưng thường phải đánh đổi.",
      "Dấu hiệu cần regularization hoặc cross-validation: sai số trên train thấp hơn nhiều so với test. Thêm hình phạt (L1/L2) giữ hệ số nhỏ, làm mô hình 'dè dặt' hơn và khái quát tốt hơn."
    ],
    concept:"Dấu hiệu overfit: loss train rất thấp nhưng loss test cao. Cross-validation giúp bạn phát hiện điều này đáng tin cậy hơn.",
    code:"from sklearn.model_selection import cross_val_score\nscores = cross_val_score(model, X, y, cv=5)\nprint(scores)              # 5 điểm, mỗi phần (fold)\nprint('TB:', scores.mean())",
    checklist:[
      "Nhận biết overfitting và underfitting qua biểu đồ loss train/test.",
      "Giải thích bias–variance tradeoff bằng lời.",
      "Dùng cross_val_score với cv=5 để đánh giá mô hình.",
      "Áp dụng regularization (vd: L2 trong hồi quy) và so sánh.",
    ]
  },
  lesson2:{
    title:"Buổi 2 — Lab chuẩn hóa & feature engineering",
    meta:"Thực hành · chuẩn hóa dữ liệu · tạo đặc trưng · tinh chỉnh siêu tham số",
    theory:[
      "<b>Chuẩn hóa (scaling)</b>: đưa các cột số về cùng thang đo (vd 0-1 hoặc trung bình 0) để model không bị cột có giá trị lớn áp đảo.",
      "<b>Feature engineering</b>: tạo đặc trưng mới từ đặc trưng cũ (vd: diện tích = dài × rộng) để giúp model học tốt hơn.",
      "<b>Siêu tham số (hyperparameter)</b>: các nút vặn của model (k, alpha, depth...). Tinh chỉnh bằng thử nhiều giá trị và cross-validation.",
      "Khác biệt then chốt: <i>tham số (parameter)</i> là thứ mô hình tự học từ dữ liệu (hệ số hồi quy, trọng số mạng), còn <i>siêu tham số (hyperparameter)</i> là nút vặn bạn tự đặt trước khi huấn luyện (k, depth, alpha).",
      "Feature engineering thường tạo bước nhảy lớn hơn cả đổi thuật toán: một đặc trưng mới đúng bản chất (vd: diện tích thay vì dài và rộng riêng lẻ) giúp mô hình 'nhìn' vấn đề đúng hơn."
    ],
    concept:"Grid search: thử nhiều tổ hợp siêu tham số + cross-validation, chọn tổ hợp cho điểm tốt nhất trên validation.",
    code:"from sklearn.preprocessing import StandardScaler\nsc = StandardScaler()\nX_train = sc.fit_transform(X_train)\nX_test = sc.transform(X_test)  # dùng tham số từ train!",
    checklist:[
      "Chuẩn hóa dữ liệu bằng StandardScaler (fit trên train, transform cả train và test).",
      "Tạo ít nhất 1 feature mới và xem có cải thiện không.",
      "Thử vài siêu tham số bằng GridSearchCV.",
      "Ghi lại điều gì hiệu quả, điều gì không (cho bài tập).",
    ]
  },
  assignment:{
    title:"Bài tập — Cải thiện một mô hình cơ sở",
    desc:"Nhận một mô hình cơ sở và cải thiện nó; ghi lại điều gì hiệu quả, điều gì không.",
    checklist:[
      "Bắt đầu từ một mô hình cơ sở (baseline).",
      "Thử cải thiện: chuẩn hóa, feature engineering, tinh chỉnh siêu tham số.",
      "Đo lường sự thay đổi bằng cross-validation.",
      "Viết nhật ký: thay đổi nào giúp, thay đổi nào không và vì sao.",
    ]
  },
  selfcheck:[
    {q:"Dấu hiệu điển hình của overfitting?", opts:["Loss train thấp, loss test cao","Cả hai đều thấp","Loss train cao, loss test thấp","Mô hình chạy chậm"], a:0, why:"Overfit: model thuộc lòng train (loss thấp) nhưng khái quát kém (loss test cao)."},
    {q:"Cross-validation giúp gì?", opts:["Làm dữ liệu to hơn","Đánh giá mô hình ổn định hơn","Vẽ biểu đồ đẹp hơn","Không có tác dụng"], a:1, why:"Chia thành nhiều fold, mỗi fold làm test một lần, lấy trung bình để giảm ngẫu nhiên."},
    {q:"Bias cao tương ứng với tình trạng nào?", opts:["Mô hình quá phức tạp","Mô hình quá đơn giản (thiếu sót hệ thống)","Mô hình hoàn hảo","Dữ liệu sạch"], a:1, why:"Bias cao = model đơn giản quá, bắn trượt đều một phía (underfit)."},
    {q:"Tham số (parameter) và siêu tham số (hyperparameter) khác nhau thế nào?", opts:["Giống nhau","Tham số do model tự học, siêu tham số do ta đặt","Ngược lại","Không liên quan"], a:1, why:"Tham số (hệ số, trọng số) model tự học; siêu tham số (k, depth) ta chỉnh trước khi huấn luyện."},
  ],
  quiz:[
    {q:"Underfitting xảy ra khi nào?", opts:["Mô hình quá phức tạp","Mô hình quá đơn giản, không bắt được quy luật","Dữ liệu quá lớn","Không dùng library"], a:1, why:"Underfit: model quá đơn giản, sai số cao cả trên train lẫn test."},
    {q:"Regularization giúp làm gì?", opts:["Tăng tốc độ","Chống overfitting bằng cách phạt tham số lớn","Thêm dữ liệu","Vẽ đồ thị"], a:1, why:"Regularization thêm hình phạt vào loss để giữ tham số nhỏ, giảm overfit."},
    {q:"Chuẩn hóa dữ liệu là để làm gì?", opts:["Xóa dữ liệu","Đưa các cột về cùng thang đo","Tăng số mẫu","In kết quả"], a:1, why:"Scaling giúp các feature có cùng độ lớn, tránh cột giá trị lớn áp đảo."},
    {q:"Siêu tham số là gì?", opts:["Giá trị model tự học","Nút vặn ta chỉnh trước khi huấn luyện","Kết quả dự đoán","Label của dữ liệu"], a:1, why:"Siêu tham số (như k, alpha) do ta đặt, không phải do model học."},
  ]
},
{
  id:7, title:"Cây quyết định và Ensemble", sub:"Decision tree · random forest · boosting",
  lesson1:{
    title:"Buổi 1 — Cây quyết định & random forest",
    meta:"Lý thuyết · tự đặt câu hỏi · trí tuệ đám đông · boosting",
    theory:[
      "<b>Cây quyết định (decision tree)</b> học cách đặt các câu hỏi 'nếu... thì' để chia dữ liệu thành nhánh, cho tới khi mỗi nhánh thuần nhất về nhãn.",
      "<b>Random forest</b> = nhiều cây quyết định, mỗi cây nhìn một phần ngẫu nhiên của dữ liệu và feature, rồi 'bỏ phiếu' lấy đa số. Sức mạnh nằm ở 'trí tuệ đám đông'.",
      "<b>Gradient boosting</b> (mức ý tưởng): xây cây nối tiếp nhau, mỗi cây sau sửa lỗi của cây trước. Thường cho kết quả rất tốt trên dữ liệu bảng.",
      "Cây quyết định dễ đọc hiểu ('nếu diện tích > 100 và phòng ≥ 4 thì giá cao'), gọi là <i>interpretable</i>. Đây là lý do cây vẫn được dùng trong những lĩnh vực cần giải thích rõ như y tế, tài chính.",
      "Random forest giảm overfit so với một cây đơn: vì mỗi cây nhìn một 'lát' ngẫu nhiên khác nhau, sai của chúng khác nhau, và lấy đa số sẽ 'hòa tan' bớt sai. Đây là ý tưởng <i>bagging</i>."
    ],
    concept:"Forest > 1 cây: nhiều cây độc lập, mỗi cây sai ở chỗ khác nhau, lấy đa số thì sai bị 'hòa tan' — robust hơn một cây đơn lẻ.",
    code:"from sklearn.ensemble import RandomForestClassifier\nmodel = RandomForestClassifier(n_estimators=100, random_state=42)\nmodel.fit(X_train, y_train)\nprint(model.feature_importances_)  # feature nào quan trọng",
    checklist:[
      "Huấn luyện DecisionTreeClassifier đơn lẻ.",
      "Huấn luyện RandomForestClassifier (n_estimators=100).",
      "So sánh độ chính xác giữa 1 cây và forest.",
      "Đọc feature_importances_ và nêu feature quan trọng nhất.",
    ]
  },
  lesson2:{
    title:"Buổi 2 — Lab 'giải đấu mô hình'",
    meta:"Thực hành · feature importance · so sánh mô hình công bằng",
    theory:[
      "<b>So sánh công bằng</b>: mọi mô hình phải dùng cùng train/test, cùng cách chuẩn hóa, cùng chỉ số đánh giá — nếu không không thể so sánh được.",
      "<b>Feature importance</b> cho biết đặc trưng nào đóng góp nhiều nhất vào quyết định — giúp hiểu và giải thích mô hình.",
      "Đừng chỉ nhìn một lần chia train/test — kết quả có thể may rủi. Kết hợp cross-validation cho mỗi mô hình rồi so sánh điểm trung bình (và độ phân tán) giữa các mô hình để chọn đáng tin cậy.",
      "Không có mô hình 'thắng tuyệt đối' mọi bài toán. Trên dữ liệu bảng, cây & ensemble (forest, boosting) thường rất mạnh; nhưng cũng có lúc mô hình đơn giản đủ tốt và dễ giải thích hơn — hãy dựa vào số liệu và nhu cầu thực tế."
    ],
    concept:"Chuẩn so sánh: dùng cùng dữ liệu chia (train/test), cùng pipeline, cùng metric — rồi mới rút kết luận mô hình nào hơn.",
    code:"# Chuẩn bị đánh giá so sánh nhiều mô hình\nfrom sklearn.metrics import accuracy_score\nmodels = {'kNN': knn, 'LogReg': logreg, 'Forest': rf}\nfor name, m in models.items():\n    m.fit(X_train, y_train)\n    print(name, accuracy_score(y_test, m.predict(X_test)))",
    checklist:[
      "Chọn một bộ dữ liệu bảng (tabular).",
      "Chuẩn bị train/test chung cho mọi mô hình.",
      "So sánh ≥3 mô hình (k-NN, logistic, cây, forest) trên cùng metric.",
      "Đọc feature importance và diễn giải.",
    ]
  },
  assignment:{
    title:"Mini-project 2 — So sánh ≥3 mô hình",
    desc:"So sánh ít nhất ba mô hình trên cùng một bài toán và bảo vệ lựa chọn của bạn (thay cho bài tập thường lệ).",
    checklist:[
      "Chọn bài toán và bộ dữ liệu.",
      "Chuẩn bị pipeline chung (chia, chuẩn hóa) cho mọi mô hình.",
      "So sánh ≥3 mô hình bằng cùng metric.",
      "Chọn mô hình tốt nhất và bảo vệ lựa chọn bằng số liệu.",
      "Viết thuyết minh ngắn kèm notebook.",
    ]
  },
  selfcheck:[
    {q:"Random forest mạnh nhờ điều gì?", opts:["Một cây cực sâu","Kết hợp nhiều cây, lấy đa số","Chỉ một thuật toán","Dữ liệu lớn"], a:1, why:"Nhiều cây độc lập giảm overfit và tăng độ ổn định nhờ đa số phiếu."},
    {q:"Để so sánh mô hình công bằng, cần gì?", opts:["Dùng dữ liệu khác nhau","Cùng train/test, cùng metric","Đoán ngẫu nhiên","Chọn model tùy hứng"], a:1, why:"Mọi mô hình phải được đánh giá trên cùng điều kiện mới so sánh được."},
    {q:"Vì sao cây quyết định được ưa dùng trong y tế, tài chính?", opts:["Vì chạy nhanh","Vì dễ đọc hiểu và giải thích quyết định","Vì luôn chính xác nhất","Vì miễn phí"], a:1, why:"Cây đưa ra quy tắc if-then dễ hiểu (interpretable), quan trọng khi cần giải thích quyết định."},
    {q:"Điều gì giúp random forest giảm overfit so với một cây đơn?", opts:["Một cây to hơn","Nhiều cây nhìn phần dữ liệu khác nhau, sai được hòa tan","Ít feature hơn","Chạy nhanh hơn"], a:1, why:"Mỗi cây sai ở chỗ khác nhau, lấy đa số làm sai bị triệt tiêu — ý tưởng bagging."},
  ],
  quiz:[
    {q:"Cây quyết định hoạt động bằng cách nào?", opts:["Nhớ toàn bộ dữ liệu","Đặt câu hỏi 'nếu... thì' để chia dữ liệu","Tính khoảng cách","Dùng sigmoid"], a:1, why:"Cây chia dữ liệu thành nhánh bằng các quy tắc if-then cho tới khi thuần nhãn."},
    {q:"'Trí tuệ đám đông' trong random forest nghĩa là gì?", opts:["Dùng nhiều mạng","Kết hợp nhiều cây và lấy đa số","Một cây lớn","Tăng tốc CPU"], a:1, why:"Forest kết hợp nhiều cây độc lập, mỗi cây bỏ một phiếu, đa số thắng."},
    {q:"feature_importances_ trong forest cho biết gì?", opts:["Số lượng dữ liệu","Đặc trưng nào quan trọng với mô hình","Tốc độ chạy","Thời gian huấn luyện"], a:1, why:"Nó đo mức đóng góp của từng feature vào quyết định của model."},
    {q:"Gradient boosting khác random forest thế nào (mức ý tưởng)?", opts:["Không khác","Cây nối tiếp, cây sau sửa lỗi cây trước","Chỉ dùng 1 cây","Không dùng cây"], a:1, why:"Boosting xây cây tuần tự, mỗi cây học để sửa lỗi của cây trước."},
  ]
},
{
  id:8, title:"Học không giám sát", sub:"k-means · PCA · trực quan hóa 2D",
  lesson1:{
    title:"Buổi 1 — Phân cụm k-means",
    meta:"Lý thuyết · học không nhãn · chọn số cụm k · phân cụm phân cấp",
    theory:[
      "<b>Học không giám sát</b>: dữ liệu không có label, máy tự tìm cấu trúc ẩn. Phân cụm (clustering) nhóm các điểm tương tự nhau.",
      "<b>k-means</b>: chọn k tâm cụm, gán mỗi điểm vào cụm gần nhất, cập nhật lại tâm cụm, lặp lại cho tới khi ổn định.",
      "<b>Chọn số cụm k</b>: dùng phương pháp 'khuỷu tay' (elbow) — vẽ tổng khoảng cách trong cụm theo k, chọn điểm gấp khúc.",
      "<b>Phân cụm phân cấp</b> (trực giác): gộp dần các cụm gần nhau thành cây (dendrogram), không cần chọn k trước.",
      "Thuật toán k-means từng bước: (1) chọn k tâm cụm ngẫu nhiên, (2) gán mỗi điểm vào tâm gần nhất, (3) đặt lại mỗi tâm cụm ở vị trí trung bình của các điểm đã gán, (4) lặp bước 2–3 cho tới khi các cụm không đổi.",
      "k-means nhạy với điểm khởi đầu và giá trị ngoại lệ — một outlier lệch xa có thể kéo tâm cụm đi. Thường chạy nhiều lần (vd random_state khác) và giữ kết quả tốt nhất."
    ],
    concept:"k-means cần tự chọn k. Elbow method: chọn k ở chỗ đường cong 'gập' — thêm cụm nữa không còn giảm nhiều.",
    code:"from sklearn.cluster import KMeans\nkmeans = KMeans(n_clusters=3, random_state=42)\nlabels = kmeans.fit_predict(X)\ncenters = kmeans.cluster_centers_  # tọa độ tâm cụm",
    checklist:[
      "Huấn luyện KMeans với k=3 và gán nhãn cụm.",
      "Vẽ các điểm, tô màu theo cụm, đánh dấu tâm cụm.",
      "Thử nhiều giá trị k và vẽ elbow curve.",
      "Giải thích ý nghĩa các cụm tìm được.",
    ]
  },
  lesson2:{
    title:"Buổi 2 — PCA & trực quan hóa 2D",
    meta:"Lý thuyết + lab · hướng trải rộng nhất · giảm chiều",
    theory:[
      "<b>PCA (Principal Component Analysis)</b> tìm những 'hướng trải rộng nhất' của dữ liệu (hướng có phương sai lớn nhất).",
      "Giảm chiều: chiếu dữ liệu nhiều chiều xuống ít chiều (thường 2D) giữ lại phần lớn phương sai — để trực quan hóa và nén dữ liệu.",
      "Tích vô hướng như một phép chiếu: dùng để chiếu mỗi điểm xuống một trục (principal component).",
      "PC1 là hướng dữ liệu 'loang' ra nhiều nhất (phương sai lớn nhất), PC2 là hướng vuông góc với PC1 có phương sai lớn thứ hai, cứ thế. Giữ lại 2–3 PC đầu là nắm được phần lớn thông tin.",
      "explained_variance_ratio_ cho biết mỗi PC giữ được bao nhiêu % thông tin. Nếu 2 PC đầu đã giữ 95%, bạn tự tin nén dữ liệu 100 chiều xuống 2D mà mất rất ít."
    ],
    concept:"PCA giúp 'nhìn thấy' dữ liệu nhiều chiều bằng cách nén về 2D, giữ được thông tin quan trọng nhất (phương sai).",
    code:"from sklearn.decomposition import PCA\npca = PCA(n_components=2)\nX_2d = pca.fit_transform(X)\nprint('Phương sai giải thích:', pca.explained_variance_ratio_)",
    checklist:[
      "Dùng PCA nén dữ liệu xuống 2 chiều.",
      "Vẽ dữ liệu trong không gian 2D, tô màu theo cụm hoặc label.",
      "Đọc explained_variance_ratio_ — bao nhiêu thông tin giữ lại.",
      "Kết hợp phân cụm rồi trực quan hóa bằng PCA.",
    ]
  },
  assignment:{
    title:"Bài tập — Phân cụm & trực quan hóa",
    desc:"Phân cụm một bộ dữ liệu, trực quan hóa và viết diễn giải ngắn: các cụm ấy nói lên điều gì?",
    checklist:[
      "Chọn bộ dữ liệu không có nhãn (hoặc bỏ label đi).",
      "Chọn k hợp lý bằng elbow method.",
      "Phân cụm bằng k-means.",
      "Giảm chiều bằng PCA và vẽ 2D tô màu theo cụm.",
      "Viết diễn giải: các cụm đại diện cho nhóm gì?",
    ]
  },
  selfcheck:[
    {q:"k-means thuộc loại học nào?", opts:["Có giám sát","Không giám sát","Tăng cường","Học sâu"], a:1, why:"k-means nhóm dữ liệu không cần label — không giám sát."},
    {q:"Elbow method giúp làm gì?", opts:["Chọn số cụm k","Chọn model","Tăng tốc","Làm sạch dữ liệu"], a:0, why:"Vẽ tổng khoảng cách trong cụm theo k, chọn điểm gấp khúc (khuỷu tay)."},
    {q:"Bước đầu tiên của thuật toán k-means là gì?", opts:["Tính đạo hàm","Chọn k tâm cụm","Vẽ biểu đồ","In kết quả"], a:1, why:"k-means bắt đầu bằng việc chọn k tâm cụm, rồi gán điểm, cập nhật tâm, lặp lại."},
    {q:"explained_variance_ratio_ trong PCA cho biết gì?", opts:["Số lượng dữ liệu","Mỗi trục giữ được bao nhiêu % thông tin","Tốc độ chạy","Số cụm"], a:1, why:"Chỉ số này cho biết mỗi principal component giữ lại bao nhiêu phương sai (thông tin)."},
  ],
  quiz:[
    {q:"Mục tiêu của phân cụm là gì?", opts:["Dự đoán nhãn","Nhóm các điểm tương tự lại với nhau","Hồi quy giá","Chuẩn hóa"], a:1, why:"Clustering gom những điểm giống nhau thành cụm, không cần nhãn."},
    {q:"k-means 'k' là gì?", opts:["Số lượng dữ liệu","Số cụm muốn tạo","Số chiều","Số feature"], a:1, why:"k là số cụm (nhóm) mà bạn yêu cầu thuật toán tạo ra."},
    {q:"PCA dùng để làm gì?", opts:["Giảm số chiều dữ liệu","Phân loại","Dự đoán giá","Lọc thư rác"], a:0, why:"PCA giảm chiều, giữ lại hướng trải rộng nhất của dữ liệu."},
    {q:"Trực quan hóa dữ liệu nhiều chiều thường làm gì?", opts:["Xóa bớt dữ liệu","Dùng PCA đưa về 2D rồi vẽ","In bảng","Không làm được"], a:1, why:"Giảm về 2 chiều bằng PCA giúp vẽ được trên mặt phẳng."},
  ]
},
{
  id:9, title:"Mạng nơ-ron — không đáng sợ", sub:"Perceptron · layer · nhận dạng chữ số viết tay",
  lesson1:{
    title:"Buổi 1 — Từ logistic regression đến perceptron",
    meta:"Lý thuyết · perceptron · layer, hàm kích hoạt · chain rule",
    theory:[
      "<b>Perceptron</b>: một nơ-ron đơn giản nhận nhiều đầu vào, nhân mỗi cái với trọng số, cộng lại, qua hàm kích hoạt để ra kết quả.",
      "<b>Layer (tầng)</b>: nhiều nơ-ron xếp thành một lớp. Mạng nơ-ron = xếp nhiều layer nối tiếp nhau.",
      "<b>Hàm kích hoạt</b> (ReLU, sigmoid...) thêm tính phi tuyến — giúp mạng học những mối quan hệ không phải đường thẳng.",
      "<b>Chain rule (quy tắc chuỗi)</b>: huấn luyện mạng = gradient descent áp dụng lần lượt qua từng tầng (backpropagation), gói gọn trong một ý tưởng.",
      "Ý tưởng lớn: mạng 'đa tầng' (deep) chỉ là nhiều layer phi tuyến nối tiếp nhau. Nhờ tính phi tuyến, mạng có thể học những biên giới quyết định cong queo phức tạp — điều mà một đường thẳng hay mặt phẳng đơn giản không làm được.",
      "Tại sao 'sâu' hơn lại mạnh? Mỗi layer học những đặc trưng từ thô đến tinh: layer đầu học cạnh/đường, layer giữa học hình khối, layer cuối tổng hợp thành đối tượng. Đây là nền móng của deep learning."
    ],
    concept:"Mạng nơ-ron = 'hồi quy logistic nối nhiều tầng'. Huấn luyện vẫn là gradient descent (tuần 4), chỉ là lan truyền ngược qua từng layer.",
    code:"# Minh họa perceptron đơn giản bằng sklearn (MLP) hoặc numpy\nimport numpy as np\ndef sigmoid(x): return 1/(1+np.exp(-x))\n# z = w0*x0 + w1*x1 + b ; out = sigmoid(z)",
    checklist:[
      "Hiểu perceptron: đầu vào → nhân trọng số → tổng → kích hoạt.",
      "Nhận biết các hàm kích hoạt phổ biến (sigmoid, ReLU).",
      "Hiểu mạng = nhiều layer xếp chồng.",
      "Hiểu huấn luyện mạng vẫn dùng gradient descent.",
    ]
  },
  lesson2:{
    title:"Buổi 2 — Lab nhận dạng chữ số viết tay",
    meta:"Thực hành · quan sát loss giảm · con đường deep learning",
    theory:[
      "Dữ liệu <b>chữ số viết tay</b> (MNIST): ảnh 28×28 chữ số 0-9. Mỗi ảnh là 784 pixel = 784 feature.",
      "Xây một mạng nơ-ron nhỏ nhiều layer, huấn luyện để nhận diện chữ số.",
      "Quan sát <b>loss giảm dần</b> theo từng epoch — bằng chứng mạng đang học. Đây là hình dung con đường deep learning phía trước.",
      "Mỗi <i>epoch</i> là một lượt mạng quét toàn bộ dữ liệu huấn luyện. Nhiều epoch = mạng 'ngắm' dữ liệu nhiều lần để chỉnh trọng số — nhưng quá nhiều epoch có thể gây overfit (thuộc lòng train).",
      "Chuẩn hóa pixel về khoảng 0–1 (chia cho 255) giúp mạng hội tụ nhanh và ổn định hơn — cùng một ý tưởng chuẩn hóa dữ liệu bạn đã học ở tuần 6."
    ],
    concept:"Khi loss giảm theo epoch là mạng đang học. Đừng sợ 'deep' — nó chỉ là nhiều layer nối tiếp nhau, huấn luyện vẫn bằng gradient descent.",
    code:"from sklearn.neural_network import MLPClassifier\nmodel = MLPClassifier(hidden_layer_sizes=(64, 32),\n                      max_iter=20, random_state=42)\nmodel.fit(X_train, y_train)\nprint('Accuracy:', model.score(X_test, y_test))",
    checklist:[
      "Tải dữ liệu chữ số (vd: sklearn.datasets.load_digits hoặc MNIST).",
      "Chia train/test, chuẩn hóa pixel (0-1).",
      "Huấn luyện MLPClassifier với vài hidden layer.",
      "Quan sát loss giảm theo các epoch.",
      "Đánh giá accuracy trên test.",
    ]
  },
  assignment:{
    title:"Mini-project 3 — Tự chọn",
    desc:"Bạn tự chọn: mở rộng mạng nhận dạng chữ số, hoặc một nghiên cứu phân cụm (thay cho bài tập thường lệ).",
    checklist:[
      "Chọn 1 trong 2 hướng (mạng nơ-ron HOẶC phân cụm nâng cao).",
      "Thực hiện đầy đủ: dữ liệu, mô hình, đánh giá.",
      "Thử thay đổi kiến trúc/siêu tham số để cải thiện.",
      "Viết thuyết minh ngắn kèm notebook.",
    ]
  },
  selfcheck:[
    {q:"Perceptron làm gì với đầu vào?", opts:["Chỉ lưu trữ","Nhân trọng số, cộng lại, qua kích hoạt","Sắp xếp","Vẽ biểu đồ"], a:1, why:"Perceptron tính tổng có trọng số rồi đưa qua hàm kích hoạt để ra kết quả."},
    {q:"Hàm kích hoạt thêm gì cho mạng?", opts:["Tính phi tuyến","Nhiều dữ liệu","Tốc độ","Không gì cả"], a:0, why:"Tính phi tuyến giúp mạng học quan hệ phức tạp, không chỉ đường thẳng."},
    {q:"Vì sao mạng 'sâu' (nhiều layer) có thể học quan hệ phức tạp?", opts:["Vì nhanh hơn","Mỗi layer học đặc trưng từ thô đến tinh, có tính phi tuyến","Vì dùng nhiều RAM","Vì ngẫu nhiên"], a:1, why:"Mỗi layer xây dựng đặc trưng từ thô (cạnh) đến tinh (đối tượng) nhờ tính phi tuyến."},
    {q:"Mỗi 'epoch' trong huấn luyện mạng là gì?", opts:["Một hàm","Một lượt mạng quét toàn bộ dữ liệu huấn luyện","Một tham số","Một layer"], a:1, why:"Epoch = một lượt mạng xem hết dữ liệu train để chỉnh trọng số."},
  ],
  quiz:[
    {q:"Mạng nơ-ron nhiều layer là gì?", opts:["Một thuật toán khác hẳn","Nhiều layer nối tiếp nhau","Chỉ một perceptron","Một cây quyết định"], a:1, why:"Deep learning = nhiều layer xếp chồng, huấn luyện vẫn bằng gradient descent."},
    {q:"Quan sát điều gì chứng tỏ mạng đang học?", opts:["Loss tăng","Loss giảm dần qua epoch","Accuracy luôn 0","Không đổi"], a:1, why:"Loss giảm dần qua từng epoch cho thấy mạng đang cải thiện."},
    {q:"Ảnh 28×28 pixel tương đương bao nhiêu feature?", opts:["28","56","784","7840"], a:2, why:"28×28 = 784 pixel, mỗi pixel là một feature cho mạng."},
    {q:"Backpropagation dùng quy tắc gì?", opts:["Chain rule (quy tắc chuỗi)","Quy tắc cộng","Quy tắc nhân","Không dùng gì"], a:0, why:"Backprop truyền gradient ngược qua các tầng nhờ quy tắc chuỗi."},
  ]
},
{
  id:10, title:"Học máy trong thực tế & khởi động đồ án", sub:"Data leakage · đạo đức · lập nhóm đồ án",
  lesson1:{
    title:"Buổi 1 — Quy trình, data leakage, đạo đức",
    meta:"Lý thuyết · nhìn lại toàn trình · tai nạn kinh điển · bias",
    theory:[
      "<b>Nhìn lại toàn bộ quy trình</b>: thu thập dữ liệu → làm sạch → khám phá → huấn luyện → đánh giá → triển khai. Từng bước đều có bẫy.",
      "<b>Data leakage</b>: thông tin từ tương lai/test lọt vào quá trình huấn luyện — mô hình 'gian lận', điểm test cao giả tạo. Ví dụ kinh điển: chuẩn hóa trên toàn bộ dữ liệu (gồm test) trước khi chia.",
      "<b>Đạo đức & thiên lệch (bias)</b>: mô hình học từ dữ liệu có thành kiến sẵn sẽ tái tạo thành kiến. Cần hiểu những chỗ mô hình thất bại ngoài đời thực.",
      "Ví dụ data leakage kinh điển: dùng <b>toàn bộ dữ liệu</b> (gồm cả test) để tính trung bình/phương sai khi chuẩn hóa, hoặc dùng cột 'tương lai' (vd: tổng doanh thu tháng sau) làm feature khi dự đoán doanh thu tháng này — mô hình nhìn thấy đáp án trước.",
      "Vì sao mô hình thiên lệch nguy hiểm: nếu dữ liệu tuyển dụng cũ chỉ có ứng viên nam được ưu tiên, mô hình sẽ 'học' được sự thiên lệch đó và tái tạo nó ở quy mô lớn hơn. Hiểu bối cảnh dữ liệu quan trọng không kém việc tối ưu accuracy."
    ],
    concept:"Data leakage làm điểm số ảo. Dấu hiệu: accuracy test 'quá tốt' đến mức đáng ngờ. Luôn chuẩn hóa/khớp mọi thứ chỉ trên train.",
    code:"# ĐÚNG: fit scaler chỉ trên train\nsc = StandardScaler().fit(X_train)\nX_train = sc.transform(X_train)\nX_test = sc.transform(X_test)\n\n# SAI (leakage): fit trên toàn bộ rồi mới chia\n# sc = StandardScaler().fit(X); X = sc.transform(X); ...",
    checklist:[
      "Ôn lại toàn bộ quy trình học máy qua một sơ đồ.",
      "Nhận biết các trường hợp data leakage kinh điển.",
      "Giải thích vì sao phải fit chỉ trên train.",
      "Thảo luận một ví dụ bias trong mô hình ngoài đời thực.",
    ]
  },
  lesson2:{
    title:"Buổi 2 — Workshop đồ án",
    meta:"Thực hành · lập nhóm · chọn dữ liệu & câu hỏi · chốt đề cương",
    theory:[
      "Đồ án cuối là phần chấm 40% — nhóm bạn chọn bộ dữ liệu, đặt câu hỏi nghiên cứu, và chạy một vòng học máy hoàn chỉnh.",
      "<b>Chọn bộ dữ liệu</b>: đủ lớn, có ý nghĩa, bạn hiểu được bối cảnh. <b>Câu hỏi nghiên cứu</b> rõ ràng: 'Dự đoán X từ Y'.",
      "Lời khuyên chọn đề tài: chọn thứ bạn <i>thực sự tò mò</i> và có chút bối cảnh sẵn — dễ kiên trì và dễ giải thích kết quả hơn là một bộ dữ liệu 'ngầu' mà bạn không hiểu. Một câu hỏi nhỏ làm trọn vẹn đáng giá hơn câu hỏi to mà làm dở.",
      "Cột mốc quan trọng: đặt trước <i>chỉ số đánh giá</i> và một <i>đường cơ sở (baseline)</i> ngay từ đầu — để biết mô hình cuối của bạn tốt hơn 'mô hình đơn giản nhất có thể' tới mức nào."
    ],
    concept:"Điểm đồ án dành cho cách làm đúng đắn (đánh giá trung thực, lập luận, quyết định có căn cứ), không phải con số accuracy đẹp.",
    checklist:[
      "Lập nhóm và phân công vai trò.",
      "Chọn bộ dữ liệu và câu hỏi nghiên cứu.",
      "Chốt đề cương đồ án (1 trang).",
      "Nhận góp ý từ giảng viên và điều chỉnh.",
    ]
  },
  assignment:{
    title:"Bài tập — Đề cương đồ án cuối khóa (1 trang)",
    desc:"Viết đề cương đồ án gọn trong 1 trang để chuẩn bị cho tuần 11.",
    checklist:[
      "Nêu câu hỏi nghiên cứu rõ ràng.",
      "Mô tả bộ dữ liệu sẽ dùng và vì sao chọn.",
      "Dự kiến quy trình, mô hình, chỉ số đánh giá.",
      "Liệt kê rủi ro/bẫy có thể gặp (kể cả data leakage).",
    ]
  },
  selfcheck:[
    {q:"Data leakage là gì?", opts:["Mất dữ liệu","Thông tin từ test lọt vào huấn luyện","Dữ liệu quá lớn","Lỗi mạng"], a:1, why:"Leakage làm mô hình nhìn thấy 'tương lai', nên điểm test cao giả tạo."},
    {q:"Vì sao chỉ fit scaler trên train?", opts:["Nhanh hơn","Tránh để thông tin test ảnh hưởng train","Bắt buộc của thư viện","Không cần"], a:1, why:"Fit trên toàn bộ khiến tham số chuẩn hóa biết trước test — một dạng leakage."},
    {q:"Điểm test 'quá cao đến mức đáng ngờ' thường gợi ý điều gì?", opts:["Mô hình xuất sắc","Có thể đang data leakage","Dữ liệu quá sạch","Chạy nhanh"], a:1, why:"Điểm test bất thường cao thường là mô hình đã 'nhìn trộm' thông tin test."},
    {q:"Vì sao một mô hình có thể tái tạo sự thiên lệch (bias)?", opts:["Vì nó tự suy nghĩ","Vì nó học từ dữ liệu vốn đã thiên lệch","Vì tốc độ","Vì ngẫu nhiên"], a:1, why:"Mô hình học từ dữ liệu; dữ liệu có thành kiến sẵn sẽ được mô hình học lại và phóng đại."},
  ],
  quiz:[
    {q:"Dấu hiệu nghi ngờ data leakage?", opts:["Accuracy test thấp","Accuracy test quá cao đáng ngờ","Model chạy chậm","Ít feature"], a:1, why:"Điểm cao bất thường thường là mô hình đã 'nhìn trộm' test."},
    {q:"Điểm đồ án chủ yếu dựa vào gì?", opts:["Accuracy đẹp nhất","Cách làm đúng, đánh giá trung thực, lập luận","Chạy nhanh","Model phức tạp"], a:1, why:"Triết lý khóa: quá trình đúng đắn quan trọng hơn con số may mắn."},
    {q:"Bias trong mô hình học máy bắt nguồn từ đâu?", opts:["Dữ liệu huấn luyện có thành kiến sẵn","Máy tính quá nhanh","Thiếu GPU","Code dài"], a:0, why:"Mô hình học từ dữ liệu; dữ liệu thiên lệch → mô hình thiên lệch."},
    {q:"Một câu hỏi nghiên cứu tốt trong đồ án nên thế nào?", opts:["Mơ hồ","Rõ ràng: dự đoán X từ Y","Quá rộng","Không cần"], a:1, why:"Câu hỏi rõ ràng giúp định hướng dữ liệu, mô hình và đánh giá."},
  ]
},
{
  id:11, title:"Tuần đồ án", sub:"Làm việc nhóm · thuyết trình · tổng kết",
  isProjectWeek:true,
  lesson1:{
    title:"Buổi 1 — Buổi làm việc nhóm có hướng dẫn",
    meta:"Thực hành · office hours · giảng viên gỡ rối từng nhóm",
    theory:[
      "Toàn bộ tuần này dành cho đồ án cuối khóa. Buổi 1 là thời gian làm việc nhóm có giảng viên đi từng nhóm để gỡ rối.",
      "Tập trung hoàn thiện: dữ liệu sạch, mô hình chạy được, thuyết trình rõ ràng."
    ],
    concept:"Tuần này không có bài tập và quiz — toàn bộ thời gian dành cho đồ án.",
    checklist:[
      "Hoàn thiện bộ dữ liệu và pipeline.",
      "Chạy các mô hình chính, chốt kết quả.",
      "Chuẩn bị biểu đồ và số liệu cho bài thuyết trình.",
      "Hỏi giảng viên bất kỳ điểm nào đang bí.",
    ]
  },
  lesson2:{
    title:"Buổi 2 — Buổi tổng kết & thuyết trình",
    meta:"Thực hành · demo sản phẩm · phản hồi · lộ trình tiếp theo",
    theory:[
      "Các nhóm thuyết trình ngắn và demo sản phẩm, nhận phản hồi. Đây là dịp tổng kết toàn khóa và gợi ý lộ trình học tiếp theo.",
      "Trình bày rõ: vấn đề → dữ liệu → cách làm → kết quả → điều rút ra."
    ],
    concept:"Một bài trình bày tốt kể câu chuyện: vấn đề gì, làm thế nào, học được gì — không chỉ liệt kê số liệu.",
    checklist:[
      "Chuẩn bị slide/notebook demo.",
      "Thuyết trình ngắn trước lớp.",
      "Nhận và ghi lại phản hồi.",
      "Tổng kết: điều học được và bước tiếp theo (deep learning? ML nâng cao?).",
    ]
  },
  assignment:null,
  selfcheck:[
    {q:"Buổi 1 tuần đồ án chủ yếu làm gì?", opts:["Làm việc nhóm, giảng viên gỡ rối từng nhóm","Học lý thuyết mới","Làm quiz","Thi giữa kỳ"], a:0, why:"Tuần 11 dành toàn bộ thời gian cho đồ án; buổi 1 là làm việc nhóm có giảng viên hỗ trợ."},
    {q:"Điểm đồ án cuối khóa chủ yếu dựa vào gì?", opts:["Con số accuracy đẹp nhất","Cách làm đúng, đánh giá trung thực, lập luận","Model phức tạp nhất","Chạy nhanh nhất"], a:1, why:"Triết lý khóa học: quá trình đúng đắn và lập luận quan trọng hơn điểm số may mắn."},
    {q:"Trước khi kết thúc đồ án, nên chuẩn bị gì?", opts:["Chỉ cần code chạy","Biểu đồ, số liệu và bài thuyết trình rõ ràng","Xóa hết code cũ","Không cần chuẩn bị"], a:1, why:"Buổi tổng kết gồm thuyết trình ngắn + demo, nên cần chuẩn bị biểu đồ, số liệu và câu chuyện."},
  ],
  quiz:[]
}
];

/* ===================================================================
   QUIZ TỔNG HỢP + DỮ LIỆU KHÁC
   =================================================================== */
/* Quiz chung dùng cho phần 'Quiz toàn khóa' (nếu cần) — hiện mỗi tuần có quiz riêng. */

const CHEATSHEETS = [
  { title:"Python cơ bản", items:[
    ["Gán biến", "<code>x = 5</code>, <code>name = 'An'</code> — không cần khai báo kiểu"],
    ["In ra màn hình", "<code>print('Xin chào')</code>"],
    ["List", "<code>lst = [1,2,3]</code> · thêm: <code>lst.append(4)</code> · lấy: <code>lst[0]</code> · cắt: <code>lst[1:3]</code>"],
    ["Dict", "<code>d = {'a':1}</code> · lấy: <code>d['a']</code> · thêm: <code>d['b']=2</code>"],
    ["Hàm", "<code>def ten(x): return x+1</code>"],
    ["Vòng lặp", "<code>for i in range(5):</code> · <code>while cond:</code>"],
    ["Điều kiện", "<code>if x > 0: ... elif: ... else: ...</code>"],
  ]},
  { title:"NumPy", items:[
    ["Tạo mảng", "<code>np.array([1,2,3])</code> · <code>np.zeros((2,2))</code> · <code>np.random.rand(3)</code>"],
    ["Kích thước", "<code>arr.shape</code> (số chiều), <code>arr.size</code> (số phần tử)"],
    ["Nhân ma trận", "<code>A @ B</code> (phép nhân ma trận), <code>A * B</code> (nhân từng phần tử)"],
    ["Chuyển vị", "<code>A.T</code>"],
    ["Thống kê", "<code>arr.mean()</code>, <code>arr.std()</code>, <code>arr.sum()</code>, <code>arr.max()</code>"],
  ]},
  { title:"pandas", items:[
    ["Đọc CSV", "<code>df = pd.read_csv('file.csv')</code>"],
    ["Xem nhanh", "<code>df.head()</code>, <code>df.info()</code>, <code>df.shape</code>, <code>df.describe()</code>"],
    ["Chọn cột", "<code>df['col']</code> · nhiều cột: <code>df[['a','b']]</code>"],
    ["Lọc hàng", "<code>df[df['gia'] > 100]</code>"],
    ["Nhóm", "<code>df.groupby('nhom').mean()</code>"],
    ["Giá trị thiếu", "<code>df.isna().sum()</code> · bỏ: <code>df.dropna()</code> · điền: <code>df.fillna(0)</code>"],
    ["Trùng lặp", "<code>df.duplicated()</code> · bỏ: <code>df.drop_duplicates()</code>"],
  ]},
  { title:"matplotlib", items:[
    ["Histogram", "<code>df['col'].hist()</code> · <code>plt.show()</code>"],
    ["Scatter", "<code>plt.scatter(x, y)</code>"],
    ["Tạo figure", "<code>fig, ax = plt.subplots()</code> — kiểm soát tối đa"],
    ["Tùy chỉnh", "<code>plt.xlabel()</code>, <code>plt.ylabel()</code>, <code>plt.title()</code>"],
  ]},
  { title:"scikit-learn", items:[
    ["Chia train/test", "<code>train_test_split(X, y, test_size=0.2)</code>"],
    ["k-NN", "<code>KNeighborsClassifier(n_neighbors=3)</code>"],
    ["Hồi quy tuyến tính", "<code>LinearRegression()</code> — hệ số: <code>.coef_</code>, <code>.intercept_</code>"],
    ["Hồi quy logistic", "<code>LogisticRegression()</code> — xác suất: <code>.predict_proba()</code>"],
    ["Cây & Forest", "<code>DecisionTreeClassifier()</code> · <code>RandomForestClassifier(n_estimators=100)</code>"],
    ["k-means", "<code>KMeans(n_clusters=3)</code> — tâm cụm: <code>.cluster_centers_</code>"],
    ["PCA", "<code>PCA(n_components=2)</code> — phương sai: <code>.explained_variance_ratio_</code>"],
    ["Mạng nơ-ron", "<code>MLPClassifier(hidden_layer_sizes=(64,32))</code>"],
    ["Cross-validation", "<code>cross_val_score(model, X, y, cv=5)</code>"],
    ["Chuẩn hóa", "<code>StandardScaler().fit_transform(X_train)</code>"],
    ["Chỉ số", "<code>accuracy_score</code>, <code>precision_score</code>, <code>recall_score</code>, <code>f1_score</code>, <code>mean_absolute_error</code>, <code>mean_squared_error</code>"],
  ]},
];

const GLOSSARY = [
  { term:"Feature (đặc trưng)", def:"Thuộc tính mô tả một mẫu dữ liệu, dùng làm đầu vào cho mô hình (vd: số phòng, diện tích)." },
  { term:"Label (nhãn)", def:"Đáp án/giá trị mục tiêu bạn muốn mô hình dự đoán." },
  { term:"Supervised learning", def:"Học có giám sát: dữ liệu có label, máy học quan hệ input→output." },
  { term:"Unsupervised learning", def:"Học không giám sát: dữ liệu không có label, máy tự tìm cấu trúc (phân cụm, giảm chiều)." },
  { term:"Train set / Test set", def:"Tập dữ liệu để học và tập để kiểm tra. Không bao giờ dùng test khi huấn luyện." },
  { term:"k-NN", def:"Thuật toán phân loại: gán nhãn theo k điểm lân cận gần nhất (dựa trên khoảng cách Euclid)." },
  { term:"Loss function", def:"Hàm đo độ sai giữa dự đoán và giá trị thật. Mục tiêu là tối thiểu hóa nó." },
  { term:"Gradient descent", def:"Thuật toán tối ưu: lặp điều chỉnh tham số theo hướng giảm loss, như 'lăn xuống dốc'." },
  { term:"Overfitting", def:"Mô hình khớp quá kỹ dữ liệu train (thuộc lòng) nên dở trên dữ liệu mới." },
  { term:"Underfitting", def:"Mô hình quá đơn giản, không nắm được quy luật của dữ liệu." },
  { term:"Bias–Variance", def:"Cân bằng giữa mô hình quá đơn giản (bias cao) và quá nhạy cảm (variance cao)." },
  { term:"Cross-validation", def:"Chia dữ liệu nhiều phần, mỗi phần làm test một lần, lấy trung bình để đánh giá ổn định." },
  { term:"Regularization", def:"Thêm hình phạt vào loss để giữ tham số nhỏ, chống overfitting." },
  { term:"Confusion matrix", def:"Bảng so sánh dự đoán với thực tế: TP, FP, TN, FN." },
  { term:"Precision", def:"Trong các dự đoán dương, bao nhiêu phần đúng. = TP/(TP+FP)." },
  { term:"Recall", def:"Trong các điểm thật dương, bắt được bao nhiêu. = TP/(TP+FN)." },
  { term:"F1 score", def:"Trung bình điều hòa của precision và recall, cân bằng cả hai." },
  { term:"Decision tree", def:"Mô hình chia dữ liệu bằng các câu hỏi 'nếu... thì' (if-then rules)." },
  { term:"Random forest", def:"Kết hợp nhiều cây quyết định, lấy đa số phiếu — 'trí tuệ đám đông'." },
  { term:"k-means", def:"Thuật toán phân cụm: gom điểm vào k cụm dựa trên khoảng cách tới tâm cụm." },
  { term:"PCA", def:"Giảm số chiều dữ liệu bằng cách tìm các hướng trải rộng nhất (phương sai lớn nhất)." },
  { term:"Perceptron", def:"Nơ-ron đơn giản: tổng có trọng số đầu vào qua hàm kích hoạt để ra kết quả." },
  { term:"Data leakage", def:"Thông tin từ tương lai/test lọt vào huấn luyện, khiến điểm đánh giá sai lệch." },
  { term:"Hyperparameter (siêu tham số)", def:"Nút vặn do ta chỉnh trước khi huấn luyện (k, alpha, n_estimators...), model không tự học." },
];

const PROJECTS = [
  { title:"Mini-project 1 — Hồi quy nhà đất", week:4, weight:"35% (mini-project chung)", focus:"Hồi quy",
    desc:"Tự xây mô hình hồi quy trên dữ liệu nhà đất. Đánh giá bằng MAE/RMSE, giải thích yếu tố ảnh hưởng giá.",
    checklist:[
      "Chọn bộ dữ liệu giá nhà.", "Làm sạch dữ liệu (thiếu, trùng, outlier).",
      "Chia train/test, huấn luyện hồi quy tuyến tính.",
      "Đánh giá MAE, RMSE.", "Viết thuyết minh ngắn."
    ]},
  { title:"Mini-project 2 — So sánh mô hình", week:7, weight:"35% (mini-project chung)", focus:"Ensemble & so sánh",
    desc:"So sánh ít nhất 3 mô hình trên cùng bài toán, bảo vệ lựa chọn bằng số liệu.",
    checklist:[
      "Chọn bài toán và dữ liệu.", "Pipeline chung (chia, chuẩn hóa).",
      "So sánh ≥3 mô hình cùng metric.", "Chọn và bảo vệ model tốt nhất.",
      "Viết thuyết minh kèm notebook."
    ]},
  { title:"Mini-project 3 — Tự chọn", week:9, weight:"35% (mini-project chung)", focus:"Mạng nơ-ron / phân cụm",
    desc:"Mở rộng mạng nhận dạng chữ số HOẶC nghiên cứu phân cụm.",
    checklist:[
      "Chọn hướng (mạng nơ-ron hoặc phân cụm).",
      "Thực hiện: dữ liệu, mô hình, đánh giá.",
      "Thử đổi kiến trúc/siêu tham số.", "Viết thuyết minh."
    ]},
  { title:"Đồ án cuối khóa (nhóm)", week:11, weight:"40%", focus:"Đồ án trọn vẹn",
    desc:"Dự án nhóm trên bộ dữ liệu tự chọn, thực hiện tuần 11, thuyết trình buổi cuối.",
    checklist:[
      "Lập nhóm, chọn dữ liệu & câu hỏi nghiên cứu.",
      "Chốt đề cương (1 trang).",
      "Hoàn thiện dữ liệu & pipeline.",
      "Chạy mô hình, chốt kết quả.",
      "Thuyết trình & demo sản phẩm."
    ]},
];
