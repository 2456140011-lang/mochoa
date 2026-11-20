export interface ProductItem {
  id: string;
  collectionId: 'clip-card' | 'chenille-flower' | 'combo-moc-yi';
  collectionLabel: string;
  name: string;
  subtitle: string;
  price: number;
  priceFormatted: string;
  image: string;
  imageAlt: string;
  shortDesc: string;
  details: string[];
  occasions: string;
  specialValue: string;
  variants: string[];
}

export interface JournalArticle {
  id: string;
  categoryKey: 'art-of-gifting' | 'handmade-corner' | 'words-feelings' | 'culture-inspiration';
  categoryLabel: string;
  categorySub: string;
  title: string;
  readTime: string;
  date: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  paragraphs: string[];
}

export const IMAGES = {
  hero: '/src/assets/images/hero_moc_hoa_bouquet_1794973602798.jpg',
  brandIntro: '/src/assets/images/brand_intro_kraft_card_1794973604319.jpg',
  clipCards: '/src/assets/images/product_clip_cards_1794973605224.jpg',
  chenilleBouquet: '/src/assets/images/product_chenille_bouquet_1794973604458.jpg',
  flowerBox: '/src/assets/images/product_flower_box_1794973605872.jpg',
  comboMocYi: '/src/assets/images/product_combo_moc_yi_1794973606014.jpg',
  aboutFlatlay: '/src/assets/images/about_craft_flatlay_1794973606430.jpg',
  b2bJournal: '/src/assets/images/b2b_journal_atelier_1794973606763.jpg',
};

export const NAV_ITEMS = [
  { id: 'home', code: '01', label: 'Trang chủ', enLabel: 'Home' },
  { id: 'shop', code: '02', label: 'Sản phẩm', enLabel: 'Shop / Collections' },
  { id: 'about', code: '03', label: 'Về Mộc hoa', enLabel: 'About Us' },
  { id: 'personalization', code: '04', label: 'Cá nhân hóa', enLabel: 'Personalized Gifts' },
  { id: 'business', code: '05', label: 'Doanh nghiệp', enLabel: 'Business & Partnership' },
  { id: 'journal', code: '06', label: 'Góc cảm hứng', enLabel: 'Mộc Journal' },
  { id: 'contact', code: '07', label: 'Liên hệ', enLabel: 'Contact' },
] as const;

export const BRAND_FOUNDATION_TABLE = [
  { item: 'Tên thương hiệu', value: 'Mộc hoa' },
  { item: 'Tên doanh nghiệp dự kiến', value: 'CÔNG TY TNHH THỦ CÔNG MỘC HOA' },
  { item: 'Tên tiếng Anh', value: 'Moc Hoa Craft & Notes' },
  { item: 'Lĩnh vực', value: 'Quà tặng thủ công, hoa kẽm nhung và thiệp cá nhân hóa' },
  { item: 'Định vị', value: 'Creative Handmade Gift Brand' },
  { item: 'Tagline chính', value: 'Gói dịu dàng gửi yêu thương.' },
  { item: 'Brand statement', value: 'Chạm nét mộc, ủ hương hoa, gửi ngàn lời thương.' },
  { item: 'Khách hàng chính', value: 'Học sinh, sinh viên và nhân viên văn phòng trẻ' },
  { item: 'Phân khúc', value: 'Quà tặng sáng tạo, giá dễ tiếp cận' },
  { item: 'Phong cách', value: 'Mộc mạc, dịu dàng, trẻ trung, tinh tế' },
];

export const BRAND_NAME_MEANING = [
  {
    key: 'MỘC',
    title: 'MỘC – Sự chân thành từ những điều giản dị.',
    description:
      '"Mộc" đại diện cho nét mộc mạc, chất phác và gần gũi với tự nhiên. Đó là cảm giác thân thiện của giấy Kraft, sợi dây đay, chất liệu thô và những món đồ được làm bằng đôi tay tỉ mỉ.',
  },
  {
    key: 'HOA',
    title: 'HOA – Vẻ đẹp được tạo nên từ sự sáng tạo.',
    description:
      '"Hoa" tượng trưng cho vẻ đẹp, sự tươi mới và những tình cảm được gửi gắm. Hình ảnh hoa kẽm nhung với khả năng lưu giữ hình dáng lâu dài trở thành nguồn cảm hứng cho những món quà mang giá trị kỷ niệm.',
  },
  {
    key: 'MỘC HOA',
    title: 'MỘC HOA – Một đóa hoa mộc mạc, một trang thiệp chân phương.',
    description:
      'Mộc hoa là sự kết hợp giữa nét giản dị của chất liệu thủ công và vẻ đẹp của nghệ thuật trao gửi. Một nhành hoa nhỏ đặt bên trang thiệp có thể thay lời muốn nói, gửi đi những tình cảm chân thành mà đôi khi ngôn từ khó diễn đạt trọn vẹn.',
  },
];

export const BRAND_IDENTITY_SPECS = [
  {
    label: 'Biểu tượng',
    value: 'Nhành hoa kẽm nhung mềm mại kết hợp hình dáng phong bì hoặc trang giấy gấp mở.',
  },
  {
    label: 'Chi tiết nhận diện',
    value: 'Chiếc nơ dây cói nhỏ ở phần đáy, gợi hình ảnh món quà được gói ghém thủ công.',
  },
  {
    label: 'Typography',
    value: 'Kết hợp Serif mềm mại với kiểu chữ viết tay.',
  },
  {
    label: 'Phong cách',
    value: 'Organic, Handmade, Minimalist, Warm.',
  },
];

export const BRAND_PALETTE = [
  { name: 'Kraft Brown', hex: '#A77B5B', role: 'Chất liệu giấy Kraft & sắc gỗ ấm' },
  { name: 'Sage Green', hex: '#A6AD91', role: 'Lá kẽm nhung & hơi thở tự nhiên' },
  { name: 'Velvet Pink', hex: '#E7C5C0', role: 'Cánh hoa mềm mại & sự dịu dàng' },
  { name: 'Cream', hex: '#F4EBDD', role: 'Nền giấy mỹ thuật chủ đạo' },
  { name: 'Mocha Brown', hex: '#735748', role: 'Nét mực chân phương & điểm nhấn' },
  { name: 'Natural Beige', hex: '#D8C9B7', role: 'Sợi dây đay & cấu trúc bề mặt' },
];

export const SIGNATURE_PILLARS = [
  {
    number: '01.',
    title: 'Thiệp hoa kẹp',
    subtitle: 'Một nhành hoa nhỏ, một lời thương chân thành.',
    image: IMAGES.clipCards,
    imageAlt: 'Thiệp hoa kẹp Mộc hoa trên giấy mỹ thuật và giấy Kraft',
    filterKey: 'clip-card' as const,
  },
  {
    number: '02.',
    title: 'Hoa kẽm nhung',
    subtitle: 'Nét đẹp thủ công, lưu giữ lâu dài.',
    image: IMAGES.chenilleBouquet,
    imageAlt: 'Bó hoa kẽm nhung thủ công tông hồng nhung và kem dịu dàng',
    filterKey: 'chenille-flower' as const,
  },
  {
    number: '03.',
    title: 'Hộp hoa thủ công',
    subtitle: 'Một góc nhỏ dịu dàng để tô điểm không gian.',
    image: IMAGES.flowerBox,
    imageAlt: 'Hộp hoa thủ công kẽm nhung phong cách vintage đặt trên bàn gỗ',
    filterKey: 'chenille-flower' as const,
  },
  {
    number: '04.',
    title: 'Combo Mộc Ý',
    subtitle: 'Gói trọn hoa, thiệp và lời nhắn riêng.',
    image: IMAGES.comboMocYi,
    imageAlt: 'Combo Mộc Ý gồm bó hoa mini, thiệp hoa kẹp và gói quà thủ công',
    filterKey: 'combo-moc-yi' as const,
  },
];

export const WHY_MOC_HOA = [
  {
    title: 'Handcrafted – Làm bằng đôi tay',
    description:
      'Mỗi nhành hoa và từng chi tiết trang trí đều được chăm chút thủ công, mang theo nét riêng của người tạo nên sản phẩm.',
  },
  {
    title: 'Personalized – Mang dấu ấn cá nhân',
    description:
      'Từ nội dung thiệp, màu sắc hoa đến cách kết hợp quà tặng, Mộc hoa mong muốn mỗi món quà đều kể được câu chuyện của người tặng.',
  },
  {
    title: 'Thoughtful – Chân thành trong từng chi tiết',
    description:
      'Chúng mình chú trọng từ chất liệu, cách hoàn thiện đến cách gói ghém để người nhận cảm nhận được sự quan tâm.',
  },
  {
    title: 'Long-lasting – Lưu giữ những điều đẹp đẽ',
    description:
      'Hoa kẽm nhung giúp món quà có thể được trưng bày và lưu giữ lâu dài hơn hoa tươi, nếu được bảo quản phù hợp.',
  },
];

export const SHOP_COLLECTIONS = [
  {
    id: 'clip-card' as const,
    code: 'COLLECTION 01',
    title: 'THIỆP HOA KẸP',
    englishTitle: 'SIGNATURE CLIP CARD',
    tagline: 'Một nhành hoa, một lời thương.',
    badge: 'Sản phẩm đặc trưng',
    fullHeading: 'THIỆP HOA KẸP – SIGNATURE CLIP CARD',
    lead: 'Một tấm thiệp mộc mạc, một nhành hoa xinh xắn và một lời nhắn được viết dành riêng cho ai đó.',
    intro:
      'Thiệp hoa kẹp là dòng sản phẩm đặc trưng của Mộc hoa, kết hợp giữa giấy mỹ thuật hoặc giấy Kraft và hoa kẽm nhung thủ công. Nhành hoa nhỏ được cố định trên bìa thiệp bằng chiếc nơ sợi đay, tạo nên một món quà vừa tinh tế vừa có thể lưu giữ sau khi trao tặng.',
    bulletTitle: 'Chi tiết sản phẩm',
    bullets: [
      'Thiết kế thiệp đơn hoặc gập đôi.',
      'Giấy mỹ thuật hoặc giấy Kraft định lượng phù hợp.',
      'Hoa kẽm nhung mini với các kiểu dáng như tulip, cúc họa mi, hướng dương, hoa chuông.',
      'Điểm nhấn bằng dây đay hoặc nơ trang trí.',
      'Hỗ trợ viết lời chúc theo nội dung khách hàng cung cấp.',
    ],
    occasions:
      'Phù hợp cho: Sinh nhật, cảm ơn, tốt nghiệp, 20/10, 20/11, 8/3 và những dịp muốn gửi một lời thương nhỏ.',
    specialValue:
      'Giá trị đặc biệt: Không chỉ là một tấm thiệp, mà còn là một nhành hoa kỷ niệm để người nhận có thể giữ lại.',
    image: '/src/assets/images/clip_card_chenille_note_1795154578416.jpg',
    imageAlt: 'Thiệp hoa kẹp kẽm nhung kèm giấy thư viết tay và ảnh kỷ niệm Mộc hoa',
  },
  {
    id: 'chenille-flower' as const,
    code: 'COLLECTION 02',
    title: 'HOA KẼM NHUNG',
    englishTitle: 'HANDMADE FLOWER COLLECTION',
    tagline: 'Nở theo cách riêng, bền lâu theo thời gian.',
    badge: 'Bộ sưu tập thủ công',
    fullHeading: 'HOA KẼM NHUNG – HANDMADE FLOWER COLLECTION',
    lead: 'Có những đóa hoa không cần chờ mùa nở, cũng chẳng lo ngày tàn.',
    intro:
      'Mộc hoa tạo nên những nhành hoa kẽm nhung bằng kỹ thuật uốn và tạo hình thủ công, kết hợp màu sắc nhẹ nhàng cùng cách gói ghém mộc mạc. Từ một bông hoa đơn lẻ đến những bó hoa nhỏ hay hộp hoa trang trí, mỗi thiết kế đều mang nét đáng yêu và gần gũi.',
    bulletTitle: 'Các lựa chọn & Đặc điểm sản phẩm',
    bullets: [
      'Hoa đơn: Một nhành hoa nhỏ dành cho lời chúc giản dị.',
      'Bó hoa mini: Kết hợp từ 1–3 bông hoa hoặc theo thiết kế.',
      'Hộp hoa: Hoa kẽm nhung được sắp đặt trong hộp mica hoặc hộp giấy theo phong cách vintage.',
      'Hoa được tạo hình trực tiếp bằng tay, đa dạng kiểu dáng và màu sắc.',
      'Có thể phối hoa chính và hoa phụ; phù hợp trang trí bàn học, bàn làm việc hoặc làm quà tặng.',
    ],
    occasions:
      'Phù hợp cho: Trang trí góc học tập, bàn làm việc, tặng kỷ niệm, sinh nhật, tốt nghiệp.',
    specialValue:
      'Giá trị đặc biệt: Một món quà vừa có tính thẩm mỹ, vừa có thể đồng hành cùng người nhận trong thời gian dài nếu được bảo quản đúng cách.',
    image: IMAGES.chenilleBouquet,
    imageAlt: 'Bộ sưu tập Hoa kẽm nhung thủ công Mộc hoa',
  },
  {
    id: 'combo-moc-yi' as const,
    code: 'COLLECTION 03',
    title: 'COMBO MỘC Ý',
    englishTitle: 'PERSONALIZED GIFTSET',
    tagline: 'Gói trọn một món quà, gửi trọn một tấm lòng.',
    badge: 'Giftset cá nhân hóa',
    fullHeading: 'COMBO MỘC Ý – PERSONALIZED GIFTSET',
    lead: 'Nếu bạn muốn gửi đi nhiều hơn một lời chúc, Mộc Ý là lựa chọn dành cho bạn.',
    intro:
      'Một bó hoa kẽm nhung mini kết hợp cùng thiệp hoa kẹp được viết tay theo nội dung riêng, tất cả được gói ghém trong phong cách mộc mạc đặc trưng của Mộc hoa.',
    bulletTitle: 'Combo bao gồm',
    bullets: [
      '01 bó hoa kẽm nhung mini.',
      '01 thiệp hoa kẹp.',
      'Nội dung lời chúc viết tay theo yêu cầu.',
      'Giấy gói và nơ dây thô.',
      'Đóng gói hoàn chỉnh để trao tặng.',
    ],
    occasions:
      'Điểm nổi bật: Bạn không cần mất thời gian tìm từng món quà riêng lẻ. Mộc hoa giúp kết hợp và chuẩn bị thành một món quà trọn vẹn, phù hợp để gửi trực tiếp đến người nhận theo phương thức giao hàng đã thống nhất.',
    specialValue: 'Mộc Ý – Một món quà nhỏ, đủ đầy lời thương.',
    image: IMAGES.comboMocYi,
    imageAlt: 'Giftset cá nhân hóa Combo Mộc Ý Mộc hoa',
  },
];

export const SHOP_PRODUCTS: ProductItem[] = [
  {
    id: 'prod-thiep-tulip',
    collectionId: 'clip-card',
    collectionLabel: 'Thiệp hoa kẹp',
    name: 'Thiệp Hoa Kẹp Tulip Nhung',
    subtitle: 'Signature Clip Card · Thiệp gập đôi',
    price: 49000,
    priceFormatted: '49.000đ',
    image: '/assets/aistudio/image_4e502fa0.png',
    imageAlt: 'Thiệp Hoa Kẹp kẽm nhung hồng phấn kèm giấy thư viết tay Mộc hoa',
    shortDesc: 'Giấy mỹ thuật kem hoặc Kraft định lượng cao, kèm nhành tulip kẽm nhung buộc nơ sợi đay.',
    details: [
      'Kích thước thiệp A6 (10.5 x 14.8 cm), thiết kế đơn hoặc gập đôi.',
      'Hoa tulip kẽm nhung mini phối lá xanh sage dịu mắt.',
      'Miễn phí viết lời chúc viết tay bằng bút mực chuyên dụng.',
    ],
    occasions: 'Sinh nhật, 20/10, 20/11, 8/3, lời cảm ơn nhẹ nhàng.',
    specialValue: 'Nhành hoa có thể tháo rời nhẹ nhàng để cài bàn hoặc lưu giữ kỷ niệm.',
    variants: ['Tulip Hồng Nhung · Giấy Kem', 'Tulip Vàng Hướng Dương · Giấy Kraft', 'Cúc Họa Mi · Giấy Kem'],
  },
  {
    id: 'prod-thiep-cuc-hoa-mi',
    collectionId: 'clip-card',
    collectionLabel: 'Thiệp hoa kẹp',
    name: 'Thiệp Hoa Kẹp Cúc Họa Mi',
    subtitle: 'Signature Clip Card · Giấy Kraft thô',
    price: 45000,
    priceFormatted: '45.000đ',
    image: IMAGES.brandIntro,
    imageAlt: 'Thiệp Hoa Kẹp Cúc Họa Mi giấy Kraft buộc nơ dây cói',
    shortDesc: 'Nét mộc mạc của giấy Kraft nâu kết hợp nhành cúc họa mi nhỏ nhắn và nơ dây cói thủ công.',
    details: [
      'Bìa giấy Kraft Nhật định lượng 300gsm đứng dáng.',
      'Cúc họa mi kẽm nhung trắng nhụy vàng tạo hình thủ công.',
      'Tặng kèm phong bì Kraft đồng bộ và tem dán sáp mộc.',
    ],
    occasions: 'Chúc mừng tốt nghiệp, viết thư tay gửi bạn thân, tri ân thầy cô.',
    specialValue: 'Lưu giữ nguyên vẹn cả tấm thiệp và đóa hoa nhỏ theo năm tháng.',
    variants: ['Cúc Họa Mi Trắng · Kraft Nâu', 'Hoa Chuông Pastel · Kraft Nâu'],
  },
  {
    id: 'prod-bo-hoa-nho',
    collectionId: 'chenille-flower',
    collectionLabel: 'Hoa kẽm nhung',
    name: 'Bó Hoa Kẽm Nhung Dịu Dàng',
    subtitle: 'Handmade Flower Collection · Bó 3–5 bông',
    price: 135000,
    priceFormatted: '135.000đ',
    image: IMAGES.chenilleBouquet,
    imageAlt: 'Bó Hoa Kẽm Nhung Dịu Dàng tông hồng nhung và trắng kem',
    shortDesc: 'Kết hợp tulip hồng nhung, cúc họa mi kem và lá khuynh diệp xanh sage gói giấy Kraft thô.',
    details: [
      'Tạo hình hoàn toàn bằng tay với sợi kẽm nhung mật độ cao mềm mịn.',
      'Gói giấy Kraft nhiều lớp cùng nơ dây thừng và tag gỗ nhỏ.',
      'Bền màu lâu dài, dễ phủi bụi nhẹ để trưng bày tại bàn làm việc.',
    ],
    occasions: 'Sinh nhật, lễ tốt nghiệp, kỷ niệm ngày quen nhau, trang trí góc học tập.',
    specialValue: 'Không héo tàn như hoa tươi, đồng hành bền lâu cùng người nhận.',
    variants: ['Tông Velvet Pink & Kem', 'Tông Sage Green & Vàng Nhạt', 'Hoa Đơn Tối Giản (1 Bông)'],
  },
  {
    id: 'prod-hop-hoa-vintage',
    collectionId: 'chenille-flower',
    collectionLabel: 'Hoa kẽm nhung',
    name: 'Hộp Hoa Thủ Công Vintage',
    subtitle: 'Handmade Flower Collection · Hộp mica / giấy kraft',
    price: 175000,
    priceFormatted: '175.000đ',
    image: IMAGES.flowerBox,
    imageAlt: 'Hộp Hoa Thủ Công Vintage gồm tulip và hoa chuông kẽm nhung',
    shortDesc: 'Hoa kẽm nhung tulip và hoa chuông được sắp đặt tinh tế trong hộp quà cửa sổ mica cổ điển.',
    details: [
      'Hộp giấy Kraft cứng cáp có mặt kính mica trong suốt chống bụi.',
      'Phối hợp hài hòa giữa hoa chính (Tulip) và hoa phụ (Hoa chuông, lá sage).',
      'Thắt dây đay kèm thẻ ghi tên người nhận theo phong cách tối giản.',
    ],
    occasions: 'Quà tặng người thương, trang trí bàn học, quà chúc mừng dịp lễ.',
    specialValue: 'Bảo quản hoa sạch sẽ lâu dài mà vẫn trưng bày đẹp mắt như một khung tranh.',
    variants: ['Hộp Cửa Sổ Mica · Hồng & Kem', 'Hộp Kraft Nắp Mở · Pastel Mix'],
  },
  {
    id: 'prod-combo-moc-yi-tieu-chuan',
    collectionId: 'combo-moc-yi',
    collectionLabel: 'Combo Mộc Ý',
    name: 'Combo Mộc Ý – Trọn Vẹn Lời Thương',
    subtitle: 'Personalized Giftset · Bó mini + Thiệp hoa kẹp',
    price: 195000,
    priceFormatted: '195.000đ',
    image: IMAGES.comboMocYi,
    imageAlt: 'Combo Mộc Ý gồm bó hoa kẽm nhung mini và thiệp hoa kẹp viết tay',
    shortDesc: '01 bó hoa kẽm nhung mini, 01 thiệp hoa kẹp viết tay theo yêu cầu và hộp đóng gói hoàn chỉnh.',
    details: [
      'Gồm 01 bó hoa kẽm nhung mini + 01 thiệp hoa kẹp đồng điệu màu sắc.',
      'Hỗ trợ chép tay lời chúc riêng hoặc gắn mã QR lời nhắn âm thanh.',
      'Lót rơm giấy Kraft chống sốc, thắt nơ dây thô sẵn sàng gửi thẳng đến người nhận.',
    ],
    occasions: 'Quà tặng gửi thẳng tận tay người nhận ở xa, sinh nhật, Valentine, 20/10.',
    specialValue: 'Một món quà nhỏ đủ đầy hình thức và cảm xúc, tiết kiệm thời gian chuẩn bị.',
    variants: ['Set Hồng Nhung – Kem', 'Set Xanh Pastel – Trắng Kem', 'Set Hướng Dương – Kraft'],
  },
  {
    id: 'prod-combo-moc-yi-workshop',
    collectionId: 'combo-moc-yi',
    collectionLabel: 'Combo Mộc Ý',
    name: 'Set Quà Tri Ân & Sự Kiện Mộc Ý',
    subtitle: 'Personalized Giftset · Phiên bản thiệp & hoa đơn',
    price: 95000,
    priceFormatted: '95.000đ',
    image: IMAGES.b2bJournal,
    imageAlt: 'Set Quà Tri Ân gồm thiệp hoa kẹp và nhành hoa mini đóng gói chỉn chu',
    shortDesc: 'Phiên bản tinh gọn dành cho nhóm bạn, câu lạc bộ hoặc lời cảm ơn trang trọng mà ấm áp.',
    details: [
      '01 thiệp hoa kẹp viết lời chúc cá nhân hóa cho từng người nhận.',
      '01 nhành hoa kẽm nhung đơn gói giấy Kraft thắt nơ cói.',
      'Có thể đặt theo số lượng từ 10 set với mức chiết khấu ưu đãi.',
    ],
    occasions: 'Tri ân diễn giả, quà tặng thành viên CLB, quà cuối năm văn phòng.',
    specialValue: 'Chi phí dễ tiếp cận nhưng vẫn giữ trọn nét tinh tế và dấu ấn thủ công.',
    variants: ['Set Đơn Tông Hồng Nhung', 'Set Đơn Tông Xanh Sage'],
  },
];

export const VISION_AND_MISSION = {
  vision: [
    'Trở thành thương hiệu quà tặng thủ công sáng tạo được giới trẻ học đường và nhân viên văn phòng thành thị yêu thích, đặc biệt trong lĩnh vực hoa kẽm nhung và thiệp cá nhân hóa.',
    'Mộc hoa hướng đến việc góp phần làm mới văn hóa tặng quà, khơi gợi thói quen viết thiệp tay và đưa những món quà mang dấu ấn cá nhân trở lại gần hơn với đời sống trong thời đại số.',
  ],
  missions: [
    {
      title: 'Cá nhân hóa trải nghiệm quà tặng',
      desc: 'Tạo ra những món quà có thể điều chỉnh theo sở thích, câu chuyện và thông điệp riêng của khách hàng.',
    },
    {
      title: 'Kết hợp nghệ thuật thủ công',
      desc: 'Phát triển các sản phẩm hoa kẽm nhung và thiệp thủ công, đề cao sự sáng tạo, tính thẩm mỹ và đôi tay người làm.',
    },
    {
      title: 'Lưu giữ giá trị cảm xúc',
      desc: 'Biến những món quà thông thường thành vật phẩm lưu giữ kỷ niệm và kết nối tình cảm giữa người tặng với người nhận.',
    },
    {
      title: 'Khuyến khích tiêu dùng sáng tạo',
      desc: 'Mang đến những lựa chọn quà tặng thủ công với mức giá dễ tiếp cận, khuyến khích khách hàng trân trọng sự tỉ mỉ và nét độc đáo thay vì chỉ tìm kiếm những sản phẩm đại trà.',
    },
  ],
};

export const CORE_VALUES = [
  {
    number: '01.',
    name: 'Creativity – Sáng tạo',
    desc: 'Không ngừng đổi mới kiểu dáng, màu sắc và cách kết hợp các thành phần quà tặng.',
    image: '/assets/aistudio/QUYNH_HAN__10__779a132f.png',
  },
  {
    number: '02.',
    name: 'Personalization – Cá nhân hóa',
    desc: 'Tôn trọng câu chuyện, sở thích và dấu ấn riêng của mỗi khách hàng.',
    image: '/assets/aistudio/QUYNH_HAN__9__2cc14846.png',
  },
  {
    number: '03.',
    name: 'Sincerity – Chân thành',
    desc: 'Đặt tình cảm và thông điệp của người tặng làm trọng tâm trong từng sản phẩm.',
    image: '/assets/aistudio/QUYNH_HAN__12__b1d872ea.png',
  },
  {
    number: '04.',
    name: 'Craftsmanship – Tỉ mỉ',
    desc: 'Chú trọng chất lượng hoàn thiện và tính thẩm mỹ trong từng chi tiết thủ công.',
    image: '/assets/aistudio/image_d32ed2d5.png',
  },
  {
    number: '05.',
    name: 'Longevity – Bền lâu',
    desc: 'Hướng đến những món quà có khả năng lưu giữ lâu dài, giúp kỷ niệm không chỉ tồn tại trong khoảnh khắc trao tặng.',
    image: '/assets/aistudio/QUYNH_HAN__11__9efb5dae.png',
  },
];

export const PERSONALIZATION_OPTIONS = [
  {
    number: '01.',
    title: 'Viết lời thương theo cách của bạn',
    desc: 'Gửi nội dung lời chúc, lời cảm ơn hoặc thông điệp riêng để Mộc hoa viết tay trên tấm thiệp.',
  },
  {
    number: '02.',
    title: 'Chọn nhành hoa yêu thích',
    desc: 'Lựa chọn kiểu hoa, màu sắc và cách phối hợp phù hợp với sở thích của người nhận.',
  },
  {
    number: '03.',
    title: 'Kết hợp thành món quà riêng',
    desc: 'Tạo nên bộ quà tặng từ hoa kẽm nhung, thiệp hoa kẹp và cách gói quà phù hợp.',
  },
  {
    number: '04.',
    title: 'Thêm dấu ấn đặc biệt',
    desc: 'Tùy theo khả năng triển khai, khách hàng có thể lựa chọn dịch vụ viết chữ nghệ thuật hoặc lời chúc âm thanh qua mã QR.',
  },
];

export const B2B_SERVICES = [
  {
    number: '01.',
    title: 'Quà tặng sự kiện',
    desc: 'Thiệp hoa kẹp, hoa mini và giftset dành cho khách mời, diễn giả, người tham dự.',
  },
  {
    number: '02.',
    title: 'Quà tặng câu lạc bộ và trường học',
    desc: 'Sản phẩm tri ân, quà lưu niệm, quà tặng thành viên và các dịp kỷ niệm.',
  },
  {
    number: '03.',
    title: 'Đơn hàng số lượng lớn',
    desc: 'Nhận tư vấn sản xuất theo số lượng, mẫu thiết kế và ngân sách phù hợp.',
  },
  {
    number: '04.',
    title: 'Hợp tác bán lẻ',
    desc: 'Kết nối với tiệm sách, cửa hàng phụ kiện, cửa hàng quà tặng và các không gian sáng tạo để phân phối sản phẩm Mộc hoa.',
  },
];

export const JOURNAL_CATEGORIES = [
  {
    key: 'art-of-gifting' as const,
    title: 'THE ART OF GIFTING',
    desc: 'Nghệ thuật chọn quà, cách kết hợp hoa và thiệp, những lời chúc dành cho từng dịp đặc biệt.',
  },
  {
    key: 'handmade-corner' as const,
    title: 'HANDMADE CORNER',
    desc: 'Khám phá chất liệu, kỹ thuật làm hoa kẽm nhung, những ý tưởng thủ công và quá trình tạo nên một món quà.',
  },
  {
    key: 'words-feelings' as const,
    title: 'WORDS & FEELINGS',
    desc: 'Những lời nhắn chân thành, ý nghĩa của việc viết thiệp tay và cách thể hiện tình cảm qua những điều giản dị.',
  },
  {
    key: 'culture-inspiration' as const,
    title: 'CULTURE & INSPIRATION',
    desc: 'Những câu chuyện về văn hóa, địa danh, ký ức và cảm hứng sáng tạo trong đời sống.',
  },
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: 'art-1',
    categoryKey: 'art-of-gifting',
    categoryLabel: 'THE ART OF GIFTING',
    categorySub: 'Nghệ thuật tặng quà',
    title: 'Cách phối màu hoa kẽm nhung và giấy Kraft cho từng dịp trao gửi',
    readTime: '4 phút đọc',
    date: 'Tháng 11, 2026',
    excerpt:
      'Một bó hoa nhỏ hay tấm thiệp hoa kẹp sẽ trở nên tinh tế hơn khi sắc hoa hòa hợp với chất giấy và câu chuyện của người nhận.',
    image: IMAGES.comboMocYi,
    imageAlt: 'Phối màu hoa kẽm nhung cùng giấy Kraft và dây đay',
    paragraphs: [
      'Khi chọn quà tặng thủ công, sự hòa hợp về màu sắc là yếu tố đầu tiên chạm vào cảm xúc của người nhận. Với những dịp nhẹ nhàng như sinh nhật bạn thân hay lời cảm ơn ngày thường, sắc hồng nhung (Velvet Pink) đi cùng giấy kem mỹ thuật mang lại cảm giác dịu dàng, gần gũi.',
      'Nếu người nhận yêu thích nét cổ điển, ấm áp, giấy Kraft nâu kết hợp hoa hướng dương hoặc tulip tông đất thắt nơ dây đay sẽ tôn lên trọn vẹn vẻ mộc mạc đặc trưng của Mộc hoa.',
      'Đừng quên gửi kèm một tấm thiệp viết tay ngắn gọn 3–4 dòng. Chính sự chân thành trên từng nét chữ mới là điều khiến món quà ở lại lâu nhất trong ký ức.',
    ],
  },
  {
    id: 'art-2',
    categoryKey: 'handmade-corner',
    categoryLabel: 'HANDMADE CORNER',
    categorySub: 'Góc thủ công',
    title: 'Từ sợi kẽm nhung thô mộc đến đóa tulip không tàn trên bàn học',
    readTime: '5 phút đọc',
    date: 'Tháng 11, 2026',
    excerpt:
      'Đằng sau mỗi cánh hoa kẽm nhung là sự kiên nhẫn uốn từng vòng sợi, căn chỉnh độ cong tự nhiên và buộc nơ sợi đay.',
    image: IMAGES.aboutFlatlay,
    imageAlt: 'Dụng cụ và nguyên liệu làm hoa kẽm nhung thủ công tại xưởng Mộc hoa',
    paragraphs: [
      'Sợi kẽm nhung vốn là chất liệu thủ công quen thuộc, nhưng khi được xử lý khéo léo qua đôi tay tỉ mỉ, từng sợi lông mịn lại mang đến độ bắt sáng mềm mại như cánh hoa thật.',
      'Tại góc làm việc của Mộc hoa, mỗi bông tulip cần khoảng 6 đến 8 cánh hoa uốn lượn đối xứng, kết hợp phần lá xanh sage được vuốt nhẹ để tạo độ rủ tự nhiên. Sau khi hoàn thiện đài hoa, nhành hoa sẽ được cố định bằng băng keo sáp và đặt lên bìa thiệp định lượng 300gsm.',
      'Để hoa bền lâu nhiều năm, bạn chỉ cần trưng bày ở nơi khô ráo, tránh ẩm ướt trực tiếp và dùng cọ mềm phủi bụi nhẹ định kỳ.',
    ],
  },
  {
    id: 'art-3',
    categoryKey: 'words-feelings',
    categoryLabel: 'WORDS & FEELINGS',
    categorySub: 'Lời thương viết tay',
    title: 'Vì sao một tấm thiệp viết tay vẫn có sức nặng trong thời đại tin nhắn nhanh?',
    readTime: '3 phút đọc',
    date: 'Tháng 10, 2026',
    excerpt:
      'Giữa hàng trăm dòng tin nhắn lướt qua mỗi ngày, việc dừng lại cầm bút viết vài dòng lên giấy Kraft là cách nói lời thương chậm rãi nhất.',
    image: IMAGES.brandIntro,
    imageAlt: 'Tấm thiệp viết tay đặt cạnh nhành cúc họa mi trên bàn gỗ',
    paragraphs: [
      'Chúng ta có thể gửi đi một biểu tượng cảm xúc chỉ trong một giây, nhưng để viết nên một tấm thiệp, người tặng phải dành thời gian suy nghĩ, chọn lọc từ ngữ và cẩn trọng từng nét chữ.',
      'Khi người nhận mở phong bì, chạm vào thớ giấy hơi nhám của giấy Kraft, ngửi thấy mùi giấy mới và đọc thấy nét chữ quen thuộc, khoảnh khắc ấy trở nên hữu hình và đáng trân trọng hơn rất nhiều.',
      'Mộc hoa luôn sẵn sàng hỗ trợ viết tay lời nhắn của bạn một cách nắn nót nhất nếu bạn ở xa và muốn gửi quà trực tiếp đến người thương.',
    ],
  },
  {
    id: 'art-4',
    categoryKey: 'culture-inspiration',
    categoryLabel: 'CULTURE & INSPIRATION',
    categorySub: 'Cảm hứng sáng tạo',
    title: 'Nét mộc trong văn hóa tặng quà của người trẻ thành thị',
    readTime: '4 phút đọc',
    date: 'Tháng 10, 2026',
    excerpt:
      'Xu hướng quà tặng của học sinh, sinh viên và nhân viên văn phòng đang dần quay về với sự tối giản, thân thiện và giàu tính kỷ niệm.',
    image: IMAGES.b2bJournal,
    imageAlt: 'Không gian sáng tạo và workshop làm thiệp hoa thủ công',
    paragraphs: [
      'Không cần những hộp quà cầu kỳ đắt đỏ, giới trẻ ngày nay tìm kiếm những món quà vừa túi tiền nhưng có câu chuyện và dấu ấn riêng của người tặng.',
      'Một chiếc thiệp hoa kẹp nhỏ nhắn trên bàn làm việc hay một hộp hoa kẽm nhung đặt cạnh cửa sổ không chỉ giúp góc nhỏ thêm dịu dàng, mà còn gợi nhắc về một buổi tốt nghiệp, một ngày tri ân hay một người bạn luôn đồng hành.',
      'Đó cũng là lý do Mộc hoa chọn slogan "Chạm nét mộc, ủ hương hoa, gửi ngàn lời thương" làm kim chỉ nam cho mọi sản phẩm.',
    ],
  },
];

export const FAQ_ITEMS = [
  {
    q: 'Mộc hoa hiện có những sản phẩm nào?',
    a: 'Mộc hoa tập trung vào ba dòng sản phẩm chính: Thiệp hoa kẹp, Bó/Hộp hoa kẽm nhung và Combo Mộc Ý – bộ quà tặng kết hợp hoa cùng thiệp viết tay.',
  },
  {
    q: 'Tôi có thể yêu cầu viết lời chúc riêng không?',
    a: 'Có. Bạn có thể gửi nội dung lời chúc, lời cảm ơn hoặc thông điệp cá nhân để Mộc hoa hỗ trợ viết lên thiệp.',
  },
  {
    q: 'Tôi có thể lựa chọn màu sắc và kiểu hoa không?',
    a: 'Bạn có thể trao đổi về màu sắc, kiểu dáng và cách phối hoa. Mộc hoa sẽ tư vấn dựa trên mẫu và nguyên liệu hiện có.',
  },
  {
    q: 'Hoa kẽm nhung có thể giữ được bao lâu?',
    a: 'Hoa kẽm nhung không bị héo như hoa tươi và có thể lưu giữ lâu dài nếu được bảo quản đúng cách, tránh bụi bẩn, độ ẩm và tác động làm biến dạng.',
  },
  {
    q: 'Mộc hoa có nhận đơn số lượng lớn không?',
    a: 'Có. Mộc hoa tiếp nhận yêu cầu từ câu lạc bộ, trường học, đơn vị tổ chức sự kiện và đối tác bán lẻ. Số lượng, thiết kế, giá và thời gian hoàn thiện sẽ được trao đổi cụ thể.',
  },
  {
    q: 'Tôi có thể đặt một món quà gửi thẳng đến người nhận không?',
    a: 'Có thể. Bạn hãy cung cấp thông tin người nhận và nội dung lời nhắn để Mộc hoa tư vấn phương thức đóng gói, giao nhận phù hợp.',
  },
  {
    q: 'Làm thế nào để đặt hàng?',
    a: 'Bạn có thể lựa chọn sản phẩm trên website hoặc liên hệ Mộc hoa qua Facebook, Instagram và các kênh bán hàng chính thức.',
  },
];

export const POLICY_MODALS: Record<string, { title: string; content: string[] }> = {
  'huong-dan-dat-hang': {
    title: 'Hướng dẫn đặt hàng tại Mộc hoa',
    content: [
      'Bước 1: Chọn sản phẩm yêu thích tại mục Sản phẩm (Thiệp hoa kẹp, Hoa kẽm nhung, hoặc Combo Mộc Ý) và thêm vào Giỏ quà.',
      'Bước 2: Hoặc sử dụng mục Cá nhân hóa để chọn màu sắc hoa, kiểu thiệp và gửi lời chúc riêng để Mộc hoa viết tay.',
      'Bước 3: Xác nhận thông tin người nhận và phương thức giao hàng. Mộc hoa sẽ liên hệ xác nhận trong vòng 2–4 giờ làm việc trước khi thực hiện thủ công và gửi đi.',
    ],
  },
  'chinh-sach-giao-hang': {
    title: 'Chính sách giao hàng',
    content: [
      'Đơn hàng lẻ có sẵn hoặc tùy chỉnh nhẹ được hoàn thiện và đóng gói trong 1–2 ngày làm việc.',
      'Đơn hàng thiết kế riêng hoặc số lượng lớn (từ 10 sản phẩm) có thời gian chuẩn bị 3–7 ngày tùy quy mô.',
      'Mộc hoa hỗ trợ giao hàng trực tiếp đến người nhận kèm thiệp viết tay theo yêu cầu, đóng gói hộp Kraft chống va đập cẩn thận.',
    ],
  },
  'chinh-sach-doi-tra': {
    title: 'Chính sách đổi trả & Bảo quản',
    content: [
      'Mộc hoa hỗ trợ đổi mới 100% nếu sản phẩm bị biến dạng, gãy cành hoặc hư hỏng trong quá trình vận chuyển (vui lòng quay video mở hộp để được hỗ trợ nhanh nhất).',
      'Với sản phẩm cá nhân hóa đã viết lời chúc theo yêu cầu riêng, Mộc hoa luôn gửi ảnh chụp xác nhận trước khi giao để đảm bảo đúng ý bạn.',
    ],
  },
};
